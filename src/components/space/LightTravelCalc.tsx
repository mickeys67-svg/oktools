"use client";

import { useState } from "react";
import { planets, formatTravelTime } from "@/data/planets";

const VEHICLES = [
  { name: "빛", speed: 299792, emoji: "⚡", unit: "km/s" },
  { name: "KTX", speed: 305 / 3600, emoji: "🚄", unit: "305km/h" },
  { name: "비행기", speed: 900 / 3600, emoji: "✈️", unit: "900km/h" },
  { name: "자동차", speed: 100 / 3600, emoji: "🚗", unit: "100km/h" },
];

// Distances from Earth in million km
const DESTINATIONS = [
  { name: "달", distance: 0.384, emoji: "🌙" },
  { name: "화성", distance: 225, emoji: "🔴" },
  { name: "태양", distance: 149.6, emoji: "☀️" },
  { name: "목성", distance: 628.7, emoji: "🟤" },
  { name: "토성", distance: 1275, emoji: "🪐" },
  { name: "명왕성", distance: 5750, emoji: "⚪" },
  { name: "프록시마 센타우리", distance: 4.017e7, emoji: "⭐" },
  { name: "안드로메다 은하", distance: 2.365e13, emoji: "🌌" },
];

export default function LightTravelCalc() {
  const [destIdx, setDestIdx] = useState(1); // 화성 default
  const dest = DESTINATIONS[destIdx];
  const distanceKm = dest.distance * 1_000_000;

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">목적지 선택</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {DESTINATIONS.map((d, i) => (
            <button
              key={d.name}
              onClick={() => setDestIdx(i)}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                destIdx === i
                  ? "bg-space text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400"
              }`}
            >
              {d.emoji} {d.name}
            </button>
          ))}
        </div>
        <p className="mt-3 text-center text-sm text-gray-400">
          지구에서 {dest.name}까지 거리: <strong className="text-gray-600 dark:text-gray-300">
          {distanceKm >= 1e12
            ? `${(distanceKm / 1e12).toFixed(1)}조 km`
            : distanceKm >= 1e8
            ? `${(distanceKm / 1e8).toFixed(1)}억 km`
            : distanceKm >= 1e4
            ? `${(distanceKm / 1e4).toFixed(0)}만 km`
            : `${distanceKm.toLocaleString()} km`
          }
          </strong>
        </p>
      </div>

      <div className="animate-fade-in-up grid gap-3 sm:grid-cols-2">
        {VEHICLES.map((v) => {
          const seconds = distanceKm / v.speed;
          return (
            <div key={v.name} className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl">{v.emoji}</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{v.name}</p>
                  <p className="text-[10px] text-gray-400">{v.unit}</p>
                </div>
              </div>
              <p className="text-xl font-extrabold text-space">
                {formatTravelTime(seconds)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
