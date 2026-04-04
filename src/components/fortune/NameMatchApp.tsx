"use client";

import { useState, useMemo } from "react";

const CHOSUNG: Record<string, number> = {
  "\u3131": 2, "\u3132": 4, "\u3134": 2, "\u3137": 3, "\u3138": 6,
  "\u3139": 5, "\u3141": 4, "\u3142": 4, "\u3143": 8, "\u3145": 2,
  "\u3146": 4, "\u3147": 1, "\u3148": 3, "\u3149": 6, "\u314A": 4,
  "\u314B": 3, "\u314C": 4, "\u314D": 4, "\u314E": 3,
};

const JUNGSUNG: Record<string, number> = {
  "\u314F": 2, "\u3150": 3, "\u3151": 3, "\u3152": 3, "\u3153": 2,
  "\u3154": 3, "\u3155": 3, "\u3156": 3, "\u3157": 2, "\u3158": 3,
  "\u3159": 3, "\u315A": 3, "\u315B": 3, "\u315C": 2, "\u315D": 3,
  "\u315E": 3, "\u315F": 3, "\u3160": 3, "\u3161": 1, "\u3162": 2,
  "\u3163": 1,
};

const JONGSUNG: Record<string, number> = {
  "": 0,
  "\u3131": 2, "\u3132": 4, "\u3133": 4, "\u3134": 2, "\u3135": 5,
  "\u3136": 5, "\u3137": 3, "\u3139": 5, "\u313A": 7, "\u313B": 9,
  "\u313C": 9, "\u313D": 9, "\u313E": 9, "\u313F": 9, "\u3140": 8,
  "\u3141": 4, "\u3142": 4, "\u3143": 8, "\u3145": 2, "\u3146": 4,
  "\u3147": 1, "\u3148": 3, "\u314A": 4, "\u314B": 3, "\u314C": 4,
  "\u314D": 4, "\u314E": 3,
};

const CHO_LIST = ["\u3131","\u3132","\u3134","\u3137","\u3138","\u3139","\u3141","\u3142","\u3143","\u3145","\u3146","\u3147","\u3148","\u3149","\u314A","\u314B","\u314C","\u314D","\u314E"];
const JUNG_LIST = ["\u314F","\u3150","\u3151","\u3152","\u3153","\u3154","\u3155","\u3156","\u3157","\u3158","\u3159","\u315A","\u315B","\u315C","\u315D","\u315E","\u315F","\u3160","\u3161","\u3162","\u3163"];
const JONG_LIST = ["","\u3131","\u3132","\u3133","\u3134","\u3135","\u3136","\u3137","\u3139","\u313A","\u313B","\u313C","\u313D","\u313E","\u313F","\u3140","\u3141","\u3142","\u3143","\u3145","\u3146","\u3147","\u3148","\u314A","\u314B","\u314C","\u314D","\u314E"];

function decomposeHangul(char: string): number {
  const code = char.charCodeAt(0);
  if (code < 0xAC00 || code > 0xD7A3) return 0;
  const offset = code - 0xAC00;
  const choIdx = Math.floor(offset / (21 * 28));
  const jungIdx = Math.floor((offset % (21 * 28)) / 28);
  const jongIdx = offset % 28;

  const cho = CHOSUNG[CHO_LIST[choIdx]] ?? 0;
  const jung = JUNGSUNG[JUNG_LIST[jungIdx]] ?? 0;
  const jong = JONGSUNG[JONG_LIST[jongIdx]] ?? 0;

  return cho + jung + jong;
}

function getStrokeCount(char: string): number {
  return decomposeHangul(char);
}

function interleave(a: string, b: string): string[] {
  const result: string[] = [];
  const maxLen = Math.max(a.length, b.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < a.length) result.push(a[i]);
    if (i < b.length) result.push(b[i]);
  }
  return result;
}

