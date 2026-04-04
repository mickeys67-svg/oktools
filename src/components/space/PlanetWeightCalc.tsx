"use client";

import { useState } from "react";
import { planets, calcPlanetWeight } from "@/data/planets";

export default function PlanetWeightCalc() {
  const [weight, setWeight] = useState(70);

  const visiblePlanets = planets.filter((p) => p.id !== "earth");

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
          지구에서의 몸무게 (kg)
        </label>
        <input
          type="number"
          inputMode="decimal"
          step="0.1"
          min="1"
          max="500"
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
                  ? "bg-space text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              {w}kg
            </button>
          ))}
        </div>
      </div>

      {weight > 0 && (
        <div className="animate-fade-in-up grid gap-3 sm:grid-cols-2">
          {visiblePlanets.map((planet) => {
            const pw = calcPlanetWeight(weight, planet);
            const ratio = planet.gravity;
            return (
              <div
                key={planet.id}
                className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-2xl">{planet.emoji}</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{planet.name}</p>
                    <p className="text-[10px] text-gray-400">{planet.nameEn} · 중력 {ratio}G</p>
                  </div>
                </div>
                <p className="text-2xl font-extrabold" style={{ color: planet.color }}>
                  {pw.toFixed(1)}<span className="text-sm font-normal text-gray-400"> kg</span>
                </p>
                {/* Gravity bar */}
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${Math.min((ratio / 2.5) * 100, 100)}%`,
                      backgroundColor: planet.color,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
