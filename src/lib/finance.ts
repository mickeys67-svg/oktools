/**
 * 금융 계산 로직
 */

export interface LoanScheduleItem {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remaining: number;
}

export interface LoanResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  schedule: LoanScheduleItem[];
}

/**
 * 원리금균등상환: 매달 같은 금액 상환
 */
export function calcEqualPayment(
  principal: number,
  annualRate: number,
  months: number
): LoanResult {
  const r = annualRate / 100 / 12;

  if (r === 0) {
    const mp = principal / months;
    return {
      monthlyPayment: mp,
      totalPayment: principal,
      totalInterest: 0,
      schedule: Array.from({ length: months }, (_, i) => ({
        month: i + 1,
        payment: mp,
        principal: mp,
        interest: 0,
        remaining: principal - mp * (i + 1),
      })),
    };
  }

  const mp =
    (principal * r * Math.pow(1 + r, months)) /
    (Math.pow(1 + r, months) - 1);

  const schedule: LoanScheduleItem[] = [];
  let remaining = principal;

  for (let i = 0; i < months; i++) {
    const interest = remaining * r;
    const principalPart = mp - interest;
    remaining -= principalPart;
    schedule.push({
      month: i + 1,
      payment: mp,
      principal: principalPart,
      interest,
      remaining: Math.max(0, remaining),
    });
  }

  return {
    monthlyPayment: mp,
    totalPayment: mp * months,
    totalInterest: mp * months - principal,
    schedule,
  };
}

/**
 * 원금균등상환: 원금은 매달 같고 이자가 줄어듦
 */
export function calcEqualPrincipal(
  principal: number,
  annualRate: number,
  months: number
): LoanResult {
  const r = annualRate / 100 / 12;
  const principalPerMonth = principal / months;
  const schedule: LoanScheduleItem[] = [];
  let remaining = principal;
  let totalPayment = 0;

  for (let i = 0; i < months; i++) {
    const interest = remaining * r;
    const payment = principalPerMonth + interest;
    remaining -= principalPerMonth;
    totalPayment += payment;
    schedule.push({
      month: i + 1,
      payment,
      principal: principalPerMonth,
      interest,
      remaining: Math.max(0, remaining),
    });
  }

  return {
    monthlyPayment: schedule[0].payment, // first month (highest)
    totalPayment,
    totalInterest: totalPayment - principal,
    schedule,
  };
}

/**
 * 만기일시상환: 매달 이자만, 마지막에 원금 상환
 */
export function calcBulletPayment(
  principal: number,
  annualRate: number,
  months: number
): LoanResult {
  const r = annualRate / 100 / 12;
  const monthlyInterest = principal * r;
  const schedule: LoanScheduleItem[] = [];

  for (let i = 0; i < months; i++) {
    const isLast = i === months - 1;
    schedule.push({
      month: i + 1,
      payment: isLast ? monthlyInterest + principal : monthlyInterest,
      principal: isLast ? principal : 0,
      interest: monthlyInterest,
      remaining: isLast ? 0 : principal,
    });
  }

  return {
    monthlyPayment: monthlyInterest,
    totalPayment: principal + monthlyInterest * months,
    totalInterest: monthlyInterest * months,
    schedule,
  };
}

export type RepaymentType = "equal-payment" | "equal-principal" | "bullet";

export function calcLoan(
  principal: number,
  annualRate: number,
  months: number,
  type: RepaymentType
): LoanResult {
  switch (type) {
    case "equal-payment":
      return calcEqualPayment(principal, annualRate, months);
    case "equal-principal":
      return calcEqualPrincipal(principal, annualRate, months);
    case "bullet":
      return calcBulletPayment(principal, annualRate, months);
  }
}

/**
 * 할부 계산기
 */
export interface InstallmentResult {
  monthlyPayment: number;
  totalFee: number;
  totalPayment: number;
}

