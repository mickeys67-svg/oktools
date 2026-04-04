"use client";

import { useState, useMemo } from "react";
import { formatNumber, formatWon, formatKoreanWon, formatPercent } from "@/lib/format-ko";

type Relationship = "spouse" | "lineal-ascendant" | "lineal-descendant-minor" | "lineal-descendant" | "other";

const RELATIONSHIPS: { key: Relationship; label: string; exemption: number }[] = [
  { key: "spouse", label: "배우자", exemption: 600_000_000 },
  { key: "lineal-ascendant", label: "직계존속 (부모 등)", exemption: 50_000_000 },
  { key: "lineal-descendant", label: "직계비속 (성년 자녀)", exemption: 50_000_000 },
  { key: "lineal-descendant-minor", label: "직계비속 (미성년 자녀)", exemption: 20_000_000 },
  { key: "other", label: "기타 (형제, 친척 등)", exemption: 10_000_000 },
];

const TAX_BRACKETS = [
  { limit: 100_000_000, rate: 0.10, deduction: 0 },
  { limit: 500_000_000, rate: 0.20, deduction: 10_000_000 },
  { limit: 1_000_000_000, rate: 0.30, deduction: 60_000_000 },
  { limit: 3_000_000_000, rate: 0.40, deduction: 160_000_000 },
  { limit: Infinity, rate: 0.50, deduction: 460_000_000 },
];

function calcGiftTax(taxableAmount: number): number {
  if (taxableAmount <= 0) return 0;
  for (const bracket of TAX_BRACKETS) {
    if (taxableAmount <= bracket.limit) {
      return taxableAmount * bracket.rate - bracket.deduction;
    }
  }
  return 0;
}

function getBracketInfo(taxableAmount: number) {
  for (const bracket of TAX_BRACKETS) {
    if (taxableAmount <= bracket.limit) {
      return bracket;
    }
  }
  return TAX_BRACKETS[TAX_BRACKETS.length - 1];
}

