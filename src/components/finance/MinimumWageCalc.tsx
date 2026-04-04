"use client";

import { useState, useMemo } from "react";
import { formatNumber, formatKoreanWon } from "@/lib/format-ko";

const WAGE_DATA: Record<number, number> = {
  2025: 10_030,
  2026: 10_360,
};

const YEARS = [2025, 2026] as const;

export default function MinimumWageCalc() {
  const [year, setYear] = useState<number>(2026);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [includeWeeklyHoliday, setIncludeWeeklyHoliday] = useState(true);

  const result = useMemo(() => {
    const hourlyWage = WAGE_DATA[year];

    // 주휴수당: 1일 근무시간 x (주 근무일수 / 5)
    const weeklyHolidayHours = includeWeeklyHoliday
      ? hoursPerDay * (daysPerWeek / 5)
      : 0;

    const dailyWage = hourlyWage * hoursPerDay;
    const weeklyBaseWage = dailyWage * daysPerWeek;
    const weeklyHolidayPay = hourlyWage * weeklyHolidayHours;
    const weeklyWage = weeklyBaseWage + weeklyHolidayPay;

    // 월급: 209시간 기준 (주 40시간 + 주휴 8시간 = 48시간, 48 * 365/7/12 ≈ 209)
    const monthlyHours = includeWeeklyHoliday
      ? (hoursPerDay * daysPerWeek + weeklyHolidayHours) * (365 / 7 / 12)
      : hoursPerDay * daysPerWeek * (365 / 7 / 12);

    const monthlyWage = Math.round(hourlyWage * monthlyHours);
    const annualWage = monthlyWage * 12;

    return {
      hourlyWage,
      dailyWage,
      weeklyWage: Math.round(weeklyWage),
      weeklyHolidayPay: Math.round(weeklyHolidayPay),
      monthlyWage,
      monthlyHours: Math.round(monthlyHours * 10) / 10,
      annualWage,
    };
  }, [year, hoursPerDay, daysPerWeek, includeWeeklyHoliday]);

  return (
    <div className="space-y-6">
      {/* 년도 탭 */}
      <div className="flex rounded-xl border border-gray-200 bg-gray-50 p-1 dark:border-gray-700 dark:bg-gray-800">
        {YEARS.map((y) => (
          <button
            key={y}
            onClick={() => setYear(y)}
            className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
              year === y
                ? "bg-amber-500 text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            {y}년
          </button>
        ))}
      </div>

      {/* 입력 카드 */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-5 rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
          <p className="text-center text-sm text-amber-700 dark:text-amber-300">
            {year}년 최저시급:{" "}
            <span className="text-lg font-extrabold">
              {formatNumber(WAGE_DATA[year])}원
            </span>
          </p>
        </div>

        {/* 일 근무시간 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            일 근무시간
          </label>
          <div className="flex flex-wrap gap-2">
            {[4, 5, 6, 7, 8, 9, 10].map((h) => (
              <button
                key={h}
                onClick={() => setHoursPerDay(h)}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  hoursPerDay === h
                    ? "bg-amber-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {h}시간
              </button>
            ))}
          </div>
        </div>

        {/* 주 근무일수 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            주 근무일수
          </label>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map((d) => (
              <button
                key={d}
                onClick={() => setDaysPerWeek(d)}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  daysPerWeek === d
                    ? "bg-amber-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {d}일
              </button>
            ))}
          </div>
        </div>

        {/* 주휴수당 토글 */}
        <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              주휴수당 포함
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              주 15시간 이상 근무 시 지급
            </p>
          </div>
          <button
            onClick={() => setIncludeWeeklyHoliday(!includeWeeklyHoliday)}
            className={`relative h-7 w-12 rounded-full transition-colors ${
              includeWeeklyHoliday ? "bg-amber-500" : "bg-gray-300 dark:bg-gray-600"
            }`}
          >
            <span
              className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                includeWeeklyHoliday ? "translate-x-5" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* 결과 카드 */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">
          계산 결과
        </h3>

        <div className="mb-6 text-center">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">월급 예상</p>
          <p className="text-3xl font-extrabold text-amber-600 sm:text-4xl dark:text-amber-400">
            {formatNumber(result.monthlyWage)}원
          </p>
          <p className="mt-1 text-xs text-gray-400">
            {formatKoreanWon(result.monthlyWage)} (월 {result.monthlyHours}시간 기준)
          </p>
        </div>

        <div className="space-y-2">
          {[
            { label: "시급", value: result.hourlyWage },
            { label: "일급", value: result.dailyWage },
            {
              label: "주급",
              value: result.weeklyWage,
              sub: includeWeeklyHoliday
                ? `(주휴수당 ${formatNumber(result.weeklyHolidayPay)}원 포함)`
                : undefined,
            },
            { label: "월급", value: result.monthlyWage },
            { label: "연봉 예상", value: result.annualWage },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800"
            >
              <div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {item.label}
                </span>
                {item.sub && (
                  <p className="text-xs text-amber-600 dark:text-amber-400">{item.sub}</p>
                )}
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {formatNumber(item.value)}원
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
