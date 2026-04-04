"use client";

import { useState, useMemo } from "react";
import { calcDeposit } from "@/lib/finance";
import { formatNumber, formatWon, formatKoreanWon } from "@/lib/format-ko";

export default function DepositCalc() {
  const [principal, setPrincipal] = useState(10_000_000);
  const [rate, setRate] = useState(3.5);
  const [months, setMonths] = useState(12);
  const [taxRate, setTaxRate] = useState(15.4);

  const result = useMemo(() => {
    if (principal <= 0 || rate < 0 || months <= 0) return null;
    return calcDeposit(principal, rate, months, taxRate);
  }, [principal, rate, months, taxRate]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">예금 금액</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">₩</span>
            <input type="text" inputMode="numeric" value={formatNumber(principal)}
              onChange={(e) => { const v = Number(e.target.value.replace(/[^0-9]/g, "")); if (!isNaN(v)) setPrincipal(v); }}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-right text-lg font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(principal)}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {[1_000_000, 5_000_000, 10_000_000, 50_000_000, 100_000_000].map((v) => (
              <button key={v} onClick={() => setPrincipal(v)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${principal === v ? "bg-finance text-white" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`}>
                {formatKoreanWon(v).replace(" 원", "")}
              </button>
            ))}
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
            <div className="flex flex-wrap gap-1.5">
              {[6, 12, 24, 36].map((m) => (
                <button key={m} onClick={() => setMonths(m)}
                  className={`flex-1 rounded-lg py-2.5 text-xs font-medium ${months === m ? "bg-finance text-white" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`}>
                  {m}개월
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {[{ l: "일반 15.4%", v: 15.4 }, { l: "비과세", v: 0 }, { l: "세금우대 9.5%", v: 9.5 }].map((t) => (
            <button key={t.v} onClick={() => setTaxRate(t.v)}
              className={`flex-1 rounded-lg py-2 text-xs font-medium ${taxRate === t.v ? "bg-finance text-white" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`}>
              {t.l}
            </button>
          ))}
        </div>
      </div>

      {result && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-5 text-center">
            <p className="mb-1 text-sm text-gray-500">만기 수령액</p>
            <p className="text-3xl font-extrabold text-finance sm:text-4xl">{formatWon(result.maturityAmount)}</p>
            <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(result.maturityAmount)}</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500">원금</p>
              <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{formatWon(result.principal)}</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500">세후 이자</p>
              <p className="text-sm font-bold text-finance">{formatWon(result.afterTaxInterest)}</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500">세금</p>
              <p className="text-sm font-bold text-red-500">-{formatWon(result.taxAmount)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
