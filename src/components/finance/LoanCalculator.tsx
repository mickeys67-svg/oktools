"use client";

import { useState, useMemo } from "react";
import { calcLoan, type RepaymentType, type LoanResult } from "@/lib/finance";
import { formatNumber, formatWon, formatKoreanWon, formatPercent } from "@/lib/format-ko";

const QUICK_AMOUNTS = [
  { label: "5천만", value: 50_000_000 },
  { label: "1억", value: 100_000_000 },
  { label: "2억", value: 200_000_000 },
  { label: "3억", value: 300_000_000 },
  { label: "5억", value: 500_000_000 },
];

const REPAYMENT_TYPES: { value: RepaymentType; label: string }[] = [
  { value: "equal-payment", label: "원리금균등" },
  { value: "equal-principal", label: "원금균등" },
  { value: "bullet", label: "만기일시" },
];

export default function LoanCalculator() {
  const [principal, setPrincipal] = useState(100_000_000);
  const [rate, setRate] = useState(3.5);
  const [months, setMonths] = useState(360);
  const [type, setType] = useState<RepaymentType>("equal-payment");
  const [showSchedule, setShowSchedule] = useState(false);

  const result: LoanResult | null = useMemo(() => {
    if (principal <= 0 || rate < 0 || months <= 0) return null;
    return calcLoan(principal, rate, months, type);
  }, [principal, rate, months, type]);

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        {/* Principal */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            대출 금액
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              ₩
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(principal)}
              onChange={(e) => {
                const v = Number(e.target.value.replace(/[^0-9]/g, ""));
                if (!isNaN(v)) setPrincipal(v);
              }}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">
            {formatKoreanWon(principal)}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {QUICK_AMOUNTS.map((q) => (
              <button
                key={q.value}
                onClick={() => setPrincipal(q.value)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  principal === q.value
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>

        {/* Rate */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            연 이자율 (%)
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="30"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
          <input
            type="range"
            min="0"
            max="15"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="mt-2 w-full accent-primary-600"
          />
        </div>

        {/* Months */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            대출 기간
          </label>
          <div className="flex items-center gap-3">
            <input
              type="number"
              min="1"
              max="600"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
            <span className="shrink-0 text-sm text-gray-500">개월</span>
          </div>
          <p className="mt-1 text-xs text-gray-400">
            {Math.floor(months / 12)}년 {months % 12}개월
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {[12, 24, 36, 60, 120, 240, 360].map((m) => (
              <button
                key={m}
                onClick={() => setMonths(m)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  months === m
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {m >= 12 ? `${m / 12}년` : `${m}개월`}
              </button>
            ))}
          </div>
        </div>

        {/* Repayment Type */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            상환 방식
          </label>
          <div className="flex rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
            {REPAYMENT_TYPES.map((t) => (
              <button
                key={t.value}
                onClick={() => setType(t.value)}
                className={`flex-1 rounded-md py-2.5 text-sm font-medium transition-all ${
                  type === t.value
                    ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-gray-100"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result Section */}
      {result && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          {/* Primary Result */}
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {type === "bullet" ? "월 이자" : type === "equal-principal" ? "첫 달 상환액" : "월 상환액"}
            </p>
            <p className="text-3xl font-extrabold text-primary-600 sm:text-4xl dark:text-primary-400">
              {formatWon(result.monthlyPayment)}
            </p>
            <p className="mt-1 text-xs text-gray-400">
              {formatKoreanWon(result.monthlyPayment)}
            </p>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">총 상환액</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.totalPayment)}
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">총 이자</p>
              <p className="text-lg font-bold text-health">
                {formatWon(result.totalInterest)}
              </p>
            </div>
          </div>

          {/* Interest Ratio Bar */}
          <div className="mt-4">
            <div className="mb-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>원금 {formatPercent(principal / result.totalPayment)}</span>
              <span>이자 {formatPercent(result.totalInterest / result.totalPayment)}</span>
            </div>
            <div className="flex h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="bg-primary-500 transition-all"
                style={{ width: `${(principal / result.totalPayment) * 100}%` }}
              />
              <div
                className="bg-health transition-all"
                style={{ width: `${(result.totalInterest / result.totalPayment) * 100}%` }}
              />
            </div>
          </div>

          {/* Schedule Toggle */}
          <button
            onClick={() => setShowSchedule(!showSchedule)}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-100 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            상환 스케줄 {showSchedule ? "접기" : "보기"}
            <svg
              className={`h-4 w-4 transition-transform ${showSchedule ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showSchedule && (
            <div className="mt-4 max-h-80 overflow-auto rounded-lg border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-gray-50 dark:bg-gray-800">
                  <tr className="text-xs text-gray-500 dark:text-gray-400">
                    <th className="px-3 py-2 text-left">회차</th>
                    <th className="px-3 py-2 text-right">상환액</th>
                    <th className="px-3 py-2 text-right">원금</th>
                    <th className="px-3 py-2 text-right">이자</th>
                    <th className="px-3 py-2 text-right">잔액</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {result.schedule.map((row) => (
                    <tr key={row.month} className="text-gray-700 dark:text-gray-300">
                      <td className="px-3 py-2">{row.month}</td>
                      <td className="px-3 py-2 text-right font-medium">
                        {formatNumber(Math.round(row.payment))}
                      </td>
                      <td className="px-3 py-2 text-right">
                        {formatNumber(Math.round(row.principal))}
                      </td>
                      <td className="px-3 py-2 text-right text-health">
                        {formatNumber(Math.round(row.interest))}
                      </td>
                      <td className="px-3 py-2 text-right text-gray-500">
                        {formatNumber(Math.round(row.remaining))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
