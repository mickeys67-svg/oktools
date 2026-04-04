"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Preset {
  label: string;
  seconds: number;
  category?: string;
}

const PRESETS: Preset[] = [
  { label: "1분", seconds: 60 },
  { label: "3분", seconds: 180, category: "라면" },
  { label: "5분", seconds: 300 },
  { label: "10분", seconds: 600 },
  { label: "15분", seconds: 900 },
  { label: "20분", seconds: 1200, category: "운동" },
  { label: "30분", seconds: 1800 },
  { label: "1시간", seconds: 3600 },
];

type Status = "idle" | "running" | "paused" | "done";

function formatTime(totalSeconds: number): { h: string; m: string; s: string } {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return {
    h: h.toString().padStart(2, "0"),
    m: m.toString().padStart(2, "0"),
    s: s.toString().padStart(2, "0"),
  };
}

export default function TimerApp() {
  const [totalSeconds, setTotalSeconds] = useState(180); // default 3min
  const [remaining, setRemaining] = useState(180);
  const [status, setStatus] = useState<Status>("idle");
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const audioRef = useRef<AudioContext | null>(null);

  // Custom input
  const [customMin, setCustomMin] = useState(3);
  const [customSec, setCustomSec] = useState(0);

  const playAlarm = useCallback(() => {
    try {
      const ctx = audioRef.current || new AudioContext();
      audioRef.current = ctx;
      // Play beep pattern
      [0, 0.3, 0.6, 1.0, 1.3, 1.6].forEach((delay) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = delay >= 1.0 ? 880 : 660;
        gain.gain.value = 0.3;
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + 0.15);
      });
    } catch { /* silent fallback */ }
  }, []);

  const start = useCallback(() => {
    if (remaining <= 0) return;
    setStatus("running");
  }, [remaining]);

  const pause = useCallback(() => {
    setStatus("paused");
  }, []);

  const resume = useCallback(() => {
    setStatus("running");
  }, []);

  const reset = useCallback(() => {
    setStatus("idle");
    setRemaining(totalSeconds);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, [totalSeconds]);

  const selectPreset = useCallback((seconds: number) => {
    setTotalSeconds(seconds);
    setRemaining(seconds);
    setStatus("idle");
    setCustomMin(Math.floor(seconds / 60));
    setCustomSec(seconds % 60);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const applyCustom = useCallback(() => {
    const total = customMin * 60 + customSec;
    if (total > 0) {
      setTotalSeconds(total);
      setRemaining(total);
      setStatus("idle");
    }
  }, [customMin, customSec]);

  useEffect(() => {
    if (status === "running") {
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setStatus("done");
            playAlarm();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [status, playAlarm]);

  const { h, m, s } = formatTime(remaining);
  const progress = totalSeconds > 0 ? ((totalSeconds - remaining) / totalSeconds) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* Presets */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">프리셋</p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.seconds}
              onClick={() => selectPreset(p.seconds)}
              disabled={status === "running"}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                totalSeconds === p.seconds && status !== "running"
                  ? "bg-utility text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              {p.label}
              {p.category && (
                <span className="ml-1 text-[10px] opacity-70">({p.category})</span>
              )}
            </button>
          ))}
        </div>

        {/* Custom Input */}
        <div className="mt-4 flex items-end gap-2">
          <div>
            <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">분</label>
            <input
              type="number"
              min="0"
              max="999"
              value={customMin}
              onChange={(e) => setCustomMin(Math.max(0, Number(e.target.value)))}
              disabled={status === "running"}
              className="w-20 rounded-lg border border-gray-300 bg-white py-2 px-3 text-center text-lg font-semibold text-gray-900 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <span className="pb-2 text-xl font-bold text-gray-400">:</span>
          <div>
            <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">초</label>
            <input
              type="number"
              min="0"
              max="59"
              value={customSec}
              onChange={(e) => setCustomSec(Math.min(59, Math.max(0, Number(e.target.value))))}
              disabled={status === "running"}
              className="w-20 rounded-lg border border-gray-300 bg-white py-2 px-3 text-center text-lg font-semibold text-gray-900 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <button
            onClick={applyCustom}
            disabled={status === "running"}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-300"
          >
            설정
          </button>
        </div>
      </div>

      {/* Timer Display */}
      <div className={`rounded-xl border p-8 text-center sm:p-12 ${
        status === "done"
          ? "animate-pulse border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950"
          : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
      }`}>
        {/* Progress Ring */}
        <div className="relative mx-auto mb-4 h-48 w-48 sm:h-56 sm:w-56">
          <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
            <circle cx="100" cy="100" r="90" fill="none" stroke="#E5E7EB" strokeWidth="6"
              className="dark:stroke-gray-700" />
            <circle
              cx="100" cy="100" r="90" fill="none"
              stroke={status === "done" ? "#EF4444" : "#3B82F6"}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 90}`}
              strokeDashoffset={`${2 * Math.PI * 90 * (1 - progress / 100)}`}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className={`font-mono text-4xl font-extrabold sm:text-5xl ${
              status === "done" ? "text-red-500" : "text-gray-900 dark:text-gray-100"
            }`}>
              {totalSeconds >= 3600 ? `${h}:` : ""}{m}:{s}
            </p>
            {status === "done" && (
              <p className="mt-1 text-sm font-medium text-red-500">완료!</p>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          {status === "idle" && (
            <button
              onClick={start}
              className="rounded-full bg-utility px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              시작
            </button>
          )}
          {status === "running" && (
            <button
              onClick={pause}
              className="rounded-full bg-amber-500 px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              일시정지
            </button>
          )}
          {status === "paused" && (
            <>
              <button
                onClick={resume}
                className="rounded-full bg-utility px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                계속
              </button>
              <button
                onClick={reset}
                className="rounded-full bg-gray-200 px-6 py-3 text-lg font-bold text-gray-600 transition-transform hover:scale-105 active:scale-95 dark:bg-gray-700 dark:text-gray-300"
              >
                초기화
              </button>
            </>
          )}
          {status === "done" && (
            <button
              onClick={reset}
              className="rounded-full bg-utility px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              다시 시작
            </button>
          )}
          {(status === "running" || status === "idle") && status !== "idle" && (
            <button
              onClick={reset}
              className="rounded-full bg-gray-200 px-6 py-3 text-lg font-bold text-gray-600 dark:bg-gray-700 dark:text-gray-300"
            >
              초기화
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
