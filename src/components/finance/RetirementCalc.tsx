"use client";

import { useState, useMemo } from "react";
import { calcRetirement } from "@/lib/finance";
import { formatWon, formatKoreanWon, formatNumber } from "@/lib/format-ko";

export default function RetirementCalc() {
  const [startStr, setStartStr] = useState("2020-03-02");
  const [endStr, setEndStr] = useState("2026-04-04");
  const [salary, setSalary] = useState(3_000_000);

  const result = useMemo(() => {
    const s = new Date(startStr);
    const e = new Date(endStr);
    if (isNaN(s.getTime()) || isNaN(e.getTime()) || e <= s || salary <= 0) return null;
    return calcRetirement(s, e, salary);
  }, [startStr, endStr, salary]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">입사일</label>
            <input type="date" value={startStr} onChange={(e) => setStartStr(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">퇴사일</label>
            <input type="date" value={endStr} onChange={(e) => setEndStr(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">월 평균 임금 (세전)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">₩</span>
            <input type="text" inputMode="numeric" value={formatNumber(salary)}
              onChange={(e) => { const v = Number(e.target.value.replace(/[^0-9]/g, "")); if (!isNaN(v)) setSalary(v); }}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-right text-lg font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(salary)}</p>
        </div>
      </div>

      {result && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-5 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">예상 퇴직금</p>
            <p className="text-3xl font-extrabold text-finance sm:text-4xl">{formatWon(result.retirementPay)}</p>
            <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(result.retirementPay)}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500">근속 기간</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{result.totalYears.toFixed(1)}년</p>
              <p className="text-xs text-gray-400">{formatNumber(result.totalDays)}일</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500">1일 평균임금</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{formatWon(result.avgDailySalary)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
