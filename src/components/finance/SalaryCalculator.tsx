"use client";

import { useState, useMemo } from "react";
import { calcSalary } from "@/lib/finance";
import { formatNumber, formatWon, formatKoreanWon, formatPercent } from "@/lib/format-ko";

const QUICK_SALARIES = [
  { label: "3천만", value: 30_000_000 },
  { label: "4천만", value: 40_000_000 },
  { label: "5천만", value: 50_000_000 },
  { label: "6천만", value: 60_000_000 },
  { label: "7천만", value: 70_000_000 },
  { label: "1억", value: 100_000_000 },
];

export default function SalaryCalculator() {
  const [annualSalary, setAnnualSalary] = useState(50_000_000);
  const [dependents, setDependents] = useState(1);
  const [nonTaxable, setNonTaxable] = useState(200_000);

  const result = useMemo(() => {
    if (annualSalary <= 0) return null;
    return calcSalary(annualSalary, dependents, nonTaxable);
  }, [annualSalary, dependents, nonTaxable]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        {/* Annual Salary */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            연봉 (세전)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">₩</span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(annualSalary)}
              onChange={(e) => {
                const v = Number(e.target.value.replace(/[^0-9]/g, ""));
                if (!isNaN(v)) setAnnualSalary(v);
              }}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(annualSalary)}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {QUICK_SALARIES.map((q) => (
              <button
                key={q.value}
                onClick={() => setAnnualSalary(q.value)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  annualSalary === q.value
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dependents */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            부양가족 수 (본인 포함)
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((d) => (
              <button
                key={d}
                onClick={() => setDependents(d)}
                className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-colors ${
                  dependents === d
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {d}명
              </button>
            ))}
          </div>
        </div>

        {/* Non-taxable */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            비과세액 (식대 등, 월)
          </label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(nonTaxable)}
              onChange={(e) => {
                const v = Number(e.target.value.replace(/[^0-9]/g, ""));
                if (!isNaN(v)) setNonTaxable(v);
              }}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
            <span className="shrink-0 text-sm text-gray-500">원/월</span>
          </div>
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          {/* Primary Result */}
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">월 실수령액</p>
            <p className="text-3xl font-extrabold text-primary-600 sm:text-4xl dark:text-primary-400">
              {formatWon(result.netSalary)}
            </p>
            <p className="mt-1 text-xs text-gray-400">
              {formatKoreanWon(result.netSalary)}
            </p>
          </div>

          {/* Ratio Bar */}
          <div className="mb-6">
            <div className="mb-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>실수령 {formatPercent(1 - result.deductionRate)}</span>
              <span>공제 {formatPercent(result.deductionRate)}</span>
            </div>
            <div className="flex h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="bg-primary-500 transition-all"
                style={{ width: `${(1 - result.deductionRate) * 100}%` }}
              />
              <div
                className="bg-health transition-all"
                style={{ width: `${result.deductionRate * 100}%` }}
              />
            </div>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">연 실수령액</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.annualNet)}
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">월 공제 합계</p>
              <p className="text-lg font-bold text-health">
                {formatWon(result.totalDeduction)}
              </p>
            </div>
          </div>

          {/* Deduction Breakdown */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">공제 내역</h3>
            {[
              { label: "국민연금", value: result.nationalPension },
              { label: "건강보험", value: result.healthInsurance },
              { label: "장기요양보험", value: result.longTermCare },
              { label: "고용보험", value: result.employmentInsurance },
              { label: "소득세", value: result.incomeTax },
              { label: "지방소득세", value: result.localIncomeTax },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {formatWon(item.value)}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between rounded-lg bg-health/10 px-4 py-2.5">
              <span className="text-sm font-semibold text-health">공제 합계</span>
              <span className="text-sm font-bold text-health">
                {formatWon(result.totalDeduction)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
