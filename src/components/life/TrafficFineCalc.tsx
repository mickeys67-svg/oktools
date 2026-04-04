"use client";

import { useState, useMemo } from "react";
import NumberWheel from "@/components/ui/NumberWheel";

type Tab = "speed" | "parking";
type RoadType = "general" | "highway" | "school";

interface ParkingViolation {
  label: string;
  fine: number;
}

const PARKING_VIOLATIONS: ParkingViolation[] = [
  { label: "일반 주정차위반", fine: 40000 },
  { label: "소화전 근처", fine: 50000 },
  { label: "버스전용차로", fine: 50000 },
  { label: "장애인구역", fine: 100000 },
  { label: "어린이보호구역", fine: 120000 },
  { label: "소방차전용", fine: 1000000 },
];

function getSpeedFine(roadType: RoadType, over: number): { fine: number; penalty: number } {
  if (over <= 0) return { fine: 0, penalty: 0 };

  let fine = 0;
  let penalty = 0;

  if (roadType === "highway") {
    if (over <= 20) { fine = 30000; penalty = 0; }
    else if (over <= 40) { fine = 60000; penalty = 15; }
    else if (over <= 60) { fine = 90000; penalty = 30; }
    else { fine = 120000; penalty = 60; }
  } else if (roadType === "general") {
    if (over <= 20) { fine = 40000; penalty = 0; }
    else if (over <= 40) { fine = 70000; penalty = 15; }
    else if (over <= 60) { fine = 100000; penalty = 30; }
    else { fine = 130000; penalty = 60; }
  } else {
    // school zone: double
    if (over <= 20) { fine = 80000; penalty = 0; }
    else if (over <= 40) { fine = 140000; penalty = 30; }
    else if (over <= 60) { fine = 200000; penalty = 60; }
    else { fine = 260000; penalty = 120; }
  }

  return { fine, penalty };
}

