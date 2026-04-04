"use client";

import { useState } from "react";
import {
  type RecommendMode,
  type LottoRecommendation,
  recommendMultipleSets,
  getLottoBallColor,
  getHotNumbers,
  getColdNumbers,
  getAbsentNumbers,
  getLatestRound,
  getNumberFrequencies,
} from "@/lib/lotto";

const MODES: { id: RecommendMode; label: string; desc: string }[] = [
  { id: "balanced", label: "균형 추천", desc: "고빈도+미출현 혼합" },
  { id: "cold", label: "미출현 번호", desc: "최근 안 나온 번호 위주" },
  { id: "hot", label: "고빈도 번호", desc: "자주 나온 번호 위주" },
  { id: "random", label: "랜덤", desc: "완전 무작위" },
];

const GAME_LABELS = ["A", "B", "C", "D", "E"];

function LottoBall({ n, isBonus }: { n: number; isBonus?: boolean }) {
  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-extrabold sm:h-14 sm:w-14 sm:text-lg ${getLottoBallColor(n)} ${
        isBonus ? "ring-2 ring-gray-300 ring-offset-2 dark:ring-gray-600" : ""
      }`}
    >
      {n}
    </div>
  );
}

function StatBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-6 text-right font-bold text-gray-700 dark:text-gray-300">{label}</span>
      <div className="flex-1 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
        <div className={`h-4 rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="w-8 text-right font-semibold text-gray-600 dark:text-gray-400">{value}</span>
    </div>
  );
}

export default function LottoRecommender() {
  const [mode, setMode] = useState<RecommendMode>("balanced");
  const [gameCount, setGameCount] = useState(5);
  const [results, setResults] = useState<LottoRecommendation[]>([]);
  const [showStats, setShowStats] = useState(false);

  const generate = () => {
    setResults(recommendMultipleSets(mode, gameCount));
  };

  const latestRound = getLatestRound();

  return (
    <div className="space-y-6">
      {/* Mode tabs */}
      <div className="flex gap-1 rounded-xl border border-gray-200 bg-white p-1 dark:border-gray-800 dark:bg-gray-900">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
              mode === m.id
                ? "bg-tools text-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Mode description + game count */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          {MODES.find((m) => m.id === mode)?.desc}
        </p>

        {/* Game count selector */}
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            게임 수
          </label>
          <div className="flex gap-2">
            {[1, 3, 5].map((n) => (
              <button
                key={n}
                onClick={() => setGameCount(n)}
                className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
                  gameCount === n
                    ? "bg-tools text-white"
                    : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                }`}
              >
                {n}게임
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={generate}
          className="w-full rounded-lg bg-tools py-3 text-base font-bold text-white transition-colors hover:bg-blue-600"
        >
          번호 추천받기
        </button>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="animate-fade-in-up space-y-3">
          {results.map((r, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-md bg-blue-100 px-2 py-0.5 text-xs font-bold text-tools dark:bg-blue-900/40">
                  {GAME_LABELS[idx]}게임
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                {r.numbers.map((n) => (
                  <LottoBall key={n} n={n} />
                ))}
                <span className="mx-1 text-lg font-bold text-gray-400">+</span>
                <LottoBall n={r.bonus} isBonus />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Statistics toggle */}
      <button
        onClick={() => setShowStats((v) => !v)}
        className="flex w-full items-center justify-center gap-1 rounded-xl border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
      >
        {showStats ? "통계 숨기기" : "통계 보기"}
        <svg
          className={`h-4 w-4 transition-transform ${showStats ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Statistics panel */}
      {showStats && <StatsPanel />}

      {/* Disclaimer */}
      <p className="text-center text-xs text-gray-400">
        기준: {latestRound}회차 &middot; 로또 번호 추천은 통계 기반 참고용이며, 당첨을 보장하지 않습니다.
      </p>
    </div>
  );
}

function StatsPanel() {
  const hot = getHotNumbers(10);
  const cold = getColdNumbers(10);
  const absent = getAbsentNumbers(10);
  const allFreq = getNumberFrequencies();
  const maxCount = Math.max(...allFreq.map((f) => f.count));

  return (
    <div className="animate-fade-in-up space-y-5">
      {/* Hot numbers */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-3 text-sm font-bold text-gray-900 dark:text-gray-100">
          자주 나온 번호 TOP 10
        </h3>
        <div className="space-y-1.5">
          {hot.map((f) => (
            <StatBar key={f.number} label={String(f.number)} value={f.count} max={maxCount} color="bg-red-400" />
          ))}
        </div>
      </div>

      {/* Cold numbers */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-3 text-sm font-bold text-gray-900 dark:text-gray-100">
          적게 나온 번호 TOP 10
        </h3>
        <div className="space-y-1.5">
          {cold.map((f) => (
            <StatBar key={f.number} label={String(f.number)} value={f.count} max={maxCount} color="bg-blue-400" />
          ))}
        </div>
      </div>

      {/* Absent numbers */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-3 text-sm font-bold text-gray-900 dark:text-gray-100">
          최근 10회차 미출현 번호
        </h3>
        {absent.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {absent.map((n) => (
              <div
                key={n}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-extrabold ${getLottoBallColor(n)}`}
              >
                {n}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400">최근 10회차 내 모든 번호가 출현했습니다.</p>
        )}
      </div>

      {/* Full frequency map */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-3 text-sm font-bold text-gray-900 dark:text-gray-100">
          전체 번호 출현 횟수
        </h3>
        <div className="grid grid-cols-5 gap-2 sm:grid-cols-9">
          {allFreq
            .sort((a, b) => a.number - b.number)
            .map((f) => (
              <div key={f.number} className="flex flex-col items-center gap-0.5">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold ${getLottoBallColor(f.number)}`}
                >
                  {f.number}
                </div>
                <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400">{f.count}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
