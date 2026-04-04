"use client";

import { useState } from "react";

type Tab = "number" | "lotto" | "coin" | "dice";

function getLottoBallColor(n: number): string {
  if (n <= 10) return "bg-yellow-400 text-yellow-900";
  if (n <= 20) return "bg-blue-500 text-white";
  if (n <= 30) return "bg-red-500 text-white";
  if (n <= 40) return "bg-gray-500 text-white";
  return "bg-green-500 text-white";
}

function generateLotto(): { main: number[]; bonus: number } {
  const pool = Array.from({ length: 45 }, (_, i) => i + 1);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const main = pool.slice(0, 6).sort((a, b) => a - b);
  const bonus = pool[6];
  return { main, bonus };
}

function DiceFace({ value }: { value: number }) {
  const dots: Record<number, [number, number][]> = {
    1: [[50, 50]],
    2: [[25, 25], [75, 75]],
    3: [[25, 25], [50, 50], [75, 75]],
    4: [[25, 25], [75, 25], [25, 75], [75, 75]],
    5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
    6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]],
  };
  return (
    <svg viewBox="0 0 100 100" className="h-16 w-16 sm:h-20 sm:w-20">
      <rect x="2" y="2" width="96" height="96" rx="12" className="fill-white stroke-gray-300 dark:fill-gray-800 dark:stroke-gray-600" strokeWidth="2" />
      {(dots[value] || []).map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="8" className="fill-gray-800 dark:fill-gray-200" />
      ))}
    </svg>
  );
}

export default function RandomGenerator() {
  const [tab, setTab] = useState<Tab>("lotto");

  // Number state
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [noDup, setNoDup] = useState(false);
  const [numbers, setNumbers] = useState<number[]>([]);

  // Lotto state
  const [lottoResult, setLottoResult] = useState<{ main: number[]; bonus: number } | null>(null);

  // Coin state
  const [coinResult, setCoinResult] = useState<string | null>(null);
  const [coinFlipping, setCoinFlipping] = useState(false);

  // Dice state
  const [diceCount, setDiceCount] = useState(1);
  const [diceResults, setDiceResults] = useState<number[]>([]);

  const tabs: { id: Tab; label: string }[] = [
    { id: "lotto", label: "로또" },
    { id: "number", label: "숫자" },
    { id: "coin", label: "동전" },
    { id: "dice", label: "주사위" },
  ];

  const generateNumbers = () => {
    if (min > max) return;
    if (noDup && count > max - min + 1) return;
    const result: number[] = [];
    if (noDup) {
      const pool = Array.from({ length: max - min + 1 }, (_, i) => i + min);
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      result.push(...pool.slice(0, count));
    } else {
      for (let i = 0; i < count; i++) {
        result.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }
    }
    setNumbers(result.sort((a, b) => a - b));
  };

  const flipCoin = () => {
    setCoinFlipping(true);
    setCoinResult(null);
    setTimeout(() => {
      setCoinResult(Math.random() < 0.5 ? "앞면" : "뒷면");
      setCoinFlipping(false);
    }, 600);
  };

  const rollDice = () => {
    const results = Array.from({ length: diceCount }, () => Math.floor(Math.random() * 6) + 1);
    setDiceResults(results);
  };

  return (
    <div className="space-y-6">
      {/* Tab selector */}
      <div className="flex gap-1 rounded-xl border border-gray-200 bg-white p-1 dark:border-gray-800 dark:bg-gray-900">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
              tab === t.id
                ? "bg-tools text-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Lotto */}
      {tab === "lotto" && (
        <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <button
            onClick={() => setLottoResult(generateLotto())}
            className="w-full rounded-lg bg-tools py-3 text-base font-bold text-white transition-colors hover:bg-blue-600"
          >
            로또 번호 생성
          </button>
          {lottoResult && (
            <div className="animate-fade-in-up mt-6 text-center">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                {lottoResult.main.map((n) => (
                  <div key={n} className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-extrabold sm:h-14 sm:w-14 sm:text-lg ${getLottoBallColor(n)}`}>
                    {n}
                  </div>
                ))}
                <span className="mx-1 text-lg font-bold text-gray-400">+</span>
                <div className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-extrabold ring-2 ring-offset-2 sm:h-14 sm:w-14 sm:text-lg ${getLottoBallColor(lottoResult.bonus)} ring-gray-300 dark:ring-gray-600`}>
                  {lottoResult.bonus}
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-400">보너스 번호: {lottoResult.bonus}</p>
            </div>
          )}
        </div>
      )}

      {/* Number */}
      {tab === "number" && (
        <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 grid grid-cols-3 gap-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400">최소</label>
              <input type="number" value={min} onChange={(e) => setMin(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-center text-sm font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400">최대</label>
              <input type="number" value={max} onChange={(e) => setMax(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-center text-sm font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400">개수</label>
              <input type="number" min={1} max={100} value={count} onChange={(e) => setCount(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-center text-sm font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
            </div>
          </div>
          <label className="mb-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <input type="checkbox" checked={noDup} onChange={(e) => setNoDup(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300" />
            중복 제외
          </label>
          <button onClick={generateNumbers}
            className="w-full rounded-lg bg-tools py-3 text-base font-bold text-white transition-colors hover:bg-blue-600">
            생성
          </button>
          {numbers.length > 0 && (
            <div className="animate-fade-in-up mt-4 flex flex-wrap justify-center gap-2">
              {numbers.map((n, i) => (
                <span key={i} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-tools dark:bg-blue-900/40">
                  {n}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Coin */}
      {tab === "coin" && (
        <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <button onClick={flipCoin} disabled={coinFlipping}
            className="w-full rounded-lg bg-tools py-3 text-base font-bold text-white transition-colors hover:bg-blue-600 disabled:opacity-50">
            동전 던지기
          </button>
          <div className="mt-6 flex justify-center">
            <div className={`flex h-32 w-32 items-center justify-center rounded-full border-4 ${
              coinResult === "앞면" ? "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20" : coinResult === "뒷면" ? "border-gray-400 bg-gray-50 dark:bg-gray-800" : "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"
            } ${coinFlipping ? "animate-spin" : ""}`}>
              <span className="text-2xl font-extrabold text-gray-800 dark:text-gray-200">
                {coinFlipping ? "..." : coinResult || "?"}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Dice */}
      {tab === "dice" && (
        <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4">
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">주사위 개수</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} onClick={() => setDiceCount(n)}
                  className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
                    diceCount === n ? "bg-tools text-white" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  }`}>
                  {n}개
                </button>
              ))}
            </div>
          </div>
          <button onClick={rollDice}
            className="w-full rounded-lg bg-tools py-3 text-base font-bold text-white transition-colors hover:bg-blue-600">
            주사위 굴리기
          </button>
          {diceResults.length > 0 && (
            <div className="animate-fade-in-up mt-5">
              <div className="flex flex-wrap justify-center gap-3">
                {diceResults.map((v, i) => (
                  <DiceFace key={i} value={v} />
                ))}
              </div>
              {diceResults.length > 1 && (
                <p className="mt-3 text-center text-sm text-gray-500">
                  합계: <span className="font-bold text-tools">{diceResults.reduce((a, b) => a + b, 0)}</span>
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
