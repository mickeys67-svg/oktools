"use client";

import { useState, useMemo } from "react";
import { calcAge } from "@/lib/health";
import { formatNumber } from "@/lib/format-ko";

function toDateString(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function AgeCalculator() {
  const [birthStr, setBirthStr] = useState("1990-01-01");
  const today = new Date();

  const result = useMemo(() => {
    const bd = new Date(birthStr);
    if (isNaN(bd.getTime()) || bd >= today) return null;
    return calcAge(bd, today);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [birthStr]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
          생년월일
        </label>
        <input
          type="date"
          value={birthStr}
          max={toDateString(today)}
          onChange={(e) => setBirthStr(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
      </div>

      {result && (
        <div className="animate-fade-in-up space-y-4">
          {/* Primary Result */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="text-center">
              <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">만 나이</p>
              <p className="text-4xl font-extrabold text-primary-600 sm:text-5xl dark:text-primary-400">
                {result.age}<span className="text-2xl sm:text-3xl">세</span>
              </p>
              <p className="mt-2 text-sm text-gray-400">
                (한국 나이 기준 {result.koreanAge}세)
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-800 dark:bg-gray-900">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">생존 일수</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatNumber(result.totalDays)}
              </p>
              <p className="text-[10px] text-gray-400">일</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-800 dark:bg-gray-900">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">생존 개월</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatNumber(result.totalMonths)}
              </p>
              <p className="text-[10px] text-gray-400">개월</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-800 dark:bg-gray-900">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">다음 생일까지</p>
              <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
                {result.daysUntilBirthday === 0
                  ? "오늘!"
                  : `D-${result.daysUntilBirthday}`}
              </p>
              <p className="text-[10px] text-gray-400">
                {result.nextBirthday.getMonth() + 1}/{result.nextBirthday.getDate()}
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-800 dark:bg-gray-900">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">태어난 요일</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {result.birthDayOfWeek}
              </p>
            </div>
          </div>

          {/* Zodiac Info */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-50 text-xl dark:bg-violet-950">
                  {getAnimalEmoji(result.zodiacAnimal)}
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">띠</p>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {result.zodiacAnimal}띠
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-xl dark:bg-amber-950">
                  {getSignEmoji(result.zodiacSign)}
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">별자리</p>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {result.zodiacSign}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function getAnimalEmoji(animal: string): string {
  const map: Record<string, string> = {
    쥐: "🐭", 소: "🐮", 호랑이: "🐯", 토끼: "🐰",
    용: "🐲", 뱀: "🐍", 말: "🐴", 양: "🐑",
    원숭이: "🐵", 닭: "🐔", 개: "🐶", 돼지: "🐷",
  };
  return map[animal] ?? "🐾";
}

function getSignEmoji(sign: string): string {
  const map: Record<string, string> = {
    양자리: "♈", 황소자리: "♉", 쌍둥이자리: "♊", 게자리: "♋",
    사자자리: "♌", 처녀자리: "♍", 천칭자리: "♎", 전갈자리: "♏",
    사수자리: "♐", 염소자리: "♑", 물병자리: "♒", 물고기자리: "♓",
  };
  return map[sign] ?? "⭐";
}
