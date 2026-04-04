"use client";

import { useState, useMemo } from "react";
import { calcBiorhythm } from "@/lib/health";

const COLORS = {
  physical: { stroke: "#F43F5E", bg: "bg-rose-500", label: "신체" },
  emotional: { stroke: "#3B82F6", bg: "bg-blue-500", label: "감성" },
  intellectual: { stroke: "#10B981", bg: "bg-emerald-500", label: "지성" },
};

function toDateString(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getStatusEmoji(value: number): string {
  if (value >= 0.6) return "최고";
  if (value >= 0.2) return "좋음";
  if (value >= -0.2) return "보통";
  if (value >= -0.6) return "주의";
  return "낮음";
}

function getStatusColor(value: number): string {
  if (value >= 0.6) return "#10B981";
  if (value >= 0.2) return "#3B82F6";
  if (value >= -0.2) return "#9CA3AF";
  if (value >= -0.6) return "#F59E0B";
  return "#EF4444";
}

export default function BiorhythmChart() {
  const [birthStr, setBirthStr] = useState("1990-01-01");
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  const today = new Date();
  const birthDate = new Date(birthStr);

  const result = useMemo(() => {
    if (isNaN(birthDate.getTime()) || birthDate >= today) return null;
    return calcBiorhythm(birthDate, today);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [birthStr]);

  // SVG chart dimensions
  const W = 640;
  const H = 240;
  const PAD_X = 40;
  const PAD_Y = 20;
  const chartW = W - PAD_X * 2;
  const chartH = H - PAD_Y * 2;

  function buildPath(key: "physical" | "emotional" | "intellectual") {
    if (!result) return "";
    return result.chart
      .map((p, i) => {
        const x = PAD_X + (i / (result.chart.length - 1)) * chartW;
        const y = PAD_Y + ((1 - p[key]) / 2) * chartH;
        return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ");
  }

  // "Today" index = 7 (offset from -7)
  const todayIdx = 7;

  const hoveredPoint = result && hoverIdx !== null ? result.chart[hoverIdx] : null;

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
          생년월일
        </label>
        <input
          type="date"
          value={birthStr}
          max={toDateString(today)}
          onChange={(e) => setBirthStr(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
        {result && (
          <p className="mt-1.5 text-xs text-gray-400">
            출생 후 {result.daysSinceBirth.toLocaleString()}일째
          </p>
        )}
      </div>

      {result && (
        <>
          {/* Today's Status */}
          <div className="animate-fade-in-up grid grid-cols-3 gap-3">
            {(["physical", "emotional", "intellectual"] as const).map((key) => {
              const val = result.today[key];
              const pct = Math.round(val * 100);
              const c = COLORS[key];
              return (
                <div
                  key={key}
                  className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="mb-1 flex items-center justify-center gap-1.5">
                    <span className={`inline-block h-2.5 w-2.5 rounded-full ${c.bg}`} />
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      {c.label}
                    </span>
                  </div>
                  <p
                    className="text-2xl font-extrabold"
                    style={{ color: c.stroke }}
                  >
                    {pct > 0 ? "+" : ""}{pct}%
                  </p>
                  <p className="mt-1 text-xs font-medium" style={{ color: getStatusColor(val) }}>
                    {getStatusEmoji(val)}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Chart */}
          <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            {/* Legend */}
            <div className="mb-3 flex items-center justify-center gap-4 text-xs">
              {(["physical", "emotional", "intellectual"] as const).map((key) => (
                <div key={key} className="flex items-center gap-1">
                  <span className={`inline-block h-2 w-2 rounded-full ${COLORS[key].bg}`} />
                  <span className="text-gray-500 dark:text-gray-400">{COLORS[key].label}</span>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="w-full min-w-[480px]"
                onMouseLeave={() => setHoverIdx(null)}
              >
                {/* Grid */}
                <line
                  x1={PAD_X} y1={PAD_Y + chartH / 2} x2={W - PAD_X} y2={PAD_Y + chartH / 2}
                  stroke="currentColor" strokeDasharray="4 4" className="text-gray-200 dark:text-gray-700"
                />
                <text x={PAD_X - 4} y={PAD_Y + 4} textAnchor="end" className="fill-gray-400 text-[10px]">
                  +100%
                </text>
                <text x={PAD_X - 4} y={PAD_Y + chartH / 2 + 3} textAnchor="end" className="fill-gray-400 text-[10px]">
                  0%
                </text>
                <text x={PAD_X - 4} y={PAD_Y + chartH} textAnchor="end" className="fill-gray-400 text-[10px]">
                  -100%
                </text>

                {/* Today vertical line */}
                <line
                  x1={PAD_X + (todayIdx / (result.chart.length - 1)) * chartW}
                  y1={PAD_Y}
                  x2={PAD_X + (todayIdx / (result.chart.length - 1)) * chartW}
                  y2={PAD_Y + chartH}
                  stroke="#6366F1"
                  strokeDasharray="4 2"
                  strokeWidth={1.5}
                />
                <text
                  x={PAD_X + (todayIdx / (result.chart.length - 1)) * chartW}
                  y={PAD_Y - 6}
                  textAnchor="middle"
                  className="fill-primary-500 text-[10px] font-semibold"
                >
                  오늘
                </text>

                {/* Curves */}
                {(["physical", "emotional", "intellectual"] as const).map((key) => (
                  <path
                    key={key}
                    d={buildPath(key)}
                    fill="none"
                    stroke={COLORS[key].stroke}
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ))}

                {/* Today dots */}
                {(["physical", "emotional", "intellectual"] as const).map((key) => {
                  const x = PAD_X + (todayIdx / (result.chart.length - 1)) * chartW;
                  const y = PAD_Y + ((1 - result.today[key]) / 2) * chartH;
                  return (
                    <circle
                      key={`dot-${key}`}
                      cx={x}
                      cy={y}
                      r={5}
                      fill={COLORS[key].stroke}
                      stroke="white"
                      strokeWidth={2}
                    />
                  );
                })}

                {/* Hover areas */}
                {result.chart.map((_, i) => {
                  const x = PAD_X + (i / (result.chart.length - 1)) * chartW;
                  return (
                    <rect
                      key={`hover-${i}`}
                      x={x - chartW / (result.chart.length - 1) / 2}
                      y={PAD_Y}
                      width={chartW / (result.chart.length - 1)}
                      height={chartH}
                      fill="transparent"
                      onMouseEnter={() => setHoverIdx(i)}
                    />
                  );
                })}

                {/* Hover line */}
                {hoverIdx !== null && (
                  <line
                    x1={PAD_X + (hoverIdx / (result.chart.length - 1)) * chartW}
                    y1={PAD_Y}
                    x2={PAD_X + (hoverIdx / (result.chart.length - 1)) * chartW}
                    y2={PAD_Y + chartH}
                    stroke="currentColor"
                    strokeWidth={1}
                    className="text-gray-300 dark:text-gray-600"
                  />
                )}

                {/* Date labels */}
                {result.chart.filter((_, i) => i % 5 === 0 || i === todayIdx).map((p, _, arr) => {
                  const idx = result.chart.indexOf(p);
                  const x = PAD_X + (idx / (result.chart.length - 1)) * chartW;
                  const m = p.date.getMonth() + 1;
                  const d = p.date.getDate();
                  return (
                    <text
                      key={`label-${idx}`}
                      x={x}
                      y={H - 2}
                      textAnchor="middle"
                      className="fill-gray-400 text-[9px]"
                    >
                      {m}/{d}
                    </text>
                  );
                })}
              </svg>
            </div>

            {/* Hover tooltip */}
            {hoveredPoint && (
              <div className="mt-3 flex items-center justify-center gap-4 text-xs">
                <span className="text-gray-500 dark:text-gray-400">
                  {hoveredPoint.date.getMonth() + 1}/{hoveredPoint.date.getDate()}
                </span>
                {(["physical", "emotional", "intellectual"] as const).map((key) => (
                  <span key={key} style={{ color: COLORS[key].stroke }} className="font-semibold">
                    {COLORS[key].label} {Math.round(hoveredPoint[key] * 100)}%
                  </span>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
