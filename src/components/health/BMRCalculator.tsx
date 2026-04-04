"use client";

import { useState, useMemo } from "react";
import { calcBMR } from "@/lib/health";
import { formatNumber } from "@/lib/format-ko";
import NumberWheel from "@/components/ui/NumberWheel";

export default function BMRCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState(30);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const result = useMemo(() => {
    if (age <= 0 || height <= 0 || weight <= 0) return null;
    return calcBMR(gender, age, height, weight);
  }, [gender, age, height, weight]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        {/* Gender */}
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">성별</label>
          <div className="flex gap-2">
            {([["male", "남성"], ["female", "여성"]] as const).map(([v, l]) => (
              <button key={v} onClick={() => setGender(v)}
                className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${gender === v ? "bg-health text-white" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`}>
                {l}
              </button>
            ))}
          </div>
        </div>
        {/* Age, Height & Weight Wheels */}
        <div className="flex justify-center gap-4">
          <NumberWheel
            min={1} max={120} value={age} onChange={setAge}
            step={1} label="나이" unit="세" width={80}
            accentClass="bg-health/10 dark:bg-health/20"
          />
          <NumberWheel
            min={50} max={250} value={height} onChange={setHeight}
            step={1} label="키" unit="cm" width={80}
            accentClass="bg-health/10 dark:bg-health/20"
          />
          <NumberWheel
            min={10} max={300} value={weight} onChange={setWeight}
            step={1} label="체중" unit="kg" width={80}
            accentClass="bg-health/10 dark:bg-health/20"
          />
        </div>
      </div>

      {result && (
        <div className="animate-fade-in-up space-y-4">
          {/* BMR */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="text-center">
              <p className="mb-1 text-sm text-gray-500">기초대사량 (BMR)</p>
              <p className="text-3xl font-extrabold text-health sm:text-4xl">{formatNumber(result.bmr)} kcal</p>
              <p className="mt-1 text-xs text-gray-400">아무것도 안 해도 하루에 소비되는 칼로리</p>
            </div>
          </div>

          {/* TDEE Table */}
          <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
            <div className="border-b border-gray-200 px-5 py-3 dark:border-gray-800">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">활동 수준별 일일 권장 칼로리 (TDEE)</h3>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {result.tdee.map((t) => (
                <div key={t.label} className="flex items-center justify-between px-5 py-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{t.label}</p>
                    <p className="text-xs text-gray-400">{t.description}</p>
                  </div>
                  <p className="text-lg font-bold text-health">{formatNumber(t.calories)} <span className="text-xs font-normal text-gray-400">kcal</span></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
