"use client";

import { useState, useMemo } from "react";
import { formatNumber, formatWon, formatKoreanWon } from "@/lib/format-ko";

export default function DSRCalc() {
  const [annualIncome, setAnnualIncome] = useState(50_000_000);
  const [existingMonthly, setExistingMonthly] = useState(500_000);
  const [newLoanAmount, setNewLoanAmount] = useState(300_000_000);
  const [newLoanRate, setNewLoanRate] = useState(4.5);
  const [newLoanYears, setNewLoanYears] = useState(30);

  const result = useMemo(() => {
    if (annualIncome <= 0 || newLoanAmount <= 0 || newLoanYears <= 0) return null;

    const monthlyRate = newLoanRate / 100 / 12;
    const totalMonths = newLoanYears * 12;

    // 원리금균등상환 월 상환액
    let newMonthly: number;
    if (monthlyRate === 0) {
      newMonthly = newLoanAmount / totalMonths;
    } else {
      newMonthly =
        (newLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    }

    const totalAnnualRepayment = (existingMonthly + newMonthly) * 12;
    const dsr = (totalAnnualRepayment / annualIncome) * 100;

    // 최대 대출 가능액 (DSR 40% 기준)
    const maxAnnualRepayment40 = annualIncome * 0.4;
    const availableAnnual40 = maxAnnualRepayment40 - existingMonthly * 12;
    const availableMonthly40 = Math.max(0, availableAnnual40 / 12);

    let maxLoan40 = 0;
    if (monthlyRate === 0) {
      maxLoan40 = availableMonthly40 * totalMonths;
    } else if (availableMonthly40 > 0) {
      maxLoan40 =
        (availableMonthly40 * (Math.pow(1 + monthlyRate, totalMonths) - 1)) /
        (monthlyRate * Math.pow(1 + monthlyRate, totalMonths));
    }

    // 최대 대출 가능액 (DSR 70% 기준 - 비규제지역)
    const maxAnnualRepayment70 = annualIncome * 0.7;
    const availableAnnual70 = maxAnnualRepayment70 - existingMonthly * 12;
    const availableMonthly70 = Math.max(0, availableAnnual70 / 12);

    let maxLoan70 = 0;
    if (monthlyRate === 0) {
      maxLoan70 = availableMonthly70 * totalMonths;
    } else if (availableMonthly70 > 0) {
      maxLoan70 =
        (availableMonthly70 * (Math.pow(1 + monthlyRate, totalMonths) - 1)) /
        (monthlyRate * Math.pow(1 + monthlyRate, totalMonths));
    }

    return {
      newMonthly: Math.round(newMonthly),
      totalAnnualRepayment: Math.round(totalAnnualRepayment),
      dsr,
      pass40: dsr <= 40,
      pass70: dsr <= 70,
      maxLoan40: Math.max(0, Math.round(maxLoan40)),
      maxLoan70: Math.max(0, Math.round(maxLoan70)),
    };
  }, [annualIncome, existingMonthly, newLoanAmount, newLoanRate, newLoanYears]);

  const handleNumericInput = (setter: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value.replace(/[^0-9]/g, ""));
    if (!isNaN(v)) setter(v);
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        {/* 연소득 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            연소득 (세전)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">₩</span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(annualIncome)}
              onChange={handleNumericInput(setAnnualIncome)}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(annualIncome)}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {[30_000_000, 50_000_000, 70_000_000, 100_000_000, 150_000_000].map((v) => (
              <button
                key={v}
                onClick={() => setAnnualIncome(v)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  annualIncome === v
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {formatKoreanWon(v).replace(" 원", "")}
              </button>
            ))}
          </div>
        </div>

        {/* 기존대출 월상환액 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            기존 대출 월 상환액
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">₩</span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(existingMonthly)}
              onChange={handleNumericInput(setExistingMonthly)}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(existingMonthly)}</p>
        </div>

        {/* 신규대출금액 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            신규 대출 금액
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">₩</span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(newLoanAmount)}
              onChange={handleNumericInput(setNewLoanAmount)}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">{formatKoreanWon(newLoanAmount)}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {[100_000_000, 200_000_000, 300_000_000, 500_000_000, 700_000_000].map((v) => (
              <button
                key={v}
                onClick={() => setNewLoanAmount(v)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  newLoanAmount === v
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {formatKoreanWon(v).replace(" 원", "")}
              </button>
            ))}
          </div>
        </div>

        {/* 금리 & 기간 */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
              신규 대출 금리 (%)
            </label>
            <input
              type="number"
              inputMode="decimal"
              step="0.1"
              min="0"
              max="30"
              value={newLoanRate}
              onChange={(e) => setNewLoanRate(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
              신규 대출 기간 (년)
            </label>
            <input
              type="number"
              inputMode="numeric"
              min="1"
              max="50"
              value={newLoanYears}
              onChange={(e) => setNewLoanYears(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
        </div>
      </div>

      {/* Result Section */}
      {result && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          {/* DSR 비율 */}
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">DSR (총부채원리금상환비율)</p>
            <p
              className={`text-3xl font-extrabold sm:text-4xl ${
                result.dsr <= 40
                  ? "text-primary-600 dark:text-primary-400"
                  : result.dsr <= 70
                    ? "text-amber-500"
                    : "text-health"
              }`}
            >
              {result.dsr.toFixed(1)}%
            </p>
          </div>

          {/* 판정 */}
          <div className="mb-6 grid grid-cols-2 gap-3">
            <div
              className={`rounded-lg p-4 text-center ${
                result.pass40
                  ? "bg-green-50 dark:bg-green-900/20"
                  : "bg-red-50 dark:bg-red-900/20"
              }`}
            >
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">규제지역 (40%)</p>
              <p
                className={`text-lg font-bold ${
                  result.pass40 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}
              >
                {result.pass40 ? "대출 가능" : "대출 불가"}
              </p>
            </div>
            <div
              className={`rounded-lg p-4 text-center ${
                result.pass70
                  ? "bg-green-50 dark:bg-green-900/20"
                  : "bg-red-50 dark:bg-red-900/20"
              }`}
            >
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">비규제지역 (70%)</p>
              <p
                className={`text-lg font-bold ${
                  result.pass70 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}
              >
                {result.pass70 ? "대출 가능" : "대출 불가"}
              </p>
            </div>
          </div>

          {/* 상세 정보 */}
          <div className="space-y-3">
            <div className="flex justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <span className="text-sm text-gray-500 dark:text-gray-400">신규 대출 월 상환액</span>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.newMonthly)}
              </span>
            </div>
            <div className="flex justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <span className="text-sm text-gray-500 dark:text-gray-400">총 연간 원리금 상환액</span>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                {formatWon(result.totalAnnualRepayment)}
              </span>
            </div>
            <div className="flex justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                최대 대출 가능액 (DSR 40%)
              </span>
              <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                {formatWon(result.maxLoan40)}
              </span>
            </div>
            <div className="flex justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                최대 대출 가능액 (DSR 70%)
              </span>
              <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                {formatWon(result.maxLoan70)}
              </span>
            </div>
          </div>

          {/* DSR Bar */}
          <div className="mt-5">
            <div className="mb-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>0%</span>
              <span className="text-amber-500">40%</span>
              <span className="text-health">70%</span>
              <span>100%</span>
            </div>
            <div className="relative h-4 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className={`absolute left-0 top-0 h-full transition-all ${
                  result.dsr <= 40
                    ? "bg-green-500"
                    : result.dsr <= 70
                      ? "bg-amber-500"
                      : "bg-red-500"
                }`}
                style={{ width: `${Math.min(result.dsr, 100)}%` }}
              />
              <div className="absolute left-[40%] top-0 h-full w-px bg-amber-600/50" />
              <div className="absolute left-[70%] top-0 h-full w-px bg-red-600/50" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
