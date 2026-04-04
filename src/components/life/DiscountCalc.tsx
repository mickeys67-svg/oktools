"use client";

import { useState } from "react";
import { formatNumber, formatWon, formatKoreanWon } from "@/lib/format-ko";

const QUICK_DISCOUNTS = [10, 20, 30, 40, 50, 70];

export default function DiscountCalc() {
  const [price, setPrice] = useState(50000);
  const [discount, setDiscount] = useState(30);

  const discountAmount = Math.round(price * (discount / 100));
  const finalPrice = price - discountAmount;

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">원래 가격</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">₩</span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(price)}
              onChange={(e) => { const v = Number(e.target.value.replace(/[^0-9]/g, "")); if (!isNaN(v)) setPrice(v); }}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(price)}</p>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">할인율 (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            value={discount}
            onChange={(e) => setDiscount(Math.min(100, Math.max(0, Number(e.target.value))))}
            className="mb-2 w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
          <div className="flex flex-wrap gap-2">
            {QUICK_DISCOUNTS.map((d) => (
              <button
                key={d}
                onClick={() => setDiscount(d)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  discount === d ? "bg-life text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400"
                }`}
              >
                {d}%
              </button>
            ))}
          </div>
        </div>
      </div>

      {price > 0 && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">최종 가격</p>
            <p className="text-3xl font-extrabold text-life sm:text-4xl">{formatWon(finalPrice)}</p>
            <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(finalPrice)}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">할인 금액</p>
              <p className="text-lg font-bold text-red-500">{formatWon(discountAmount)}</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">절약 비율</p>
              <p className="text-lg font-bold text-emerald-500">{discount}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
