"use client";

import { useState, useMemo } from "react";

type Branch = "army" | "navy" | "airforce" | "police" | "social";

interface BranchInfo {
  id: Branch;
  label: string;
  months: number;
  days: number;
}

const BRANCHES: BranchInfo[] = [
  { id: "army", label: "육군/해병대", months: 18, days: 540 },
  { id: "navy", label: "해군", months: 20, days: 610 },
  { id: "airforce", label: "공군", months: 21, days: 639 },
  { id: "police", label: "의경/소방", months: 18, days: 540 },
  { id: "social", label: "사회복무요원", months: 21, days: 639 },
];

const PROMOTIONS = [
  { rank: "이등병", months: 0 },
  { rank: "일병", months: 2 },
  { rank: "상병", months: 8 },
  { rank: "병장", months: 14 },
];

function addMonths(date: Date, months: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function diffDays(a: Date, b: Date): number {
  return Math.floor((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}

function formatDate(d: Date): string {
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}

export default function MilitaryCalc() {
  const [branch, setBranch] = useState<Branch>("army");
  const [enlistDate, setEnlistDate] = useState("");

  const branchInfo = BRANCHES.find((b) => b.id === branch)!;

  const result = useMemo(() => {
    if (!enlistDate) return null;

    const enlist = new Date(enlistDate);
    const discharge = addDays(enlist, branchInfo.days - 1);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const totalDays = branchInfo.days;
    const served = Math.max(0, Math.min(totalDays, diffDays(enlist, today) + 1));
    const remaining = Math.max(0, totalDays - served);
    const progress = Math.min(100, Math.max(0, (served / totalDays) * 100));

    let status: "before" | "serving" | "done";
    if (today < enlist) status = "before";
    else if (today > discharge) status = "done";
    else status = "serving";

    const promotions = PROMOTIONS.map((p) => ({
      rank: p.rank,
      date: addMonths(enlist, p.months),
    }));

    return { enlist, discharge, totalDays, served, remaining, progress, status, promotions };
  }, [enlistDate, branchInfo]);

  return (
    <div className="space-y-6">
      {/* Branch selector */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-50">
          <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          군종 선택
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {BRANCHES.map((b) => (
            <button
              key={b.id}
              onClick={() => setBranch(b.id)}
              className={`rounded-xl border-2 px-3 py-3 text-sm font-medium transition-all ${
                branch === b.id
                  ? "border-green-500 bg-green-50 text-green-700 dark:border-green-400 dark:bg-green-950 dark:text-green-300"
                  : "border-gray-200 bg-gray-50 text-gray-600 hover:border-green-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
              }`}
            >
              <div className="font-semibold">{b.label}</div>
              <div className="mt-1 text-xs opacity-70">{b.months}개월 ({b.days.toLocaleString("ko-KR")}일)</div>
            </button>
          ))}
        </div>
      </div>

      {/* Date input */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-50">
          <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          입대일
        </h2>
        <input
          type="date"
          value={enlistDate}
          onChange={(e) => setEnlistDate(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
        />
      </div>

      {/* Results */}
      {result && (
        <>
          {/* Status badge + progress */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-bold text-gray-900 dark:text-gray-50">복무 현황</h2>
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  result.status === "done"
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                    : result.status === "serving"
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                    : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                }`}
              >
                {result.status === "done" ? "전역 완료" : result.status === "serving" ? "복무 중" : "입대 전"}
              </span>
            </div>

            {/* Progress bar */}
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">진행률</span>
              <span className="font-bold text-green-600">{result.progress.toFixed(1)}%</span>
            </div>
            <div className="mb-4 h-4 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500"
                style={{ width: `${result.progress}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-lg bg-green-50 p-3 text-center dark:bg-green-950">
                <div className="text-xs text-gray-500 dark:text-gray-400">전역 예정일</div>
                <div className="mt-1 text-sm font-bold text-green-700 dark:text-green-300">{formatDate(result.discharge)}</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
                <div className="text-xs text-gray-500 dark:text-gray-400">총 복무일수</div>
                <div className="mt-1 text-lg font-bold text-gray-900 dark:text-gray-50">{result.totalDays.toLocaleString("ko-KR")}일</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
                <div className="text-xs text-gray-500 dark:text-gray-400">복무한 일수</div>
                <div className="mt-1 text-lg font-bold text-gray-900 dark:text-gray-50">{result.served.toLocaleString("ko-KR")}일</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
                <div className="text-xs text-gray-500 dark:text-gray-400">남은 일수</div>
                <div className="mt-1 text-lg font-bold text-gray-900 dark:text-gray-50">{result.remaining.toLocaleString("ko-KR")}일</div>
              </div>
            </div>
          </div>

          {/* Promotions */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-900 dark:text-gray-50">
              <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              진급 일정
            </h2>
            <div className="space-y-2">
              {result.promotions.map((p, i) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const isPast = today >= p.date;
                return (
                  <div
                    key={p.rank}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 ${
                      isPast
                        ? "bg-green-50 dark:bg-green-950"
                        : "bg-gray-50 dark:bg-gray-800"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                        isPast
                          ? "bg-green-500 text-white"
                          : "bg-gray-300 text-gray-600 dark:bg-gray-600 dark:text-gray-300"
                      }`}>
                        {i + 1}
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{p.rank}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{formatDate(p.date)}</span>
                      {isPast && (
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
