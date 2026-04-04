"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ─── 숫자 휠 피커 ──────────────────────────────────────────────── */
interface NumberWheelProps {
  min: number;
  max: number;
  value: number;
  onChange: (v: number) => void;
  label?: string;
  padZero?: boolean;
  disabled?: boolean;
}

function NumberWheel({ min, max, value, onChange, label, padZero = true, disabled = false }: NumberWheelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const ITEM_H = 44;
  const VISIBLE = 5;
  const HALF = Math.floor(VISIBLE / 2);
  const items = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  const scrollToValue = useCallback(
    (v: number, smooth = false) => {
      const el = containerRef.current;
      if (!el) return;
      const idx = v - min;
      el.scrollTo({ top: idx * ITEM_H, behavior: smooth ? "smooth" : "instant" });
    },
    [min]
  );

  useEffect(() => {
    scrollToValue(value);
  }, [value, scrollToValue]);

  const handleScroll = useCallback(() => {
    if (isScrollingRef.current || disabled) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      const el = containerRef.current;
      if (!el) return;
      const idx = Math.round(el.scrollTop / ITEM_H);
      const clamped = Math.max(0, Math.min(idx, items.length - 1));
      const newVal = clamped + min;
      if (newVal !== value) onChange(newVal);
      isScrollingRef.current = true;
      el.scrollTo({ top: clamped * ITEM_H, behavior: "smooth" });
      setTimeout(() => { isScrollingRef.current = false; }, 200);
    }, 80);
  }, [items.length, min, value, onChange, disabled]);

  const fmt = (n: number) => padZero ? n.toString().padStart(2, "0") : n.toString();

  return (
    <div className="flex flex-col items-center">
      {label && <p className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">{label}</p>}
      <div className="relative select-none overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800/60" style={{ height: ITEM_H * VISIBLE, width: 72 }}>
        {/* Center highlight */}
        <div className="pointer-events-none absolute left-1 right-1 z-10 rounded-lg bg-utility/10 dark:bg-utility/20"
          style={{ top: HALF * ITEM_H, height: ITEM_H }} />
        {/* Fade top */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 bg-gradient-to-b from-gray-50 via-gray-50/80 to-transparent dark:from-gray-800/60 dark:via-gray-800/50"
          style={{ height: ITEM_H * 1.5 }} />
        {/* Fade bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent dark:from-gray-800/60 dark:via-gray-800/50"
          style={{ height: ITEM_H * 1.5 }} />
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className={`h-full overflow-y-auto scrollbar-none ${disabled ? "pointer-events-none opacity-40" : ""}`}
          style={{ scrollSnapType: "y mandatory", WebkitOverflowScrolling: "touch" }}
        >
          <div style={{ height: HALF * ITEM_H }} />
          {items.map((n) => (
            <div
              key={n}
              onClick={() => { if (!disabled) { onChange(n); scrollToValue(n, true); } }}
              className={`flex cursor-pointer items-center justify-center transition-all ${
                n === value ? "text-lg font-extrabold text-gray-900 dark:text-gray-50" : "text-sm font-medium text-gray-400 dark:text-gray-600"
              }`}
              style={{ height: ITEM_H, scrollSnapAlign: "start" }}
            >
              {fmt(n)}
            </div>
          ))}
          <div style={{ height: HALF * ITEM_H }} />
        </div>
      </div>
    </div>
  );
}

/* ─── 요리 타이머 데이터 ─────────────────────────────────────────── */
interface CookItem {
  name: string;
  seconds: number;
  tip?: string;
}

interface CookCategory {
  id: string;
  label: string;
  emoji: string;
  items: CookItem[];
}

const COOK_CATEGORIES: CookCategory[] = [
  {
    id: "egg",
    label: "계란",
    emoji: "🥚",
    items: [
      { name: "반숙 (흐르는 노른자)", seconds: 360, tip: "찬물에 넣고 끓기 시작 후 6분" },
      { name: "반숙 (촉촉한 노른자)", seconds: 480, tip: "찬물에 넣고 끓기 시작 후 8분" },
      { name: "중숙 (반반 노른자)", seconds: 600, tip: "찬물에 넣고 끓기 시작 후 10분" },
      { name: "완숙", seconds: 720, tip: "찬물에 넣고 끓기 시작 후 12분" },
      { name: "계란 프라이 (반숙)", seconds: 120, tip: "뚜껑 덮고 약불 2분" },
      { name: "스크램블 에그", seconds: 180, tip: "약불에서 저으며 3분" },
    ],
  },
  {
    id: "pasta",
    label: "파스타",
    emoji: "🍝",
    items: [
      { name: "스파게티", seconds: 540, tip: "알덴테 기준 9분 (Barilla 기준)" },
      { name: "펜네", seconds: 660, tip: "알덴테 기준 11분" },
      { name: "푸실리", seconds: 660, tip: "알덴테 기준 11분" },
      { name: "링귀네", seconds: 540, tip: "알덴테 기준 9분" },
      { name: "마카로니", seconds: 480, tip: "알덴테 기준 8분" },
      { name: "페투치네", seconds: 600, tip: "알덴테 기준 10분" },
      { name: "소면 / 국수", seconds: 150, tip: "끓는 물에 2분 30초" },
      { name: "우동면 (건면)", seconds: 480, tip: "끓는 물에 8분" },
      { name: "우동면 (생면)", seconds: 150, tip: "끓는 물에 2분 30초" },
    ],
  },
  {
    id: "steam",
    label: "찜·삶기",
    emoji: "♨️",
    items: [
      { name: "고구마 찜", seconds: 2100, tip: "찜기에서 35분" },
      { name: "감자 찜", seconds: 1200, tip: "찜기에서 20분" },
      { name: "옥수수 삶기", seconds: 900, tip: "끓는 물에 15분" },
      { name: "브로콜리 데치기", seconds: 120, tip: "끓는 물에 2분" },
      { name: "시금치 데치기", seconds: 30, tip: "끓는 물에 30초" },
      { name: "콩나물 삶기", seconds: 420, tip: "뚜껑 닫고 7분" },
      { name: "만두 찜", seconds: 720, tip: "찜기에서 12분" },
      { name: "새우 삶기", seconds: 180, tip: "끓는 물에 3분" },
      { name: "조개 찜", seconds: 420, tip: "뚜껑 덮고 중불 7분" },
    ],
  },
  {
    id: "rice",
    label: "밥·죽",
    emoji: "🍚",
    items: [
      { name: "쌀밥 (냄비)", seconds: 1200, tip: "센불 5분 → 중불 10분 → 뜸 5분" },
      { name: "현미밥 (냄비)", seconds: 1800, tip: "불린 후 센불 → 약불 30분" },
      { name: "죽", seconds: 1800, tip: "약불에서 30분, 저어가며" },
      { name: "볶음밥", seconds: 300, tip: "센불에서 5분" },
    ],
  },
  {
    id: "meat",
    label: "고기",
    emoji: "🥩",
    items: [
      { name: "삼겹살 구이 (1cm)", seconds: 180, tip: "한 면당 3분" },
      { name: "닭가슴살 구이", seconds: 300, tip: "중불, 한 면당 5분 (2cm 기준)" },
      { name: "스테이크 레어", seconds: 120, tip: "센불, 한 면당 2분" },
      { name: "스테이크 미디엄", seconds: 210, tip: "센불, 한 면당 3분 30초" },
      { name: "스테이크 웰던", seconds: 300, tip: "센불, 한 면당 5분" },
      { name: "수비드 닭가슴살", seconds: 3600, tip: "63°C에서 1시간" },
      { name: "수비드 스테이크", seconds: 7200, tip: "55°C에서 2시간" },
    ],
  },
  {
    id: "bake",
    label: "베이킹",
    emoji: "🧁",
    items: [
      { name: "토스트", seconds: 180, tip: "토스터 3분" },
      { name: "쿠키 (180°C)", seconds: 720, tip: "오븐 12분" },
      { name: "브라우니 (175°C)", seconds: 1500, tip: "오븐 25분" },
      { name: "식빵 (180°C)", seconds: 1800, tip: "오븐 30분" },
      { name: "피자 (230°C)", seconds: 600, tip: "오븐 10분" },
      { name: "에어프라이어 감자튀김", seconds: 900, tip: "180°C, 15분" },
      { name: "에어프라이어 치킨", seconds: 1500, tip: "180°C, 25분 (중간에 뒤집기)" },
    ],
  },
  {
    id: "beverage",
    label: "음료·차",
    emoji: "🍵",
    items: [
      { name: "녹차 우리기", seconds: 60, tip: "70°C, 1분" },
      { name: "홍차 우리기", seconds: 180, tip: "100°C, 3분" },
      { name: "허브차 우리기", seconds: 300, tip: "100°C, 5분" },
      { name: "프렌치프레스", seconds: 240, tip: "뜨거운 물 붓고 4분" },
      { name: "콜드브루 커피", seconds: 43200, tip: "냉장고에서 12시간" },
    ],
  },
];

/* ─── 기본 프리셋 ───────────────────────────────────────────────── */
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
type Tab = "basic" | "cook";

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

function formatDuration(seconds: number): string {
  if (seconds >= 3600) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return m > 0 ? `${h}시간 ${m}분` : `${h}시간`;
  }
  if (seconds >= 60) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return s > 0 ? `${m}분 ${s}초` : `${m}분`;
  }
  return `${seconds}초`;
}

export default function TimerApp() {
  const [tab, setTab] = useState<Tab>("basic");
  const [totalSeconds, setTotalSeconds] = useState(180);
  const [remaining, setRemaining] = useState(180);
  const [status, setStatus] = useState<Status>("idle");
  const [activeCookName, setActiveCookName] = useState<string | null>(null);
  const [selectedCookCat, setSelectedCookCat] = useState("egg");
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const audioRef = useRef<AudioContext | null>(null);

  // Wheel input (hours, minutes, seconds)
  const [wheelH, setWheelH] = useState(0);
  const [wheelM, setWheelM] = useState(3);
  const [wheelS, setWheelS] = useState(0);

  const playAlarm = useCallback(() => {
    try {
      const ctx = audioRef.current || new AudioContext();
      audioRef.current = ctx;
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

  const selectPreset = useCallback((seconds: number, cookName?: string) => {
    setTotalSeconds(seconds);
    setRemaining(seconds);
    setStatus("idle");
    setWheelH(Math.floor(seconds / 3600));
    setWheelM(Math.floor((seconds % 3600) / 60));
    setWheelS(seconds % 60);
    setActiveCookName(cookName ?? null);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  // Sync wheel changes to timer
  const applyWheel = useCallback((h: number, m: number, s: number) => {
    const total = h * 3600 + m * 60 + s;
    if (total > 0) {
      setTotalSeconds(total);
      setRemaining(total);
      setActiveCookName(null);
    }
  }, []);

  const handleWheelH = useCallback((v: number) => { setWheelH(v); applyWheel(v, wheelM, wheelS); }, [wheelM, wheelS, applyWheel]);
  const handleWheelM = useCallback((v: number) => { setWheelM(v); applyWheel(wheelH, v, wheelS); }, [wheelH, wheelS, applyWheel]);
  const handleWheelS = useCallback((v: number) => { setWheelS(v); applyWheel(wheelH, wheelM, v); }, [wheelH, wheelM, applyWheel]);

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
  const isRunningOrDone = status === "running" || status === "done";
  const activeCookCategory = COOK_CATEGORIES.find((c) => c.id === selectedCookCat);

  return (
    <div className="space-y-6">
      {/* Tab Selector */}
      <div className="flex gap-1 rounded-xl border border-gray-200 bg-white p-1 dark:border-gray-800 dark:bg-gray-900">
        {[
          { id: "basic" as Tab, label: "기본 타이머", emoji: "⏱️" },
          { id: "cook" as Tab, label: "요리 타이머", emoji: "🍳" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
              tab === t.id
                ? "bg-utility text-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400"
            }`}
          >
            <span className="mr-1">{t.emoji}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* ─── 기본 타이머 탭 ────────────────────────────────────── */}
      {tab === "basic" && (
        <div className="space-y-4">
          {/* 프리셋 */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">프리셋</p>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.seconds}
                  onClick={() => selectPreset(p.seconds)}
                  disabled={status === "running"}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    totalSeconds === p.seconds && !activeCookName && status !== "running"
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
          </div>

          {/* 휠 시간 설정 */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">시간 설정</p>
            <div className="flex items-center justify-center gap-2">
              <NumberWheel min={0} max={23} value={wheelH} onChange={handleWheelH} label="시" disabled={isRunningOrDone} />
              <span className="mt-5 text-2xl font-bold text-gray-300 dark:text-gray-600">:</span>
              <NumberWheel min={0} max={59} value={wheelM} onChange={handleWheelM} label="분" disabled={isRunningOrDone} />
              <span className="mt-5 text-2xl font-bold text-gray-300 dark:text-gray-600">:</span>
              <NumberWheel min={0} max={59} value={wheelS} onChange={handleWheelS} label="초" disabled={isRunningOrDone} />
            </div>
          </div>
        </div>
      )}

      {/* ─── 요리 타이머 탭 ────────────────────────────────────── */}
      {tab === "cook" && (
        <div className="space-y-4">
          {/* Cook Category Tabs */}
          <div className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
            {COOK_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCookCat(cat.id)}
                disabled={status === "running"}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCookCat === cat.id
                    ? "bg-orange-500 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-400"
                }`}
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cook Items */}
          {activeCookCategory && (
            <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
              {activeCookCategory.items.map((item, idx) => (
                <button
                  key={item.name}
                  onClick={() => selectPreset(item.seconds, item.name)}
                  disabled={status === "running"}
                  className={`flex w-full items-center justify-between px-5 py-3.5 text-left transition-colors disabled:opacity-50 ${
                    idx > 0 ? "border-t border-gray-100 dark:border-gray-800" : ""
                  } ${
                    activeCookName === item.name
                      ? "bg-orange-50 dark:bg-orange-950/30"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <p className={`text-sm font-semibold ${
                      activeCookName === item.name
                        ? "text-orange-600 dark:text-orange-400"
                        : "text-gray-900 dark:text-gray-100"
                    }`}>
                      {item.name}
                    </p>
                    {item.tip && (
                      <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">
                        {item.tip}
                      </p>
                    )}
                  </div>
                  <span className={`ml-3 shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                    activeCookName === item.name
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  }`}>
                    {formatDuration(item.seconds)}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ─── 타이머 디스플레이 (공통) ──────────────────────────── */}
      <div className={`rounded-xl border p-8 text-center sm:p-12 ${
        status === "done"
          ? "animate-pulse border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950"
          : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
      }`}>
        {/* Active Cook Label */}
        {activeCookName && (
          <p className="mb-3 text-sm font-semibold text-orange-500">
            🍳 {activeCookName}
          </p>
        )}

        {/* Progress Ring */}
        <div className="relative mx-auto mb-4 h-48 w-48 sm:h-56 sm:w-56">
          <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
            <circle cx="100" cy="100" r="90" fill="none" stroke="#E5E7EB" strokeWidth="6"
              className="dark:stroke-gray-700" />
            <circle
              cx="100" cy="100" r="90" fill="none"
              stroke={status === "done" ? "#EF4444" : activeCookName ? "#F97316" : "#3B82F6"}
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
              className={`rounded-full px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 ${
                activeCookName ? "bg-orange-500" : "bg-utility"
              }`}
            >
              시작
            </button>
          )}
          {status === "running" && (
            <>
              <button
                onClick={pause}
                className="rounded-full bg-amber-500 px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                일시정지
              </button>
              <button
                onClick={reset}
                className="rounded-full bg-gray-200 px-6 py-3 text-lg font-bold text-gray-600 dark:bg-gray-700 dark:text-gray-300"
              >
                초기화
              </button>
            </>
          )}
          {status === "paused" && (
            <>
              <button
                onClick={resume}
                className={`rounded-full px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 ${
                  activeCookName ? "bg-orange-500" : "bg-utility"
                }`}
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
              className={`rounded-full px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 ${
                activeCookName ? "bg-orange-500" : "bg-utility"
              }`}
            >
              다시 시작
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
