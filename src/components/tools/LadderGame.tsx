"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type Animal =
  | "monkey"
  | "squirrel"
  | "rabbit"
  | "fox"
  | "tiger"
  | "panda";

type Phase = "setup" | "running" | "done";

interface AnimalDef {
  key: Animal;
  emoji: string;
  color: string;
  name: string;
}

interface Player {
  id: string;
  name: string;
  animal: Animal;
  color: string;
}

interface ResultItem {
  id: string;
  text: string;
}

interface Rung {
  col: number; // rung sits between col and col+1
  row: number;
}

interface Ladder {
  cols: number;
  rows: number;
  rungs: Rung[];
}

interface RunnerPath {
  cols: number[]; // column at each row (length = rows + 1)
  escapeAt?: number; // row index where 도망 occurred
  finalCol: number;
}

interface Preset {
  id: string;
  name: string;
  results: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const ANIMALS: AnimalDef[] = [
  { key: "monkey", emoji: "🐵", color: "#FFB94A", name: "원숭이" },
  { key: "squirrel", emoji: "🐿️", color: "#B98C5A", name: "다람쥐" },
  { key: "rabbit", emoji: "🐰", color: "#FF8DB1", name: "토끼" },
  { key: "fox", emoji: "🦊", color: "#FF7A45", name: "여우" },
  { key: "tiger", emoji: "🐯", color: "#FFD23F", name: "호랑이" },
  { key: "panda", emoji: "🐼", color: "#5B7FFF", name: "판다" },
];

const PLAYER_COLORS = [
  "#EF4444",
  "#F59E0B",
  "#10B981",
  "#3B82F6",
  "#8B5CF6",
  "#EC4899",
  "#14B8A6",
  "#F97316",
  "#22C55E",
  "#6366F1",
  "#0EA5E9",
  "#A855F7",
  "#FB7185",
  "#84CC16",
  "#06B6D4",
  "#FACC15",
];

const DEFAULT_RESULTS = ["꽝", "당첨 🎉", "꽝", "보너스 ✨"];

const PRESETS: Preset[] = [
  {
    id: "lunch",
    name: "🍚 점심메뉴",
    results: ["김치찌개", "비빔밥", "라면", "치킨", "피자", "삼겹살"],
  },
  {
    id: "cleaning",
    name: "🧹 청소당번",
    results: ["청소 당첨", "쓰레기 버리기", "설거지", "패스 🎉"],
  },
  {
    id: "pay",
    name: "💸 한턱쏘기",
    results: ["내가 산다 😱", "꽝", "꽝", "꽝"],
  },
  {
    id: "drink",
    name: "☕ 음료내기",
    results: ["아메리카노", "라떼", "녹차", "꽝"],
  },
];

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 20;

// ─────────────────────────────────────────────────────────────────────────────
// Engine (pure functions)
// ─────────────────────────────────────────────────────────────────────────────

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function buildLadder(cols: number): Ladder {
  const rows = Math.max(cols * 3, 14);
  const rungs: Rung[] = [];
  let prevRow: boolean[] = new Array(Math.max(cols - 1, 0)).fill(false);
  for (let r = 0; r < rows; r++) {
    const placed = new Array(Math.max(cols - 1, 0)).fill(false);
    for (let c = 0; c < cols - 1; c++) {
      if (prevRow[c]) continue;
      if (c > 0 && placed[c - 1]) continue;
      if (Math.random() < 0.45) {
        placed[c] = true;
        rungs.push({ col: c, row: r });
      }
    }
    prevRow = placed;
  }
  return { cols, rows, rungs };
}

function hasRung(ladder: Ladder, col: number, row: number): boolean {
  return ladder.rungs.some((r) => r.row === row && r.col === col);
}

function tracePath(ladder: Ladder, startCol: number): number[] {
  const path: number[] = [startCol];
  let col = startCol;
  for (let r = 0; r < ladder.rows; r++) {
    if (col > 0 && hasRung(ladder, col - 1, r)) col -= 1;
    else if (col < ladder.cols - 1 && hasRung(ladder, col, r)) col += 1;
    path.push(col);
  }
  return path;
}

function buildRunnerPath(
  ladder: Ladder,
  startCol: number,
  enableEscape: boolean
): RunnerPath {
  const base = tracePath(ladder, startCol);
  if (enableEscape && ladder.rows >= 6 && Math.random() < 0.28) {
    const escapeAt = 2 + Math.floor(Math.random() * (ladder.rows - 4));
    const here = base[escapeAt];
    let dir: -1 | 1;
    if (here === 0) dir = 1;
    else if (here === ladder.cols - 1) dir = -1;
    else dir = Math.random() < 0.5 ? -1 : 1;
    const newCol = here + dir;
    const cols = base.slice(0, escapeAt + 1);
    cols.push(newCol);
    let col = newCol;
    for (let r = escapeAt + 1; r < ladder.rows; r++) {
      if (col > 0 && hasRung(ladder, col - 1, r)) col -= 1;
      else if (col < ladder.cols - 1 && hasRung(ladder, col, r)) col += 1;
      cols.push(col);
    }
    return { cols, escapeAt, finalCol: cols[cols.length - 1] };
  }
  return { cols: base, finalCol: base[base.length - 1] };
}

function shuffle<T>(arr: T[]): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component (build: 2026-05-01-v2)
// ─────────────────────────────────────────────────────────────────────────────

const COL_W_DESKTOP = 96;
const COL_W_MOBILE = 60;
const ROW_H = 38;
const TOP_PAD = 92;
const BOT_PAD = 92;

export default function LadderGame() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // setup state
  const [players, setPlayers] = useState<Player[]>(() =>
    Array.from({ length: 4 }, (_, i) => ({
      id: uid(),
      name: `참가자 ${i + 1}`,
      animal: ANIMALS[i % ANIMALS.length].key,
      color: PLAYER_COLORS[i % PLAYER_COLORS.length],
    }))
  );
  const [results, setResults] = useState<ResultItem[]>(() =>
    DEFAULT_RESULTS.map((text) => ({ id: uid(), text }))
  );
  const [enableEscape, setEnableEscape] = useState(false);
  const [autoShuffle, setAutoShuffle] = useState(true);
  const [speed, setSpeed] = useState(1); // 0.3x ~ 3x
  const [allowDuplicateAnimals, setAllowDuplicateAnimals] = useState(true);
  const [bulkNamesOpen, setBulkNamesOpen] = useState(false);
  const [bulkNamesText, setBulkNamesText] = useState("");
  const [bulkResultsOpen, setBulkResultsOpen] = useState(false);
  const [bulkResultsText, setBulkResultsText] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // game state
  const [phase, setPhase] = useState<Phase>("setup");
  const [ladder, setLadder] = useState<Ladder | null>(null);
  const [runnerPaths, setRunnerPaths] = useState<RunnerPath[] | null>(null);
  const [shuffledResults, setShuffledResults] = useState<ResultItem[] | null>(
    null
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [escapeBubbles, setEscapeBubbles] = useState<
    { id: string; col: number; row: number }[]
  >([]);
  const [confetti, setConfetti] = useState(false);

  // ── responsive col width / mobile detection
  const [boardScale, setBoardScale] = useState(1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  // 인원이 많아지면 컬럼 너비를 줄여 보드가 화면에서 너무 작게 스케일되는 걸 완화
  const dense = players.length > 12;
  const colW = isMobile
    ? dense
      ? 48
      : COL_W_MOBILE
    : dense
      ? 76
      : COL_W_DESKTOP;
  useEffect(() => {
    if (!mounted) return;
    const onWinResize = () => setIsMobile(window.innerWidth < 640);
    onWinResize();
    window.addEventListener("resize", onWinResize);
    return () => window.removeEventListener("resize", onWinResize);
  }, [mounted]);
  useEffect(() => {
    if (!mounted) return;
    const el = containerRef.current;
    if (!el) return;
    const onResize = () => {
      const wrap = el.getBoundingClientRect();
      const minW = players.length * colW + 24;
      const scale = Math.min(1, (wrap.width - 8) / minW);
      setBoardScale(Number.isFinite(scale) && scale > 0 ? scale : 1);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mounted, players.length, phase, colW]);

  // ── reduced motion detection
  useEffect(() => {
    if (!mounted) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mounted]);

  // ── 게임 시작 시 보드를 화면 상단으로 스크롤 (scroll-margin-top으로 16px 여백)
  const scrollBoardIntoView = () => {
    const tryScroll = () => {
      const el = containerRef.current;
      if (!el || el.getBoundingClientRect().height < 50) return;
      el.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
        inline: "nearest",
      });
    };
    // setup unmount → running mount 후 레이아웃 안정 시점이 가변적이라 다단계 시도
    requestAnimationFrame(() => requestAnimationFrame(tryScroll));
    setTimeout(tryScroll, 120);
    setTimeout(tryScroll, 320);
  };

  // ── 모바일: 게임 진행 중 현재 row가 화면 안에 보이도록 자동 스크롤
  const lastFollowRowRef = useRef(-99);
  useEffect(() => {
    if (!mounted) return;
    if (!isMobile || phase !== "running" || !ladder || reducedMotion) return;
    // 너무 잦은 스크롤 방지 — 2 row 단위로만 보정
    if (Math.abs(currentRow - lastFollowRowRef.current) < 2) return;
    lastFollowRowRef.current = currentRow;
    const wrap = containerRef.current;
    if (!wrap) return;
    const board = wrap.querySelector<HTMLDivElement>("[data-lg-board]");
    if (!board) return;
    const boardRect = board.getBoundingClientRect();
    const safeRow = Math.min(currentRow, ladder.rows);
    const runnerLocalY = TOP_PAD + safeRow * ROW_H + 14;
    const runnerViewportY = boardRect.top + runnerLocalY * boardScale;
    const targetY = window.innerHeight * 0.45; // 화면 살짝 위쪽
    const delta = runnerViewportY - targetY;
    if (Math.abs(delta) < 40) return;
    window.scrollBy({ top: delta, behavior: "smooth" });
  }, [
    currentRow,
    phase,
    isMobile,
    ladder,
    boardScale,
    mounted,
    reducedMotion,
  ]);

  // ── keep results length synced when player count changes
  useEffect(() => {
    setResults((prev) => {
      if (prev.length === players.length) return prev;
      if (prev.length < players.length) {
        const add = Array.from(
          { length: players.length - prev.length },
          () => ({ id: uid(), text: "꽝" })
        );
        return [...prev, ...add];
      }
      return prev.slice(0, players.length);
    });
  }, [players.length]);

  // ── animation loop
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  useEffect(() => {
    if (phase !== "running" || !ladder) return;
    const stepDuration = reducedMotion ? 60 : Math.max(40, 220 / speed);
    startTimeRef.current = performance.now();
    const totalRows = ladder.rows;

    const tick = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const row = Math.min(totalRows, Math.floor(elapsed / stepDuration));
      setCurrentRow(row);
      if (row >= totalRows) {
        setPhase("done");
        setConfetti(true);
        setTimeout(() => setConfetti(false), 2200);
        rafRef.current = null;
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [phase, ladder, speed, reducedMotion]);

  // ── escape bubble triggers
  useEffect(() => {
    if (!runnerPaths || !ladder) return;
    runnerPaths.forEach((rp, idx) => {
      if (rp.escapeAt !== undefined && currentRow === rp.escapeAt + 1) {
        const bubbleId = uid();
        setEscapeBubbles((prev) => [
          ...prev,
          { id: bubbleId, col: idx, row: rp.escapeAt! },
        ]);
        setTimeout(() => {
          setEscapeBubbles((prev) => prev.filter((b) => b.id !== bubbleId));
        }, 900);
      }
    });
    // we intentionally only react to currentRow advance
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRow]);

  // ── actions
  const addPlayer = () => {
    if (players.length >= MAX_PLAYERS) return;
    const i = players.length;
    setPlayers([
      ...players,
      {
        id: uid(),
        name: `참가자 ${i + 1}`,
        animal: ANIMALS[i % ANIMALS.length].key,
        color: PLAYER_COLORS[i % PLAYER_COLORS.length],
      },
    ]);
  };

  const removePlayer = (id: string) => {
    if (players.length <= MIN_PLAYERS) return;
    setPlayers(players.filter((p) => p.id !== id));
  };

  const setPlayerCount = (count: number) => {
    const target = Math.min(Math.max(count, MIN_PLAYERS), MAX_PLAYERS);
    setPlayers((prev) => {
      if (prev.length === target) return prev;
      if (prev.length < target) {
        const out = [...prev];
        for (let i = prev.length; i < target; i++) {
          out.push({
            id: uid(),
            name: `참가자 ${i + 1}`,
            animal: ANIMALS[i % ANIMALS.length].key,
            color: PLAYER_COLORS[i % PLAYER_COLORS.length],
          });
        }
        return out;
      }
      return prev.slice(0, target);
    });
  };

  const updatePlayer = (id: string, patch: Partial<Player>) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...patch } : p))
    );
  };

  const updateResult = (id: string, text: string) => {
    setResults((prev) =>
      prev.map((r) => (r.id === id ? { ...r, text } : r))
    );
  };

  const applyPreset = (preset: Preset) => {
    const targetCount = Math.min(
      Math.max(preset.results.length, MIN_PLAYERS),
      MAX_PLAYERS
    );
    setPlayers((prev) => {
      const base = prev.slice(0, targetCount);
      while (base.length < targetCount) {
        const i = base.length;
        base.push({
          id: uid(),
          name: `참가자 ${i + 1}`,
          animal: ANIMALS[i % ANIMALS.length].key,
          color: PLAYER_COLORS[i % PLAYER_COLORS.length],
        });
      }
      return base;
    });
    setResults(
      Array.from({ length: targetCount }, (_, i) => ({
        id: uid(),
        text: preset.results[i % preset.results.length],
      }))
    );
  };

  // 꽝 1명 + 나머지는 당첨 — 한턱쏘기·내기 시나리오 기본값
  const fillBlankWin = () => {
    setResults((prev) =>
      prev.map((r, i) => ({
        ...r,
        text: i === 0 ? "꽝" : "당첨 🎉",
      }))
    );
  };

  function parseBulkLines(raw: string): string[] {
    return raw
      .split(/[\n,]+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }

  const applyBulkNames = () => {
    const names = parseBulkLines(bulkNamesText);
    if (names.length === 0) return;
    const count = Math.min(Math.max(names.length, MIN_PLAYERS), MAX_PLAYERS);
    setPlayers((prev) => {
      const out: Player[] = [];
      for (let i = 0; i < count; i++) {
        const name = names[i] ?? `참가자 ${i + 1}`;
        const ex = prev[i];
        out.push(
          ex
            ? { ...ex, name }
            : {
                id: uid(),
                name,
                animal: ANIMALS[i % ANIMALS.length].key,
                color: PLAYER_COLORS[i % PLAYER_COLORS.length],
              }
        );
      }
      return out;
    });
    setBulkNamesOpen(false);
    setBulkNamesText("");
  };

  const applyBulkResults = () => {
    const items = parseBulkLines(bulkResultsText);
    if (items.length === 0) return;
    const count = Math.min(Math.max(items.length, MIN_PLAYERS), MAX_PLAYERS);
    setResults(
      Array.from({ length: count }, (_, i) => ({
        id: uid(),
        text: items[i] ?? "꽝",
      }))
    );
    // sync players to count too
    setPlayers((prev) => {
      if (prev.length === count) return prev;
      if (prev.length < count) {
        const add: Player[] = [];
        for (let i = prev.length; i < count; i++) {
          add.push({
            id: uid(),
            name: `참가자 ${i + 1}`,
            animal: ANIMALS[i % ANIMALS.length].key,
            color: PLAYER_COLORS[i % PLAYER_COLORS.length],
          });
        }
        return [...prev, ...add];
      }
      return prev.slice(0, count);
    });
    setBulkResultsOpen(false);
    setBulkResultsText("");
  };

  const startGame = () => {
    const finalResults = autoShuffle ? shuffle(results) : results;
    setShuffledResults(finalResults);
    const lad = buildLadder(players.length);
    setLadder(lad);
    const paths = players.map((_, i) =>
      buildRunnerPath(lad, i, enableEscape)
    );
    setRunnerPaths(paths);
    setEscapeBubbles([]);
    setCurrentRow(0);
    setPhase("running");
    scrollBoardIntoView();
  };

  const resetToSetup = () => {
    setPhase("setup");
    setLadder(null);
    setRunnerPaths(null);
    setShuffledResults(null);
    setCurrentRow(0);
    setEscapeBubbles([]);
    setConfetti(false);
  };

  const replay = () => {
    const lad = buildLadder(players.length);
    setLadder(lad);
    setShuffledResults(autoShuffle ? shuffle(results) : results);
    const paths = players.map((_, i) =>
      buildRunnerPath(lad, i, enableEscape)
    );
    setRunnerPaths(paths);
    setEscapeBubbles([]);
    setCurrentRow(0);
    setPhase("running");
    setConfetti(false);
    scrollBoardIntoView();
  };

  const skipToEnd = () => {
    if (!ladder) return;
    setCurrentRow(ladder.rows);
    setPhase("done");
    setConfetti(true);
    setTimeout(() => setConfetti(false), 2200);
  };

  // ── derived
  const cols = players.length;
  const boardWidth = cols * colW;
  const boardHeight = ladder ? ladder.rows * ROW_H + TOP_PAD + BOT_PAD : 0;

  // ─────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────

  if (!mounted) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          🎲 사다리게임 준비 중...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* ── Setup phase ──────────────────────────────────────────────── */}
      {phase === "setup" && (
        <div className="space-y-5">
          {/* Presets */}
          <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-fuchsia-50 p-4 dark:border-violet-900/40 dark:from-violet-950/30 dark:to-fuchsia-950/30">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                🎲 빠른 시작
              </h3>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                자주 쓰는 시나리오
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => applyPreset(p)}
                  className="rounded-full border border-violet-200 bg-white px-3 py-1.5 text-xs font-medium text-violet-700 transition hover:bg-violet-100 dark:border-violet-800 dark:bg-gray-900 dark:text-violet-300 dark:hover:bg-violet-900/40"
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Players */}
          <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                👥 참가자 ({players.length}명)
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setBulkNamesOpen((v) => !v)}
                  className="rounded-md border border-violet-300 bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700 transition hover:bg-violet-100 dark:border-violet-700 dark:bg-violet-950/30 dark:text-violet-300"
                >
                  📋 이름 일괄 입력
                </button>
                <button
                  onClick={() => removePlayer(players[players.length - 1].id)}
                  disabled={players.length <= MIN_PLAYERS}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                  aria-label="참가자 제거"
                >
                  −
                </button>
                <button
                  onClick={addPlayer}
                  disabled={players.length >= MAX_PLAYERS}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                  style={{ backgroundColor: "#8B5CF6" }}
                  aria-label="참가자 추가"
                >
                  +
                </button>
              </div>
            </div>
            {/* 빠른 인원 설정 */}
            <div className="mb-3 flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-gray-500 dark:text-gray-400">빠른 설정:</span>
              {[2, 4, 6, 8, 10, 12, 16, 20].map((n) => (
                <button
                  key={n}
                  onClick={() => setPlayerCount(n)}
                  className={
                    "rounded-md border px-2 py-0.5 text-xs font-medium transition " +
                    (players.length === n
                      ? "border-violet-500 bg-violet-500 text-white"
                      : "border-gray-200 bg-white text-gray-600 hover:border-violet-300 hover:text-violet-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300")
                  }
                >
                  {n}명
                </button>
              ))}
            </div>
            {bulkNamesOpen && (
              <div className="mb-3 rounded-lg border border-violet-200 bg-violet-50 p-3 dark:border-violet-900/40 dark:bg-violet-950/20">
                <p className="mb-2 text-xs text-violet-800 dark:text-violet-300">
                  쉼표(,) 또는 줄바꿈으로 구분해 한 번에 입력하세요. 예: <em>철수, 영희, 민수</em>
                </p>
                <textarea
                  value={bulkNamesText}
                  onChange={(e) => setBulkNamesText(e.target.value)}
                  placeholder={"철수\n영희\n민수\n지영"}
                  rows={3}
                  className="w-full rounded-md border border-violet-200 bg-white p-2 text-sm text-gray-900 outline-none focus:border-violet-400 dark:border-violet-800 dark:bg-gray-900 dark:text-gray-100"
                />
                <div className="mt-2 flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setBulkNamesOpen(false);
                      setBulkNamesText("");
                    }}
                    className="rounded-md border border-gray-300 bg-white px-3 py-1 text-xs text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                  >
                    취소
                  </button>
                  <button
                    onClick={applyBulkNames}
                    className="rounded-md bg-violet-600 px-3 py-1 text-xs font-semibold text-white hover:bg-violet-700"
                  >
                    적용
                  </button>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {players.map((p, idx) => (
                <div
                  key={p.id}
                  className="flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 p-2 dark:border-gray-800 dark:bg-gray-800/40"
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xl"
                    style={{
                      background: `linear-gradient(135deg, ${p.color}33, ${p.color}66)`,
                    }}
                  >
                    {ANIMALS.find((a) => a.key === p.animal)?.emoji}
                  </div>
                  <input
                    type="text"
                    value={p.name}
                    maxLength={12}
                    onChange={(e) => updatePlayer(p.id, { name: e.target.value })}
                    className="min-w-0 flex-1 rounded-md bg-transparent px-1 py-1 text-sm text-gray-900 outline-none focus:bg-white dark:text-gray-100 dark:focus:bg-gray-900"
                    aria-label={`참가자 ${idx + 1} 이름`}
                  />
                  <select
                    value={p.animal}
                    onChange={(e) =>
                      updatePlayer(p.id, { animal: e.target.value as Animal })
                    }
                    className="shrink-0 rounded-md border border-gray-200 bg-white px-1.5 py-1 text-xs dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
                    aria-label={`참가자 ${idx + 1} 동물 선택`}
                  >
                    {ANIMALS.map((a) => (
                      <option key={a.key} value={a.key}>
                        {a.emoji} {a.name}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            {!allowDuplicateAnimals && (
              <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">
                ⚠ 중복 허용 OFF — 동물이 겹치지 않게 직접 골라주세요.
              </p>
            )}
          </div>

          {/* Results */}
          <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                🎯 결과 ({results.length}개)
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setBulkResultsOpen((v) => !v)}
                  className="rounded-md border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800 transition hover:bg-amber-100 dark:border-amber-700 dark:bg-amber-950/30 dark:text-amber-300"
                >
                  🎁 상품 일괄 입력
                </button>
                <button
                  onClick={fillBlankWin}
                  className="rounded-md border border-gray-200 px-2.5 py-1 text-xs text-gray-600 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  꽝 1명·나머지 당첨
                </button>
              </div>
            </div>
            {bulkResultsOpen && (
              <div className="mb-3 rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900/40 dark:bg-amber-950/20">
                <p className="mb-2 text-xs text-amber-800 dark:text-amber-300">
                  쉼표(,) 또는 줄바꿈으로 상품·결과를 한 번에 입력하세요. 입력 개수만큼 참가자 수도 자동 동기화됩니다.
                </p>
                <textarea
                  value={bulkResultsText}
                  onChange={(e) => setBulkResultsText(e.target.value)}
                  placeholder={"치킨\n피자\n커피\n꽝"}
                  rows={3}
                  className="w-full rounded-md border border-amber-200 bg-white p-2 text-sm text-gray-900 outline-none focus:border-amber-400 dark:border-amber-800 dark:bg-gray-900 dark:text-gray-100"
                />
                <div className="mt-2 flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setBulkResultsOpen(false);
                      setBulkResultsText("");
                    }}
                    className="rounded-md border border-gray-300 bg-white px-3 py-1 text-xs text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                  >
                    취소
                  </button>
                  <button
                    onClick={applyBulkResults}
                    className="rounded-md bg-amber-600 px-3 py-1 text-xs font-semibold text-white hover:bg-amber-700"
                  >
                    적용
                  </button>
                </div>
              </div>
            )}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {results.map((r, i) => (
                <div
                  key={r.id}
                  className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2 dark:border-gray-800 dark:bg-gray-800/40"
                >
                  <span className="shrink-0 text-xs font-semibold text-gray-400">
                    {i + 1}
                  </span>
                  <input
                    type="text"
                    value={r.text}
                    maxLength={20}
                    onChange={(e) => updateResult(r.id, e.target.value)}
                    className="min-w-0 flex-1 rounded-md bg-transparent px-1 py-1 text-sm text-gray-900 outline-none focus:bg-white dark:text-gray-100 dark:focus:bg-gray-900"
                    aria-label={`결과 ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Options */}
          <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-3 text-sm font-bold text-gray-900 dark:text-gray-100">
              ⚙ 옵션
            </h3>

            {/* Speed slider */}
            <div className="mb-3 rounded-lg border border-gray-100 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/40">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  ⚡ 애니메이션 속도
                </span>
                <span className="rounded-md bg-violet-600 px-2 py-0.5 text-xs font-bold text-white">
                  {speed.toFixed(1)}x
                </span>
              </div>
              <input
                type="range"
                min={0.3}
                max={3}
                step={0.1}
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full accent-violet-500"
                aria-label="애니메이션 속도 조절"
              />
              <div className="mt-1 flex justify-between text-[10px] text-gray-500 dark:text-gray-400">
                <span>🐢 0.3x</span>
                <span>1x</span>
                <span>🚀 3x</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Toggle
                checked={enableEscape}
                onChange={setEnableEscape}
                label="🏃 도망 이벤트 (선택)"
                hint="켜면 28% 확률로 가다가 옆 줄로 점프"
              />
              <Toggle
                checked={autoShuffle}
                onChange={setAutoShuffle}
                label="🔀 결과 자동 섞기"
                hint="시작할 때마다 결과 위치 무작위"
              />
              <Toggle
                checked={allowDuplicateAnimals}
                onChange={setAllowDuplicateAnimals}
                label="🐾 동물 중복 허용"
                hint="같은 동물이 여러 명 가능"
              />
            </div>
          </div>

          {/* CTA — sticky on mobile for thumb-reach */}
          <div className="sticky bottom-2 z-30 -mx-1 px-1 sm:static sm:mx-0 sm:px-0">
            <button
              onClick={startGame}
              className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 p-4 text-base font-extrabold text-white shadow-xl transition hover:shadow-2xl active:scale-[0.99] sm:p-5 sm:text-lg"
            >
              <span className="relative z-10">▶ 게임 시작!</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </div>
        </div>
      )}

      {/* ── Board (running / done) ──────────────────────────────────────── */}
      {(phase === "running" || phase === "done") && ladder && runnerPaths && shuffledResults && (
        <div ref={containerRef} className="space-y-4 scroll-mt-4">
          {/* Status bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-gradient-to-r from-violet-100 to-fuchsia-100 px-3 py-2 dark:from-violet-950/40 dark:to-fuchsia-950/40 sm:px-4">
            <span className="text-sm font-bold text-gray-800 dark:text-gray-100">
              {phase === "running" ? "🎲 사다리 내려가는 중..." : "🏁 결과 발표!"}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {phase === "running" && (
                <button
                  onClick={skipToEnd}
                  className="rounded-md border border-violet-300 bg-white px-2.5 py-1 text-xs font-medium text-violet-700 hover:bg-violet-50 dark:border-violet-700 dark:bg-gray-900 dark:text-violet-300"
                >
                  ⏭ 건너뛰기
                </button>
              )}
              {phase === "done" && (
                <>
                  <button
                    onClick={replay}
                    className="rounded-md bg-violet-600 px-2.5 py-1 text-xs font-medium text-white hover:bg-violet-700"
                  >
                    🔁 다시
                  </button>
                  <button
                    onClick={resetToSetup}
                    className="rounded-md border border-gray-300 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
                  >
                    ⚙ 설정
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Inline speed slider while running (적용은 다음 게임부터) */}
          {phase === "running" && (
            <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-3 py-2 dark:border-gray-800 dark:bg-gray-900">
              <span className="shrink-0 text-xs font-semibold text-gray-700 dark:text-gray-300">
                ⚡ 속도
              </span>
              <input
                type="range"
                min={0.3}
                max={3}
                step={0.1}
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="flex-1 accent-violet-500"
                aria-label="실행 중 속도 조절"
              />
              <span className="w-10 shrink-0 text-right text-xs font-bold text-violet-600 dark:text-violet-300">
                {speed.toFixed(1)}x
              </span>
            </div>
          )}

          {/* Board — 정면 뷰 (3D 회전 제거, depth는 발판/러너 translateZ로 표현) */}
          <div className="relative overflow-x-auto">
            <div
              data-lg-board
              className="relative mx-auto"
              style={{
                width: boardWidth,
                height: boardHeight,
                transformStyle: "preserve-3d",
                transform: `scale(${boardScale})`,
                transformOrigin: "top center",
                transition: "transform 0.3s ease",
              }}
            >
              {/* Background board */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(160deg, #eef2ff 0%, #fdf4ff 50%, #fff1f2 100%)",
                  boxShadow:
                    "0 30px 60px -20px rgba(139, 92, 246, 0.35), 0 0 0 1px rgba(139, 92, 246, 0.08)",
                  transform: "translateZ(-10px)",
                }}
              />
              {/* Top slots (animals) */}
              <div
                className="absolute left-0 top-0 right-0"
                style={{ height: TOP_PAD }}
              >
                {players.map((p, i) => {
                  const animal = ANIMALS.find((a) => a.key === p.animal);
                  if (!animal) return null;
                  const left = Number.isFinite(i * colW) ? i * colW : 0;
                  return (
                    <div
                      key={p.id}
                      className="absolute flex flex-col items-center"
                      style={{
                        left,
                        width: colW,
                        top: 6,
                      }}
                    >
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl text-3xl shadow-md sm:h-14 sm:w-14 sm:text-4xl"
                        style={{
                          background: `linear-gradient(135deg, ${animal.color}, ${p.color})`,
                          boxShadow: `0 4px 14px -2px ${p.color}66, inset 0 -2px 4px rgba(0,0,0,0.1)`,
                          transform: "translateZ(8px)",
                        }}
                      >
                        {animal.emoji}
                      </div>
                      <span
                        className="mt-1 max-w-full truncate px-1 text-[10px] font-bold text-gray-700 dark:text-gray-200"
                        style={{ width: colW - 4 }}
                      >
                        {p.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Vertical pillars */}
              {Array.from({ length: cols }, (_, c) => {
                const left = c * colW + colW / 2 - 3;
                if (!Number.isFinite(left)) return null;
                return (
                <div
                  key={`pillar-${c}`}
                  className="absolute"
                  style={{
                    left,
                    top: TOP_PAD,
                    width: 6,
                    height: ladder.rows * ROW_H,
                    background:
                      "linear-gradient(90deg, rgba(139,92,246,0.4), rgba(236,72,153,0.55), rgba(139,92,246,0.4))",
                    borderRadius: 3,
                    boxShadow:
                      "0 0 12px rgba(236, 72, 153, 0.45), inset 0 0 4px rgba(255,255,255,0.5)",
                    transform: "translateZ(4px)",
                  }}
                />
                );
              })}

              {/* Horizontal rungs */}
              {ladder.rungs.map((rung, idx) => {
                const left = rung.col * colW + colW / 2;
                if (!Number.isFinite(left)) return null;
                const top = TOP_PAD + rung.row * ROW_H + ROW_H / 2 - 3;
                const hue = (idx * 47) % 360;
                return (
                  <div
                    key={`rung-${idx}`}
                    className="absolute"
                    style={{
                      left,
                      top,
                      width: colW,
                      height: 6,
                      background: `linear-gradient(90deg, hsl(${hue},85%,65%), hsl(${(hue + 40) % 360},90%,70%))`,
                      borderRadius: 3,
                      boxShadow: `0 2px 8px hsla(${hue},85%,55%,0.55)`,
                      transform: "translateZ(6px)",
                    }}
                  />
                );
              })}

              {/* Runners */}
              {runnerPaths.map((rp, i) => {
                const player = players[i];
                if (!player || !rp || !rp.cols || rp.cols.length === 0) return null;
                const animal = ANIMALS.find((a) => a.key === player.animal);
                if (!animal) return null;
                const safeRow = Math.max(
                  0,
                  Math.min(currentRow, rp.cols.length - 1)
                );
                const colIdx = rp.cols[safeRow];
                if (typeof colIdx !== "number" || Number.isNaN(colIdx)) return null;
                const left = colIdx * colW + colW / 2 - 18;
                const top = TOP_PAD + safeRow * ROW_H - 14;
                const isEscaping =
                  rp.escapeAt !== undefined && safeRow === rp.escapeAt + 1;
                return (
                  <div
                    key={`runner-${player.id}`}
                    className="absolute flex h-9 w-9 items-center justify-center rounded-full text-2xl"
                    style={{
                      left,
                      top,
                      background: `radial-gradient(circle, white, ${player.color}55)`,
                      boxShadow: `0 0 0 2px ${player.color}, 0 6px 16px ${player.color}88`,
                      transform: `translateZ(14px) ${isEscaping ? "scale(1.25) rotate(-12deg)" : "scale(1)"}`,
                      transition: reducedMotion
                        ? "left 0.12s linear, top 0.12s linear"
                        : "left 0.22s cubic-bezier(.5,1.6,.4,1), top 0.22s linear, transform 0.18s",
                      zIndex: 20 + i,
                    }}
                  >
                    {animal.emoji}
                  </div>
                );
              })}

              {/* Escape bubbles */}
              {escapeBubbles.map((b) => {
                const left = b.col * colW + colW / 2 - 22;
                const top = TOP_PAD + b.row * ROW_H - 30;
                if (!Number.isFinite(left) || !Number.isFinite(top)) return null;
                return (
                <div
                  key={b.id}
                  className="pointer-events-none absolute animate-bounce text-xs font-extrabold"
                  style={{
                    left,
                    top,
                    color: "#ef4444",
                    background: "white",
                    border: "2px solid #ef4444",
                    borderRadius: 12,
                    padding: "2px 8px",
                    boxShadow: "0 4px 12px rgba(239,68,68,0.35)",
                    transform: "translateZ(20px)",
                    zIndex: 50,
                  }}
                >
                  도망! 💨
                </div>
                );
              })}

              {/* Bottom slots (results) */}
              <div
                className="absolute left-0 right-0"
                style={{
                  top: TOP_PAD + ladder.rows * ROW_H + 6,
                  height: BOT_PAD,
                }}
              >
                {shuffledResults.map((r, i) => {
                  const isWinningSlot =
                    phase === "done" &&
                    runnerPaths.some((rp) => rp.finalCol === i);
                  const left = Number.isFinite(i * colW) ? i * colW : 0;
                  return (
                    <div
                      key={r.id}
                      className="absolute flex flex-col items-center"
                      style={{
                        left,
                        width: colW,
                        top: 0,
                      }}
                    >
                      <div
                        className={
                          "flex min-h-[44px] items-center justify-center rounded-xl border-2 px-2 py-1.5 text-center text-xs font-bold leading-tight sm:text-sm " +
                          (isWinningSlot
                            ? "animate-pulse border-amber-400 bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200"
                            : "border-violet-300 bg-white text-gray-700 dark:border-violet-700 dark:bg-gray-900 dark:text-gray-200")
                        }
                        style={{
                          width: colW - 8,
                          boxShadow: isWinningSlot
                            ? "0 0 26px rgba(251, 191, 36, 0.85)"
                            : "0 4px 12px rgba(139, 92, 246, 0.2)",
                        }}
                      >
                        {r.text || "—"}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Confetti overlay */}
            {confetti && !reducedMotion && (
              <Confetti />
            )}
          </div>

          {/* Result mapping */}
          {phase === "done" && (
            <div
              aria-live="polite"
              className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-4 dark:border-amber-900/40 dark:from-amber-950/30 dark:to-orange-950/30"
            >
              <h3 className="mb-3 text-sm font-bold text-amber-900 dark:text-amber-200">
                🏆 결과 발표
              </h3>
              <div className="space-y-2">
                {players.map((p, i) => {
                  const animal = ANIMALS.find((a) => a.key === p.animal);
                  const rp = runnerPaths[i];
                  if (!animal || !rp) return null;
                  const finalCol = rp.finalCol;
                  const result = shuffledResults[finalCol];
                  const escaped = rp.escapeAt !== undefined;
                  return (
                    <div
                      key={p.id}
                      className="flex items-center gap-3 rounded-xl border border-amber-100 bg-white p-3 dark:border-amber-900/40 dark:bg-gray-900"
                    >
                      <span className="text-2xl">{animal.emoji}</span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="truncate text-sm font-semibold text-gray-900 dark:text-gray-100">
                            {p.name}
                          </span>
                          {escaped && (
                            <span className="rounded-full bg-red-100 px-1.5 text-[10px] font-bold text-red-600 dark:bg-red-900/40 dark:text-red-300">
                              도망함
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-lg">→</span>
                      <span
                        className="rounded-lg bg-amber-100 px-3 py-1 text-sm font-bold text-amber-900 dark:bg-amber-900/40 dark:text-amber-200"
                      >
                        {result?.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function Toggle({
  checked,
  onChange,
  label,
  hint,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  hint?: string;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2 transition hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-800/40 dark:hover:bg-gray-800">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 accent-violet-500"
      />
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
          {label}
        </span>
        {hint && (
          <span className="block text-[11px] text-gray-500 dark:text-gray-400">
            {hint}
          </span>
        )}
      </span>
    </label>
  );
}

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 60 }, () => ({
        id: uid(),
        left: Math.random() * 100,
        delay: Math.random() * 0.4,
        duration: 1.4 + Math.random() * 0.8,
        rotate: Math.random() * 360,
        color: PLAYER_COLORS[Math.floor(Math.random() * PLAYER_COLORS.length)],
        size: 6 + Math.random() * 6,
      })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: -16,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: 2,
            transform: `rotate(${p.rotate}deg)`,
            animation: `lg-fall ${p.duration}s cubic-bezier(.4,0,.4,1) ${p.delay}s forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes lg-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(560px) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
