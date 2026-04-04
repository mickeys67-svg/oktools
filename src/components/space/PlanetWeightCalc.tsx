"use client";

import { useState } from "react";
import { planets, calcPlanetWeight } from "@/data/planets";
import NumberWheel from "@/components/ui/NumberWheel";

export default function PlanetWeightCalc() {
  const [weight, setWeight] = useState(70);

  const visiblePlanets = planets.filter((p) => p.id !== "earth");

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
          지구에서의 몸무게 (kg)
        </label>
        <div className="flex justify-center">
          <NumberWheel
            min={1}
            max={200}
            value={weight}
            onChange={setWeight}
            unit="kg"
            width={90}
            accentClass="bg-space/10 dark:bg-space/20"
          />
        </div>
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
