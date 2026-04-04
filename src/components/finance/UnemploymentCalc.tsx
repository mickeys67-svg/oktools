"use client";

import { useState, useMemo } from "react";
import { formatNumber, formatWon, formatKoreanWon } from "@/lib/format-ko";
import NumberWheel from "@/components/ui/NumberWheel";

// 지급기간 (일) - [50세 미만, 50세 이상/장애인]
const DURATION_TABLE: { minYears: number; maxYears: number; under50: number; over50: number }[] = [
  { minYears: 0, maxYears: 1, under50: 120, over50: 120 },
  { minYears: 1, maxYears: 3, under50: 150, over50: 180 },
  { minYears: 3, maxYears: 5, under50: 180, over50: 210 },
  { minYears: 5, maxYears: 10, under50: 210, over50: 240 },
  { minYears: 10, maxYears: Infinity, under50: 240, over50: 270 },
];

const DAILY_MAX = 66_000;
const DAILY_MIN_8H = 63_104; // 최저임금 80% x 8시간 기준

function getDuration(insuranceYears: number, isOver50: boolean): number {
  for (const row of DURATION_TABLE) {
    if (insuranceYears >= row.minYears && insuranceYears < row.maxYears) {
      return isOver50 ? row.over50 : row.under50;
    }
  }
  return isOver50 ? 270 : 240;
}

