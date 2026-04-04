"use client";

import { useState, useMemo } from "react";

type Gender = "male" | "female";

const ACTIVITY_LEVELS = [
  { value: 1.2, label: "비활동적", desc: "운동 거의 안 함" },
  { value: 1.375, label: "가벼운 활동", desc: "주 1~3회 운동" },
  { value: 1.55, label: "보통 활동", desc: "주 3~5회 운동" },
  { value: 1.725, label: "활발한 활동", desc: "주 6~7회 운동" },
  { value: 1.9, label: "매우 활발", desc: "고강도 운동/육체 노동" },
];

function calcCalorie(
  gender: Gender,
  age: number,
  height: number,
  weight: number,
  activityLevel: number
) {
  // Mifflin-St Jeor
  let bmr: number;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const tdee = bmr * activityLevel;

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    lose: Math.round(tdee - 500),
    maintain: Math.round(tdee),
    gain: Math.round(tdee + 500),
  };
}

export default function CalorieCalc() {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState(1.55);

  const result = useMemo(() => {
    const a = parseInt(age);
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!a || !h || !w || a <= 0 || h <= 0 || w <= 0) return null;
    return calcCalorie(gender, a, h, w, activity);
  }, [gender, age, height, weight, activity]);

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

        <div className="grid grid-cols-3 gap-4 mb-5">
          <div>
            <label className={labelClass}>나이</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="30"
              className={inputClass}
            />
          </div>
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
        </div>

        {/* Activity Level */}
        <div>
          <label className={labelClass}>활동량</label>
          <div className="space-y-2">
            {ACTIVITY_LEVELS.map((level) => (
              <button
                key={level.value}
                onClick={() => setActivity(level.value)}
                className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                  activity === level.value
                    ? "border-health bg-health/5 text-health dark:bg-health/10"
                    : "border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                <span className="font-medium">{level.label}</span>
                <span className="ml-2 text-xs text-gray-500">{level.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {result && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          {/* BMR */}
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">기초대사량 (BMR)</p>
            <p className="text-3xl font-extrabold text-health sm:text-4xl">
              {result.bmr.toLocaleString()} kcal
            </p>
            <p className="mt-1 text-xs text-gray-400">아무것도 하지 않아도 소비되는 에너지</p>
          </div>

          {/* TDEE */}
          <div className="mb-6 text-center rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">일일 총 에너지 소비량 (TDEE)</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {result.tdee.toLocaleString()} kcal
            </p>
          </div>

          {/* Goals */}
          <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
            목표별 권장 칼로리
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-blue-50 p-4 text-center dark:bg-blue-900/20">
              <p className="mb-1 text-xs text-blue-600 dark:text-blue-400">감량 (-0.5kg/주)</p>
              <p className="text-lg font-bold text-blue-700 dark:text-blue-300">
                {result.lose.toLocaleString()}
              </p>
              <p className="text-xs text-blue-500">kcal</p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 text-center dark:bg-green-900/20">
              <p className="mb-1 text-xs text-green-600 dark:text-green-400">유지</p>
              <p className="text-lg font-bold text-green-700 dark:text-green-300">
                {result.maintain.toLocaleString()}
              </p>
              <p className="text-xs text-green-500">kcal</p>
            </div>
            <div className="rounded-lg bg-orange-50 p-4 text-center dark:bg-orange-900/20">
              <p className="mb-1 text-xs text-orange-600 dark:text-orange-400">증량 (+0.5kg/주)</p>
              <p className="text-lg font-bold text-orange-700 dark:text-orange-300">
                {result.gain.toLocaleString()}
              </p>
              <p className="text-xs text-orange-500">kcal</p>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            * Mifflin-St Jeor 공식 기반. 개인 차이가 있으므로 참고용으로 활용하세요.
          </p>
        </div>
      )}
    </div>
  );
}
