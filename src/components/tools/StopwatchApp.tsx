"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Lap {
  number: number;
  elapsed: number; // ms since start
  split: number;   // ms since last lap
}

function formatMs(ms: number): { m: string; s: string; cs: string } {
  const totalSeconds = Math.floor(ms / 1000);
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  const cs = Math.floor((ms % 1000) / 10);
  return {
    m: m.toString().padStart(2, "0"),
    s: s.toString().padStart(2, "0"),
    cs: cs.toString().padStart(2, "0"),
  };
}

type Status = "idle" | "running" | "paused";

export default function StopwatchApp() {
  const [elapsed, setElapsed] = useState(0); // ms
  const [status, setStatus] = useState<Status>("idle");
  const [laps, setLaps] = useState<Lap[]>([]);
  const startTimeRef = useRef(0);
  const accumulatedRef = useRef(0);
  const rafRef = useRef<number>(undefined);

  const tick = useCallback(() => {
    setElapsed(accumulatedRef.current + (performance.now() - startTimeRef.current));
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const start = useCallback(() => {
    startTimeRef.current = performance.now();
    setStatus("running");
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const pause = useCallback(() => {
    accumulatedRef.current += performance.now() - startTimeRef.current;
    setStatus("paused");
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const resume = useCallback(() => {
    startTimeRef.current = performance.now();
    setStatus("running");
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const reset = useCallback(() => {
    setStatus("idle");
    setElapsed(0);
    setLaps([]);
    accumulatedRef.current = 0;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const lap = useCallback(() => {
    const currentElapsed = accumulatedRef.current + (performance.now() - startTimeRef.current);
    const lastLapEnd = laps.length > 0 ? laps[0].elapsed : 0;
    setLaps((prev) => [
      {
        number: prev.length + 1,
        elapsed: currentElapsed,
        split: currentElapsed - lastLapEnd,
      },
      ...prev,
    ]);
  }, [laps]);

  useEffect(() => {
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const { m, s, cs } = formatMs(elapsed);

  // Find best/worst laps
  const bestLapIdx = laps.length > 1
    ? laps.reduce((best, l, i) => l.split < laps[best].split ? i : best, 0)
    : -1;
  const worstLapIdx = laps.length > 1
    ? laps.reduce((worst, l, i) => l.split > laps[worst].split ? i : worst, 0)
    : -1;

  return (
    <div className="space-y-6">
      {/* Display */}
      <div className="rounded-xl border border-gray-200 bg-white p-8 text-center sm:p-12 dark:border-gray-800 dark:bg-gray-900">
        <p className="font-mono text-5xl font-extrabold tracking-wider text-gray-900 sm:text-7xl dark:text-gray-100">
          {m}:{s}
          <span className="text-3xl text-gray-400 sm:text-4xl">.{cs}</span>
        </p>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {status === "idle" && (
            <button
              onClick={start}
              className="rounded-full bg-utility px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              시작
            </button>
          )}
          {status === "running" && (
            <>
              <button
                onClick={lap}
                className="rounded-full bg-gray-200 px-6 py-3 text-lg font-bold text-gray-600 transition-transform hover:scale-105 active:scale-95 dark:bg-gray-700 dark:text-gray-300"
              >
                랩
              </button>
              <button
                onClick={pause}
                className="rounded-full bg-amber-500 px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                정지
              </button>
            </>
          )}
          {status === "paused" && (
            <>
              <button
                onClick={reset}
                className="rounded-full bg-gray-200 px-6 py-3 text-lg font-bold text-gray-600 transition-transform hover:scale-105 active:scale-95 dark:bg-gray-700 dark:text-gray-300"
              >
                초기화
              </button>
              <button
                onClick={resume}
                className="rounded-full bg-utility px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                계속
              </button>
            </>
          )}
        </div>
      </div>

      {/* Laps */}
      {laps.length > 0 && (
        <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
          <div className="border-b border-gray-200 px-5 py-3 dark:border-gray-800">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              랩 기록 ({laps.length})
            </h3>
          </div>
          <div className="max-h-64 overflow-y-auto">
            {laps.map((l, i) => {
              const splitFmt = formatMs(l.split);
              const elapsedFmt = formatMs(l.elapsed);
              const isBest = i === bestLapIdx;
              const isWorst = i === worstLapIdx;
              return (
                <div
                  key={l.number}
                  className={`flex items-center justify-between border-b border-gray-100 px-5 py-3 last:border-0 dark:border-gray-800 ${
                    isBest ? "bg-emerald-50 dark:bg-emerald-950/30" : isWorst ? "bg-red-50 dark:bg-red-950/30" : ""
                  }`}
                >
                  <span className={`text-sm font-medium ${
                    isBest ? "text-emerald-600 dark:text-emerald-400" : isWorst ? "text-red-500" : "text-gray-500 dark:text-gray-400"
                  }`}>
                    랩 {l.number}
                    {isBest && " (최단)"}
                    {isWorst && " (최장)"}
                  </span>
                  <div className="flex gap-6 text-right font-mono text-sm">
                    <span className={`font-semibold ${
                      isBest ? "text-emerald-600 dark:text-emerald-400" : isWorst ? "text-red-500" : "text-gray-900 dark:text-gray-100"
                    }`}>
                      {splitFmt.m}:{splitFmt.s}.{splitFmt.cs}
                    </span>
                    <span className="text-gray-400">
                      {elapsedFmt.m}:{elapsedFmt.s}.{elapsedFmt.cs}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
