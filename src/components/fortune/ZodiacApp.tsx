"use client";

import { useState } from "react";
import { ZODIAC_SIGNS, getSignByDate, getDailyFortune, type ZodiacSign, type DailyFortune } from "@/data/zodiac-data";

function Stars({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}>
          ★
        </span>
      ))}
    </span>
  );
}

const FORTUNE_LABELS: { key: keyof Pick<DailyFortune, "overall" | "love" | "money" | "health">; label: string; emoji: string }[] = [
  { key: "overall", label: "종합운", emoji: "✨" },
  { key: "love", label: "연애운", emoji: "💕" },
  { key: "money", label: "금전운", emoji: "💰" },
  { key: "health", label: "건강운", emoji: "💪" },
];

export default function ZodiacApp() {
  const [month, setMonth] = useState<number | "">("");
  const [day, setDay] = useState<number | "">("");
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);
  const [fortune, setFortune] = useState<DailyFortune | null>(null);

  const lookupByDate = () => {
    if (month === "" || day === "") return;
    const sign = getSignByDate(month, day);
    setSelectedSign(sign);
    setFortune(getDailyFortune(sign.id, new Date()));
  };

  const selectSign = (sign: ZodiacSign) => {
    setSelectedSign(sign);
    setFortune(getDailyFortune(sign.id, new Date()));
  };

  return (
    <div className="space-y-6">
      {/* Date input */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <label className="mb-3 block text-sm font-semibold text-gray-700 dark:text-gray-300">
          생년월일로 별자리 찾기
        </label>
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <label className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400">월</label>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value ? Number(e.target.value) : "")}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            >
              <option value="">선택</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}월</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400">일</label>
            <select
              value={day}
              onChange={(e) => setDay(e.target.value ? Number(e.target.value) : "")}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            >
              <option value="">선택</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}일</option>
              ))}
            </select>
          </div>
          <button
            onClick={lookupByDate}
            className="rounded-lg bg-fortune px-5 py-2.5 text-sm font-bold text-white transition-colors hover:opacity-90"
          >
            확인
          </button>
        </div>
      </div>

      {/* Quick select grid */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <label className="mb-3 block text-sm font-semibold text-gray-700 dark:text-gray-300">
          별자리 바로 선택
        </label>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {ZODIAC_SIGNS.map((sign) => (
            <button
              key={sign.id}
              onClick={() => selectSign(sign)}
              className={`flex flex-col items-center gap-1 rounded-lg border px-2 py-3 text-center transition-all ${
                selectedSign?.id === sign.id
                  ? "border-violet-400 bg-violet-50 dark:border-violet-500 dark:bg-violet-950"
                  : "border-gray-200 bg-white hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
              }`}
            >
              <span className="text-2xl">{sign.emoji}</span>
              <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{sign.name}</span>
              <span className="text-[10px] text-gray-400">{sign.dateRange}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Fortune result */}
      {selectedSign && fortune && (
        <div className="animate-fade-in-up space-y-4">
          {/* Sign header */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <span className="text-5xl">{selectedSign.emoji}</span>
            <h2 className="mt-2 text-xl font-extrabold text-gray-900 dark:text-gray-50">
              {selectedSign.name}
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {selectedSign.dateRange} &middot; {selectedSign.element} 원소
            </p>
            <p className="mt-0.5 text-xs text-gray-400">
              {new Date().toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" })} 운세
            </p>
          </div>

          {/* Fortune categories */}
          {FORTUNE_LABELS.map(({ key, label, emoji }) => (
            <div
              key={key}
              className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                  {emoji} {label}
                </span>
                <Stars count={fortune[key].stars} />
              </div>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {fortune[key].text}
              </p>
            </div>
          ))}

          {/* Lucky info */}
          <div className="flex gap-3">
            <div className="flex-1 rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-800 dark:bg-gray-900">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">행운의 숫자</p>
              <p className="mt-1 text-2xl font-extrabold text-fortune">{fortune.luckyNumber}</p>
            </div>
            <div className="flex-1 rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-800 dark:bg-gray-900">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">행운의 색상</p>
              <p className="mt-1 text-2xl font-extrabold text-fortune">{fortune.luckyColor}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
