"use client";

import { useState, useMemo } from "react";
import { formatNumber, formatWon, formatKoreanWon } from "@/lib/format-ko";

const A_VALUE = 2_860_000; // 2026년 전체가입자 평균소득월액 (약 286만원)
const PENSION_RATE = 0.09; // 연금보험료율 9%
const EMPLOYEE_RATE = 0.045; // 본인부담 4.5%
const PENSION_START_AGE = 65; // 수령 시작 나이

// 기본연금액 계산 (간소화 버전)
// 기본연금액 = (A + B) × P × (1.2 / 40 + 0.05 × (P - 20) / P) 의 간소화
// 더 단순한 공식: 기본연금액 = (A + B) × 가입기간 × 계수
// 여기서는 국민연금공단 간이 공식 사용
function calcBasicPension(
  avgMonthlyIncome: number,
  contributionYears: number
): number {
  // A: 전체 가입자 평균소득월액, B: 본인 평균소득월액
  const B = avgMonthlyIncome;
  // 기본연금액 = (A + B) × 가입기간 × (1.2 / 가입기간상수)
  // 2026년 기준 소득대체율 약 41.5% → 20년 기준
  // 간소화: (A + B) × 가입기간 × (소득대체율 / 2 / 기준가입기간)
  // = (A + B) × 가입기간 × (0.415 / 2 / 20) ≈ 0.010375
  const yearlyRate = 0.010375; // 가입기간 1년당 계수
  const basicPension = (A_VALUE + B) * contributionYears * yearlyRate;
  return Math.round(basicPension);
}

