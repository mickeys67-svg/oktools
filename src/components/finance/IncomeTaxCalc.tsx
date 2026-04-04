"use client";

import { useState, useMemo } from "react";
import { formatNumber, formatWon, formatKoreanWon, formatPercent } from "@/lib/format-ko";
import NumberWheel from "@/components/ui/NumberWheel";

type IncomeType = "salary" | "business" | "freelancer";

const TAX_BRACKETS = [
  { limit: 14_000_000, rate: 0.06, deduction: 0 },
  { limit: 50_000_000, rate: 0.15, deduction: 1_260_000 },
  { limit: 88_000_000, rate: 0.24, deduction: 5_760_000 },
  { limit: 150_000_000, rate: 0.35, deduction: 15_440_000 },
  { limit: 300_000_000, rate: 0.38, deduction: 19_940_000 },
  { limit: 500_000_000, rate: 0.40, deduction: 25_940_000 },
  { limit: 1_000_000_000, rate: 0.42, deduction: 35_940_000 },
  { limit: Infinity, rate: 0.45, deduction: 65_940_000 },
];

function calcEarnedIncomeDeduction(income: number): number {
  if (income <= 5_000_000) return income * 0.7;
  if (income <= 15_000_000) return 3_500_000 + (income - 5_000_000) * 0.4;
  if (income <= 45_000_000) return 7_500_000 + (income - 15_000_000) * 0.15;
  if (income <= 100_000_000) return 12_000_000 + (income - 45_000_000) * 0.05;
  return 14_750_000 + (income - 100_000_000) * 0.02;
}

function calcIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 0) return 0;
  for (const bracket of TAX_BRACKETS) {
    if (taxableIncome <= bracket.limit) {
      return taxableIncome * bracket.rate - bracket.deduction;
    }
  }
  return 0;
}

function getBracketInfo(taxableIncome: number) {
  for (const bracket of TAX_BRACKETS) {
    if (taxableIncome <= bracket.limit) {
      return bracket;
    }
  }
  return TAX_BRACKETS[TAX_BRACKETS.length - 1];
}

const INCOME_TABS: { key: IncomeType; label: string }[] = [
  { key: "salary", label: "근로소득" },
  { key: "business", label: "사업소득" },
  { key: "freelancer", label: "프리랜서(3.3%)" },
];

