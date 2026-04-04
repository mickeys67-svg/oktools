"use client";

import { useState, useMemo } from "react";
import { formatNumber, formatWon, formatKoreanWon } from "@/lib/format-ko";

// 2026 양도소득세율 (종합소득세 누진세율 동일)
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

const BASIC_DEDUCTION = 2_500_000; // 기본공제 250만원

function calcCapitalGainsTax(params: {
  acquisitionPrice: number;
  sellingPrice: number;
  holdingYears: number;
  expenses: number;
  applyLongTermDeduction: boolean;
}) {
  const { acquisitionPrice, sellingPrice, holdingYears, expenses, applyLongTermDeduction } = params;

  // 양도차익
  const capitalGain = sellingPrice - acquisitionPrice - expenses;
  if (capitalGain <= 0) {
    return {
      capitalGain,
      longTermDeductionRate: 0,
      longTermDeduction: 0,
      taxableIncome: 0,
      capitalGainsTax: 0,
      localTax: 0,
      totalTax: 0,
    };
  }

  // 장기보유특별공제 (일반 부동산: 3년 이상 보유 시 연 2%, 최대 30%)
  let longTermDeductionRate = 0;
  let longTermDeduction = 0;
  if (applyLongTermDeduction && holdingYears >= 3) {
    longTermDeductionRate = Math.min((holdingYears - 2) * 2, 30);
    longTermDeduction = Math.round(capitalGain * (longTermDeductionRate / 100));
  }

  // 과세표준 = 양도차익 - 장기보유특별공제 - 기본공제
  const taxableIncome = Math.max(0, capitalGain - longTermDeduction - BASIC_DEDUCTION);

  // 양도소득세 (누진세율 적용)
  let capitalGainsTax = 0;
  for (const bracket of TAX_BRACKETS) {
    if (taxableIncome <= bracket.limit) {
      capitalGainsTax = Math.round(taxableIncome * bracket.rate - bracket.deduction);
      break;
    }
  }
  capitalGainsTax = Math.max(0, capitalGainsTax);

  // 지방소득세 (양도소득세의 10%)
  const localTax = Math.round(capitalGainsTax * 0.1);

  return {
    capitalGain,
    longTermDeductionRate,
    longTermDeduction,
    taxableIncome,
    capitalGainsTax,
    localTax,
    totalTax: capitalGainsTax + localTax,
  };
}

export default function CapitalGainsTaxCalc() {
  const [acquisitionPrice, setAcquisitionPrice] = useState(300_000_000);
  const [sellingPrice, setSellingPrice] = useState(500_000_000);
  const [holdingYears, setHoldingYears] = useState(5);
  const [expenses, setExpenses] = useState(5_000_000);
  const [applyLongTermDeduction, setApplyLongTermDeduction] = useState(true);

  const result = useMemo(() => {
    if (acquisitionPrice < 0 || sellingPrice < 0 || holdingYears < 0) return null;
    return calcCapitalGainsTax({
      acquisitionPrice,
      sellingPrice,
      holdingYears,
      expenses,
      applyLongTermDeduction,
    });
  }, [acquisitionPrice, sellingPrice, holdingYears, expenses, applyLongTermDeduction]);

  const handleNumericInput = (setter: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value.replace(/[^0-9]/g, ""));
    if (!isNaN(v)) setter(v);
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        {/* 취득가액 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            취득가액 (매입가)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">₩</span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(acquisitionPrice)}
              onChange={handleNumericInput(setAcquisitionPrice)}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(acquisitionPrice)}</p>
        </div>

        {/* 양도가액 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            양도가액 (매도가)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">₩</span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(sellingPrice)}
              onChange={handleNumericInput(setSellingPrice)}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(sellingPrice)}</p>
        </div>

        {/* 필요경비 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            필요경비 (중개수수료, 취득세 등)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">₩</span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(expenses)}
              onChange={handleNumericInput(setExpenses)}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(expenses)}</p>
        </div>

        {/* 보유기간 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            보유기간 (년)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min="0"
            max="50"
            value={holdingYears}
            onChange={(e) => setHoldingYears(Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {[1, 2, 3, 5, 7, 10, 15].map((v) => (
              <button
                key={v}
                onClick={() => setHoldingYears(v)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  holdingYears === v
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {v}년
              </button>
            ))}
          </div>
        </div>

        {/* 장기보유특별공제 */}
        <div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={applyLongTermDeduction}
              onChange={(e) => setApplyLongTermDeduction(e.target.checked)}
              className="h-5 w-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              장기보유특별공제 적용 (3년 이상 보유 시 연 2%, 최대 30%)
            </span>
          </label>
        </div>
      </div>

      {/* Result Section */}
      {result && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          {/* 총 세금 */}
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">납부할 총 세금</p>
            <p className="text-3xl font-extrabold text-primary-600 sm:text-4xl dark:text-primary-400">
              {formatWon(result.totalTax)}
            </p>
            <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(result.totalTax)}</p>
          </div>

          {/* 상세 내역 */}
          <div className="space-y-3">
            <div className="flex justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <span className="text-sm text-gray-500 dark:text-gray-400">양도차익</span>
              <span className={`text-sm font-bold ${result.capitalGain > 0 ? "text-gray-900 dark:text-gray-100" : "text-health"}`}>
                {formatWon(result.capitalGain)}
              </span>
            </div>
            {result.longTermDeduction > 0 && (
              <div className="flex justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  장기보유특별공제 ({result.longTermDeductionRate}%)
                </span>
                <span className="text-sm font-bold text-green-600 dark:text-green-400">
                  -{formatWon(result.longTermDeduction)}
                </span>
              </div>
            )}
            <div className="flex justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <span className="text-sm text-gray-500 dark:text-gray-400">기본공제</span>
              <span className="text-sm font-bold text-green-600 dark:text-green-400">
                -{formatWon(BASIC_DEDUCTION)}
              </span>
            </div>
            <div className="flex justify-between rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">과세표준</span>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.taxableIncome)}
              </span>
            </div>
            <div className="flex justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <span className="text-sm text-gray-500 dark:text-gray-400">양도소득세</span>
              <span className="text-sm font-bold text-health">
                {formatWon(result.capitalGainsTax)}
              </span>
            </div>
            <div className="flex justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <span className="text-sm text-gray-500 dark:text-gray-400">지방소득세 (10%)</span>
              <span className="text-sm font-bold text-health">
                {formatWon(result.localTax)}
              </span>
            </div>
          </div>

          {/* 실수령액 */}
          <div className="mt-5 rounded-lg bg-primary-50 p-4 dark:bg-primary-900/20">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                양도 후 실수령액
              </span>
              <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                {formatWon(Math.max(0, sellingPrice - expenses - result.totalTax))}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
