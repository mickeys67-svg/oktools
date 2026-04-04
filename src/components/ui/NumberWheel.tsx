"use client";

import { useRef, useEffect, useCallback } from "react";

export interface NumberWheelProps {
  /** Minimum value */
  min: number;
  /** Maximum value */
  max: number;
  /** Current value */
  value: number;
  /** Change handler */
  onChange: (v: number) => void;
  /** Step between values (default: 1) */
  step?: number;
  /** Label shown above the wheel */
  label?: string;
  /** Unit shown below the wheel (e.g., "kg", "cm", "%") */
  unit?: string;
  /** Pad single digits with leading zero (default: false) */
  padZero?: boolean;
  /** Disable interaction */
  disabled?: boolean;
  /** Width in px (default: 80) */
  width?: number;
  /** Number of visible items (default: 5, must be odd) */
  visibleCount?: number;
  /** Format function for display */
  format?: (v: number) => string;
  /** Accent color class (default: "bg-primary-500/10 dark:bg-primary-500/20") */
  accentClass?: string;
}

const ITEM_H = 44;

export default function NumberWheel({
  min,
  max,
  value,
  onChange,
  step = 1,
  label,
  unit,
  padZero = false,
  disabled = false,
  width = 80,
  visibleCount = 5,
  format,
  accentClass = "bg-primary-500/10 dark:bg-primary-500/20",
}: NumberWheelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const half = Math.floor(visibleCount / 2);
  const items: number[] = [];
  for (let v = min; v <= max; v = Math.round((v + step) * 1000) / 1000) {
    items.push(v);
  }

  const valueToIndex = (v: number) => {
    const idx = items.findIndex((item) => item === v);
    return idx >= 0 ? idx : 0;
  };

  const scrollToValue = useCallback(
    (v: number, smooth = false) => {
      const el = containerRef.current;
      if (!el) return;
      const idx = valueToIndex(v);
      el.scrollTo({ top: idx * ITEM_H, behavior: smooth ? "smooth" : "instant" });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [min, max, step]
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
      const newVal = items[clamped];
      if (newVal !== undefined && newVal !== value) onChange(newVal);
      isScrollingRef.current = true;
      el.scrollTo({ top: clamped * ITEM_H, behavior: "smooth" });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 200);
    }, 80);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length, value, onChange, disabled]);

  const fmt = (n: number): string => {
    if (format) return format(n);
    if (padZero && n < 10 && n >= 0 && step === 1) return n.toString().padStart(2, "0");
    if (step < 1) return n.toFixed(String(step).split(".")[1]?.length || 1);
    return n.toLocaleString();
  };

  return (
    <div className="flex flex-col items-center">
      {label && (
        <p className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">
          {label}
        </p>
      )}
      <div
        className="relative select-none overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800/60"
        style={{ height: ITEM_H * visibleCount, width }}
      >
        {/* Center highlight */}
        <div
          className={`pointer-events-none absolute left-1 right-1 z-10 rounded-lg ${accentClass}`}
          style={{ top: half * ITEM_H, height: ITEM_H }}
        />
        {/* Fade top */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-0 z-20 bg-gradient-to-b from-gray-50 via-gray-50/80 to-transparent dark:from-gray-800/60 dark:via-gray-800/50"
          style={{ height: ITEM_H * 1.5 }}
        />
        {/* Fade bottom */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent dark:from-gray-800/60 dark:via-gray-800/50"
          style={{ height: ITEM_H * 1.5 }}
        />
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className={`h-full overflow-y-auto scrollbar-none ${disabled ? "pointer-events-none opacity-40" : ""}`}
          style={{
            scrollSnapType: "y mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div style={{ height: half * ITEM_H }} />
          {items.map((n) => (
            <div
              key={n}
              onClick={() => {
                if (!disabled) {
                  onChange(n);
                  scrollToValue(n, true);
                }
              }}
              className={`flex cursor-pointer items-center justify-center transition-all ${
                n === value
                  ? "text-base font-extrabold text-gray-900 dark:text-gray-50"
                  : "text-sm font-medium text-gray-400 dark:text-gray-600"
              }`}
              style={{ height: ITEM_H, scrollSnapAlign: "start" }}
            >
              {fmt(n)}
            </div>
          ))}
          <div style={{ height: half * ITEM_H }} />
        </div>
      </div>
      {unit && (
        <p className="mt-1 text-xs font-medium text-gray-400 dark:text-gray-500">
          {unit}
        </p>
      )}
    </div>
  );
}