export default function IncomeTaxCalc() {
  const [totalIncome, setTotalIncome] = useState(50_000_000);
  const [incomeType, setIncomeType] = useState<IncomeType>("salary");
  const [expenseRate, setExpenseRate] = useState(60);
  const [hasSpouse, setHasSpouse] = useState(false);
  const [dependentCount, setDependentCount] = useState(0);

  const result = useMemo(() => {
    if (totalIncome <= 0) return null;

    const personalDeduction = 1_500_000 + (hasSpouse ? 1_500_000 : 0) + dependentCount * 1_500_000;

    let incomeDeduction = 0;
    let incomeAmount = totalIncome;

    if (incomeType === "salary") {
      incomeDeduction = calcEarnedIncomeDeduction(totalIncome);
      incomeAmount = totalIncome - incomeDeduction;
    } else if (incomeType === "business") {
      incomeDeduction = Math.round(totalIncome * (expenseRate / 100));
      incomeAmount = totalIncome - incomeDeduction;
    } else {
      // freelancer 3.3%
      incomeDeduction = Math.round(totalIncome * (expenseRate / 100));
      incomeAmount = totalIncome - incomeDeduction;
    }

    const taxableIncome = Math.max(0, incomeAmount - personalDeduction);
    const incomeTax = Math.round(calcIncomeTax(taxableIncome));
    const localTax = Math.round(incomeTax * 0.1);
    const totalTax = incomeTax + localTax;
    const effectiveRate = totalIncome > 0 ? totalTax / totalIncome : 0;

    const prepaidTax = incomeType === "freelancer" ? Math.round(totalIncome * 0.033) : 0;

    const bracket = getBracketInfo(taxableIncome);

    return {
      totalIncome,
      incomeDeduction,
      incomeAmount,
      personalDeduction,
      taxableIncome,
      incomeTax,
      localTax,
      totalTax,
      effectiveRate,
      bracketRate: bracket.rate,
      prepaidTax,
    };
  }, [totalIncome, incomeType, expenseRate, hasSpouse, dependentCount]);

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50";
  const cardClass =
    "rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900";

  return (
    <div className="space-y-6">
      {/* 입력 */}
      <div className={`${cardClass} p-5 sm:p-6`}>
        {/* 소득 유형 탭 */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            소득 유형
          </label>
          <div className="flex rounded-xl bg-gray-100 p-1 dark:bg-gray-800">
            {INCOME_TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setIncomeType(tab.key)}
                className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-colors ${
                  incomeType === tab.key
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 총 수입금액 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            총 수입금액 (연간)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              ₩
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(totalIncome)}
              onChange={(e) => {
                const v = Number(e.target.value.replace(/[^0-9]/g, ""));
                if (!isNaN(v)) setTotalIncome(v);
              }}
              className={`${inputClass} pl-8 text-right text-lg font-semibold`}
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(totalIncome)}</p>
        </div>

        {/* 필요경비율 (사업소득/프리랜서) */}
        {(incomeType === "business" || incomeType === "freelancer") && (
          <div className="mb-5">
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
              필요경비율
            </label>
            <div className="flex justify-center">
              <NumberWheel
                min={0} max={100} step={1} value={expenseRate} onChange={setExpenseRate}
                unit="%"
                accentClass="bg-finance/10 dark:bg-finance/20"
              />
            </div>
          </div>
        )}

        {/* 인적공제 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            배우자 공제
          </label>
          <div className="flex gap-2">
            {[
              { label: "없음", value: false },
              { label: "있음", value: true },
            ].map((opt) => (
              <button
                key={String(opt.value)}
                onClick={() => setHasSpouse(opt.value)}
                className={`flex-1 rounded-xl py-2.5 text-sm font-medium transition-colors ${
                  hasSpouse === opt.value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-2">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            부양가족 수 (본인, 배우자 제외)
          </label>
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4, 5].map((d) => (
              <button
                key={d}
                onClick={() => setDependentCount(d)}
                className={`flex-1 rounded-xl py-2.5 text-sm font-medium transition-colors ${
                  dependentCount === d
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {d}명
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 결과 */}
      {result && (
        <div className={`${cardClass} p-5 sm:p-6`}>
          {/* 핵심 결과 */}
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">총 세금</p>
            <p className="text-3xl font-extrabold text-blue-600 sm:text-4xl dark:text-blue-400">
              {formatWon(result.totalTax)}
            </p>
            <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(result.totalTax)}</p>
          </div>

          {/* 실효세율 바 */}
          <div className="mb-6">
            <div className="mb-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>실효세율 {formatPercent(result.effectiveRate, 2)}</span>
              <span>적용 세율 {(result.bracketRate * 100).toFixed(0)}%</span>
            </div>
            <div className="flex h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="bg-blue-500 transition-all"
                style={{ width: `${result.effectiveRate * 100}%` }}
              />
            </div>
          </div>

          {/* 요약 그리드 */}
          <div className="mb-5 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">산출세액 (소득세)</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.incomeTax)}
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">지방소득세</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.localTax)}
              </p>
            </div>
          </div>

          {/* 상세 내역 */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">계산 내역</h3>
            {[
              { label: "총 수입금액", value: result.totalIncome },
              {
                label:
                  incomeType === "salary"
                    ? "근로소득공제"
                    : "필요경비",
                value: result.incomeDeduction,
              },
              { label: "소득금액", value: result.incomeAmount },
              { label: "인적공제", value: result.personalDeduction },
              { label: "과세표준", value: result.taxableIncome },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {formatWon(item.value)}
                </span>
              </div>
            ))}
            <div className="mt-2 border-t border-gray-200 pt-2 dark:border-gray-700" />
            {[
              { label: "산출세액 (소득세)", value: result.incomeTax },
              { label: "지방소득세 (10%)", value: result.localTax },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {formatWon(item.value)}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between rounded-lg bg-blue-50 px-4 py-2.5 dark:bg-blue-900/30">
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                총 세금
              </span>
              <span className="text-sm font-bold text-blue-700 dark:text-blue-300">
                {formatWon(result.totalTax)}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800">
              <span className="text-sm text-gray-600 dark:text-gray-400">실효세율</span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {formatPercent(result.effectiveRate, 2)}
              </span>
            </div>

            {incomeType === "freelancer" && result.prepaidTax > 0 && (
              <>
                <div className="mt-2 border-t border-gray-200 pt-2 dark:border-gray-700" />
                <div className="flex items-center justify-between rounded-lg bg-amber-50 px-4 py-2.5 dark:bg-amber-900/30">
                  <span className="text-sm text-amber-700 dark:text-amber-300">
                    기납부세액 (3.3%)
                  </span>
                  <span className="text-sm font-medium text-amber-700 dark:text-amber-300">
                    {formatWon(result.prepaidTax)}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-green-50 px-4 py-2.5 dark:bg-green-900/30">
                  <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                    {result.totalTax - result.prepaidTax > 0 ? "추가 납부액" : "환급 예상액"}
                  </span>
                  <span className="text-sm font-bold text-green-700 dark:text-green-300">
                    {formatWon(Math.abs(result.totalTax - result.prepaidTax))}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* 세율 구간표 */}
          <div className="mt-6">
            <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              2025년 종합소득세 세율표
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="py-2 text-left font-medium text-gray-500 dark:text-gray-400">
                      과세표준
                    </th>
                    <th className="py-2 text-right font-medium text-gray-500 dark:text-gray-400">
                      세율
                    </th>
                    <th className="py-2 text-right font-medium text-gray-500 dark:text-gray-400">
                      누진공제
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { range: "1,400만원 이하", rate: "6%", deduction: "-" },
                    { range: "1,400~5,000만원", rate: "15%", deduction: "126만원" },
                    { range: "5,000~8,800만원", rate: "24%", deduction: "576만원" },
                    { range: "8,800만~1.5억원", rate: "35%", deduction: "1,544만원" },
                    { range: "1.5억~3억원", rate: "38%", deduction: "1,994만원" },
                    { range: "3억~5억원", rate: "40%", deduction: "2,594만원" },
                    { range: "5억~10억원", rate: "42%", deduction: "3,594만원" },
                    { range: "10억원 초과", rate: "45%", deduction: "6,594만원" },
                  ].map((row, i) => {
                    const isActive =
                      result.taxableIncome > 0 &&
                      i ===
                        TAX_BRACKETS.findIndex((b) => result.taxableIncome <= b.limit);
                    return (
                      <tr
                        key={row.range}
                        className={`border-b border-gray-100 dark:border-gray-800 ${
                          isActive ? "bg-blue-50 dark:bg-blue-900/20" : ""
                        }`}
                      >
                        <td className="py-2 text-gray-700 dark:text-gray-300">{row.range}</td>
                        <td className="py-2 text-right font-medium text-gray-900 dark:text-gray-100">
                          {row.rate}
                        </td>
                        <td className="py-2 text-right text-gray-500 dark:text-gray-400">
                          {row.deduction}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
