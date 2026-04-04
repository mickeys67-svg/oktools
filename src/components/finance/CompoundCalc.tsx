"use client";

import { useState, useMemo } from "react";
import { calcCompound } from "@/lib/finance";
import { formatNumber, formatWon, formatKoreanWon } from "@/lib/format-ko";

export default function CompoundCalc() {
  const [initial, setInitial] = useState(10_000_000);
  const [monthly, setMonthly] = useState(500_000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(20);

  const result = useMemo(() => {
    if (rate < 0 || years <= 0) return null;
    return calcCompound(initial, monthly, rate, years);
  }, [initial, monthly, rate, years]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">초기 투자금</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">₩</span>
            <input type="text" inputMode="numeric" value={formatNumber(initial)}
              onChange={(e) => { const v = Number(e.target.value.replace(/[^0-9]/g, "")); if (!isNaN(v)) setInitial(v); }}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-right text-lg font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">월 적립금</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">₩</span>
            <input type="text" inputMode="numeric" value={formatNumber(monthly)}
              onChange={(e) => { const v = Number(e.target.value.replace(/[^0-9]/g, "")); if (!isNaN(v)) setMonthly(v); }}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-right text-lg font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">연 수익률 (%)</label>
            <input type="number" step="0.5" min="0" max="30" value={rate} onChange={(e) => setRate(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">투자 기간 (년)</label>
            <input type="number" min="1" max="50" value={years} onChange={(e) => setYears(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
          </div>
        </div>
      </div>

      {result && (
        <div className="animate-fade-in-up space-y-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-5 text-center">
              <p className="mb-1 text-sm text-gray-500">최종 자산</p>
              <p className="text-3xl font-extrabold text-finance sm:text-4xl">{formatWon(result.finalAmount)}</p>
              <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(result.finalAmount)}</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
                <p className="mb-1 text-xs text-gray-500">총 투자금</p>
                <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{formatWon(result.totalDeposit)}</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
                <p className="mb-1 text-xs text-gray-500">수익금</p>
                <p className="text-sm font-bold text-finance">{formatWon(result.totalInterest)}</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
                <p className="mb-1 text-xs text-gray-500">수익률</p>
                <p className="text-sm font-bold text-finance">
                  {result.totalDeposit > 0 ? `${((result.totalInterest / result.totalDeposit) * 100).toFixed(0)}%` : "-"}
                </p>
              </div>
            </div>
          </div>

          {/* Yearly Growth Table */}
          <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
            <div className="border-b border-gray-200 px-5 py-3 dark:border-gray-800">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">연도별 성장</h3>
            </div>
            <div className="max-h-64 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-gray-50 dark:bg-gray-800">
                  <tr className="text-xs text-gray-500">
                    <th className="px-4 py-2 text-left">연차</th>
                    <th className="px-4 py-2 text-right">총 자산</th>
                    <th className="px-4 py-2 text-right">수익금</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {result.yearlyData.map((d) => (
                    <tr key={d.year}>
                      <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{d.year}년</td>
                      <td className="px-4 py-2 text-right font-medium text-gray-900 dark:text-gray-100">{formatWon(d.amount)}</td>
                      <td className="px-4 py-2 text-right text-finance">{formatWon(d.interest)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