export default function TrafficFineCalc() {
  const [tab, setTab] = useState<Tab>("speed");

  // Speed tab
  const [roadType, setRoadType] = useState<RoadType>("general");
  const [speedLimit, setSpeedLimit] = useState(60);
  const [actualSpeed, setActualSpeed] = useState(90);

  // Parking tab
  const [parkingIdx, setParkingIdx] = useState(0);

  const speedResult = useMemo(() => {
    const over = actualSpeed - speedLimit;
    if (over <= 0) return { over: 0, fine: 0, penalty: 0, warning: "" };
    const { fine, penalty } = getSpeedFine(roadType, over);
    let warning = "";
    if (penalty >= 40) warning = "면허정지 기준 (누적 40점 이상) 주의";
    if (penalty >= 60 || over >= 100) warning = "면허취소 가능 (1회 위반 시)";
    return { over, fine, penalty, warning };
  }, [roadType, speedLimit, actualSpeed]);

  const parkingFine = PARKING_VIOLATIONS[parkingIdx].fine;
  const parkingDiscount = Math.floor(parkingFine * 0.8);

  return (
    <div className="space-y-6">
      {/* Tab selector */}
      <div className="flex gap-2">
        {(["speed", "parking"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 rounded-xl py-3 text-sm font-bold transition-colors ${
              tab === t
                ? "bg-red-500 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400"
            }`}
          >
            {t === "speed" ? "속도위반" : "주정차위반"}
          </button>
        ))}
      </div>

      {tab === "speed" ? (
        <>
          {/* Road type */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-3 text-sm font-bold text-gray-900 dark:text-gray-50">도로 유형</h2>
            <div className="flex gap-2">
              {([
                { id: "general" as RoadType, label: "일반도로" },
                { id: "highway" as RoadType, label: "고속도로" },
                { id: "school" as RoadType, label: "어린이보호구역" },
              ]).map((r) => (
                <button
                  key={r.id}
                  onClick={() => setRoadType(r.id)}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-colors ${
                    roadType === r.id
                      ? "bg-red-50 text-red-600 ring-2 ring-red-300 dark:bg-red-950 dark:text-red-400"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Speed inputs */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <div className="flex justify-center gap-6">
              <NumberWheel
                min={20}
                max={120}
                step={10}
                value={Math.round(speedLimit / 10) * 10}
                onChange={setSpeedLimit}
                label="제한속도"
                unit="km/h"
                width={90}
                accentClass="bg-life/10 dark:bg-life/20"
              />
              <NumberWheel
                min={20}
                max={200}
                step={5}
                value={Math.round(actualSpeed / 5) * 5}
                onChange={setActualSpeed}
                label="실제속도"
                unit="km/h"
                width={90}
                accentClass="bg-life/10 dark:bg-life/20"
              />
            </div>
            <div className="mt-3 rounded-lg bg-gray-50 px-4 py-2 text-center dark:bg-gray-800">
              <span className="text-xs text-gray-500">초과속도</span>
              <span className="ml-2 text-lg font-bold text-red-600">
                {speedResult.over > 0 ? `+${speedResult.over}` : 0} km/h
              </span>
            </div>
          </div>

          {/* Speed result */}
          {speedResult.over > 0 && (
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-4 text-base font-bold text-gray-900 dark:text-gray-50">조회 결과</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-red-50 p-4 text-center dark:bg-red-950">
                  <div className="text-xs text-gray-500 dark:text-gray-400">과태료</div>
                  <div className="mt-1 text-xl font-extrabold text-red-600 dark:text-red-400">
                    {speedResult.fine.toLocaleString("ko-KR")}원
                  </div>
                </div>
                <div className="rounded-lg bg-orange-50 p-4 text-center dark:bg-orange-950">
                  <div className="text-xs text-gray-500 dark:text-gray-400">벌점</div>
                  <div className="mt-1 text-xl font-extrabold text-orange-600 dark:text-orange-400">
                    {speedResult.penalty}점
                  </div>
                </div>
              </div>
              {speedResult.warning && (
                <div className="mt-3 rounded-lg bg-red-100 px-4 py-3 text-center text-sm font-semibold text-red-700 dark:bg-red-900 dark:text-red-300">
                  {speedResult.warning}
                </div>
              )}
            </div>
          )}

          {speedResult.over <= 0 && (
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <p className="text-sm text-gray-500">속도위반이 아닙니다. 안전운전하세요!</p>
            </div>
          )}

          {/* Reference table */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-3 text-sm font-bold text-gray-900 dark:text-gray-50">속도위반 과태료 기준표 (2024)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="py-2 text-left font-medium text-gray-500">초과속도</th>
                    <th className="py-2 text-right font-medium text-gray-500">일반도로</th>
                    <th className="py-2 text-right font-medium text-gray-500">고속도로</th>
                    <th className="py-2 text-right font-medium text-gray-500">어린이보호구역</th>
                    <th className="py-2 text-right font-medium text-gray-500">벌점</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2">20km/h 이하</td>
                    <td className="py-2 text-right">4만원</td>
                    <td className="py-2 text-right">3만원</td>
                    <td className="py-2 text-right">8만원</td>
                    <td className="py-2 text-right">-</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2">20~40km/h</td>
                    <td className="py-2 text-right">7만원</td>
                    <td className="py-2 text-right">6만원</td>
                    <td className="py-2 text-right">14만원</td>
                    <td className="py-2 text-right">15점</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2">40~60km/h</td>
                    <td className="py-2 text-right">10만원</td>
                    <td className="py-2 text-right">9만원</td>
                    <td className="py-2 text-right">20만원</td>
                    <td className="py-2 text-right">30점</td>
                  </tr>
                  <tr>
                    <td className="py-2">60km/h 초과</td>
                    <td className="py-2 text-right">13만원</td>
                    <td className="py-2 text-right">12만원</td>
                    <td className="py-2 text-right">26만원</td>
                    <td className="py-2 text-right">60점</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Parking violation */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-3 text-sm font-bold text-gray-900 dark:text-gray-50">위반 유형</h2>
            <select
              value={parkingIdx}
              onChange={(e) => setParkingIdx(Number(e.target.value))}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
            >
              {PARKING_VIOLATIONS.map((v, i) => (
                <option key={i} value={i}>
                  {v.label}
                </option>
              ))}
            </select>
          </div>

          {/* Parking result */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-base font-bold text-gray-900 dark:text-gray-50">조회 결과</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-red-50 p-4 text-center dark:bg-red-950">
                <div className="text-xs text-gray-500 dark:text-gray-400">과태료</div>
                <div className="mt-1 text-xl font-extrabold text-red-600 dark:text-red-400">
                  {parkingFine.toLocaleString("ko-KR")}원
                </div>
              </div>
              <div className="rounded-lg bg-green-50 p-4 text-center dark:bg-green-950">
                <div className="text-xs text-gray-500 dark:text-gray-400">사전납부 시 (20% 감경)</div>
                <div className="mt-1 text-xl font-extrabold text-green-600 dark:text-green-400">
                  {parkingDiscount.toLocaleString("ko-KR")}원
                </div>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-blue-50 px-4 py-3 text-xs text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              사전납부 기한 내 납부 시 과태료의 20%가 감경됩니다. 납부 기한 경과 시 가산금이 부과될 수 있습니다.
            </div>
          </div>

          {/* Parking reference */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-3 text-sm font-bold text-gray-900 dark:text-gray-50">주정차위반 과태료 기준표</h2>
            <div className="space-y-2">
              {PARKING_VIOLATIONS.map((v, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between rounded-lg px-4 py-2.5 ${
                    i === parkingIdx ? "bg-red-50 dark:bg-red-950" : "bg-gray-50 dark:bg-gray-800"
                  }`}
                >
                  <span className="text-sm text-gray-700 dark:text-gray-300">{v.label}</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                    {v.fine.toLocaleString("ko-KR")}원
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
