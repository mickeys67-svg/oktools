"use client";

import { useState, useMemo } from "react";

const LIMITS = [
  { label: "자소서 500자", value: 500 },
  { label: "자소서 1000자", value: 1000 },
  { label: "트위터 280자", value: 280 },
  { label: "SMS 90바이트", value: 90, isByte: true },
];

function getByteLength(str: string): number {
  return new TextEncoder().encode(str).length;
}

export default function CharacterCount() {
  const [text, setText] = useState("");
  const [selectedLimit, setSelectedLimit] = useState<number | null>(null);
  const [isByteLimit, setIsByteLimit] = useState(false);

  const stats = useMemo(() => {
    const total = text.length;
    const noSpaces = text.replace(/\s/g, "").length;
    const bytes = getByteLength(text);
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const lines = text ? text.split("\n").length : 0;
    const sentences = text.trim()
      ? text.split(/[.!?。]+/).filter((s) => s.trim().length > 0).length
      : 0;
    return { total, noSpaces, bytes, words, lines, sentences };
  }, [text]);

  const progress = useMemo(() => {
    if (!selectedLimit) return null;
    const current = isByteLimit ? stats.bytes : stats.total;
    const pct = Math.min((current / selectedLimit) * 100, 100);
    const over = current > selectedLimit;
    return { current, pct, over };
  }, [selectedLimit, isByteLimit, stats]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="여기에 텍스트를 입력하세요..."
          rows={8}
          className="w-full resize-y rounded-lg border border-gray-300 bg-white p-4 text-base text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => navigator.clipboard.writeText(text)}
            className="rounded-lg bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            복사
          </button>
          <button
            onClick={() => setText("")}
            className="rounded-lg bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            지우기
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="animate-fade-in-up grid grid-cols-3 gap-3 sm:grid-cols-6">
        {[
          { label: "전체 글자", value: stats.total },
          { label: "공백 제외", value: stats.noSpaces },
          { label: "바이트", value: stats.bytes },
          { label: "단어 수", value: stats.words },
          { label: "줄 수", value: stats.lines },
          { label: "문장 수", value: stats.sentences },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-gray-200 bg-white p-3 text-center dark:border-gray-800 dark:bg-gray-900"
          >
            <p className="text-xs text-gray-500">{s.label}</p>
            <p className="mt-1 text-xl font-extrabold text-tools">
              {s.value.toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* Limits */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">글자수 제한 확인</p>
        <div className="flex flex-wrap gap-2">
          {LIMITS.map((l) => (
            <button
              key={l.label}
              onClick={() => {
                setSelectedLimit(l.value);
                setIsByteLimit(!!l.isByte);
              }}
              className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                selectedLimit === l.value
                  ? "bg-tools text-white"
                  : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {progress && (
          <div className="mt-4">
            <div className="mb-1 flex justify-between text-xs">
              <span className={progress.over ? "font-bold text-red-500" : "text-gray-500"}>
                {progress.current.toLocaleString()} / {selectedLimit!.toLocaleString()}
                {isByteLimit ? " 바이트" : "자"}
              </span>
              <span className={progress.over ? "font-bold text-red-500" : "text-gray-500"}>
                {progress.pct.toFixed(1)}%
              </span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className={`h-full rounded-full transition-all ${
                  progress.over ? "bg-red-500" : "bg-tools"
                }`}
                style={{ width: `${Math.min(progress.pct, 100)}%` }}
              />
            </div>
            {progress.over && (
              <p className="mt-1 text-xs font-medium text-red-500">
                {(progress.current - selectedLimit!).toLocaleString()}
                {isByteLimit ? " 바이트" : "자"} 초과
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
