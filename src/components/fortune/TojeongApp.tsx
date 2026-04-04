"use client";

import { useState, useMemo } from "react";
import { calcTojeong, type TojeongFortune } from "@/data/tojeong-data";

const LUCK_LABELS: { key: keyof TojeongFortune["luck"]; label: string; emoji: string }[] = [
  { key: "money", label: "재물", emoji: "💰" },
  { key: "love", label: "애정", emoji: "💕" },
  { key: "health", label: "건강", emoji: "💪" },
  { key: "career", label: "직업", emoji: "💼" },
];

const SECTIONS = [
  { key: "upper" as const, label: "상원 (1~4월)", period: "1월 ~ 4월" },
  { key: "middle" as const, label: "중원 (5~8월)", period: "5월 ~ 8월" },
  { key: "lower" as const, label: "하원 (9~12월)", period: "9월 ~ 12월" },
];

function StarRating({ score, max = 5 }: { score: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`text-sm ${i < score ? "text-amber-400" : "text-gray-300 dark:text-gray-600"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function TojeongApp() {
  const [birthStr, setBirthStr] = useState("1990-01-01");

  const result = useMemo(() => {
    const d = new Date(birthStr);
    if (isNaN(d.getTime())) return null;
    return calcTojeong(d.getFullYear(), d.getMonth() + 1, d.getDate());
  }, [birthStr]);

  const fortuneMap = result
    ? { upper: result.upperFortune, middle: result.middleFortune, lower: result.lowerFortune }
    : null;

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
          생년월일
        </label>
        <input
          type="date"
          value={birthStr}
          onChange={(e) => setBirthStr(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
      </div>

      {result && fortuneMap && (
        <div className="animate-fade-in-up space-y-6">
          {/* Overall Score */}
          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 text-center dark:border-gray-800 dark:from-amber-950/20 dark:to-orange-950/20">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">올해의 총운</p>
            <p className="text-5xl font-extrabold text-amber-600 dark:text-amber-400">
              {result.overallScore}<span className="text-2xl">점</span>
            </p>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              {result.overallComment}
            </p>
          </div>

          {/* Three Periods */}
          {SECTIONS.map((section) => {
            const fortune = fortuneMap[section.key];
            return (
              <div
                key={section.key}
                className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {section.label}
                    </h3>
                    <p className="text-xs text-gray-400">{section.period}</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-950">
                    <span className="text-lg font-extrabold text-amber-600 dark:text-amber-400">
                      {fortune.score}
                    </span>
                  </div>
                </div>

                <p className="mb-2 text-base font-semibold text-violet-700 dark:text-violet-400">
                  &ldquo;{fortune.title}&rdquo;
                </p>
                <p className="mb-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {fortune.description}
                </p>
                <div className="mb-3 rounded-lg bg-blue-50 p-3 text-sm text-blue-800 dark:bg-blue-950 dark:text-blue-200">
                  <strong>조언:</strong> {fortune.advice}
                </div>

                {/* Luck Grid */}
                <div className="grid grid-cols-4 gap-2">
                  {LUCK_LABELS.map(({ key, label, emoji }) => (
                    <div key={key} className="rounded-lg bg-gray-50 p-2.5 text-center dark:bg-gray-800">
                      <p className="text-base">{emoji}</p>
                      <p className="mt-0.5 text-[10px] text-gray-500 dark:text-gray-400">{label}</p>
                      <StarRating score={fortune.luck[key]} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
