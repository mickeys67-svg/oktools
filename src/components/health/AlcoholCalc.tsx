"use client";

import { useState, useMemo } from "react";
import NumberWheel from "@/components/ui/NumberWheel";

interface Preset {
  label: string;
  ml: number;
  pct: number;
}

const PRESETS: Preset[] = [
  { label: "맥주 500mL", ml: 500, pct: 4.5 },
  { label: "소주 1잔", ml: 50, pct: 17 },
  { label: "와인 1잔", ml: 150, pct: 13 },
  { label: "양주 1잔", ml: 45, pct: 40 },
];

function getStatus(bac: number) {
  if (bac <= 0) return { label: "정상", color: "text-green-600", bg: "bg-green-50 dark:bg-green-950", border: "border-green-200 dark:border-green-800" };
  if (bac < 0.03) return { label: "미미한 수준", color: "text-green-600", bg: "bg-green-50 dark:bg-green-950", border: "border-green-200 dark:border-green-800" };
  if (bac < 0.08) return { label: "면허정지 수준", color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-950", border: "border-yellow-200 dark:border-yellow-800" };
  return { label: "면허취소 수준", color: "text-red-600", bg: "bg-red-50 dark:bg-red-950", border: "border-red-200 dark:border-red-800" };
}

export default function AlcoholCalc() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState(70);
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [customMl, setCustomMl] = useState(500);
  const [customPct, setCustomPct] = useState(4.5);
  const [useCustom, setUseCustom] = useState(false);
  const [cups, setCups] = useState(1);
  const [hours, setHours] = useState(0);

  const ml = useCustom ? customMl : PRESETS[selectedPreset].ml;
  const pct = useCustom ? customPct : PRESETS[selectedPreset].pct;

  const result = useMemo(() => {
    if (weight <= 0) return null;
    const genderFactor = gender === "male" ? 0.68 : 0.55;
    const totalMl = ml * cups;
    // Widmark: BAC(%) = (순수알코올g) / (체중kg × 성별계수 × 10) - 시간 × 0.015
    const rawBac = (totalMl * (pct / 100) * 0.7894) / (weight * genderFactor * 10) - hours * 0.015;
    const bac = Math.max(0, rawBac);
    const decompositionHours = rawBac > 0 ? rawBac / 0.015 : 0;
    return { bac, decompositionHours };
  }, [gender, weight, ml, pct, cups, hours]);

  const bac = result?.bac ?? 0;
  const status = getStatus(bac);

  return (
    <div className="space-y-6">
      {/* 성별 + 체중 */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-50">기본 정보</h2>

        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">성별</label>
          <div className="flex gap-2">
            {(["male", "female"] as const).map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`flex-1 rounded-xl py-3 text-sm font-semibold transition-colors ${
                  gender === g
                    ? "bg-red-500 text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {g === "male" ? "남성" : "여성"}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <NumberWheel
            min={30} max={200} value={weight} onChange={setWeight}
            step={1} label="체중" unit="kg" width={90}
            accentClass="bg-health/10 dark:bg-health/20"
          />
        </div>
      </div>

      {/* 음주 정보 */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-50">음주 정보</h2>

        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">음주 종류</label>
          <div className="grid grid-cols-2 gap-2">
            {PRESETS.map((p, i) => (
              <button
                key={i}
                onClick={() => { setSelectedPreset(i); setUseCustom(false); }}
                className={`rounded-xl py-3 text-sm font-medium transition-colors ${
                  !useCustom && selectedPreset === i
                    ? "bg-red-500 text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                <div>{p.label}</div>
                <div className="text-xs opacity-75">{p.pct}%</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <button
            onClick={() => setUseCustom(!useCustom)}
            className={`w-full rounded-xl py-2.5 text-sm font-medium transition-colors ${
              useCustom
                ? "bg-orange-500 text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
          >
            직접 입력
          </button>
          {useCustom && (
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-xs text-gray-500">음료량 (mL)</label>
                <input
                  type="number"
                  min={1}
                  max={5000}
                  value={customMl}
                  onChange={(e) => setCustomMl(Number(e.target.value))}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-gray-500">도수 (%)</label>
                <input
                  type="number"
                  min={0.1}
                  max={100}
                  step={0.1}
                  value={customPct}
                  onChange={(e) => setCustomPct(Number(e.target.value))}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            잔 수: <span className="text-red-500 font-bold">{cups}잔</span>
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCups(Math.max(1, cups - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
            >
              -
            </button>
            <input
              type="range"
              min={1}
              max={20}
              value={cups}
              onChange={(e) => setCups(Number(e.target.value))}
              className="flex-1 accent-red-500"
            />
            <button
              onClick={() => setCups(Math.min(20, cups + 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            음주 후 경과 시간: <span className="text-red-500 font-bold">{hours}시간</span>
          </label>
          <input
            type="range"
            min={0}
            max={24}
            step={0.5}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full accent-red-500"
          />
          <div className="mt-1 flex justify-between text-xs text-gray-400">
            <span>0시간</span>
            <span>12시간</span>
            <span>24시간</span>
          </div>
        </div>
      </div>

      {/* 결과 */}
      <div className={`rounded-xl border p-5 sm:p-6 shadow-lg ${status.bg} ${status.border}`}>
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-50">측정 결과</h2>

        <div className="mb-4 text-center">
          <div className={`text-5xl font-extrabold ${status.color}`}>
            {bac.toFixed(3)}%
          </div>
          <div className={`mt-2 text-xl font-bold ${status.color}`}>
            {status.label}
          </div>
        </div>

        {result && result.decompositionHours > 0 && (
          <div className="mb-4 text-center text-sm text-gray-600 dark:text-gray-400">
            완전 분해 예상 시간: <span className="font-bold text-gray-900 dark:text-gray-100">
              약 {Math.ceil(result.decompositionHours * 10) / 10}시간
            </span>
          </div>
        )}

        <div className="space-y-2 rounded-lg bg-white/60 p-4 text-sm dark:bg-gray-900/60">
          <h3 className="font-bold text-gray-900 dark:text-gray-100">한국 음주운전 처벌 기준</h3>
          <div className={`flex items-start gap-2 ${bac >= 0.03 ? "font-bold text-yellow-700 dark:text-yellow-400" : "text-gray-600 dark:text-gray-400"}`}>
            <span>0.03% 이상:</span>
            <span>면허정지 + 벌금</span>
          </div>
          <div className={`flex items-start gap-2 ${bac >= 0.08 ? "font-bold text-red-700 dark:text-red-400" : "text-gray-600 dark:text-gray-400"}`}>
            <span>0.08% 이상:</span>
            <span>면허취소 + 형사처벌</span>
          </div>
          <div className={`flex items-start gap-2 ${bac >= 0.2 ? "font-bold text-red-800 dark:text-red-300" : "text-gray-600 dark:text-gray-400"}`}>
            <span>0.20% 이상:</span>
            <span>가중처벌</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm font-medium text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
        <span className="mr-1">&#9888;&#65039;</span>
        이 계산기는 참고용이며, 음주 후 운전은 절대 금물입니다.
        <br />
        실제 혈중 알코올 농도는 개인차가 크므로 정확한 수치가 아닙니다.
      </div>
    </div>
  );
}
