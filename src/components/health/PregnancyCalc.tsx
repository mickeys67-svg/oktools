"use client";

import { useState, useMemo } from "react";
import { calcPregnancy } from "@/lib/health";

export default function PregnancyCalc() {
  const today = new Date();
  // Default: 12 weeks ago
  const defaultLMP = new Date(today.getTime() - 84 * 86400000).toISOString().split("T")[0];
  const [lmpStr, setLmpStr] = useState(defaultLMP);

  const result = useMemo(() => {
    const lmp = new Date(lmpStr);
    if (isNaN(lmp.getTime())) return null;
    return calcPregnancy(lmp, today);
  }, [lmpStr]);

  const trimesterColors = { 1: "bg-green-500", 2: "bg-yellow-500", 3: "bg-red-500" };

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">마지막 생리 시작일 (LMP)</label>
          <input type="date" value={lmpStr} onChange={(e) => setLmpStr(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
        </div>
      </div>

      {result && (
        <div className="animate-fade-in-up space-y-4">
          {/* Main result */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-5 text-center">
              <p className="mb-1 text-sm text-gray-500">현재 임신 주수</p>
              <p className="text-3xl font-extrabold text-health sm:text-4xl">
                {result.weeks}주 {result.days}일
              </p>
              <p className="mt-1 text-xs text-gray-400">{result.trimesterLabel}</p>
            </div>

            {/* Progress bar */}
            <div className="mb-5">
              <div className="mb-1 flex justify-between text-xs text-gray-400">
                <span>0주</span>
                <span>14주</span>
                <span>28주</span>
                <span>40주</span>
              </div>
              <div className="relative h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="absolute left-0 top-0 h-full bg-green-400" style={{ width: "35%" }} />
                <div className="absolute top-0 h-full bg-yellow-400" style={{ left: "35%", width: "35%" }} />
                <div className="absolute top-0 h-full bg-red-400" style={{ left: "70%", width: "30%" }} />
                <div
                  className="absolute top-0 h-full w-1 bg-gray-900 dark:bg-white"
                  style={{ left: `${result.progressPercent}%` }}
                />
              </div>
              <p className="mt-1 text-center text-xs text-gray-400">{result.progressPercent.toFixed(1)}% 진행</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                <p className="mb-1 text-xs text-gray-500">출산 예정일</p>
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {result.dueDate.getFullYear()}년 {result.dueDate.getMonth() + 1}월 {result.dueDate.getDate()}일
                </p>
                <p className="text-xs text-gray-400">{result.daysUntilDue}일 남음</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                <p className="mb-1 text-xs text-gray-500">아기 크기 비교</p>
                <p className="text-lg font-bold text-health">{result.sizeComparison}</p>
                <p className="text-xs text-gray-400">{result.weeks}주차 기준</p>
              </div>
            </div>
          </div>

          {/* Trimester info */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">삼분기 안내</h3>
            <div className="space-y-2">
              {[
                { label: "1삼분기 (초기)", range: "1~13주", desc: "주요 장기 형성, 입덧 시기", active: result.trimester === 1 },
                { label: "2삼분기 (중기)", range: "14~27주", desc: "안정기, 태동 시작", active: result.trimester === 2 },
                { label: "3삼분기 (후기)", range: "28~40주", desc: "빠른 성장, 출산 준비", active: result.trimester === 3 },
              ].map((t) => (
                <div key={t.label} className={`rounded-lg p-3 ${t.active ? "bg-health/10 ring-1 ring-health" : "bg-gray-50 dark:bg-gray-800"}`}>
                  <div className="flex items-center justify-between">
                    <p className={`text-sm font-medium ${t.active ? "text-health" : "text-gray-700 dark:text-gray-300"}`}>{t.label}</p>
                    <span className="text-xs text-gray-400">{t.range}</span>
                  </div>
                  <p className="text-xs text-gray-500">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {!result && lmpStr && (
        <div className="rounded-xl border border-gray-200 bg-white p-5 text-center text-sm text-gray-400 dark:border-gray-800 dark:bg-gray-900">
          유효한 날짜를 입력해주세요 (최대 42주 이내)
        </div>
      )}
    </div>
  );
}
