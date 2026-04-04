"use client";

import { useState, useCallback, useMemo } from "react";
import { categories } from "@/data/conversions";
import { convert, formatNumber } from "@/lib/converter";
import WheelPicker from "./WheelPicker";

export default function WheelConverter() {
  const [categoryId, setCategoryId] = useState("length");
  const [fromUnitId, setFromUnitId] = useState("meter");
  const [toUnitId, setToUnitId] = useState("kilometer");
  const [inputValue, setInputValue] = useState("1");

  const category = useMemo(
    () => categories.find((c) => c.id === categoryId)!,
    [categoryId]
  );

  const fromUnit = category.units.find((u) => u.id === fromUnitId);
  const toUnit = category.units.find((u) => u.id === toUnitId);

  // Compute result
  const result = useMemo(() => {
    const num = parseFloat(inputValue);
    if (isNaN(num) || !fromUnit || !toUnit) return "";
    return formatNumber(convert(categoryId, fromUnitId, toUnitId, num));
  }, [inputValue, categoryId, fromUnitId, toUnitId, fromUnit, toUnit]);

  // Category items for wheel
  const categoryItems = useMemo(
    () =>
      categories.map((c) => ({
        id: c.id,
        label: c.nameKo,
        sub: c.icon,
      })),
    []
  );

  // Unit items for wheels
  const unitItems = useMemo(
    () =>
      category.units.map((u) => ({
        id: u.id,
        label: u.nameKo,
        sub: u.symbol,
      })),
    [category]
  );

  // When category changes, reset units to first two
  const handleCategoryChange = useCallback(
    (id: string) => {
      const cat = categories.find((c) => c.id === id);
      if (!cat) return;
      setCategoryId(id);
      setFromUnitId(cat.units[0].id);
      setToUnitId(cat.units.length > 1 ? cat.units[1].id : cat.units[0].id);
    },
    []
  );

  // Swap from/to
  const handleSwap = useCallback(() => {
    setFromUnitId(toUnitId);
    setToUnitId(fromUnitId);
  }, [fromUnitId, toUnitId]);

  // Formula display
  const formula = useMemo(() => {
    if (!fromUnit || !toUnit) return "";
    const oneConverted = formatNumber(
      convert(categoryId, fromUnitId, toUnitId, 1)
    );
    return `1 ${fromUnit.nameKo}(${fromUnit.symbol}) = ${oneConverted} ${toUnit.nameKo}(${toUnit.symbol})`;
  }, [categoryId, fromUnitId, toUnitId, fromUnit, toUnit]);

  return (
    <div className="space-y-6">
      {/* Category selector - horizontal scroll tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              cat.id === categoryId
                ? "bg-amber-500 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
          >
            {cat.icon} {cat.nameKo}
          </button>
        ))}
      </div>

      {/* Main converter card */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
        {/* Input section */}
        <div className="border-b border-gray-100 p-5 dark:border-gray-800">
          <label className="mb-2 block text-xs font-medium text-gray-500 dark:text-gray-400">
            변환할 값
          </label>
          <input
            type="number"
            inputMode="decimal"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-2xl font-bold text-gray-900 outline-none transition-colors focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:border-amber-500 dark:focus:ring-amber-900/30"
            placeholder="값을 입력하세요"
          />
        </div>

        {/* Wheel pickers section */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-0">
          {/* From unit wheel */}
          <div className="border-r border-gray-100 px-2 py-3 dark:border-gray-800">
            <p className="mb-1 text-center text-xs font-medium text-amber-600 dark:text-amber-400">
              변환 전
            </p>
            <WheelPicker
              items={unitItems}
              selectedId={fromUnitId}
              onChange={setFromUnitId}
            />
          </div>

          {/* Swap button */}
          <div className="flex flex-col items-center gap-2 px-2">
            <button
              onClick={handleSwap}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 transition-all hover:bg-amber-200 hover:shadow-md active:scale-95 dark:bg-amber-900/40 dark:text-amber-400 dark:hover:bg-amber-900/60"
              aria-label="단위 교체"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 3l-4 4 4 4" />
                <path d="M4 7h16" />
                <path d="M16 21l4-4-4-4" />
                <path d="M20 17H4" />
              </svg>
            </button>
          </div>

          {/* To unit wheel */}
          <div className="border-l border-gray-100 px-2 py-3 dark:border-gray-800">
            <p className="mb-1 text-center text-xs font-medium text-amber-600 dark:text-amber-400">
              변환 후
            </p>
            <WheelPicker
              items={unitItems}
              selectedId={toUnitId}
              onChange={setToUnitId}
            />
          </div>
        </div>

        {/* Result section */}
        <div className="border-t border-gray-100 bg-gradient-to-r from-amber-50 to-orange-50 p-5 dark:border-gray-800 dark:from-amber-950/30 dark:to-orange-950/30">
          <p className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">
            변환 결과
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-gray-900 dark:text-gray-50">
              {result || "—"}
            </span>
            {toUnit && (
              <span className="text-lg font-medium text-amber-600 dark:text-amber-400">
                {toUnit.nameKo} ({toUnit.symbol})
              </span>
            )}
          </div>
          {formula && (
            <p className="mt-3 rounded-lg bg-white/60 px-3 py-2 text-xs text-gray-500 dark:bg-gray-900/40 dark:text-gray-400">
              {formula}
            </p>
          )}
        </div>
      </div>

      {/* Quick conversion table */}
      <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="border-b border-gray-100 px-5 py-3 dark:border-gray-800">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            주요 변환표
          </h3>
        </div>
        <div className="divide-y divide-gray-50 dark:divide-gray-800">
          {[1, 5, 10, 50, 100, 500, 1000].map((val) => {
            const converted = fromUnit && toUnit
              ? formatNumber(convert(categoryId, fromUnitId, toUnitId, val))
              : "—";
            return (
              <div
                key={val}
                className="flex items-center justify-between px-5 py-2.5 text-sm"
              >
                <span className="text-gray-600 dark:text-gray-400">
                  {val.toLocaleString()} {fromUnit?.symbol}
                </span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {converted} {toUnit?.symbol}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
