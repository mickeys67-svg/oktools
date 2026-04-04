"use client";

import { useState, useMemo } from "react";
import { formatNumber, formatWon, formatKoreanWon, formatPercent } from "@/lib/format-ko";

type PropertyType = "housing" | "farmland" | "commercial";

function calcHousingTaxRate(price: number, housingCount: number, isRegulated: boolean): number {
  // 다주택자
  if (isRegulated) {
    if (housingCount >= 3) return 0.12;
    if (housingCount === 2) return 0.08;
  } else {
    if (housingCount >= 4) return 0.12;
    if (housingCount === 3) return 0.08;
    // 2주택 비조정: 일반 세율 적용
  }

  // 1주택 또는 비조정 2주택: 가격 기준
  if (price <= 600_000_000) return 0.01;
  if (price <= 900_000_000) {
    // 6~9억 구간: 선형 보간 (1% ~ 3%)
    const ratio = (price - 600_000_000) / 300_000_000;
    return 0.01 + ratio * 0.02;
  }
  return 0.03;
}

export default function AcquisitionTaxCalc() {
  const [propertyType, setPropertyType] = useState<PropertyType>("housing");
  const [price, setPrice] = useState(500_000_000);
  const [housingCount, setHousingCount] = useState(1);
  const [isRegulated, setIsRegulated] = useState(false);
  const [isOver85, setIsOver85] = useState(false);

  const result = useMemo(() => {
    if (price <= 0) return null;

    let taxRate: number;

    if (propertyType === "housing") {
      taxRate = calcHousingTaxRate(price, housingCount, isRegulated);
    } else if (propertyType === "farmland") {
      taxRate = 0.03;
    } else {
      taxRate = 0.04;
    }

    const acquisitionTax = Math.round(price * taxRate);

    // 지방교육세: 취득세의 10% (일반적인 경우)
    const educationTax = Math.round(acquisitionTax * 0.1);

    // 농어촌특별세: 전용면적 85m2 초과 시 취득세의 10%
    const ruralTax =
      propertyType === "housing" && isOver85 ? Math.round(acquisitionTax * 0.1) : 0;

    const totalTax = acquisitionTax + educationTax + ruralTax;
    const effectiveRate = price > 0 ? totalTax / price : 0;

    return {
      taxRate,
      acquisitionTax,
      educationTax,
      ruralTax,
      totalTax,
      effectiveRate,
    };
  }, [price, propertyType, housingCount, isRegulated, isOver85]);

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50";
  const cardClass =
    "rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900";

  const propertyTabs: { key: PropertyType; label: string }[] = [
    { key: "housing", label: "주택" },
    { key: "farmland", label: "농지" },
    { key: "commercial", label: "상업용/토지" },
  ];

  return (
    <div className="space-y-6">
      {/* 입력 */}
      <div className={`${cardClass} p-5 sm:p-6`}>
        {/* 부동산 유형 */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            부동산 유형
          </label>
          <div className="flex rounded-xl bg-gray-100 p-1 dark:bg-gray-800">
            {propertyTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setPropertyType(tab.key)}
                className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-colors ${
                  propertyType === tab.key
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 취득가액 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            취득가액
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              ₩
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(price)}
              onChange={(e) => {
                const v = Number(e.target.value.replace(/[^0-9]/g, ""));
                if (!isNaN(v)) setPrice(v);
              }}
              className={`${inputClass} pl-8 text-right text-lg font-semibold`}
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(price)}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              { label: "3억", value: 300_000_000 },
              { label: "5억", value: 500_000_000 },
              { label: "7억", value: 700_000_000 },
              { label: "9억", value: 900_000_000 },
              { label: "12억", value: 1_200_000_000 },
              { label: "15억", value: 1_500_000_000 },
            ].map((q) => (
              <button
                key={q.value}
                onClick={() => setPrice(q.value)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  price === q.value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>

        {/* 주택일 때만: 보유 주택 수, 조정대상지역, 전용면적 */}
        {propertyType === "housing" && (
          <>
            <div className="mb-5">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                현재 보유 주택 수 (취득 후 기준)
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((n) => (
                  <button
                    key={n}
                    onClick={() => setHousingCount(n)}
                    className={`flex-1 rounded-xl py-2.5 text-sm font-medium transition-colors ${
                      housingCount === n
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                    }`}
                  >
                    {n >= 4 ? "4주택+" : `${n}주택`}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                조정대상지역 여부
              </label>
              <div className="flex gap-2">
                {[
                  { label: "비조정", value: false },
                  { label: "조정대상", value: true },
                ].map((opt) => (
                  <button
                    key={String(opt.value)}
                    onClick={() => setIsRegulated(opt.value)}
                    className={`flex-1 rounded-xl py-2.5 text-sm font-medium transition-colors ${
                      isRegulated === opt.value
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                전용면적
              </label>
              <div className="flex gap-2">
                {[
                  { label: "85m² 이하", value: false },
                  { label: "85m² 초과", value: true },
                ].map((opt) => (
                  <button
                    key={String(opt.value)}
                    onClick={() => setIsOver85(opt.value)}
                    className={`flex-1 rounded-xl py-2.5 text-sm font-medium transition-colors ${
                      isOver85 === opt.value
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* 결과 */}
      {result && (
        <div className={`${cardClass} p-5 sm:p-6`}>
          {/* 핵심 결과 */}
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">총 세금</p>
            <p className="text-3xl font-extrabold text-blue-600 sm:text-4xl dark:text-blue-400">
              {formatWon(result.totalTax)}
            </p>
            <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(result.totalTax)}</p>
          </div>

          {/* 실효세율 바 */}
          <div className="mb-6">
            <div className="mb-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>취득세율 {(result.taxRate * 100).toFixed(2)}%</span>
              <span>실효세율 {formatPercent(result.effectiveRate, 2)}</span>
            </div>
            <div className="flex h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="bg-blue-500 transition-all"
                style={{ width: `${Math.min(result.effectiveRate * 100 * 5, 100)}%` }}
              />
            </div>
          </div>

          {/* 요약 그리드 */}
          <div className="mb-5 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">취득세</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.acquisitionTax)}
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">지방교육세</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.educationTax)}
              </p>
            </div>
          </div>

          {/* 상세 내역 */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">세금 내역</h3>
            {[
              { label: "취득가액", value: formatWon(price) },
              {
                label: `취득세 (${(result.taxRate * 100).toFixed(2)}%)`,
                value: formatWon(result.acquisitionTax),
              },
              { label: "지방교육세 (취득세의 10%)", value: formatWon(result.educationTax) },
              ...(result.ruralTax > 0
                ? [
                    {
                      label: "농어촌특별세 (취득세의 10%)",
                      value: formatWon(result.ruralTax),
                    },
                  ]
                : []),
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {item.value}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between rounded-lg bg-blue-50 px-4 py-2.5 dark:bg-blue-900/30">
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                총 세금
              </span>
              <span className="text-sm font-bold text-blue-700 dark:text-blue-300">
                {formatWon(result.totalTax)}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800">
              <span className="text-sm text-gray-600 dark:text-gray-400">실효세율</span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {formatPercent(result.effectiveRate, 2)}
              </span>
            </div>
          </div>

          {/* 주택 취득세율표 */}
          {propertyType === "housing" && (
            <div className="mt-6">
              <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                주택 취득세율 안내
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="py-2 text-left font-medium text-gray-500 dark:text-gray-400">
                        구분
                      </th>
                      <th className="py-2 text-right font-medium text-gray-500 dark:text-gray-400">
                        세율
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: "1주택 (6억 이하)", rate: "1%" },
                      { label: "1주택 (6~9억)", rate: "1~3%" },
                      { label: "1주택 (9억 초과)", rate: "3%" },
                      { label: "2주택 (조정대상)", rate: "8%" },
                      { label: "3주택+ (조정대상)", rate: "12%" },
                      { label: "2주택 (비조정)", rate: "1~3%" },
                      { label: "3주택 (비조정)", rate: "8%" },
                      { label: "4주택+ (비조정)", rate: "12%" },
                    ].map((row) => (
                      <tr
                        key={row.label}
                        className="border-b border-gray-100 dark:border-gray-800"
                      >
                        <td className="py-2 text-gray-700 dark:text-gray-300">{row.label}</td>
                        <td className="py-2 text-right font-medium text-gray-900 dark:text-gray-100">
                          {row.rate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