export default function PensionCalc() {
  const [currentAge, setCurrentAge] = useState(35);
  const [monthlyIncome, setMonthlyIncome] = useState(300); // 만원 단위
  const [contributionYears, setContributionYears] = useState(20);
  const result = useMemo(() => {
    if (monthlyIncome <= 0 || contributionYears <= 0) return null;

    const monthlyIncomeWon = monthlyIncome * 10000; // 만원 → 원
    const monthlyPremium = Math.round(monthlyIncomeWon * PENSION_RATE);
    const employeePremium = Math.round(monthlyIncomeWon * EMPLOYEE_RATE);
    const totalPaid = employeePremium * contributionYears * 12;

    const estimatedMonthly = calcBasicPension(monthlyIncomeWon, contributionYears);

    const startAge = PENSION_START_AGE;
    // 65세부터 평균수명 83세까지 18년간 수령 가정
    const expectedReceiveYears = 18;
    const totalReceive = estimatedMonthly * 12 * expectedReceiveYears;
    const ratio = totalPaid > 0 ? totalReceive / totalPaid : 0;

    const yearsUntilStart = Math.max(0, startAge - currentAge);

    return {
      estimatedMonthly,
      startAge,
      monthlyPremium,
      employeePremium,
      totalPaid,
      totalReceive,
      ratio,
      expectedReceiveYears,
      yearsUntilStart,
    };
  }, [currentAge, monthlyIncome, contributionYears]);

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50";
  const cardClass =
    "rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900";

  return (
    <div className="space-y-6">
      {/* 입력 */}
      <div className={`${cardClass} p-5 sm:p-6`}>
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            현재 나이
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              value={currentAge}
              onChange={(e) => {
                const v = Number(e.target.value.replace(/[^0-9]/g, ""));
                if (!isNaN(v) && v <= 100) setCurrentAge(v);
              }}
              className={`${inputClass} text-right text-lg font-semibold`}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              세
            </span>
          </div>
        </div>

        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            월 평균 소득
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(monthlyIncome)}
              onChange={(e) => {
                const v = Number(e.target.value.replace(/[^0-9]/g, ""));
                if (!isNaN(v)) setMonthlyIncome(v);
              }}
              className={`${inputClass} text-right text-lg font-semibold`}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              만원
            </span>
          </div>
          <p className="mt-1 text-xs text-gray-400">
            {formatKoreanWon(monthlyIncome * 10000)}
          </p>
        </div>

        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            국민연금 가입 기간
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              value={contributionYears}
              onChange={(e) => {
                const v = Number(e.target.value.replace(/[^0-9]/g, ""));
                if (!isNaN(v) && v <= 50) setContributionYears(v);
              }}
              className={`${inputClass} text-right text-lg font-semibold`}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              년
            </span>
          </div>
        </div>

        <div className="mb-2">
          <p className="text-xs text-gray-400">
            * 국민연금 수령 시작 나이: 만 {PENSION_START_AGE}세 (1969년 이후 출생 기준)
          </p>
        </div>
      </div>

      {/* 결과 */}
      {result && (
        <div className={`${cardClass} p-5 sm:p-6`}>
          {/* 핵심 결과 */}
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              예상 월 수령액
            </p>
            <p className="text-3xl font-extrabold text-blue-600 sm:text-4xl dark:text-blue-400">
              {formatWon(result.estimatedMonthly)}
            </p>
            <p className="mt-1 text-xs text-gray-400">
              {formatKoreanWon(result.estimatedMonthly)}
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {result.startAge}세부터 수령 시작 (약 {result.yearsUntilStart}년 후)
            </p>
          </div>

          {/* 요약 그리드 */}
          <div className="mb-5 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">
                월 연금보험료 (본인)
              </p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.employeePremium)}
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">
                월 연금보험료 (전체)
              </p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.monthlyPremium)}
              </p>
            </div>
          </div>

          {/* 수령 대비 납부 비율 바 */}
          <div className="mb-6">
            <div className="mb-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>수령/납부 비율</span>
              <span>{(result.ratio * 100).toFixed(1)}%</span>
            </div>
            <div className="flex h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="bg-blue-500 transition-all"
                style={{ width: `${Math.min(result.ratio * 100, 100)}%` }}
              />
            </div>
            <p className="mt-1 text-xs text-gray-400">
              납부한 금액 대비 {result.ratio >= 1 ? "더 많이" : "더 적게"} 받는 구조
            </p>
          </div>

          {/* 상세 내역 */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              계산 내역
            </h3>
            {[
              { label: "월 평균 소득", value: monthlyIncome * 10000 },
              { label: "월 연금보험료 (본인 4.5%)", value: result.employeePremium },
              { label: "월 연금보험료 (전체 9%)", value: result.monthlyPremium },
              { label: `총 납부액 (${contributionYears}년)`, value: result.totalPaid },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {formatWon(item.value)}
                </span>
              </div>
            ))}
            <div className="mt-2 border-t border-gray-200 pt-2 dark:border-gray-700" />
            <div className="flex items-center justify-between rounded-lg bg-blue-50 px-4 py-2.5 dark:bg-blue-900/30">
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                예상 월 수령액
              </span>
              <span className="text-sm font-bold text-blue-700 dark:text-blue-300">
                {formatWon(result.estimatedMonthly)}
              </span>
            </div>
            {(
              [
                { label: "수령 시작 나이", display: `${result.startAge}세` },
                {
                  label: `예상 총 수령액 (${result.expectedReceiveYears}년)`,
                  display: formatWon(result.totalReceive),
                },
                { label: "총 납부액 (본인부담)", display: formatWon(result.totalPaid) },
                { label: "수령/납부 비율", display: `${(result.ratio * 100).toFixed(1)}%` },
              ] as const
            ).map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {item.display}
                </span>
              </div>
            ))}
          </div>

          {/* 참고 사항 */}
          <div className="mt-6 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-xs text-amber-700 dark:text-amber-300">
              * 본 계산은 2026년 기준 간소화된 공식을 사용한 예상치입니다.
              실제 수령액은 물가 상승률, 소득 변동, 제도 변경 등에 따라 달라질 수 있습니다.
              정확한 금액은 국민연금공단(1355)에서 확인하세요.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
