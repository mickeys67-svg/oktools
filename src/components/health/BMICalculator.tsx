"use client";

import { useState, useMemo } from "react";
import { calcBMI, BMI_KOREAN_RANGES } from "@/lib/health";

const QUICK_HEIGHTS = [155, 160, 165, 170, 175, 180];

export default function BMICalculator() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const result = useMemo(() => {
    if (height <= 0 || weight <= 0) return null;
    return calcBMI(height, weight);
  }, [height, weight]);

  // BMI gauge position (0-40 range mapped to 0-100%)
  const gaugePercent = result ? Math.min(Math.max((result.bmi / 40) * 100, 0), 100) : 0;

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        {/* Height */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            키 (cm)
          </label>
          <input
            type="number"
            inputMode="decimal"
            step="0.1"
            min="100"
            max="250"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {QUICK_HEIGHTS.map((h) => (
              <button
                key={h}
                onClick={() => setHeight(h)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  height === h
                    ? "bg-health text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {h}cm
              </button>
            ))}
          </div>
        </div>

        {/* Weight */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            몸무게 (kg)
          </label>
          <input
            type="number"
            inputMode="decimal"
            step="0.1"
            min="20"
            max="300"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {[50, 60, 70, 80, 90, 100].map((w) => (
              <button
                key={w}
                onClick={() => setWeight(w)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  weight === w
                    ? "bg-health text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {w}kg
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          {/* BMI Value */}
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">BMI 지수</p>
            <p className="text-4xl font-extrabold sm:text-5xl" style={{ color: result.categoryColor }}>
              {result.bmi.toFixed(1)}
            </p>
            <p className="mt-2 text-lg font-semibold" style={{ color: result.categoryColor }}>
              {result.koreanCategory}
            </p>
          </div>

          {/* BMI Gauge Bar */}
          <div className="mb-6">
            <div className="relative h-4 overflow-hidden rounded-full">
              <div className="absolute inset-0 flex">
                {BMI_KOREAN_RANGES.map((range, i) => (
                  <div
                    key={i}
                    className="h-full"
                    style={{
                      backgroundColor: range.color,
                      width: i < BMI_KOREAN_RANGES.length - 1
                        ? `${((range.max - (i === 0 ? 0 : BMI_KOREAN_RANGES[i - 1].max)) / 40) * 100}%`
                        : `${((40 - BMI_KOREAN_RANGES[i - 1].max) / 40) * 100}%`,
                    }}
                  />
                ))}
              </div>
              {/* Indicator */}
              <div
                className="absolute top-0 h-full w-1 -translate-x-1/2 bg-gray-900 shadow-lg transition-all dark:bg-white"
                style={{ left: `${gaugePercent}%` }}
              />
            </div>
            <div className="mt-1 flex justify-between text-[10px] text-gray-400">
              <span>저체중</span>
              <span>정상</span>
              <span>과체중</span>
              <span>비만</span>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">정상 체중 범위</p>
              <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                {result.normalWeightMin.toFixed(1)} ~ {result.normalWeightMax.toFixed(1)} kg
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">
                {result.difference > 0 ? "정상 초과" : result.difference < 0 ? "정상 미달" : "정상 범위"}
              </p>
              <p
                className="text-sm font-bold"
                style={{ color: result.difference === 0 ? "#10B981" : result.categoryColor }}
              >
                {result.difference === 0
                  ? "정상 범위"
                  : `${result.difference > 0 ? "+" : ""}${result.difference.toFixed(1)} kg`}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