export default function GiftTaxCalc() {
  const [giftAmount, setGiftAmount] = useState(500_000_000);
  const [relationship, setRelationship] = useState<Relationship>("lineal-descendant");
  const [previousGift, setPreviousGift] = useState(0);

  const result = useMemo(() => {
    if (giftAmount <= 0) return null;

    const relInfo = RELATIONSHIPS.find((r) => r.key === relationship)!;
    const exemption = relInfo.exemption;
    const totalGift = giftAmount + previousGift;
    const taxableAmount = Math.max(0, totalGift - exemption);
    const giftTax = Math.round(calcGiftTax(taxableAmount));
    const effectiveRate = giftAmount > 0 ? giftTax / giftAmount : 0;
    const bracket = getBracketInfo(taxableAmount);

    return {
      totalGift,
      exemption,
      taxableAmount,
      giftTax,
      effectiveRate,
      bracketRate: bracket.rate,
    };
  }, [giftAmount, relationship, previousGift]);

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50";
  const cardClass =
    "rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900";

  return (
    <div className="space-y-6">
      {/* 입력 */}
      <div className={`${cardClass} p-5 sm:p-6`}>
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            증여재산 가액
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              ₩
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(giftAmount)}
              onChange={(e) => {
                const v = Number(e.target.value.replace(/[^0-9]/g, ""));
                if (!isNaN(v)) setGiftAmount(v);
              }}
              className={`${inputClass} pl-8 text-right text-lg font-semibold`}
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(giftAmount)}</p>
          {/* 프리셋 버튼 */}
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              { label: "1억", value: 100_000_000 },
              { label: "3억", value: 300_000_000 },
              { label: "5억", value: 500_000_000 },
              { label: "10억", value: 1_000_000_000 },
              { label: "30억", value: 3_000_000_000 },
            ].map((p) => (
              <button
                key={p.value}
                onClick={() => setGiftAmount(p.value)}
                className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            증여자 - 수증자 관계
          </label>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {RELATIONSHIPS.map((rel) => (
              <button
                key={rel.key}
                onClick={() => setRelationship(rel.key)}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  relationship === rel.key
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                <span>{rel.label}</span>
                <span className="ml-1 text-xs opacity-75">
                  (공제 {formatKoreanWon(rel.exemption)})
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-2">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            이전 10년 내 증여액
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              ₩
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(previousGift)}
              onChange={(e) => {
                const v = Number(e.target.value.replace(/[^0-9]/g, ""));
                if (!isNaN(v)) setPreviousGift(v);
              }}
              className={`${inputClass} pl-8 text-right text-lg font-semibold`}
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(previousGift)}</p>
        </div>
      </div>

      {/* 결과 */}
      {result && (
        <div className={`${cardClass} p-5 sm:p-6`}>
          {/* 핵심 결과 */}
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">증여세</p>
            <p className="text-3xl font-extrabold text-blue-600 sm:text-4xl dark:text-blue-400">
              {formatWon(result.giftTax)}
            </p>
            <p className="mt-1 text-xs text-gray-400">
              {formatKoreanWon(result.giftTax)}
            </p>
          </div>

          {/* 실효세율 바 */}
          <div className="mb-6">
            <div className="mb-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>실효세율 {formatPercent(result.effectiveRate, 2)}</span>
              <span>적용 세율 {(result.bracketRate * 100).toFixed(0)}%</span>
            </div>
            <div className="flex h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="bg-blue-500 transition-all"
                style={{ width: `${Math.min(result.effectiveRate * 100, 100)}%` }}
              />
            </div>
          </div>

          {/* 요약 그리드 */}
          <div className="mb-5 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">과세표준</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.taxableAmount)}
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">증여공제</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.exemption)}
              </p>
            </div>
          </div>

          {/* 상세 내역 */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              계산 내역
            </h3>
            {[
              { label: "증여재산 가액", value: giftAmount },
              { label: "이전 10년 내 증여액", value: previousGift },
              { label: "합산 증여재산", value: result.totalGift },
              { label: "증여공제", value: result.exemption },
              { label: "과세표준", value: result.taxableAmount },
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
            <div className="mt-2 border-t border-gray-200 pt-2 dark:border-gray-700" />
            <div className="flex items-center justify-between rounded-lg bg-blue-50 px-4 py-2.5 dark:bg-blue-900/30">
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                증여세
              </span>
              <span className="text-sm font-bold text-blue-700 dark:text-blue-300">
                {formatWon(result.giftTax)}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800">
              <span className="text-sm text-gray-600 dark:text-gray-400">실효세율</span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {formatPercent(result.effectiveRate, 2)}
              </span>
            </div>
          </div>

          {/* 세율 구간표 */}
          <div className="mt-6">
            <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              증여세 세율표
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="py-2 text-left font-medium text-gray-500 dark:text-gray-400">
                      과세표준
                    </th>
                    <th className="py-2 text-right font-medium text-gray-500 dark:text-gray-400">
                      세율
                    </th>
                    <th className="py-2 text-right font-medium text-gray-500 dark:text-gray-400">
                      누진공제
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { range: "1억원 이하", rate: "10%", deduction: "-" },
                    { range: "1억~5억원", rate: "20%", deduction: "1,000만원" },
                    { range: "5억~10억원", rate: "30%", deduction: "6,000만원" },
                    { range: "10억~30억원", rate: "40%", deduction: "1억 6,000만원" },
                    { range: "30억원 초과", rate: "50%", deduction: "4억 6,000만원" },
                  ].map((row, i) => {
                    const isActive =
                      result.taxableAmount > 0 &&
                      i === TAX_BRACKETS.findIndex((b) => result.taxableAmount <= b.limit);
                    return (
                      <tr
                        key={row.range}
                        className={`border-b border-gray-100 dark:border-gray-800 ${
                          isActive ? "bg-blue-50 dark:bg-blue-900/20" : ""
                        }`}
                      >
                        <td className="py-2 text-gray-700 dark:text-gray-300">{row.range}</td>
                        <td className="py-2 text-right font-medium text-gray-900 dark:text-gray-100">
                          {row.rate}
                        </td>
                        <td className="py-2 text-right text-gray-500 dark:text-gray-400">
                          {row.deduction}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
