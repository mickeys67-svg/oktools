"use client";

import { useState } from "react";

type Mode = "of" | "change" | "ratio";

const MODES: { id: Mode; label: string; desc: string }[] = [
  { id: "of", label: "A의 B%", desc: "숫자의 퍼센트 값 계산" },
  { id: "change", label: "증감률", desc: "A에서 B로 몇 % 변화?" },
  { id: "ratio", label: "비율", desc: "A는 B의 몇 %?" },
];

export default function PercentageCalc() {
  const [mode, setMode] = useState<Mode>("of");
  const [a, setA] = useState(200);
  const [b, setB] = useState(15);

  let result: number | null = null;
  let resultLabel = "";

  if (mode === "of") {
    result = (a * b) / 100;
    resultLabel = `${a}의 ${b}%`;
  } else if (mode === "change") {
    if (a !== 0) {
      result = ((b - a) / a) * 100;
      resultLabel = `${a} → ${b} 변화율`;
    }
  } else {
    if (b !== 0) {
      result = (a / b) * 100;
      resultLabel = `${a}은(는) ${b}의`;
    }
  }

  return (
    <div className="space-y-6">
      {/* Mode Selector */}
      <div className="flex gap-2">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-colors ${
              mode === m.id
                ? "bg-life text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <p className="mb-3 text-xs text-gray-400">{MODES.find((m) => m.id === mode)?.desc}</p>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <label className="mb-1 block text-xs font-medium text-gray-500">
              {mode === "of" ? "숫자" : mode === "change" ? "이전 값" : "A"}
            </label>
            <input
              type="number"
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <span className="mt-5 text-lg font-bold text-gray-400">
            {mode === "of" ? "×" : mode === "change" ? "→" : "/"}
          </span>
          <div className="flex-1">
            <label className="mb-1 block text-xs font-medium text-gray-500">
              {mode === "of" ? "퍼센트(%)" : mode === "change" ? "이후 값" : "B"}
            </label>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
        </div>
      </div>

      {result !== null && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">{resultLabel}</p>
          <p className="text-4xl font-extrabold text-life sm:text-5xl">
            {mode === "of"
              ? result.toLocaleString("ko-KR", { maximumFractionDigits: 2 })
              : `${result >= 0 ? "+" : ""}${result.toFixed(2)}%`}
          </p>
          {mode === "change" && (
            <p className="mt-2 text-sm text-gray-400">
              {result >= 0 ? "증가" : "감소"} ({Math.abs(b - a).toLocaleString()} 차이)
            </p>
          )}
        </div>
      )}
    </div>
  );
}
