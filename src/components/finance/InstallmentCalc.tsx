"use client";

import { useState, useMemo } from "react";
import { calcInstallment } from "@/lib/finance";
import { formatNumber, formatWon, formatKoreanWon } from "@/lib/format-ko";
import NumberWheel from "@/components/ui/NumberWheel";

export default function InstallmentCalc() {
  const [price, setPrice] = useState(1_000_000);
  const [months, setMonths] = useState(12);
  const [feeRate, setFeeRate] = useState(12);

  const result = useMemo(() => {
    if (price <= 0 || months <= 0 || feeRate < 0) return null;
    return calcInstallment(price, months, feeRate);
  }, [price, months, feeRate]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        {/* Price */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            상품 가격
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">₩</span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(price)}
              onChange={(e) => {
                const v = Number(e.target.value.replace(/[^0-9]/g, ""));
                if (!isNaN(v)) setPrice(v);
              }}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(price)}</p>
        </div>

        {/* Months */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            할부 개월수
          </label>
          <div className="flex flex-wrap gap-2">
            {[2, 3, 6, 10, 12, 18, 24, 36].map((m) => (
              <button
                key={m}
                onClick={() => setMonths(m)}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  months === m
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {m}개월
              </button>
            ))}
          </div>
        </div>

        {/* Fee Rate */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            할부 수수료율 (연 %)
          </label>
          <div className="flex justify-center">
            <NumberWheel
              min={0} max={30} step={0.1} value={feeRate} onChange={setFeeRate}
              unit="%" format={(v) => v.toFixed(1)}
              accentClass="bg-finance/10 dark:bg-finance/20"
            />
          </div>
          <p className="mt-1 text-center text-xs text-gray-400">
            무이자 할부의 경우 0%로 설정하세요
          </p>
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">월 할부금</p>
            <p className="text-3xl font-extrabold text-primary-600 sm:text-4xl dark:text-primary-400">
              {formatWon(result.monthlyPayment)}
            </p>
            <p className="mt-1 text-xs text-gray-400">
              {formatKoreanWon(result.monthlyPayment)}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">총 결제 금액</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.totalPayment)}
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">총 수수료</p>
              <p className="text-lg font-bold text-health">
                {formatWon(result.totalFee)}
              </p>
            </div>
          </div>

          {feeRate > 0 && (
            <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-700 dark:bg-amber-950 dark:text-amber-300">
              일시불 대비 {formatWon(result.totalFee)} 추가 비용이 발생합니다.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