export function calcInstallment(
  price: number,
  months: number,
  annualFeeRate: number
): InstallmentResult {
  const totalFee = price * (annualFeeRate / 100) * (months / 12);
  const totalPayment = price + totalFee;
  const monthlyPayment = totalPayment / months;

  return { monthlyPayment, totalFee, totalPayment };
}

/**
 * 연봉 실수령액 계산기
 * 2025년 기준 4대 보험료율 및 근로소득 간이세액표 기반
 */
export interface SalaryResult {
  monthlySalary: number;
  nationalPension: number; // 국민연금
  healthInsurance: number; // 건강보험
  longTermCare: number; // 장기요양보험
  employmentInsurance: number; // 고용보험
  incomeTax: number; // 소득세
  localIncomeTax: number; // 지방소득세
  totalDeduction: number;
  netSalary: number;
  annualNet: number;
  deductionRate: number; // 공제율
}

export function calcSalary(
  annualSalary: number,
  dependents: number = 1,
  nonTaxable: number = 200000 // 비과세 (식대 기본 20만원)
): SalaryResult {
  const monthlySalary = annualSalary / 12;
  const taxableMonthly = monthlySalary - nonTaxable;

  // 4대 보험 (2025년 기준 요율)
  const nationalPension = Math.min(taxableMonthly * 0.045, 265500); // 상한: 590만원 * 4.5%
  const healthInsurance = taxableMonthly * 0.03545;
  const longTermCare = healthInsurance * 0.1295; // 건강보험의 12.95%
  const employmentInsurance = taxableMonthly * 0.009;

  // 소득세 (간이세액표 근사치)
  // 1) 근로소득공제 적용
  const annualTaxable = taxableMonthly * 12;
  let earnedIncomeDeduction = 0;
  if (annualTaxable <= 5_000_000) earnedIncomeDeduction = annualTaxable * 0.7;
  else if (annualTaxable <= 15_000_000) earnedIncomeDeduction = 3_500_000 + (annualTaxable - 5_000_000) * 0.4;
  else if (annualTaxable <= 45_000_000) earnedIncomeDeduction = 7_500_000 + (annualTaxable - 15_000_000) * 0.15;
  else if (annualTaxable <= 100_000_000) earnedIncomeDeduction = 12_000_000 + (annualTaxable - 45_000_000) * 0.05;
  else earnedIncomeDeduction = 14_750_000 + (annualTaxable - 100_000_000) * 0.02;

  // 2) 인적공제 (본인 150만 + 부양가족 1인당 150만)
  const personalExemption = 1_500_000 + (dependents - 1) * 1_500_000;

  // 3) 과세표준
  const taxBase = Math.max(0, annualTaxable - earnedIncomeDeduction - personalExemption);

  let annualTax = 0;
  if (taxBase <= 14_000_000) {
    annualTax = taxBase * 0.06;
  } else if (taxBase <= 50_000_000) {
    annualTax = 840_000 + (taxBase - 14_000_000) * 0.15;
  } else if (taxBase <= 88_000_000) {
    annualTax = 6_240_000 + (taxBase - 50_000_000) * 0.24;
  } else if (taxBase <= 150_000_000) {
    annualTax = 15_360_000 + (taxBase - 88_000_000) * 0.35;
  } else if (taxBase <= 300_000_000) {
    annualTax = 37_060_000 + (taxBase - 150_000_000) * 0.38;
  } else if (taxBase <= 500_000_000) {
    annualTax = 94_060_000 + (taxBase - 300_000_000) * 0.4;
  } else if (taxBase <= 1_000_000_000) {
    annualTax = 174_060_000 + (taxBase - 500_000_000) * 0.42;
  } else {
    annualTax = 384_060_000 + (taxBase - 1_000_000_000) * 0.45;
  }

  const incomeTax = annualTax / 12;
  const localIncomeTax = incomeTax * 0.1;

  const totalDeduction =
    nationalPension +
    healthInsurance +
    longTermCare +
    employmentInsurance +
    incomeTax +
    localIncomeTax;

  const netSalary = monthlySalary - totalDeduction;

  return {
    monthlySalary,
    nationalPension,
    healthInsurance,
    longTermCare,
    employmentInsurance,
    incomeTax,
    localIncomeTax,
    totalDeduction,
    netSalary,
    annualNet: netSalary * 12,
    deductionRate: totalDeduction / monthlySalary,
  };
}

