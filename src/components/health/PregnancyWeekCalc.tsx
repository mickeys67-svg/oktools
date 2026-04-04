"use client";

import { useState, useMemo } from "react";

const FETAL_SIZE: Record<number, { size: string; weight: string; fruit: string }> = {
  4: { size: "0.1cm", weight: "-", fruit: "양귀비씨" },
  5: { size: "0.2cm", weight: "-", fruit: "참깨" },
  6: { size: "0.5cm", weight: "-", fruit: "렌즈콩" },
  7: { size: "1.3cm", weight: "-", fruit: "블루베리" },
  8: { size: "1.6cm", weight: "1g", fruit: "강낭콩" },
  9: { size: "2.3cm", weight: "2g", fruit: "포도알" },
  10: { size: "3.1cm", weight: "4g", fruit: "금귤" },
  11: { size: "4.1cm", weight: "7g", fruit: "무화과" },
  12: { size: "5.4cm", weight: "14g", fruit: "라임" },
  13: { size: "7.4cm", weight: "23g", fruit: "레몬" },
  14: { size: "8.7cm", weight: "43g", fruit: "복숭아" },
  15: { size: "10.1cm", weight: "70g", fruit: "사과" },
  16: { size: "11.6cm", weight: "100g", fruit: "아보카도" },
  17: { size: "13cm", weight: "140g", fruit: "배" },
  18: { size: "14.2cm", weight: "190g", fruit: "고구마" },
  19: { size: "15.3cm", weight: "240g", fruit: "망고" },
  20: { size: "25.6cm", weight: "300g", fruit: "바나나" },
  24: { size: "30cm", weight: "600g", fruit: "옥수수" },
  28: { size: "37.6cm", weight: "1kg", fruit: "가지" },
  32: { size: "42.4cm", weight: "1.7kg", fruit: "코코넛" },
  36: { size: "47.4cm", weight: "2.6kg", fruit: "멜론" },
  40: { size: "51.2cm", weight: "3.4kg", fruit: "수박" },
};

function getClosestFetalSize(week: number) {
  const weeks = Object.keys(FETAL_SIZE).map(Number).sort((a, b) => a - b);
  let closest = weeks[0];
  for (const w of weeks) {
    if (w <= week) closest = w;
    else break;
  }
  return { week: closest, ...FETAL_SIZE[closest] };
}

export default function PregnancyWeekCalc() {
  const [lmpDate, setLmpDate] = useState("");

  const result = useMemo(() => {
    if (!lmpDate) return null;
    const lmp = new Date(lmpDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    lmp.setHours(0, 0, 0, 0);

    if (lmp > today) return null;

    const diffMs = today.getTime() - lmp.getTime();
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (totalDays > 300) return null; // beyond 42 weeks+

    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;

    // EDD = LMP + 280 days
    const edd = new Date(lmp);
    edd.setDate(edd.getDate() + 280);

    const remainingDays = Math.max(
      0,
      Math.ceil((edd.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    );

    const progressPercent = Math.min((totalDays / 280) * 100, 100);

    let trimester: string;
    if (weeks < 13) trimester = "1삼분기 (초기)";
    else if (weeks < 27) trimester = "2삼분기 (중기)";
    else trimester = "3삼분기 (후기)";

    const fetal = weeks >= 4 ? getClosestFetalSize(weeks) : null;

    return {
      weeks,
      days,
      totalDays,
      edd,
      remainingDays,
      progressPercent,
      trimester,
      fetal,
    };
  }, [lmpDate]);

  const formatDate = (d: Date) =>
    `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
          마지막 생리 시작일 (LMP)
        </label>
        <input
          type="date"
          value={lmpDate}
          onChange={(e) => setLmpDate(e.target.value)}
          max={new Date().toISOString().split("T")[0]}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-health focus:ring-1 focus:ring-health dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
      </div>

      {result && (
        <div className="animate-fade-in-up space-y-4">
          {/* Main result */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-5 text-center">
              <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">현재 임신 주수</p>
              <p className="text-4xl font-extrabold text-health sm:text-5xl">
                {result.weeks}주 {result.days}일
              </p>
              <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                {result.trimester}
              </p>
            </div>

            {/* Progress bar */}
            <div className="mb-5">
              <div className="mb-1 flex justify-between text-xs text-gray-500">
                <span>0주</span>
                <span>40주</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-full rounded-full bg-health transition-all"
                  style={{ width: `${result.progressPercent}%` }}
                />
              </div>
              <p className="mt-1 text-center text-xs text-gray-500">
                진행률 {result.progressPercent.toFixed(1)}%
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">출산 예정일</p>
                <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                  {formatDate(result.edd)}
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">남은 일수</p>
                <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                  {result.remainingDays}일
                </p>
              </div>
            </div>
          </div>

          {/* Fetal size */}
          {result.fetal && (
            <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                태아 크기 참고 ({result.fetal.week}주 기준)
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
                  <p className="text-xs text-gray-500">크기</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{result.fetal.size}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
                  <p className="text-xs text-gray-500">무게</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{result.fetal.weight}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
                  <p className="text-xs text-gray-500">비유</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{result.fetal.fruit}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
