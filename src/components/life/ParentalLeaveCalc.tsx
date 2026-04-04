"use client";

import { useState, useMemo } from "react";
import { formatNumber } from "@/lib/format-ko";

type ChildOrder = "first" | "second";

function calcParentalLeave(
  monthlySalary: number,
  months: number,
  childOrder: ChildOrder
) {
  // 2026 기준 육아휴직급여 (6+6 부모육아휴직제 반영)
  // 첫 3개월: 통상임금 100% (상한 250만원)
  // 4~6개월: 통상임금 100% (상한 200만원)
  // 7개월 이후: 통상임금 80% (상한 150만원)
  // 하한: 70만원
  const results: { month: number; rate: number; amount: number }[] = [];
  let total = 0;

  for (let i = 1; i <= months; i++) {
    let rate: number;
    let cap: number;
    const floor = 700000;

    if (i <= 3) {
      rate = 1.0;
      cap = 2500000;
    } else if (i <= 6) {
      rate = 1.0;
      cap = 2000000;
    } else {
      rate = 0.8;
      cap = 1500000;
    }

    let amount = Math.round(monthlySalary * rate);
    amount = Math.min(amount, cap);
    amount = Math.max(amount, floor);

    results.push({ month: i, rate, amount });
    total += amount;
  }

  return { monthlyBreakdown: results, total };
}

export default function ParentalLeaveCalc() {
  const [salary, setSalary] = useState("");
  const [months, setMonths] = useState("12");
  const [childOrder, setChildOrder] = useState<ChildOrder>("first");

  const result = useMemo(() => {
    const s = parseInt(salary);
    const m = parseInt(months);
    if (!s || !m || s <= 0 || m <= 0 || m > 24) return null;
    return calcParentalLeave(s, m, childOrder);
  }, [salary, months, childOrder]);

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-life focus:ring-1 focus:ring-life dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100";
  const labelClass =
    "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300";

  const salaryPresets = [2000000, 2500000, 3000000, 3500000, 4000000];

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        {/* Child Order */}
        <div className="mb-5">
          <label className={labelClass}>자녀 구분</label>
          <div className="flex gap-2">
            {([["first", "첫째"], ["second", "둘째 이상"]] as const).map(([v, l]) => (
              <button
                key={v}
                onClick={() => setChildOrder(v)}
                className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  childOrder === v
                    ? "bg-life text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <label className={labelClass}>통상임금 (월, 원)</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="3000000"
            className={inputClass}
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {salaryPresets.map((v) => (
              <button
                key={v}
                onClick={() => setSalary(String(v))}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  salary === String(v)
                    ? "bg-life text-white"
                    : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                }`}
              >
                {formatNumber(v / 10000)}만
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className={labelClass}>휴직 기간 (개월)</label>
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            min={1}
            max={24}
            placeholder="12"
            className={inputClass}
          />
        </div>
      </div>

      {result && (
        <div className="animate-fade-in-up space-y-4">
          {/* Total */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-5 text-center">
              <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">총 수령 예정액</p>
              <p className="text-3xl font-extrabold text-life sm:text-4xl">
                {formatNumber(result.total)}원
              </p>
            </div>
          </div>

          {/* Monthly breakdown */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              월별 급여 상세
            </h3>
            <div className="space-y-2">
              {result.monthlyBreakdown.map((m) => (
                <div
                  key={m.month}
                  className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-gray-800"
                >
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {m.month}개월차{" "}
                    <span className="text-xs text-gray-400">
                      ({Math.round(m.rate * 100)}%)
                    </span>
                  </span>
                  <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                    {formatNumber(m.amount)}원
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-400 px-1">
            * 2026년 기준. 첫 3개월 통상임금 100%(상한 250만원), 4~6개월 100%(상한 200만원), 7개월 이후 80%(상한 150만원), 하한 70만원.
            실제 급여는 고용보험 가입 기간 등에 따라 다를 수 있습니다.
          </p>
        </div>
      )}
    </div>
  );
}
