"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

type Theme = "minimal" | "classic" | "neon" | "space" | "retro";

const THEMES: { id: Theme; name: string }[] = [
  { id: "minimal", name: "미니멀" },
  { id: "classic", name: "클래식" },
  { id: "neon", name: "네온" },
  { id: "space", name: "우주" },
  { id: "retro", name: "레트로" },
];

const DAY_NAMES = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

export default function ClockApp() {
  const [now, setNow] = useState(new Date());
  const [theme, setTheme] = useState<Theme>("minimal");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [smoothSecond, setSmoothSecond] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Update clock
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), smoothSecond ? 50 : 1000);
    return () => clearInterval(interval);
  }, [smoothSecond]);

  // Auto-hide controls in fullscreen
  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    if (isFullscreen) {
      hideTimer.current = setTimeout(() => setShowControls(false), 3000);
    }
  }, [isFullscreen]);

  useEffect(() => {
    resetHideTimer();
    return () => { if (hideTimer.current) clearTimeout(hideTimer.current); };
  }, [isFullscreen, resetHideTimer]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ms = now.getMilliseconds();
  const smoothSeconds = smoothSecond ? seconds + ms / 1000 : seconds;
  const smoothMinutes = minutes + smoothSeconds / 60;
  const smoothHours = (hours % 12) + smoothMinutes / 60;

  const dateStr = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;
  const dayStr = DAY_NAMES[now.getDay()];
  const timeStr = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

  return (
    <div
      ref={containerRef}
      onMouseMove={resetHideTimer}
      onTouchStart={resetHideTimer}
      className={`relative flex min-h-[80vh] flex-col items-center justify-center ${
        isFullscreen ? "min-h-screen" : ""
      } ${getThemeBg(theme)}`}
    >
      {/* Back link (non-fullscreen only) */}
      {!isFullscreen && (
        <div className="absolute left-4 top-4 z-10">
          <Link
            href="/tools"
            className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            ← 유틸리티
          </Link>
        </div>
      )}

      {/* Analog Clock */}
      <div className="relative">
        <svg
          viewBox="0 0 400 400"
          className={`${isFullscreen ? "h-[60vh] w-[60vh]" : "h-64 w-64 sm:h-80 sm:w-80"}`}
        >
          {/* Clock Face */}
          {theme === "minimal" && <MinimalFace />}
          {theme === "classic" && <ClassicFace />}
          {theme === "neon" && <NeonFace />}
          {theme === "space" && <SpaceFace />}
          {theme === "retro" && <RetroFace />}

          {/* Hour Hand */}
          <line
            x1="200" y1="200"
            x2="200" y2="120"
            stroke={getHandColor(theme, "hour")}
            strokeWidth={theme === "neon" ? 4 : 6}
            strokeLinecap="round"
            transform={`rotate(${smoothHours * 30}, 200, 200)`}
            style={theme === "neon" ? { filter: `drop-shadow(0 0 6px ${getHandColor(theme, "hour")})` } : {}}
          />
          {/* Minute Hand */}
          <line
            x1="200" y1="200"
            x2="200" y2="90"
            stroke={getHandColor(theme, "minute")}
            strokeWidth={theme === "neon" ? 3 : 4}
            strokeLinecap="round"
            transform={`rotate(${smoothMinutes * 6}, 200, 200)`}
            style={theme === "neon" ? { filter: `drop-shadow(0 0 6px ${getHandColor(theme, "minute")})` } : {}}
          />
          {/* Second Hand */}
          <line
            x1="200" y1="220"
            x2="200" y2="80"
            stroke={getSecondColor(theme)}
            strokeWidth={1.5}
            strokeLinecap="round"
            transform={`rotate(${smoothSeconds * 6}, 200, 200)`}
            style={theme === "neon" ? { filter: `drop-shadow(0 0 4px ${getSecondColor(theme)})` } : {}}
          />
          {/* Center dot */}
          <circle cx="200" cy="200" r={theme === "neon" ? 5 : 6} fill={getSecondColor(theme)} />
        </svg>
      </div>

      {/* Digital Time */}
      <div className={`mt-4 text-center ${getDigitalStyle(theme)}`}>
        <p className={`font-mono ${isFullscreen ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"} font-bold tracking-wider`}>
          {timeStr}
        </p>
        <p className={`mt-1 ${isFullscreen ? "text-lg" : "text-sm"} opacity-70`}>
          {dateStr} {dayStr}
        </p>
      </div>

      {/* Controls */}
      <div
        className={`absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Theme Selector */}
        <div className="flex flex-wrap justify-center gap-2">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                theme === t.id
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-white/80 text-gray-600 hover:bg-white dark:bg-gray-800/80 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Smooth/Tick toggle */}
          <button
            onClick={() => setSmoothSecond((p) => !p)}
            className="rounded-full bg-white/80 px-3 py-1.5 text-xs text-gray-600 hover:bg-white dark:bg-gray-800/80 dark:text-gray-300"
          >
            초침: {smoothSecond ? "스윕" : "틱"}
          </button>
          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="rounded-full bg-white/80 px-3 py-1.5 text-xs text-gray-600 hover:bg-white dark:bg-gray-800/80 dark:text-gray-300"
          >
            {isFullscreen ? "축소" : "전체화면"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Theme Helpers ──────────────────────────────────── */

function getThemeBg(theme: Theme): string {
  switch (theme) {
    case "minimal": return "bg-white dark:bg-gray-950";
    case "classic": return "bg-amber-50 dark:bg-stone-950";
    case "neon": return "bg-gray-950";
    case "space": return "bg-gradient-to-b from-indigo-950 via-purple-950 to-black";
    case "retro": return "bg-stone-100 dark:bg-stone-900";
  }
}

function getHandColor(theme: Theme, hand: "hour" | "minute"): string {
  switch (theme) {
    case "minimal": return hand === "hour" ? "#111827" : "#374151";
    case "classic": return "#78350F";
    case "neon": return hand === "hour" ? "#22D3EE" : "#A78BFA";
    case "space": return hand === "hour" ? "#C4B5FD" : "#93C5FD";
    case "retro": return "#44403C";
  }
}

function getSecondColor(theme: Theme): string {
  switch (theme) {
    case "minimal": return "#EF4444";
    case "classic": return "#B91C1C";
    case "neon": return "#F43F5E";
    case "space": return "#F59E0B";
    case "retro": return "#DC2626";
  }
}

function getDigitalStyle(theme: Theme): string {
  switch (theme) {
    case "minimal": return "text-gray-900 dark:text-gray-100";
    case "classic": return "text-amber-900 dark:text-amber-200";
    case "neon": return "text-cyan-400";
    case "space": return "text-indigo-200";
    case "retro": return "text-stone-700 dark:text-stone-300";
  }
}

/* ─── Clock Faces ────────────────────────────────────── */

function MinimalFace() {
  return (
    <g>
      <circle cx="200" cy="200" r="190" fill="none" stroke="#E5E7EB" strokeWidth="2" className="dark:stroke-gray-700" />
      {Array.from({ length: 60 }, (_, i) => {
        const angle = (i * 6 - 90) * (Math.PI / 180);
        const isHour = i % 5 === 0;
        const r1 = isHour ? 168 : 178;
        const r2 = 185;
        return (
          <line
            key={i}
            x1={200 + r1 * Math.cos(angle)}
            y1={200 + r1 * Math.sin(angle)}
            x2={200 + r2 * Math.cos(angle)}
            y2={200 + r2 * Math.sin(angle)}
            stroke={isHour ? "#374151" : "#D1D5DB"}
            strokeWidth={isHour ? 2.5 : 1}
            className={isHour ? "dark:stroke-gray-300" : "dark:stroke-gray-600"}
          />
        );
      })}
    </g>
  );
}

function ClassicFace() {
  const romanNumerals = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
  return (
    <g>
      <circle cx="200" cy="200" r="192" fill="none" stroke="#92400E" strokeWidth="4" />
      <circle cx="200" cy="200" r="186" fill="none" stroke="#D4A04F" strokeWidth="1" />
      {romanNumerals.map((num, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        return (
          <text
            key={i}
            x={200 + 160 * Math.cos(angle)}
            y={200 + 160 * Math.sin(angle)}
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-amber-900 text-[16px] font-serif font-bold dark:fill-amber-300"
          >
            {num}
          </text>
        );
      })}
      {Array.from({ length: 60 }, (_, i) => {
        const angle = (i * 6 - 90) * (Math.PI / 180);
        const isHour = i % 5 === 0;
        if (isHour) return null;
        return (
          <circle
            key={i}
            cx={200 + 178 * Math.cos(angle)}
            cy={200 + 178 * Math.sin(angle)}
            r={1}
            fill="#92400E"
            className="dark:fill-amber-600"
          />
        );
      })}
    </g>
  );
}

function NeonFace() {
  return (
    <g>
      <circle cx="200" cy="200" r="190" fill="none" stroke="#06B6D4" strokeWidth="2"
        style={{ filter: "drop-shadow(0 0 8px #06B6D4)" }} />
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        return (
          <text
            key={i}
            x={200 + 165 * Math.cos(angle)}
            y={200 + 165 * Math.sin(angle)}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#22D3EE"
            fontSize="18"
            fontWeight="bold"
            style={{ filter: "drop-shadow(0 0 6px #22D3EE)" }}
          >
            {i === 0 ? 12 : i}
          </text>
        );
      })}
      {Array.from({ length: 60 }, (_, i) => {
        if (i % 5 === 0) return null;
        const angle = (i * 6 - 90) * (Math.PI / 180);
        return (
          <circle key={i} cx={200 + 180 * Math.cos(angle)} cy={200 + 180 * Math.sin(angle)}
            r={1.5} fill="#0E7490" style={{ filter: "drop-shadow(0 0 2px #06B6D4)" }} />
        );
      })}
    </g>
  );
}

function SpaceFace() {
  return (
    <g>
      {/* Stars */}
      {Array.from({ length: 40 }, (_, i) => {
        const x = 20 + (i * 97) % 360;
        const y = 20 + (i * 131) % 360;
        const r = 0.5 + (i % 3) * 0.5;
        return <circle key={`star-${i}`} cx={x} cy={y} r={r} fill="white" opacity={0.3 + (i % 5) * 0.15} />;
      })}
      <circle cx="200" cy="200" r="190" fill="none" stroke="#6366F1" strokeWidth="1.5" opacity="0.5" />
      <circle cx="200" cy="200" r="186" fill="none" stroke="#818CF8" strokeWidth="0.5" opacity="0.3" />
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        return (
          <circle
            key={i}
            cx={200 + 178 * Math.cos(angle)}
            cy={200 + 178 * Math.sin(angle)}
            r={3}
            fill="#A78BFA"
            opacity="0.8"
          />
        );
      })}
    </g>
  );
}

function RetroFace() {
  return (
    <g>
      <circle cx="200" cy="200" r="192" fill="#F5F5F4" stroke="#A8A29E" strokeWidth="3" className="dark:fill-stone-800 dark:stroke-stone-600" />
      <circle cx="200" cy="200" r="185" fill="none" stroke="#D6D3D1" strokeWidth="1" className="dark:stroke-stone-700" />
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        return (
          <text
            key={i}
            x={200 + 162 * Math.cos(angle)}
            y={200 + 162 * Math.sin(angle)}
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-stone-600 text-[18px] font-bold dark:fill-stone-300"
          >
            {i === 0 ? 12 : i}
          </text>
        );
      })}
      {Array.from({ length: 60 }, (_, i) => {
        const angle = (i * 6 - 90) * (Math.PI / 180);
        const isHour = i % 5 === 0;
        const r1 = isHour ? 172 : 180;
        const r2 = 185;
        if (isHour) return null;
        return (
          <line key={i}
            x1={200 + r1 * Math.cos(angle)} y1={200 + r1 * Math.sin(angle)}
            x2={200 + r2 * Math.cos(angle)} y2={200 + r2 * Math.sin(angle)}
            stroke="#A8A29E" strokeWidth={0.8} className="dark:stroke-stone-600"
          />
        );
      })}
    </g>
  );
}
