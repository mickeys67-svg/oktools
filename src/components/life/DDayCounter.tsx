"use client";

import { useState, useMemo, useEffect } from "react";

export default function DDayCounter() {
  const [targetDate, setTargetDate] = useState("");
  const [eventName, setEventName] = useState("");
  const [now, setNow] = useState<Date | null>(null);

  // Set initial value on mount + real-time tick
  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const result = useMemo(() => {
    if (!targetDate || !now) return null;

    const target = new Date(targetDate);
    target.setHours(0, 0, 0, 0);

    const today = new Date(now);
    const todayMidnight = new Date(today);
    todayMidnight.setHours(0, 0, 0, 0);

    const diffDays = Math.ceil(
      (target.getTime() - todayMidnight.getTime()) / (1000 * 60 * 60 * 24)
    );

    // Remaining time to end of target day
    const targetEnd = new Date(target);
    targetEnd.setHours(23, 59, 59, 999);
    const remainMs = Math.max(0, targetEnd.getTime() - now.getTime());

    const hours = Math.floor(remainMs / (1000 * 60 * 60));
    const minutes = Math.floor((remainMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainMs % (1000 * 60)) / 1000);

    const isPast = diffDays < 0;
    const isToday = diffDays === 0;

    // Progress: from 100 days before to the day
    const totalSpan = 100;
    const elapsed = totalSpan - Math.max(0, Math.min(diffDays, totalSpan));
    const progressPercent = Math.min((elapsed / totalSpan) * 100, 100);

    return {
      diffDays,
      hours,
      minutes,
      seconds,
      isPast,
      isToday,
      progressPercent,
      remainMs,
    };
  }, [targetDate, now]);

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-life focus:ring-1 focus:ring-life dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100";
  const labelClass =
    "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300";

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-4">
          <label className={labelClass}>이벤트 이름</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="시험일, 기념일, 여행..."
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>목표 날짜</label>
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {result && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          {eventName && (
            <p className="mb-2 text-center text-sm font-medium text-gray-600 dark:text-gray-400">
              {eventName}
            </p>
          )}

          <div className="mb-5 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {result.isToday ? "오늘입니다!" : result.isPast ? "지난 날" : "남은 날"}
            </p>
            <p className="text-4xl font-extrabold text-life sm:text-5xl">
              {result.isToday
                ? "D-Day"
                : result.isPast
                  ? `D+${Math.abs(result.diffDays)}`
                  : `D-${result.diffDays}`}
            </p>
          </div>

          {/* Real-time countdown */}
          {!result.isPast && result.remainMs > 0 && (
            <div className="mb-5 grid grid-cols-3 gap-3">
              <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
                <p className="text-2xl font-bold text-gray-900 tabular-nums dark:text-gray-100">
                  {String(result.hours).padStart(2, "0")}
                </p>
                <p className="text-xs text-gray-500">시간</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
                <p className="text-2xl font-bold text-gray-900 tabular-nums dark:text-gray-100">
                  {String(result.minutes).padStart(2, "0")}
                </p>
                <p className="text-xs text-gray-500">분</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
                <p className="text-2xl font-bold text-gray-900 tabular-nums dark:text-gray-100">
                  {String(result.seconds).padStart(2, "0")}
                </p>
                <p className="text-xs text-gray-500">초</p>
              </div>
            </div>
          )}

          {/* Progress */}
          {!result.isPast && (
            <div>
              <div className="mb-1 flex justify-between text-xs text-gray-500">
                <span>100일 전</span>
                <span>D-Day</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-full rounded-full bg-life transition-all"
                  style={{ width: `${result.progressPercent}%` }}
                />
              </div>
              <p className="mt-1 text-center text-xs text-gray-500">
                진행률 {result.progressPercent.toFixed(1)}%
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
