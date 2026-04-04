"use client";

import { useState, useMemo } from "react";
import { formatNumber, formatWon, formatKoreanWon, formatPercent } from "@/lib/format-ko";

const TAX_BRACKETS = [
  { limit: 14_000_000, rate: 0.06, deduction: 0 },
  { limit: 50_000_000, rate: 0.15, deduction: 1_260_000 },
  { limit: 88_000_000, rate: 0.24, deduction: 5_760_000 },
  { limit: 150_000_000, rate: 0.35, deduction: 15_440_000 },
  { limit: 300_000_000, rate: 0.38, deduction: 19_940_000 },
  { limit: 500_000_000, rate: 0.40, deduction: 25_940_000 },
  { limit: 1_000_000_000, rate: 0.42, deduction: 35_940_000 },
  { limit: Infinity, rate: 0.45, deduction: 65_940_000 },
];

function calcEarnedIncomeDeduction(income: number): number {
  if (income <= 5_000_000) return income * 0.7;
  if (income <= 15_000_000) return 3_500_000 + (income - 5_000_000) * 0.4;
  if (income <= 45_000_000) return 7_500_000 + (income - 15_000_000) * 0.15;
  if (income <= 100_000_000) return 12_000_000 + (income - 45_000_000) * 0.05;
  return 14_750_000 + (income - 100_000_000) * 0.02;
}

function calcIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 0) return 0;
  for (const bracket of TAX_BRACKETS) {
    if (taxableIncome <= bracket.limit) {
      return taxableIncome * bracket.rate - bracket.deduction;
    }
  }
  return 0;
}

// 신용카드 소득공제 계산
function calcCreditCardDeduction(totalSalary: number, creditCardSpent: number): number {
  const threshold = totalSalary * 0.25; // 총급여 25% 초과분
  const excess = Math.max(0, creditCardSpent - threshold);
  // 신용카드 공제율 15%, 한도 300만원 (총급여 7천만 이하 기준)
  const deductionRate = 0.15;
  const maxDeduction = totalSalary <= 70_000_000 ? 3_000_000 : 2_500_000;
  return Math.min(Math.round(excess * deductionRate), maxDeduction);
}

