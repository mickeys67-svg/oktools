"use client";

import { useState } from "react";

const UNITS = [
  { id: "km", name: "킬로미터 (km)", factor: 1 },
  { id: "au", name: "천문단위 (AU)", factor: 1.496e8 },
  { id: "ly", name: "광년 (light-year)", factor: 9.461e12 },
  { id: "pc", name: "파섹 (parsec)", factor: 3.086e13 },
];

export default function SpaceDistanceCalc() {
  const [value, setValue] = useState(1);
  const [fromUnit, setFromUnit] = useState("ly");

  const fromFactor = UNITS.find((u) => u.id === fromUnit)!.factor;
  const km = value * fromFactor;

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">값 입력</label>
        <input
          type="number"
          inputMode="decimal"
          step="any"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="mb-3 w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">단위</label>
        <div className="grid grid-cols-2 gap-2">
          {UNITS.map((u) => (
            <button
              key={u.id}
              onClick={() => setFromUnit(u.id)}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                fromUnit === u.id
                  ? "bg-space text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400"
              }`}
            >
              {u.name}
            </button>
          ))}
        </div>
      </div>

      {value > 0 && (
        <div className="animate-fade-in-up space-y-2">
          {UNITS.filter((u) => u.id !== fromUnit).map((u) => {
            const converted = km / u.factor;
            return (
              <div key={u.id} className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 dark:border-gray-800 dark:bg-gray-900">
                <span className="text-sm text-gray-600 dark:text-gray-400">{u.name}</span>
                <span className="text-lg font-bold text-space">
                  {converted >= 1e15
                    ? converted.toExponential(2)
                    : converted >= 1e6
                    ? `${(converted / 1e6).toFixed(2)}M`
                    : converted < 0.001
                    ? converted.toExponential(2)
                    : converted.toLocaleString("ko-KR", { maximumFractionDigits: 4 })}
                </span>
              </div>
            );
          })}
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
            빛으로 {(km / 299792).toFixed(1)}초 = {((km / 299792) / 3600).toFixed(4)}시간
          </div>
        </div>
      )}
    </div>
  );
}
