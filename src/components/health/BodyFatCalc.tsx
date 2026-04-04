"use client";

import { useState, useMemo } from "react";

type Gender = "male" | "female";

interface BodyFatResult {
  bodyFatPercent: number;
  fatMass: number;
  leanMass: number;
  category: string;
  categoryColor: string;
}

function calcBodyFat(
  gender: Gender,
  height: number,
  waist: number,
  neck: number,
  hip: number
): BodyFatResult | null {
  if (height <= 0 || waist <= 0 || neck <= 0) return null;
  if (gender === "female" && hip <= 0) return null;
  if (waist - neck <= 0) return null;
  if (gender === "female" && waist + hip - neck <= 0) return null;

  let bf: number;
  if (gender === "male") {
    bf =
      495 /
        (1.0324 -
          0.19077 * Math.log10(waist - neck) +
          0.15456 * Math.log10(height)) -
      450;
  } else {
    bf =
      495 /
        (1.29579 -
          0.35004 * Math.log10(waist + hip - neck) +
          0.221 * Math.log10(height)) -
      450;
  }

  bf = Math.max(0, Math.min(bf, 70));

  let category: string;
  let categoryColor: string;

  if (gender === "male") {
    if (bf < 6) {
      category = "필수지방 미만";
      categoryColor = "#3B82F6";
    } else if (bf < 14) {
      category = "운동선수";
      categoryColor = "#10B981";
    } else if (bf < 18) {
      category = "건강(정상)";
      categoryColor = "#22C55E";
    } else if (bf < 25) {
      category = "평균";
      categoryColor = "#F59E0B";
    } else {
      category = "비만";
      categoryColor = "#EF4444";
    }
  } else {
    if (bf < 14) {
      category = "필수지방 미만";
      categoryColor = "#3B82F6";
    } else if (bf < 21) {
      category = "운동선수";
      categoryColor = "#10B981";
    } else if (bf < 25) {
      category = "건강(정상)";
      categoryColor = "#22C55E";
    } else if (bf < 32) {
      category = "평균";
      categoryColor = "#F59E0B";
    } else {
      category = "비만";
      categoryColor = "#EF4444";
    }
  }

  return {
    bodyFatPercent: bf,
    fatMass: 0,
    leanMass: 0,
    category,
    categoryColor,
  };
}

export default function BodyFatCalc() {
  const [gender, setGender] = useState<Gender>("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [hip, setHip] = useState("");

  const result = useMemo(() => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const wa = parseFloat(waist);
    const n = parseFloat(neck);
    const hi = parseFloat(hip);

    if (!h || !w || !wa || !n) return null;
    if (gender === "female" && !hi) return null;

    const r = calcBodyFat(gender, h, wa, n, hi || 0);
    if (!r) return null;

    const fatMass = (r.bodyFatPercent / 100) * w;
    const leanMass = w - fatMass;

    return { ...r, fatMass, leanMass };
  }, [gender, height, weight, waist, neck, hip]);

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-health focus:ring-1 focus:ring-health dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100";
  const labelClass =
    "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300";

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        {/* Gender */}
        <div className="mb-5">
          <label className={labelClass}>성별</label>
          <div className="flex gap-2">
            {([["male", "남성"], ["female", "여성"]] as const).map(([v, l]) => (
              <button
                key={v}
                onClick={() => setGender(v)}
                className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  gender === v
                    ? "bg-health text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>키 (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="170"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>몸무게 (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="70"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>허리둘레 (cm)</label>
            <input
              type="number"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              placeholder="85"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>목둘레 (cm)</label>
            <input
              type="number"
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
              placeholder="37"
              className={inputClass}
            />
          </div>
          {gender === "female" && (
            <div className="col-span-2">
              <label className={labelClass}>엉덩이둘레 (cm)</label>
              <input
                type="number"
                value={hip}
                onChange={(e) => setHip(e.target.value)}
                placeholder="95"
                className={inputClass}
              />
            </div>
          )}
        </div>
      </div>

      {result && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">체지방률</p>
            <p
              className="text-4xl font-extrabold sm:text-5xl"
              style={{ color: result.categoryColor }}
            >
              {result.bodyFatPercent.toFixed(1)}%
            </p>
            <p
              className="mt-2 text-lg font-semibold"
              style={{ color: result.categoryColor }}
            >
              {result.category}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">체지방량</p>
              <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                {result.fatMass.toFixed(1)} kg
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">제지방량</p>
              <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                {result.leanMass.toFixed(1)} kg
              </p>
            </div>
          </div>

          {/* Reference Table */}
          <div className="mt-5">
            <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              체지방률 기준표 ({gender === "male" ? "남성" : "여성"})
            </h3>
            <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-2 font-medium">분류</th>
                    <th className="px-4 py-2 font-medium">체지방률</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {gender === "male" ? (
                    <>
                      <tr><td className="px-4 py-2">필수지방</td><td className="px-4 py-2">2~5%</td></tr>
                      <tr><td className="px-4 py-2">운동선수</td><td className="px-4 py-2">6~13%</td></tr>
                      <tr><td className="px-4 py-2">건강(정상)</td><td className="px-4 py-2">14~17%</td></tr>
                      <tr><td className="px-4 py-2">평균</td><td className="px-4 py-2">18~24%</td></tr>
                      <tr><td className="px-4 py-2">비만</td><td className="px-4 py-2">25% 이상</td></tr>
                    </>
                  ) : (
                    <>
                      <tr><td className="px-4 py-2">필수지방</td><td className="px-4 py-2">10~13%</td></tr>
                      <tr><td className="px-4 py-2">운동선수</td><td className="px-4 py-2">14~20%</td></tr>
                      <tr><td className="px-4 py-2">건강(정상)</td><td className="px-4 py-2">21~24%</td></tr>
                      <tr><td className="px-4 py-2">평균</td><td className="px-4 py-2">25~31%</td></tr>
                      <tr><td className="px-4 py-2">비만</td><td className="px-4 py-2">32% 이상</td></tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
