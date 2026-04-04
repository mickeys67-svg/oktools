"use client";

import { useState, useMemo } from "react";
import { formatNumber, formatKoreanWon } from "@/lib/format-ko";

type Mode = "jeonse-to-wolse" | "wolse-to-jeonse";

export default function JeonwolseCalc() {
  const [mode, setMode] = useState<Mode>("jeonse-to-wolse");
  const [conversionRate, setConversionRate] = useState(4.5);

  // 전세 → 월세 모드
  const [jeonseDeposit, setJeonseDeposit] = useState(300_000_000);
  const [desiredWolseDeposit, setDesiredWolseDeposit] = useState(50_000_000);

  // 월세 → 전세 모드
  const [wolseDeposit, setWolseDeposit] = useState(50_000_000);
  const [monthlyRent, setMonthlyRent] = useState(800_000);

  const parseInput = (value: string): number => {
    const v = Number(value.replace(/[^0-9]/g, ""));
    return isNaN(v) ? 0 : v;
  };

  const result = useMemo(() => {
    if (mode === "jeonse-to-wolse") {
      // 전세 → 월세: 월세 = (전세보증금 - 희망보증금) × 전환율 / 12 / 100
      const diff = jeonseDeposit - desiredWolseDeposit;
      if (diff <= 0) return null;
      const calculatedMonthlyRent = Math.round((diff * conversionRate) / 100 / 12);
      const annualRentCost = calculatedMonthlyRent * 12;
      return {
        type: "jeonse-to-wolse" as const,
        monthlyRent: calculatedMonthlyRent,
        annualRentCost,
        depositDiff: diff,
        conversionRate,
      };
    } else {
      // 월세 → 전세: 전세환산가 = 월세보증금 + (월세 × 12 / 전환율 × 100)
      if (conversionRate <= 0) return null;
      const convertedJeonse = Math.round(
        wolseDeposit + (monthlyRent * 12 * 100) / conversionRate
      );
      const annualRentCost = monthlyRent * 12;
      // 실제 전환율 계산
      const actualRate =
        wolseDeposit < convertedJeonse
          ? ((monthlyRent * 12) / (convertedJeonse - wolseDeposit)) * 100
          : 0;
      return {
        type: "wolse-to-jeonse" as const,
        convertedJeonse,
        annualRentCost,
        actualRate: Math.round(actualRate * 100) / 100,
      };
    }
  }, [mode, conversionRate, jeonseDeposit, desiredWolseDeposit, wolseDeposit, monthlyRent]);

  return (
    <div className="space-y-6">
      {/* 모드 탭 */}
      <div className="flex rounded-xl border border-gray-200 bg-gray-50 p-1 dark:border-gray-700 dark:bg-gray-800">
        {[
          { key: "jeonse-to-wolse" as Mode, label: "전세 → 월세" },
          { key: "wolse-to-jeonse" as Mode, label: "월세 → 전세" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setMode(tab.key)}
            className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
              mode === tab.key
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
        {/* 전환율 슬라이더 */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              기준 전환율
            </label>
            <span className="rounded-lg bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600 dark:bg-blue-950 dark:text-blue-400">
              {conversionRate}%
            </span>
          </div>
          <input
            type="range"
            min="2"
            max="10"
            step="0.1"
            value={conversionRate}
            onChange={(e) => setConversionRate(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="mt-1 flex justify-between text-xs text-gray-400">
            <span>2%</span>
            <span>10%</span>
          </div>
        </div>

        {mode === "jeonse-to-wolse" ? (
          <>
            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                전세 보증금
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={formatNumber(jeonseDeposit)}
                  onChange={(e) => setJeonseDeposit(parseInput(e.target.value))}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-right text-lg font-semibold text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                  원
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(jeonseDeposit)}</p>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                희망 월세 보증금
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={formatNumber(desiredWolseDeposit)}
                  onChange={(e) => setDesiredWolseDeposit(parseInput(e.target.value))}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-right text-lg font-semibold text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                  원
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(desiredWolseDeposit)}</p>
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                월세 보증금
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={formatNumber(wolseDeposit)}
                  onChange={(e) => setWolseDeposit(parseInput(e.target.value))}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-right text-lg font-semibold text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                  원
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(wolseDeposit)}</p>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                월세
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  value={formatNumber(monthlyRent)}
                  onChange={(e) => setMonthlyRent(parseInput(e.target.value))}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-right text-lg font-semibold text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                  원/월
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(monthlyRent)}</p>
            </div>
          </>
        )}
      </div>

      {/* 결과 카드 */}
      {result && (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">
            계산 결과
          </h3>

          {result.type === "jeonse-to-wolse" ? (
            <>
              <div className="mb-6 text-center">
                <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                  적정 월세
                </p>
                <p className="text-3xl font-extrabold text-blue-600 sm:text-4xl dark:text-blue-400">
                  {formatNumber(result.monthlyRent)}원
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {formatKoreanWon(result.monthlyRent)} / 월
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800">
                  <span className="text-sm text-gray-600 dark:text-gray-400">적용 전환율</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {result.conversionRate}%
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800">
                  <span className="text-sm text-gray-600 dark:text-gray-400">보증금 차액</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {formatNumber(result.depositDiff)}원
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800">
                  <span className="text-sm text-gray-600 dark:text-gray-400">연간 월세 비용</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {formatNumber(result.annualRentCost)}원
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-6 text-center">
                <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                  전세 환산가
                </p>
                <p className="text-3xl font-extrabold text-blue-600 sm:text-4xl dark:text-blue-400">
                  {formatNumber(result.convertedJeonse)}원
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {formatKoreanWon(result.convertedJeonse)}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800">
                  <span className="text-sm text-gray-600 dark:text-gray-400">실제 전환율</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {result.actualRate}%
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800">
                  <span className="text-sm text-gray-600 dark:text-gray-400">연간 월세 비용</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {formatNumber(result.annualRentCost)}원
                  </span>
                </div>
              </div>
            </>
          )}

          <div className="mt-5 rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
            <p className="text-xs text-blue-700 dark:text-blue-300">
              <strong>참고:</strong> 전월세 전환율은 한국은행 기준금리와 시장 상황에 따라
              변동됩니다. 2025년 기준 법정 전환율 상한은 기준금리(연 3.0%) + 2.0% =
              5.0%입니다. 실제 계약 시 법정 상한을 초과하는 전환율 적용은 무효입니다.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
