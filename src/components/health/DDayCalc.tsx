"use client";

import { useState, useMemo } from "react";
import { calcDDay } from "@/lib/health";
import { formatNumber } from "@/lib/format-ko";

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}

export default function DDayCalc() {
  const todayStr = new Date().toISOString().split("T")[0];
  const [targetStr, setTargetStr] = useState(todayStr);
  const [eventName, setEventName] = useState("");

  const result = useMemo(() => {
    const target = new Date(targetStr);
    const today = new Date();
    if (isNaN(target.getTime())) return null;
    return calcDDay(target, today);
  }, [targetStr]);

  const presets = [
    { label: "100일 후", value: addDays(todayStr, 100) },
    { label: "200일 후", value: addDays(todayStr, 200) },
    { label: "365일 후", value: addDays(todayStr, 365) },
    { label: "2026 수능", value: "2026-11-19" },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">이벤트 이름 (선택)</label>
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="예: 결혼기념일, 시험일"
            className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-sm text-gray-900 placeholder-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
        </div>
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">목표 날짜</label>
          <input type="date" value={targetStr} onChange={(e) => setTargetStr(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
        </div>
        <div className="flex flex-wrap gap-2">
          {presets.map((p) => (
            <button key={p.label} onClick={() => setTargetStr(p.value)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${targetStr === p.value ? "bg-health text-white" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`}>
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {result && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-5 text-center">
            {eventName && <p className="mb-1 text-sm text-gray-400">{eventName}</p>}
            <p className="text-4xl font-extrabold text-health sm:text-5xl">{result.label}</p>
            <p className="mt-2 text-sm text-gray-500">
              {result.days === 0
                ? "오늘이 바로 그 날입니다!"
                : result.days < 0
                  ? `${Math.abs(result.days)}일 남았습니다`
                  : `${result.days}일 지났습니다`}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
              <p className="text-xs text-gray-500">주</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{formatNumber(result.weeks)}주</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
              <p className="text-xs text-gray-500">개월</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{result.months}개월</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
              <p className="text-xs text-gray-500">시간</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{formatNumber(result.totalHours)}h</p>
            </div>
          </div>
          {/* Progress bar for future dates */}
          {result.days < 0 && (
            <div className="mt-4">
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-full rounded-full bg-health transition-all" style={{ width: "0%" }} />
              </div>
              <p className="mt-1 text-center text-xs text-gray-400">{Math.abs(result.days)}일 남음</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
