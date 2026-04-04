import { lottoHistory, type LottoDraw } from "@/data/lotto-data";

export type RecommendMode = "random" | "cold" | "hot" | "balanced";

export interface LottoRecommendation {
  numbers: number[];
  bonus: number;
  mode: RecommendMode;
}

export interface NumberFrequency {
  number: number;
  count: number;
}

// ─── Analysis ──────────────────────────────────────────────────────

/** Count appearances of each number 1-45 across all draws */
export function getNumberFrequencies(draws: LottoDraw[] = lottoHistory): NumberFrequency[] {
  const freq = new Map<number, number>();
  for (let i = 1; i <= 45; i++) freq.set(i, 0);
  for (const draw of draws) {
    for (const n of draw.numbers) {
      freq.set(n, (freq.get(n) || 0) + 1);
    }
  }
  return Array.from(freq.entries()).map(([number, count]) => ({ number, count }));
}

/** Most frequently drawn numbers */
export function getHotNumbers(topN = 10): NumberFrequency[] {
  return getNumberFrequencies()
    .sort((a, b) => b.count - a.count)
    .slice(0, topN);
}

/** Least frequently drawn numbers */
export function getColdNumbers(topN = 10): NumberFrequency[] {
  return getNumberFrequencies()
    .sort((a, b) => a.count - b.count)
    .slice(0, topN);
}

/** Numbers that have NOT appeared in the last N draws */
export function getAbsentNumbers(lastN = 10): number[] {
  const recent = lottoHistory.slice(0, lastN);
  const appeared = new Set<number>();
  for (const draw of recent) {
    for (const n of draw.numbers) appeared.add(n);
  }
  const absent: number[] = [];
  for (let i = 1; i <= 45; i++) {
    if (!appeared.has(i)) absent.push(i);
  }
  return absent;
}

/** For each number 1-45, count how many draws since it last appeared */
export function getDrawsSinceLastAppearance(): Map<number, number> {
  const result = new Map<number, number>();
  for (let n = 1; n <= 45; n++) {
    let found = -1;
    for (let i = 0; i < lottoHistory.length; i++) {
      if (lottoHistory[i].numbers.includes(n)) {
        found = i;
        break;
      }
    }
    result.set(n, found === -1 ? lottoHistory.length : found);
  }
  return result;
}

// ─── Helpers ───────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom(pool: number[], count: number): number[] {
  return shuffle(pool).slice(0, count);
}

function makeBonusFromRemaining(picked: number[]): number {
  const remaining = Array.from({ length: 45 }, (_, i) => i + 1).filter((n) => !picked.includes(n));
  return remaining[Math.floor(Math.random() * remaining.length)];
}

// ─── Recommendation ────────────────────────────────────────────────

function recommendRandom(): LottoRecommendation {
  const pool = Array.from({ length: 45 }, (_, i) => i + 1);
  const shuffled = shuffle(pool);
  const numbers = shuffled.slice(0, 6).sort((a, b) => a - b);
  const bonus = shuffled[6];
  return { numbers, bonus, mode: "random" };
}

function recommendCold(): LottoRecommendation {
  const absent = getAbsentNumbers(10);
  let picked: number[];

  if (absent.length >= 6) {
    picked = pickRandom(absent, 6);
  } else {
    picked = [...absent];
    const drought = getDrawsSinceLastAppearance();
    const sorted = Array.from(drought.entries())
      .filter(([n]) => !picked.includes(n))
      .sort((a, b) => b[1] - a[1]);
    for (const [n] of sorted) {
      if (picked.length >= 6) break;
      picked.push(n);
    }
  }

  picked.sort((a, b) => a - b);
  return { numbers: picked, bonus: makeBonusFromRemaining(picked), mode: "cold" };
}

function recommendHot(): LottoRecommendation {
  const hot = getHotNumbers(15).map((f) => f.number);
  const picked = pickRandom(hot, 6).sort((a, b) => a - b);
  return { numbers: picked, bonus: makeBonusFromRemaining(picked), mode: "hot" };
}

function recommendBalanced(): LottoRecommendation {
  const hot = getHotNumbers(15).map((f) => f.number);
  const cold = getColdNumbers(15).map((f) => f.number);

  const hotPick = pickRandom(hot, 3);
  const coldFiltered = cold.filter((n) => !hotPick.includes(n));
  const coldPick = pickRandom(coldFiltered, 3);

  const picked = [...hotPick, ...coldPick].sort((a, b) => a - b);
  return { numbers: picked, bonus: makeBonusFromRemaining(picked), mode: "balanced" };
}

export function recommendNumbers(mode: RecommendMode): LottoRecommendation {
  switch (mode) {
    case "random": return recommendRandom();
    case "cold": return recommendCold();
    case "hot": return recommendHot();
    case "balanced": return recommendBalanced();
  }
}

export function recommendMultipleSets(mode: RecommendMode, count: number): LottoRecommendation[] {
  return Array.from({ length: count }, () => recommendNumbers(mode));
}

export function getLottoBallColor(n: number): string {
  if (n <= 10) return "bg-yellow-400 text-yellow-900";
  if (n <= 20) return "bg-blue-500 text-white";
  if (n <= 30) return "bg-red-500 text-white";
  if (n <= 40) return "bg-gray-500 text-white";
  return "bg-green-500 text-white";
}

/** Latest round number in data */
export function getLatestRound(): number {
  return lottoHistory[0]?.round ?? 0;
}
