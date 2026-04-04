"use client";

import { useState, useMemo } from "react";

// 2026년 대한민국 공휴일
const HOLIDAYS_2026 = [
  "2026-01-01", // 신정
  "2026-02-16", // 설날 전날 (음력 12/29)
  "2026-02-17", // 설날
  "2026-02-18", // 설날 다음날
  "2026-03-01", // 삼일절
  "2026-05-05", // 어린이날
  "2026-05-24", // 부처님오신날 (음력 4/8)
  "2026-06-06", // 현충일
  "2026-08-15", // 광복절
  "2026-09-24", // 추석 전날
  "2026-09-25", // 추석
  "2026-09-26", // 추석 다음날
  "2026-10-03", // 개천절
  "2026-10-09", // 한글날
  "2026-12-25", // 크리스마스
  // 대체공휴일
  "2026-09-28", // 추석 대체공휴일 (9/26 토요일 겹침 → 월요일)
  "2026-10-05", // 개천절 대체공휴일 (10/3 토요일 겹침 → 월요일)
];

const HOLIDAY_NAMES: Record<string, string> = {
  "2026-01-01": "신정",
  "2026-02-16": "설날 전날",
  "2026-02-17": "설날",
  "2026-02-18": "설날 다음날",
  "2026-09-28": "추석 대체공휴일",
  "2026-03-01": "삼일절",
  "2026-05-05": "어린이날",
  "2026-05-24": "부처님오신날",
  "2026-06-06": "현충일",
  "2026-08-15": "광복절",
  "2026-09-24": "추석 전날",
  "2026-09-25": "추석",
  "2026-09-26": "추석 다음날",
  "2026-10-03": "개천절",
  "2026-10-05": "개천절 대체공휴일",
  "2026-10-09": "한글날",
  "2026-12-25": "크리스마스",
};

const holidaySet = new Set(HOLIDAYS_2026);

function isHoliday(dateStr: string) {
  return holidaySet.has(dateStr);
}

function isWeekend(date: Date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function toDateStr(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

function calcWorkdays(startStr: string, endStr: string) {
  const start = new Date(startStr);
  const end = new Date(endStr);
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  if (start > end) return null;

  let totalDays = 0;
  let weekends = 0;
  let holidays = 0;
  let workdays = 0;
  const holidayList: { date: string; name: string }[] = [];

  const cur = new Date(start);
  while (cur <= end) {
    totalDays++;
    const dateStr = toDateStr(cur);
    const weekend = isWeekend(cur);
    const holiday = isHoliday(dateStr);

    if (weekend) {
      weekends++;
      // Holiday on weekend - still count it for display
      if (holiday) {
        holidayList.push({ date: dateStr, name: HOLIDAY_NAMES[dateStr] || "공휴일" });
      }
    } else if (holiday) {
      holidays++;
      holidayList.push({ date: dateStr, name: HOLIDAY_NAMES[dateStr] || "공휴일" });
    } else {
      workdays++;
    }

    cur.setDate(cur.getDate() + 1);
  }

  return { totalDays, weekends, holidays, workdays, holidayList };
}

export default function WorkdayCalc() {
  const today = new Date();
  const defaultStart = toDateStr(today);
  const endOfYear = `${today.getFullYear()}-12-31`;

  const [startDate, setStartDate] = useState(defaultStart);
  const [endDate, setEndDate] = useState(endOfYear);

  const result = useMemo(() => {
    if (!startDate || !endDate) return null;
    return calcWorkdays(startDate, endDate);
  }, [startDate, endDate]);

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-life focus:ring-1 focus:ring-life dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100";
  const labelClass =
    "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300";

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>시작일</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>종료일</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {result && (
        <div className="animate-fade-in-up space-y-4">
          {/* Summary */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-5 text-center">
              <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">근무일수</p>
              <p className="text-4xl font-extrabold text-life sm:text-5xl">
                {result.workdays}일
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
                <p className="text-xs text-gray-500">총 일수</p>
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {result.totalDays}일
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
                <p className="text-xs text-gray-500">주말</p>
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {result.weekends}일
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
                <p className="text-xs text-gray-500">공휴일</p>
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {result.holidays}일
                </p>
              </div>
            </div>

            {/* Workday ratio bar */}
            <div className="mt-4">
              <div className="flex h-4 w-full overflow-hidden rounded-full">
                <div
                  className="bg-life"
                  style={{ width: `${(result.workdays / result.totalDays) * 100}%` }}
                  title="근무일"
                />
                <div
                  className="bg-gray-300 dark:bg-gray-600"
                  style={{ width: `${(result.weekends / result.totalDays) * 100}%` }}
                  title="주말"
                />
                <div
                  className="bg-red-400"
                  style={{ width: `${(result.holidays / result.totalDays) * 100}%` }}
                  title="공휴일"
                />
              </div>
              <div className="mt-1 flex gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-life" />
                  근무일
                </span>
                <span className="flex items-center gap-1">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                  주말
                </span>
                <span className="flex items-center gap-1">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-400" />
                  공휴일
                </span>
              </div>
            </div>
          </div>

          {/* Holiday list */}
          {result.holidayList.length > 0 && (
            <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                기간 내 공휴일 ({result.holidayList.length}개)
              </h3>
              <div className="space-y-1.5">
                {result.holidayList.map((h) => (
                  <div
                    key={h.date}
                    className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2 dark:bg-gray-800"
                  >
                    <span className="text-sm text-gray-600 dark:text-gray-400">{h.date}</span>
                    <span className="text-sm font-medium text-red-500">{h.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="text-xs text-gray-400 px-1">
            * 2026년 대한민국 공휴일 기준 (대체공휴일 포함). 주말이 아닌 평일 공휴일만 근무일에서 제외됩니다.
          </p>
        </div>
      )}
    </div>
  );
}
