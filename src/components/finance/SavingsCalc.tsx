"use client";

import { useState, useMemo } from "react";
import { calcSavings } from "@/lib/finance";
import { formatNumber, formatWon, formatKoreanWon } from "@/lib/format-ko";

const TAX_OPTIONS = [
  { label: "일반과세 (15.4%)", value: 15.4 },
  { label: "비과세 (0%)", value: 0 },
  { label: "세금우대 (9.5%)", value: 9.5 },
];

export default function SavingsCalc() {
  const [monthly, setMonthly] = useState(500_000);
  const [rate, setRate] = useState(3.5);
  const [months, setMonths] = useState(12);
  const [taxRate, setTaxRate] = useState(15.4);

  const result = useMemo(() => {
    if (monthly <= 0 || rate < 0 || months <= 0) return null;
    return calcSavings(monthly, rate, months, taxRate);
  }, [monthly, rate, months, taxRate]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">월 납입금</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">₩</span>
            <input type="text" inputMode="numeric" value={formatNumber(monthly)}
              onChange={(e) => { const v = Number(e.target.value.replace(/[^0-9]/g, "")); if (!isNaN(v)) setMonthly(v); }}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-right text-lg font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
          </div>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">연 이자율 (%)</label>
            <input type="number" step="0.1" min="0" max="20" value={rate} onChange={(e) => setRate(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">기간 (개월)</label>
            <input type="number" min="1" max="120" value={months} onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">이자 과세</label>
          <div className="flex gap-2">
            {TAX_OPTIONS.map((t) => (
              <button key={t.value} onClick={() => setTaxRate(t.value)}
                className={`flex-1 rounded-lg py-2 text-xs font-medium transition-colors ${taxRate === t.value ? "bg-finance text-white" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {result && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-5 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">만기 수령액 (세후)</p>
            <p className="text-3xl font-extrabold text-finance sm:text-4xl">{formatWon(result.maturityAmount)}</p>
            <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(result.maturityAmount)}</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500">총 납입금</p>
              <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{formatWon(result.totalDeposit)}</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500">세전 이자</p>
              <p className="text-sm font-bold text-finance">{formatWon(result.totalInterest)}</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500">이자 과세</p>
              <p className="text-sm font-bold text-red-500">-{formatWon(result.taxAmount)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
