"use client";

import { useState } from "react";

type BloodType = "A" | "B" | "O" | "AB";

interface CompatData {
  score: number;
  desc: string;
  pros: string;
  caution: string;
  love: number;
  friend: number;
  work: number;
}

const BLOOD_TYPES: BloodType[] = ["A", "B", "O", "AB"];

function key(a: BloodType, b: BloodType): string {
  return [a, b].sort().join("+");
}

const COMPAT: Record<string, CompatData> = {
  "A+A": { score: 75, desc: "비슷한 성격으로 안정적, 때로 답답할 수 있음", pros: "서로의 세심함을 잘 이해하고 배려가 자연스러움", caution: "둘 다 말을 아끼다 오해가 쌓일 수 있음", love: 3, friend: 4, work: 4 },
  "A+B": { score: 65, desc: "서로 다른 매력, 이해하면 최고의 조합", pros: "B형의 자유로움이 A형에게 신선한 자극", caution: "A형이 B형의 자유분방함에 스트레스를 받을 수 있음", love: 3, friend: 3, work: 3 },
  "A+O": { score: 90, desc: "O형의 넓은 포용력이 A형을 감싸줌", pros: "O형의 대범함이 A형의 걱정을 덜어줌", caution: "A형의 잔소리가 O형을 답답하게 할 수 있음", love: 5, friend: 4, work: 5 },
  "A+AB": { score: 70, desc: "섬세함이 통하지만 과한 배려에 지칠 수 있음", pros: "둘 다 감성적이고 깊은 대화 가능", caution: "서로 눈치를 많이 보다 지칠 수 있음", love: 4, friend: 3, work: 3 },
  "B+B": { score: 80, desc: "자유로운 영혼끼리 즐거움 폭발", pros: "서로의 취미와 관심사를 존중하며 함께 즐김", caution: "둘 다 자기주장이 강해 충돌 가능", love: 4, friend: 5, work: 3 },
  "B+O": { score: 85, desc: "활발하고 솔직한 커플", pros: "둘 다 솔직하고 에너지가 넘침", caution: "감정 표현이 직접적이라 상처를 줄 수 있음", love: 4, friend: 5, work: 4 },
  "AB+B": { score: 75, desc: "창의적 조합, B형의 자유를 AB형이 이해", pros: "독특한 관점을 공유하며 창의적 대화", caution: "깊은 감정 교류가 어려울 수 있음", love: 3, friend: 4, work: 4 },
  "O+O": { score: 70, desc: "강한 리더십 둘이 충돌 가능", pros: "목표가 같으면 최고의 파트너", caution: "둘 다 주도하려 해서 의견 충돌 빈번", love: 3, friend: 4, work: 3 },
  "AB+O": { score: 80, desc: "O형의 직진과 AB형의 유연함이 균형", pros: "서로 다른 스타일이 보완적으로 작용", caution: "O형이 AB형의 이중성을 이해하기 어려울 수 있음", love: 4, friend: 4, work: 4 },
  "AB+AB": { score: 85, desc: "서로 깊이 이해하는 지적인 커플", pros: "말하지 않아도 통하는 감성, 지적 교감", caution: "둘 다 감정 표현이 서툴러 냉랭해질 수 있음", love: 4, friend: 5, work: 5 },
};

function getCompat(a: BloodType, b: BloodType): CompatData {
  return COMPAT[key(a, b)] ?? COMPAT[a + "+" + b] ?? COMPAT[b + "+" + a]!;
}

function Stars({ count }: { count: number }) {
  return (
    <span className="text-yellow-400">
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </span>
  );
}

export default function BloodTypeApp() {
  const [mine, setMine] = useState<BloodType | null>(null);
  const [theirs, setTheirs] = useState<BloodType | null>(null);

  const result = mine && theirs ? getCompat(mine, theirs) : null;

  return (
    <div className="space-y-6">
      {/* 나의 혈액형 */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-50">나의 혈액형</h2>
        <div className="grid grid-cols-4 gap-2">
          {BLOOD_TYPES.map((bt) => (
            <button
              key={bt}
              onClick={() => setMine(bt)}
              className={`rounded-xl py-4 text-lg font-bold transition-colors ${
                mine === bt
                  ? "bg-purple-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              {bt}형
            </button>
          ))}
        </div>
      </div>

      {/* 상대 혈액형 */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-50">상대 혈액형</h2>
        <div className="grid grid-cols-4 gap-2">
          {BLOOD_TYPES.map((bt) => (
            <button
              key={bt}
              onClick={() => setTheirs(bt)}
              className={`rounded-xl py-4 text-lg font-bold transition-colors ${
                theirs === bt
                  ? "bg-pink-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              {bt}형
            </button>
          ))}
        </div>
      </div>

      {/* 결과 */}
      {result && (
        <div className="rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-5 sm:p-6 shadow-lg dark:border-purple-800 dark:from-purple-950 dark:to-pink-950">
          <h2 className="mb-4 text-center text-lg font-bold text-gray-900 dark:text-gray-50">
            {mine}형 + {theirs}형 궁합
          </h2>

          {/* 원형 게이지 */}
          <div className="mx-auto mb-6 flex items-center justify-center">
            <div className="relative flex h-40 w-40 items-center justify-center">
              <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-200 dark:text-gray-700" />
                <circle
                  cx="60" cy="60" r="52" fill="none" strokeWidth="8"
                  strokeDasharray={`${(result.score / 100) * 327} 327`}
                  strokeLinecap="round"
                  className="text-purple-500"
                  stroke="currentColor"
                />
              </svg>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-purple-600 dark:text-purple-400">{result.score}%</div>
              </div>
            </div>
          </div>

          <p className="mb-4 text-center text-base font-medium text-gray-700 dark:text-gray-300">
            {result.desc}
          </p>

          <div className="space-y-3 rounded-lg bg-white/60 p-4 dark:bg-gray-900/60">
            <div>
              <span className="text-sm font-bold text-green-600">장점:</span>
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{result.pros}</span>
            </div>
            <div>
              <span className="text-sm font-bold text-orange-600">주의점:</span>
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{result.caution}</span>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">연애 궁합</span>
              <Stars count={result.love} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">우정 궁합</span>
              <Stars count={result.friend} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">직장 궁합</span>
              <Stars count={result.work} />
            </div>
          </div>
        </div>
      )}

      {!result && (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center text-gray-400 dark:border-gray-800 dark:bg-gray-900">
          두 사람의 혈액형을 선택하면 궁합 결과가 표시됩니다.
        </div>
      )}
    </div>
  );
}