export default function YearEndTaxCalc() {
  const [totalSalary, setTotalSalary] = useState(50_000_000);
  const [creditCardSpent, setCreditCardSpent] = useState(15_000_000);
  const [medicalExpense, setMedicalExpense] = useState(2_000_000);
  const [educationExpense, setEducationExpense] = useState(3_000_000);
  const [donation, setDonation] = useState(500_000);
  const [personalPension, setPersonalPension] = useState(3_000_000);

  const result = useMemo(() => {
    if (totalSalary <= 0) return null;

    // 1. 근로소득공제
    const earnedIncomeDeduction = Math.round(calcEarnedIncomeDeduction(totalSalary));
    const earnedIncome = totalSalary - earnedIncomeDeduction;

    // 2. 인적공제 (본인 기본공제)
    const personalDeduction = 1_500_000;

    // 3. 특별소득공제 & 세액공제 항목별 계산

    // 신용카드 소득공제
    const creditCardDeduction = calcCreditCardDeduction(totalSalary, creditCardSpent);

    // 소득공제 합계
    const totalIncomeDeduction = personalDeduction + creditCardDeduction;

    // 과세표준
    const taxableIncome = Math.max(0, earnedIncome - totalIncomeDeduction);

    // 산출세액
    const calculatedTax = Math.round(calcIncomeTax(taxableIncome));

    // 세액공제 항목
    // 의료비 세액공제: (의료비 - 총급여 3%) × 15%
    const medicalThreshold = totalSalary * 0.03;
    const medicalDeductionBase = Math.max(0, medicalExpense - medicalThreshold);
    const medicalTaxCredit = Math.round(medicalDeductionBase * 0.15);

    // 교육비 세액공제: 교육비 × 15% (한도 없음, 본인 기준)
    const educationTaxCredit = Math.round(educationExpense * 0.15);

    // 기부금 세액공제: 1천만원 이하 15%, 초과 30%
    const donationTaxCredit =
      donation <= 10_000_000
        ? Math.round(donation * 0.15)
        : Math.round(10_000_000 * 0.15 + (donation - 10_000_000) * 0.30);

    // 개인연금저축 세액공제: 납입액 × 12% (총급여 5,500만 이하 15%), 한도 400만원(또는 600만원)
    const pensionBase = Math.min(personalPension, 6_000_000);
    const pensionRate = totalSalary <= 55_000_000 ? 0.15 : 0.12;
    const pensionTaxCredit = Math.round(pensionBase * pensionRate);

    // 근로소득 세액공제
    let earnedIncomeTaxCredit = 0;
    if (calculatedTax <= 1_300_000) {
      earnedIncomeTaxCredit = Math.round(calculatedTax * 0.55);
    } else {
      earnedIncomeTaxCredit = Math.round(715_000 + (calculatedTax - 1_300_000) * 0.30);
    }
    // 한도 (4단계)
    if (totalSalary <= 33_000_000) {
      earnedIncomeTaxCredit = Math.min(earnedIncomeTaxCredit, 740_000);
    } else if (totalSalary <= 70_000_000) {
      earnedIncomeTaxCredit = Math.min(earnedIncomeTaxCredit, 660_000);
    } else if (totalSalary <= 120_000_000) {
      earnedIncomeTaxCredit = Math.min(earnedIncomeTaxCredit, 500_000);
    } else {
      earnedIncomeTaxCredit = Math.min(earnedIncomeTaxCredit, 200_000);
    }

    // 총 세액공제
    const totalTaxCredit =
      medicalTaxCredit +
      educationTaxCredit +
      donationTaxCredit +
      pensionTaxCredit +
      earnedIncomeTaxCredit;

    // 결정세액
    const determinedTax = Math.max(0, calculatedTax - totalTaxCredit);
    const localTax = Math.round(determinedTax * 0.1);
    const totalDeterminedTax = determinedTax + localTax;

    // 기납부세액 (간이세액표 기준 추정: 매월 원천징수)
    // 간이세액표는 근로소득공제·인적공제만 반영하여 원천징수하므로
    // 세액공제 전의 산출세액에서 근로소득세액공제만 차감한 수준으로 추정
    const withheldIncomeTax = Math.max(0, Math.round(calculatedTax - earnedIncomeTaxCredit));
    const estimatedWithheld = Math.round(withheldIncomeTax + withheldIncomeTax * 0.1); // 소득세 + 지방소득세

    // 환급액 (기납부 - 결정세액)
    const refundAmount = estimatedWithheld - totalDeterminedTax;

    return {
      totalSalary,
      earnedIncomeDeduction,
      earnedIncome,
      personalDeduction,
      creditCardDeduction,
      totalIncomeDeduction,
      taxableIncome,
      calculatedTax,
      medicalTaxCredit,
      educationTaxCredit,
      donationTaxCredit,
      pensionTaxCredit,
      earnedIncomeTaxCredit,
      totalTaxCredit,
      determinedTax,
      localTax,
      totalDeterminedTax,
      estimatedWithheld,
      refundAmount,
    };
  }, [totalSalary, creditCardSpent, medicalExpense, educationExpense, donation, personalPension]);

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50";
  const cardClass =
    "rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900";

  const fields = [
    { label: "총급여 (연간)", value: totalSalary, setter: setTotalSalary, prefix: true },
    { label: "신용카드 사용액 (연간)", value: creditCardSpent, setter: setCreditCardSpent, prefix: true },
    { label: "의료비 (연간)", value: medicalExpense, setter: setMedicalExpense, prefix: true },
    { label: "교육비 (연간)", value: educationExpense, setter: setEducationExpense, prefix: true },
    { label: "기부금 (연간)", value: donation, setter: setDonation, prefix: true },
    { label: "개인연금저축 (연간)", value: personalPension, setter: setPersonalPension, prefix: true },
  ];

  return (
    <div className="space-y-6">
      {/* 입력 */}
      <div className={`${cardClass} p-5 sm:p-6`}>
        {fields.map((field, idx) => (
          <div key={field.label} className={idx < fields.length - 1 ? "mb-5" : "mb-2"}>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {field.label}
            </label>
            <div className="relative">
              {field.prefix && (
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                  ₩
                </span>
              )}
              <input
                type="text"
                inputMode="numeric"
                value={formatNumber(field.value)}
                onChange={(e) => {
                  const v = Number(e.target.value.replace(/[^0-9]/g, ""));
                  if (!isNaN(v)) field.setter(v);
                }}
                className={`${inputClass} ${field.prefix ? "pl-8" : ""} text-right text-lg font-semibold`}
              />
            </div>
            <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(field.value)}</p>
          </div>
        ))}
      </div>

      {/* 결과 */}
      {result && (
        <div className={`${cardClass} p-5 sm:p-6`}>
          {/* 핵심 결과 */}
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {result.refundAmount >= 0 ? "예상 환급액" : "추가 납부액"}
            </p>
            <p
              className={`text-3xl font-extrabold sm:text-4xl ${
                result.refundAmount >= 0
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {result.refundAmount >= 0 ? "+" : "-"}
              {formatWon(Math.abs(result.refundAmount))}
            </p>
            <p className="mt-1 text-xs text-gray-400">
              {formatKoreanWon(Math.abs(result.refundAmount))}
            </p>
          </div>

          {/* 요약 그리드 */}
          <div className="mb-5 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">결정세액</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.totalDeterminedTax)}
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">기납부세액(추정)</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.estimatedWithheld)}
              </p>
            </div>
          </div>

          {/* 소득공제 내역 */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              소득공제 내역
            </h3>
            {[
              { label: "총급여", value: result.totalSalary },
              { label: "근로소득공제", value: result.earnedIncomeDeduction },
              { label: "근로소득금액", value: result.earnedIncome },
              { label: "인적공제 (본인)", value: result.personalDeduction },
              { label: "신용카드 소득공제", value: result.creditCardDeduction },
              { label: "과세표준", value: result.taxableIncome },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {formatWon(item.value)}
                </span>
              </div>
            ))}
          </div>

          {/* 세액공제 내역 */}
          <div className="mt-4 space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              세액공제 내역
            </h3>
            {[
              { label: "산출세액", value: result.calculatedTax },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {formatWon(item.value)}
                </span>
              </div>
            ))}
            <div className="mt-1 border-t border-gray-200 pt-1 dark:border-gray-700" />
            {[
              { label: "근로소득 세액공제", value: result.earnedIncomeTaxCredit },
              { label: "의료비 세액공제", value: result.medicalTaxCredit },
              { label: "교육비 세액공제", value: result.educationTaxCredit },
              { label: "기부금 세액공제", value: result.donationTaxCredit },
              { label: "연금저축 세액공제", value: result.pensionTaxCredit },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  -{formatWon(item.value)}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                세액공제 합계
              </span>
              <span className="text-sm font-bold text-green-600 dark:text-green-400">
                -{formatWon(result.totalTaxCredit)}
              </span>
            </div>
          </div>

          {/* 최종 결과 */}
          <div className="mt-4 space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              최종 결과
            </h3>
            {[
              { label: "결정세액 (소득세)", value: result.determinedTax },
              { label: "지방소득세 (10%)", value: result.localTax },
              { label: "총 결정세액", value: result.totalDeterminedTax },
              { label: "기납부세액 (추정)", value: result.estimatedWithheld },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {formatWon(item.value)}
                </span>
              </div>
            ))}
            <div className={`flex items-center justify-between rounded-lg px-4 py-2.5 ${
              result.refundAmount >= 0
                ? "bg-green-50 dark:bg-green-900/30"
                : "bg-red-50 dark:bg-red-900/30"
            }`}>
              <span className={`text-sm font-semibold ${
                result.refundAmount >= 0
                  ? "text-green-700 dark:text-green-300"
                  : "text-red-700 dark:text-red-300"
              }`}>
                {result.refundAmount >= 0 ? "예상 환급액" : "추가 납부액"}
              </span>
              <span className={`text-sm font-bold ${
                result.refundAmount >= 0
                  ? "text-green-700 dark:text-green-300"
                  : "text-red-700 dark:text-red-300"
              }`}>
                {result.refundAmount >= 0 ? "+" : "-"}
                {formatWon(Math.abs(result.refundAmount))}
              </span>
            </div>
          </div>

          {/* 참고 사항 */}
          <div className="mt-6 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-xs text-amber-700 dark:text-amber-300">
              * 본 계산은 2026년 세법 기준 간소화된 결과입니다.
              부양가족 공제, 보험료 공제, 주택자금 공제 등 추가 공제 항목은 반영되지 않았습니다.
              정확한 연말정산은 국세청 홈택스 간소화 서비스를 이용하세요.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
