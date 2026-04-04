"use client";

import { useRef, useEffect, useCallback, useState } from "react";

interface WheelPickerProps {
  items: { id: string; label: string; sub?: string }[];
  selectedId: string;
  onChange: (id: string) => void;
  itemHeight?: number;
  visibleCount?: number;
}

export default function WheelPicker({
  items,
  selectedId,
  onChange,
  itemHeight = 48,
  visibleCount = 5,
}: WheelPickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [isDragging, setIsDragging] = useState(false);

  const halfVisible = Math.floor(visibleCount / 2);
  const containerHeight = itemHeight * visibleCount;

  // Scroll to selected item
  const scrollToItem = useCallback(
    (id: string, smooth = false) => {
      const container = containerRef.current;
      if (!container) return;
      const idx = items.findIndex((item) => item.id === id);
      if (idx < 0) return;
      const targetScroll = idx * itemHeight;
      container.scrollTo({
        top: targetScroll,
        behavior: smooth ? "smooth" : "instant",
      });
    },
    [items, itemHeight]
  );

  // Initialize scroll position
  useEffect(() => {
    scrollToItem(selectedId);
  }, [selectedId, scrollToItem]);

  // Handle scroll end → snap to nearest item
  const handleScroll = useCallback(() => {
    if (isScrollingRef.current) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      const scrollTop = container.scrollTop;
      const idx = Math.round(scrollTop / itemHeight);
      const clampedIdx = Math.max(0, Math.min(idx, items.length - 1));
      const item = items[clampedIdx];

      if (item && item.id !== selectedId) {
        onChange(item.id);
      }

      // Snap
      isScrollingRef.current = true;
      container.scrollTo({
        top: clampedIdx * itemHeight,
        behavior: "smooth",
      });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 200);
    }, 80);
  }, [items, itemHeight, selectedId, onChange]);

  // Click to select
  const handleItemClick = (id: string) => {
    onChange(id);
    scrollToItem(id, true);
  };

  return (
    <div className="relative select-none" style={{ height: containerHeight }}>
      {/* Highlight band for center item */}
      <div
        className="pointer-events-none absolute left-0 right-0 z-10 rounded-lg border-2 border-amber-400 bg-amber-50/80 dark:border-amber-500 dark:bg-amber-950/60"
        style={{
          top: halfVisible * itemHeight,
          height: itemHeight,
        }}
      />

      {/* Fade overlays */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-20 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80"
        style={{ height: itemHeight * 1.5 }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80"
        style={{ height: itemHeight * 1.5 }}
      />

      {/* Scrollable list */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        className="h-full overflow-y-auto scrollbar-none"
        style={{
          scrollSnapType: isDragging ? "none" : "y mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Top padding */}
        <div style={{ height: halfVisible * itemHeight }} />

        {items.map((item) => {
          const isSelected = item.id === selectedId;
          return (
            <div
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`flex cursor-pointer items-center justify-center px-3 transition-all ${
                isSelected
                  ? "text-gray-900 dark:text-gray-50"
                  : "text-gray-400 dark:text-gray-600"
              }`}
              style={{
                height: itemHeight,
                scrollSnapAlign: "start",
              }}
            >
              <div className="text-center">
                <span
                  className={`block text-sm font-semibold leading-tight ${
                    isSelected ? "text-base" : ""
                  }`}
                >
                  {item.label}
                </span>
                {item.sub && (
                  <span
                    className={`block text-xs ${
                      isSelected
                        ? "text-gray-500 dark:text-gray-400"
                        : "text-gray-300 dark:text-gray-700"
                    }`}
                  >
                    {item.sub}
                  </span>
                )}
              </div>
            </div>
          );
        })}

        {/* Bottom padding */}
        <div style={{ height: halfVisible * itemHeight }} />
      </div>
    </div>
  );
}