export default function UnemploymentCalc() {
  const [monthlySalary, setMonthlySalary] = useState(3_000_000);
  const [age, setAge] = useState(35);
  const [insuranceYears, setInsuranceYears] = useState(3);
  const [dailyHours, setDailyHours] = useState(8);

  const result = useMemo(() => {
    if (monthlySalary <= 0) return null;

    const isOver50 = age >= 50;
    const avgDays = 91; // 3개월 = 약 91일
    const dailyWage = Math.round((monthlySalary * 3) / avgDays);
    let dailyBenefit = Math.round(dailyWage * 0.6);

    // 근무시간 비례 하한액
    const dailyMin = Math.round((DAILY_MIN_8H / 8) * Math.min(dailyHours, 8));

    if (dailyBenefit > DAILY_MAX) dailyBenefit = DAILY_MAX;
    if (dailyBenefit < dailyMin) dailyBenefit = dailyMin;

    const duration = getDuration(insuranceYears, isOver50);
    const totalBenefit = dailyBenefit * duration;
    const monthlyBenefit = Math.round(dailyBenefit * 30);

    return {
      dailyWage,
      dailyBenefit,
      dailyMin,
      duration,
      totalBenefit,
      monthlyBenefit,
      isOver50,
    };
  }, [monthlySalary, age, insuranceYears, dailyHours]);

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50";
  const cardClass =
    "rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900";

  return (
    <div className="space-y-6">
      {/* 입력 */}
      <div className={`${cardClass} p-5 sm:p-6`}>
        {/* 퇴직 전 3개월 평균 월급 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            퇴직 전 3개월 평균 월급
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              ₩
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(monthlySalary)}
              onChange={(e) => {
                const v = Number(e.target.value.replace(/[^0-9]/g, ""));
                if (!isNaN(v)) setMonthlySalary(v);
              }}
              className={`${inputClass} pl-8 text-right text-lg font-semibold`}
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(monthlySalary)}</p>
        </div>

        {/* 나이 / 가입기간 / 근무시간 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            만 나이 / 가입기간 / 근무시간
          </label>
          <div className="flex justify-center gap-2">
            <NumberWheel
              min={18} max={70} step={1} value={age} onChange={setAge}
              unit="세"
              accentClass="bg-finance/10 dark:bg-finance/20"
            />
            <NumberWheel
              min={0} max={40} step={1} value={insuranceYears} onChange={setInsuranceYears}
              unit="년"
              accentClass="bg-finance/10 dark:bg-finance/20"
            />
            <NumberWheel
              min={1} max={12} step={1} value={dailyHours} onChange={setDailyHours}
              unit="시간"
              accentClass="bg-finance/10 dark:bg-finance/20"
            />
          </div>
          <p className="mt-1 text-center text-xs text-gray-400">
            {age >= 50 ? "50세 이상 (확대 지급기간 적용)" : "50세 미만"}
          </p>
        </div>
      </div>

      {/* 결과 */}
      {result && (
        <div className={`${cardClass} p-5 sm:p-6`}>
          {/* 핵심 결과 */}
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">총 예상 수령액</p>
            <p className="text-3xl font-extrabold text-blue-600 sm:text-4xl dark:text-blue-400">
              {formatWon(result.totalBenefit)}
            </p>
            <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(result.totalBenefit)}</p>
          </div>

          {/* 요약 그리드 */}
          <div className="mb-5 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">1일 실업급여액</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.dailyBenefit)}
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">월 환산액</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.monthlyBenefit)}
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">지급 기간</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {result.duration}일
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">1일 평균임금</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.dailyWage)}
              </p>
            </div>
          </div>

          {/* 상세 */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">계산 상세</h3>
            {[
              { label: "퇴직 전 3개월 평균 월급", value: formatWon(monthlySalary) },
              { label: "1일 평균임금", value: formatWon(result.dailyWage) },
              { label: "1일 실업급여 (평균임금 x 60%)", value: formatWon(result.dailyBenefit) },
              { label: "1일 상한액", value: formatWon(DAILY_MAX) },
              { label: "1일 하한액 (근무시간 비례)", value: formatWon(result.dailyMin) },
              { label: "지급 기간", value: `${result.duration}일` },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {item.value}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between rounded-lg bg-blue-50 px-4 py-2.5 dark:bg-blue-900/30">
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                총 예상 수령액
              </span>
              <span className="text-sm font-bold text-blue-700 dark:text-blue-300">
                {formatWon(result.totalBenefit)}
              </span>
            </div>
          </div>

          {/* 지급기간 표 */}
          <div className="mt-6">
            <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              실업급여 지급기간 (2026년)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="py-2 text-left font-medium text-gray-500 dark:text-gray-400">
                      가입기간
                    </th>
                    <th className="py-2 text-right font-medium text-gray-500 dark:text-gray-400">
                      50세 미만
                    </th>
                    <th className="py-2 text-right font-medium text-gray-500 dark:text-gray-400">
                      50세 이상
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { range: "1년 미만", under50: "120일", over50: "120일" },
                    { range: "1~3년", under50: "150일", over50: "180일" },
                    { range: "3~5년", under50: "180일", over50: "210일" },
                    { range: "5~10년", under50: "210일", over50: "240일" },
                    { range: "10년 이상", under50: "240일", over50: "270일" },
                  ].map((row, i) => {
                    const isActive =
                      DURATION_TABLE[i] &&
                      insuranceYears >= DURATION_TABLE[i].minYears &&
                      insuranceYears < DURATION_TABLE[i].maxYears;
                    return (
                      <tr
                        key={row.range}
                        className={`border-b border-gray-100 dark:border-gray-800 ${
                          isActive ? "bg-blue-50 dark:bg-blue-900/20" : ""
                        }`}
                      >
                        <td className="py-2 text-gray-700 dark:text-gray-300">{row.range}</td>
                        <td
                          className={`py-2 text-right font-medium ${
                            isActive && !result.isOver50
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-gray-900 dark:text-gray-100"
                          }`}
                        >
                          {row.under50}
                        </td>
                        <td
                          className={`py-2 text-right font-medium ${
                            isActive && result.isOver50
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-gray-900 dark:text-gray-100"
                          }`}
                        >
                          {row.over50}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* 수급자격 안내 */}
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
            <h3 className="mb-2 text-sm font-semibold text-amber-800 dark:text-amber-300">
              수급자격 안내
            </h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-amber-700 dark:text-amber-400">
              <li>이직일 이전 18개월 중 고용보험 가입기간이 180일 이상이어야 합니다.</li>
              <li>비자발적 퇴직 (권고사직, 계약만료 등)이어야 합니다.</li>
              <li>근로의 의사와 능력이 있고, 적극적으로 재취업 활동을 해야 합니다.</li>
              <li>수급자격 신청일 이전 1개월간 재취업 활동 실적이 있어야 합니다.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