/**
 * 퇴직금 계산기
 */
export interface RetirementResult {
  totalDays: number;
  totalYears: number;
  retirementPay: number; // 퇴직금
  avgDailySalary: number;
}

export function calcRetirement(
  startDate: Date,
  endDate: Date,
  avgMonthlySalary: number
): RetirementResult {
  const msPerDay = 86400000;
  const totalDays = Math.floor((endDate.getTime() - startDate.getTime()) / msPerDay);
  const totalYears = totalDays / 365;
  const avgDailySalary = avgMonthlySalary / 30;
  // 퇴직금 = 1일 평균임금 × 30일 × (총 근속일수 / 365)
  const retirementPay = avgDailySalary * 30 * (totalDays / 365);
  return { totalDays, totalYears, retirementPay, avgDailySalary };
}

/**
 * 적금 이자 계산기
 */
export interface SavingsResult {
  totalDeposit: number;
  totalInterest: number;
  afterTaxInterest: number;
  maturityAmount: number;
  taxAmount: number;
}

export function calcSavings(
  monthlyDeposit: number,
  annualRate: number,
  months: number,
  taxRate: number = 15.4 // 일반과세 15.4%
): SavingsResult {
  const totalDeposit = monthlyDeposit * months;
  const r = annualRate / 100 / 12;
  // 적금 이자 (단리): 매월 납입, n개월 차 납입금의 이자 = 납입금 × 월이율 × 남은개월
  let totalInterest = 0;
  for (let i = 1; i <= months; i++) {
    totalInterest += monthlyDeposit * r * (months - i + 1);
  }
  const taxAmount = totalInterest * (taxRate / 100);
  const afterTaxInterest = totalInterest - taxAmount;
  const maturityAmount = totalDeposit + afterTaxInterest;
  return { totalDeposit, totalInterest, afterTaxInterest, maturityAmount, taxAmount };
}

/**
 * 예금 이자 계산기
 */
export interface DepositResult {
  principal: number;
  totalInterest: number;
  afterTaxInterest: number;
  maturityAmount: number;
  taxAmount: number;
}

export function calcDeposit(
  principal: number,
  annualRate: number,
  months: number,
  taxRate: number = 15.4
): DepositResult {
  const totalInterest = principal * (annualRate / 100) * (months / 12);
  const taxAmount = totalInterest * (taxRate / 100);
  const afterTaxInterest = totalInterest - taxAmount;
  const maturityAmount = principal + afterTaxInterest;
  return { principal, totalInterest, afterTaxInterest, maturityAmount, taxAmount };
}

/**
 * 복리 계산기
 */
export interface CompoundResult {
  finalAmount: number;
  totalDeposit: number;
  totalInterest: number;
  yearlyData: { year: number; amount: number; deposit: number; interest: number }[];
}

export function calcCompound(
  initialAmount: number,
  monthlyDeposit: number,
  annualRate: number,
  years: number
): CompoundResult {
  const r = annualRate / 100 / 12;
  let amount = initialAmount;
  let totalDeposit = initialAmount;
  const yearlyData: CompoundResult["yearlyData"] = [];

  for (let y = 1; y <= years; y++) {
    for (let m = 0; m < 12; m++) {
      amount = (amount + monthlyDeposit) * (1 + r);
      totalDeposit += monthlyDeposit;
    }
    yearlyData.push({
      year: y,
      amount: Math.round(amount),
      deposit: Math.round(totalDeposit),
      interest: Math.round(amount - totalDeposit),
    });
  }

  return {
    finalAmount: Math.round(amount),
    totalDeposit: Math.round(totalDeposit),
    totalInterest: Math.round(amount - totalDeposit),
    yearlyData,
  };
}
