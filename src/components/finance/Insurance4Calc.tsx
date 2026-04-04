"use client";

import { useState, useMemo } from "react";
import { formatNumber, formatKoreanWon } from "@/lib/format-ko";

// 2026년 4대보험 요율
const RATES = {
  nationalPension: {
    employee: 0.045,
    employer: 0.045,
    maxSalary: 5_900_000, // 월 소득 상한
  },
  healthInsurance: {
    employee: 0.03545,
    employer: 0.03545,
  },
  longTermCare: {
    rateOfHealth: 0.1281, // 건강보험의 12.81%
  },
  employmentInsurance: {
    employee: 0.009,
    employer: [
      { label: "150인 미만", rate: 0.009 },
      { label: "150~999인", rate: 0.011 },
      { label: "1,000인 이상 / 국가", rate: 0.013 },
      { label: "우선지원대상", rate: 0.0165 },
    ],
  },
};

type CompanySize = 0 | 1 | 2 | 3;

export default function Insurance4Calc() {
  const [salary, setSalary] = useState(3_000_000);
  const [companySize, setCompanySize] = useState<CompanySize>(0);
  const [showIncomeTax, setShowIncomeTax] = useState(false);

  const parseInput = (value: string): number => {
    const v = Number(value.replace(/[^0-9]/g, ""));
    return isNaN(v) ? 0 : v;
  };

  const result = useMemo(() => {
    if (salary <= 0) return null;

    // 국민연금: 상한 590만원 적용
    const pensionBase = Math.min(salary, RATES.nationalPension.maxSalary);
    const pensionEmployee = Math.round(pensionBase * RATES.nationalPension.employee);
    const pensionEmployer = Math.round(pensionBase * RATES.nationalPension.employer);

    // 건강보험
    const healthEmployee = Math.round(salary * RATES.healthInsurance.employee);
    const healthEmployer = Math.round(salary * RATES.healthInsurance.employer);

    // 장기요양보험
    const longTermEmployee = Math.round(healthEmployee * RATES.longTermCare.rateOfHealth);
    const longTermEmployer = Math.round(healthEmployer * RATES.longTermCare.rateOfHealth);

    // 고용보험
    const employmentEmployee = Math.round(salary * RATES.employmentInsurance.employee);
    const employmentEmployerRate =
      RATES.employmentInsurance.employer[companySize].rate;
    const employmentEmployer = Math.round(salary * employmentEmployerRate);

    const totalEmployee =
      pensionEmployee + healthEmployee + longTermEmployee + employmentEmployee;
    const totalEmployer =
      pensionEmployer + healthEmployer + longTermEmployer + employmentEmployer;

    // 간이세액 (대략적 소득세 추정)
    let incomeTax = 0;
    if (showIncomeTax) {
      // 간이세액표 기반 대략적 추정 (1인 기준)
      const annualSalary = salary * 12;
      const taxableIncome = annualSalary - totalEmployee * 12;
      if (taxableIncome > 0) {
        // 간이 누진세율 적용
        if (taxableIncome <= 14_000_000) incomeTax = taxableIncome * 0.06;
        else if (taxableIncome <= 50_000_000)
          incomeTax = 840_000 + (taxableIncome - 14_000_000) * 0.15;
        else if (taxableIncome <= 88_000_000)
          incomeTax = 6_240_000 + (taxableIncome - 50_000_000) * 0.24;
        else if (taxableIncome <= 150_000_000)
          incomeTax = 15_360_000 + (taxableIncome - 88_000_000) * 0.35;
        else incomeTax = 37_060_000 + (taxableIncome - 150_000_000) * 0.38;
        incomeTax = Math.round(incomeTax / 12);
      }
    }
    const localIncomeTax = Math.round(incomeTax * 0.1);

    return {
      pension: { employee: pensionEmployee, employer: pensionEmployer },
      health: { employee: healthEmployee, employer: healthEmployer },
      longTerm: { employee: longTermEmployee, employer: longTermEmployer },
      employment: {
        employee: employmentEmployee,
        employer: employmentEmployer,
        employerRate: employmentEmployerRate,
      },
      totalEmployee,
      totalEmployer,
      totalBoth: totalEmployee + totalEmployer,
      incomeTax,
      localIncomeTax,
      netSalary: salary - totalEmployee - incomeTax - localIncomeTax,
    };
  }, [salary, companySize, showIncomeTax]);

  return (
    <div className="space-y-6">
      {/* 입력 카드 */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            월 급여 (세전)
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(salary)}
              onChange={(e) => setSalary(parseInput(e.target.value))}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-right text-lg font-semibold text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              원
            </span>
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(salary)}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              { label: "200만", value: 2_000_000 },
              { label: "250만", value: 2_500_000 },
              { label: "300만", value: 3_000_000 },
              { label: "400만", value: 4_000_000 },
              { label: "500만", value: 5_000_000 },
            ].map((q) => (
              <button
                key={q.value}
                onClick={() => setSalary(q.value)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  salary === q.value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>

        {/* 기업 규모 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            기업 규모 (사업주 고용보험 요율)
          </label>
          <div className="grid grid-cols-2 gap-2">
            {RATES.employmentInsurance.employer.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setCompanySize(idx as CompanySize)}
                className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                  companySize === idx
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {item.label} ({(item.rate * 100).toFixed(2)}%)
              </button>
            ))}
          </div>
        </div>

        {/* 소득세 토글 */}
        <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              소득세/지방소득세 표시
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              간이세액표 기준 대략적 추정
            </p>
          </div>
          <button
            onClick={() => setShowIncomeTax(!showIncomeTax)}
            className={`relative h-7 w-12 rounded-full transition-colors ${
              showIncomeTax ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
            }`}
          >
            <span
              className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                showIncomeTax ? "translate-x-5" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* 결과 카드 */}
      {result && (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">
            4대보험 내역
          </h3>

          {/* 테이블 */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="py-2 text-left font-medium text-gray-600 dark:text-gray-400">
                    항목
                  </th>
                  <th className="py-2 text-right font-medium text-gray-600 dark:text-gray-400">
                    근로자
                  </th>
                  <th className="py-2 text-right font-medium text-gray-600 dark:text-gray-400">
                    사업주
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-2.5 text-gray-700 dark:text-gray-300">
                    국민연금 (4.5%)
                  </td>
                  <td className="py-2.5 text-right font-medium text-gray-900 dark:text-gray-100">
                    {formatNumber(result.pension.employee)}원
                  </td>
                  <td className="py-2.5 text-right font-medium text-gray-900 dark:text-gray-100">
                    {formatNumber(result.pension.employer)}원
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 text-gray-700 dark:text-gray-300">
                    건강보험 (3.545%)
                  </td>
                  <td className="py-2.5 text-right font-medium text-gray-900 dark:text-gray-100">
                    {formatNumber(result.health.employee)}원
                  </td>
                  <td className="py-2.5 text-right font-medium text-gray-900 dark:text-gray-100">
                    {formatNumber(result.health.employer)}원
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 text-gray-700 dark:text-gray-300">
                    장기요양 (건강의 12.81%)
                  </td>
                  <td className="py-2.5 text-right font-medium text-gray-900 dark:text-gray-100">
                    {formatNumber(result.longTerm.employee)}원
                  </td>
                  <td className="py-2.5 text-right font-medium text-gray-900 dark:text-gray-100">
                    {formatNumber(result.longTerm.employer)}원
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 text-gray-700 dark:text-gray-300">
                    고용보험 (0.9% / {(result.employment.employerRate * 100).toFixed(2)}%)
                  </td>
                  <td className="py-2.5 text-right font-medium text-gray-900 dark:text-gray-100">
                    {formatNumber(result.employment.employee)}원
                  </td>
                  <td className="py-2.5 text-right font-medium text-gray-900 dark:text-gray-100">
                    {formatNumber(result.employment.employer)}원
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-gray-300 dark:border-gray-600">
                  <td className="py-2.5 font-bold text-gray-900 dark:text-gray-100">
                    합계
                  </td>
                  <td className="py-2.5 text-right font-bold text-blue-600 dark:text-blue-400">
                    {formatNumber(result.totalEmployee)}원
                  </td>
                  <td className="py-2.5 text-right font-bold text-blue-600 dark:text-blue-400">
                    {formatNumber(result.totalEmployer)}원
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* 소득세 */}
          {showIncomeTax && (
            <div className="mt-4 space-y-2">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                세금 (간이세액 추정)
              </h4>
              <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800">
                <span className="text-sm text-gray-600 dark:text-gray-400">소득세</span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {formatNumber(result.incomeTax)}원
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  지방소득세 (소득세의 10%)
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {formatNumber(result.localIncomeTax)}원
                </span>
              </div>
            </div>
          )}

          {/* 요약 */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
              <p className="mb-1 text-xs text-blue-600 dark:text-blue-400">
                근로자 부담 합계
              </p>
              <p className="text-lg font-bold text-blue-700 dark:text-blue-300">
                {formatNumber(
                  result.totalEmployee + (showIncomeTax ? result.incomeTax + result.localIncomeTax : 0)
                )}
                원
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950/30">
              <p className="mb-1 text-xs text-green-600 dark:text-green-400">
                예상 실수령액
              </p>
              <p className="text-lg font-bold text-green-700 dark:text-green-300">
                {formatNumber(result.netSalary)}원
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
