"use client";

import { useState, useMemo } from "react";
import { formatNumber, formatKoreanWon } from "@/lib/format-ko";

type TradeType = "sale" | "lease";

interface FeeTable {
  min: number;
  max: number;
  rate: number;
  limit?: number; // 상한액
}

const SALE_TABLE: FeeTable[] = [
  { min: 0, max: 50_000_000, rate: 0.006, limit: 250_000 },
  { min: 50_000_000, max: 200_000_000, rate: 0.005, limit: 800_000 },
  { min: 200_000_000, max: 900_000_000, rate: 0.004 },
  { min: 900_000_000, max: 1_200_000_000, rate: 0.005 },
  { min: 1_200_000_000, max: 1_500_000_000, rate: 0.006 },
  { min: 1_500_000_000, max: Infinity, rate: 0.007 },
];

const LEASE_TABLE: FeeTable[] = [
  { min: 0, max: 50_000_000, rate: 0.005, limit: 200_000 },
  { min: 50_000_000, max: 100_000_000, rate: 0.004, limit: 300_000 },
  { min: 100_000_000, max: 600_000_000, rate: 0.003 },
  { min: 600_000_000, max: 1_200_000_000, rate: 0.004 },
  { min: 1_200_000_000, max: 1_500_000_000, rate: 0.005 },
  { min: 1_500_000_000, max: Infinity, rate: 0.006 },
];

function calcBrokerFee(amount: number, table: FeeTable[]) {
  for (const tier of table) {
    if (amount >= tier.min && amount < tier.max) {
      const fee = Math.round(amount * tier.rate);
      const appliedFee = tier.limit ? Math.min(fee, tier.limit) : fee;
      return {
        rate: tier.rate,
        rawFee: fee,
        fee: appliedFee,
        hasLimit: tier.limit !== undefined,
        limit: tier.limit,
        vat: Math.round(appliedFee * 0.1),
        total: appliedFee + Math.round(appliedFee * 0.1),
      };
    }
  }
  // fallback to last tier
  const last = table[table.length - 1];
  const fee = Math.round(amount * last.rate);
  return {
    rate: last.rate,
    rawFee: fee,
    fee,
    hasLimit: false,
    limit: undefined,
    vat: Math.round(fee * 0.1),
    total: fee + Math.round(fee * 0.1),
  };
}

function formatRange(min: number, max: number): string {
  if (max === Infinity) return `${formatKoreanWon(min)} 이상`;
  return `${formatKoreanWon(min)} ~ ${formatKoreanWon(max)}`;
}

export default function BrokerFeeCalc() {
  const [tradeType, setTradeType] = useState<TradeType>("sale");
  const [amount, setAmount] = useState(300_000_000);

  const parseInput = (value: string): number => {
    const v = Number(value.replace(/[^0-9]/g, ""));
    return isNaN(v) ? 0 : v;
  };

  const table = tradeType === "sale" ? SALE_TABLE : LEASE_TABLE;

  const result = useMemo(() => {
    if (amount <= 0) return null;
    return calcBrokerFee(amount, table);
  }, [amount, table]);

  return (
    <div className="space-y-6">
      {/* 거래 유형 탭 */}
      <div className="flex rounded-xl border border-gray-200 bg-gray-50 p-1 dark:border-gray-700 dark:bg-gray-800">
        {[
          { key: "sale" as TradeType, label: "매매" },
          { key: "lease" as TradeType, label: "전세/임대차" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setTradeType(tab.key)}
            className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
              tradeType === tab.key
                ? "bg-blue-600 text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 입력 카드 */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            {tradeType === "sale" ? "매매가" : "전세/임대 보증금"}
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(amount)}
              onChange={(e) => setAmount(parseInput(e.target.value))}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-right text-lg font-semibold text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              원
            </span>
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(amount)}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {(tradeType === "sale"
              ? [
                  { label: "1억", value: 100_000_000 },
                  { label: "3억", value: 300_000_000 },
                  { label: "5억", value: 500_000_000 },
                  { label: "9억", value: 900_000_000 },
                  { label: "15억", value: 1_500_000_000 },
                ]
              : [
                  { label: "3천만", value: 30_000_000 },
                  { label: "1억", value: 100_000_000 },
                  { label: "3억", value: 300_000_000 },
                  { label: "6억", value: 600_000_000 },
                  { label: "12억", value: 1_200_000_000 },
                ]
            ).map((q) => (
              <button
                key={q.value}
                onClick={() => setAmount(q.value)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  amount === q.value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 결과 카드 */}
      {result && (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">
            중개보수 계산 결과
          </h3>

          <div className="mb-6 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              총 비용 (부가세 포함)
            </p>
            <p className="text-3xl font-extrabold text-blue-600 sm:text-4xl dark:text-blue-400">
              {formatNumber(result.total)}원
            </p>
            <p className="mt-1 text-xs text-gray-400">
              {formatKoreanWon(result.total)}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800">
              <span className="text-sm text-gray-600 dark:text-gray-400">적용 요율</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {(result.rate * 100).toFixed(1)}%
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800">
              <span className="text-sm text-gray-600 dark:text-gray-400">중개보수</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {formatNumber(result.fee)}원
              </span>
            </div>
            {result.hasLimit && result.rawFee > result.fee && (
              <div className="rounded-lg bg-amber-50 px-4 py-2 dark:bg-amber-950/30">
                <p className="text-xs text-amber-700 dark:text-amber-300">
                  상한액 {formatNumber(result.limit!)}원이 적용되었습니다
                  (계산액: {formatNumber(result.rawFee)}원)
                </p>
              </div>
            )}
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800">
              <span className="text-sm text-gray-600 dark:text-gray-400">부가세 (10%)</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {formatNumber(result.vat)}원
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-blue-50 px-4 py-3 dark:bg-blue-950/30">
              <span className="text-sm font-bold text-blue-700 dark:text-blue-300">
                총 비용
              </span>
              <span className="text-sm font-bold text-blue-700 dark:text-blue-300">
                {formatNumber(result.total)}원
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 요율표 */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-4 text-sm font-bold text-gray-900 dark:text-gray-100">
          {tradeType === "sale" ? "매매" : "전세/임대차"} 중개보수 요율표
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="py-2 text-left font-medium text-gray-600 dark:text-gray-400">
                  거래금액
                </th>
                <th className="py-2 text-right font-medium text-gray-600 dark:text-gray-400">
                  상한 요율
                </th>
                <th className="py-2 text-right font-medium text-gray-600 dark:text-gray-400">
                  한도액
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {table.map((tier, idx) => (
                <tr
                  key={idx}
                  className={
                    result && tier.rate === result.rate && amount >= tier.min && amount < tier.max
                      ? "bg-blue-50 dark:bg-blue-950/20"
                      : ""
                  }
                >
                  <td className="py-2 text-gray-700 dark:text-gray-300">
                    {formatRange(tier.min, tier.max)}
                  </td>
                  <td className="py-2 text-right text-gray-900 dark:text-gray-100">
                    {(tier.rate * 100).toFixed(1)}%
                  </td>
                  <td className="py-2 text-right text-gray-900 dark:text-gray-100">
                    {tier.limit ? `${formatNumber(tier.limit)}원` : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-400">
          * 2024년 기준 주택 중개보수 요율표입니다. 부가세는 별도입니다.
        </p>
      </div>
    </div>
  );
}
