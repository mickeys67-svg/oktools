"use client";

import { useState } from "react";
import { planets, calcPlanetAge } from "@/data/planets";
import NumberWheel from "@/components/ui/NumberWheel";

export default function PlanetAgeCalc() {
  const [age, setAge] = useState(30);

  const visiblePlanets = planets.filter((p) => p.orbitalPeriod > 0 && p.id !== "earth" && p.id !== "moon");

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
          지구 나이 (세)
        </label>
        <div className="flex justify-center">
          <NumberWheel
            min={1}
            max={120}
            value={age}
            onChange={setAge}
            unit="세"
            width={90}
            accentClass="bg-space/10 dark:bg-space/20"
          />
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {[10, 20, 30, 40, 50, 70].map((a) => (
            <button key={a} onClick={() => setAge(a)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${age === a ? "bg-space text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400"}`}
            >{a}세</button>
          ))}
        </div>
      </div>

      {age > 0 && (
        <div className="animate-fade-in-up grid gap-3 sm:grid-cols-2">
          {visiblePlanets.map((planet) => {
            const pa = calcPlanetAge(age, planet);
            return (
              <div key={planet.id} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-2xl">{planet.emoji}</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{planet.name}</p>
                    <p className="text-[10px] text-gray-400">공전주기 {planet.orbitalPeriod.toLocaleString()}일</p>
                  </div>
                </div>
                <p className="text-2xl font-extrabold" style={{ color: planet.color }}>
                  {pa < 0.01 ? pa.toFixed(4) : pa < 1 ? pa.toFixed(2) : pa.toFixed(1)}
                  <span className="text-sm font-normal text-gray-400"> 세</span>
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {pa < 1 ? "아직 1살도 안 됐어요!" : pa > 100 ? "장수하셨네요!" : `지구의 ${age}세`}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