function calcPyramid(strokes: number[]): number[][] {
  const rows: number[][] = [strokes];
  let current = strokes;
  while (current.length > 2) {
    const next: number[] = [];
    for (let i = 0; i < current.length - 1; i++) {
      next.push((current[i] + current[i + 1]) % 10);
    }
    rows.push(next);
    current = next;
  }
  return rows;
}

function getMessage(score: number): string {
  if (score >= 90) return "천생연분! 운명적인 인연입니다.";
  if (score >= 80) return "아주 좋은 궁합! 서로에게 좋은 영향을 줍니다.";
  if (score >= 70) return "노력하면 더 좋아질 수 있는 궁합이에요!";
  if (score >= 50) return "보통 궁합이지만, 서로를 이해하면 충분합니다.";
  if (score >= 30) return "약간의 노력이 필요한 궁합이에요.";
  return "쉽지 않을 수 있지만, 사랑은 궁합을 이기기도 합니다!";
}

export default function NameMatchApp() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [showResult, setShowResult] = useState(false);

  const result = useMemo(() => {
    if (!name1.trim() || !name2.trim()) return null;

    const chars = interleave(name1.trim(), name2.trim());
    const strokes = chars.map(getStrokeCount);
    const pyramid = calcPyramid(strokes);
    const lastRow = pyramid[pyramid.length - 1];
    const score = lastRow.length === 2 ? lastRow[0] * 10 + lastRow[1] : lastRow[0];

    return { chars, strokes, pyramid, score };
  }, [name1, name2]);

  const handleCalc = () => {
    if (name1.trim() && name2.trim()) setShowResult(true);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-50">이름 입력</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">첫 번째 이름</label>
            <input
              type="text"
              value={name1}
              onChange={(e) => { setName1(e.target.value); setShowResult(false); }}
              placeholder="홍길동"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">두 번째 이름</label>
            <input
              type="text"
              value={name2}
              onChange={(e) => { setName2(e.target.value); setShowResult(false); }}
              placeholder="김철수"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
            />
          </div>
        </div>
        <button
          onClick={handleCalc}
          disabled={!name1.trim() || !name2.trim()}
          className="mt-4 w-full rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-base font-bold text-white shadow transition-opacity disabled:opacity-40"
        >
          궁합 확인하기
        </button>
      </div>

      {showResult && result && (
        <div className="rounded-xl border border-pink-200 bg-gradient-to-br from-pink-50 to-rose-50 p-5 sm:p-6 shadow-lg dark:border-pink-800 dark:from-pink-950 dark:to-rose-950">
          {/* 번갈아 배치 */}
          <div className="mb-4 flex flex-wrap justify-center gap-1">
            {result.chars.map((ch, i) => (
              <span
                key={i}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-lg text-base font-bold ${
                  i % 2 === 0
                    ? "bg-pink-200 text-pink-800 dark:bg-pink-800 dark:text-pink-200"
                    : "bg-rose-200 text-rose-800 dark:bg-rose-800 dark:text-rose-200"
                }`}
              >
                {ch}
              </span>
            ))}
          </div>

          {/* 피라미드 */}
          <div className="mb-6 space-y-1">
            {result.pyramid.map((row, ri) => (
              <div key={ri} className="flex justify-center gap-1">
                {row.map((n, ci) => (
                  <span
                    key={ci}
                    className={`inline-flex h-8 w-8 items-center justify-center rounded text-xs font-bold ${
                      ri === result.pyramid.length - 1
                        ? "bg-pink-500 text-white"
                        : "bg-white/60 text-gray-700 dark:bg-gray-800/60 dark:text-gray-300"
                    }`}
                  >
                    {n}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* 점수 */}
          <div className="mb-4 text-center">
            <div className="text-5xl font-extrabold text-pink-600 dark:text-pink-400">
              {result.score}%
            </div>
            <div className="mt-2 text-base font-medium text-gray-700 dark:text-gray-300">
              {getMessage(result.score)}
            </div>
          </div>

          <div className="text-center text-xs text-gray-400">
            * 한글 자모 획수 기반 전통 이름 궁합 방식입니다.
          </div>
        </div>
      )}
    </div>
  );
}
