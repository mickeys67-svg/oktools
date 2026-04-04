"use client";

import { useState, useMemo } from "react";

// 무주택기간 점수표 (0~32점)
const HOMELESS_SCORES: { min: number; max: number; score: number; label: string }[] = [
  { min: 0, max: 0, score: 0, label: "1년 미만" },
  { min: 1, max: 1, score: 2, label: "1년 이상 ~ 2년 미만" },
  { min: 2, max: 2, score: 4, label: "2년 이상 ~ 3년 미만" },
  { min: 3, max: 3, score: 6, label: "3년 이상 ~ 4년 미만" },
  { min: 4, max: 4, score: 8, label: "4년 이상 ~ 5년 미만" },
  { min: 5, max: 5, score: 10, label: "5년 이상 ~ 6년 미만" },
  { min: 6, max: 6, score: 12, label: "6년 이상 ~ 7년 미만" },
  { min: 7, max: 7, score: 14, label: "7년 이상 ~ 8년 미만" },
  { min: 8, max: 8, score: 16, label: "8년 이상 ~ 9년 미만" },
  { min: 9, max: 9, score: 18, label: "9년 이상 ~ 10년 미만" },
  { min: 10, max: 10, score: 20, label: "10년 이상 ~ 11년 미만" },
  { min: 11, max: 11, score: 22, label: "11년 이상 ~ 12년 미만" },
  { min: 12, max: 12, score: 24, label: "12년 이상 ~ 13년 미만" },
  { min: 13, max: 13, score: 26, label: "13년 이상 ~ 14년 미만" },
  { min: 14, max: 14, score: 28, label: "14년 이상 ~ 15년 미만" },
  { min: 15, max: 99, score: 32, label: "15년 이상" },
];

// 부양가족수 점수표 (0~35점)
const DEPENDENT_SCORES: { count: number; score: number }[] = [
  { count: 0, score: 5 },
  { count: 1, score: 10 },
  { count: 2, score: 15 },
  { count: 3, score: 20 },
  { count: 4, score: 25 },
  { count: 5, score: 30 },
  { count: 6, score: 35 },
];

// 청약통장 가입기간 점수표 (1~17점)
// 입력: 년 단위 정수. 0년=6개월 미만(1점), 1년=1년 이상~2년 미만(2점), ...
const ACCOUNT_SCORES: { min: number; max: number; score: number; label: string }[] = [
  { min: 0, max: 0, score: 1, label: "6개월 미만 ~ 1년 미만" },
  { min: 1, max: 1, score: 2, label: "1년 이상 ~ 2년 미만" },
  { min: 2, max: 2, score: 3, label: "2년 이상 ~ 3년 미만" },
  { min: 3, max: 3, score: 4, label: "3년 이상 ~ 4년 미만" },
  { min: 4, max: 4, score: 5, label: "4년 이상 ~ 5년 미만" },
  { min: 5, max: 5, score: 6, label: "5년 이상 ~ 6년 미만" },
  { min: 6, max: 6, score: 7, label: "6년 이상 ~ 7년 미만" },
  { min: 7, max: 7, score: 8, label: "7년 이상 ~ 8년 미만" },
  { min: 8, max: 8, score: 9, label: "8년 이상 ~ 9년 미만" },
  { min: 9, max: 9, score: 10, label: "9년 이상 ~ 10년 미만" },
  { min: 10, max: 10, score: 11, label: "10년 이상 ~ 11년 미만" },
  { min: 11, max: 11, score: 12, label: "11년 이상 ~ 12년 미만" },
  { min: 12, max: 12, score: 13, label: "12년 이상 ~ 13년 미만" },
  { min: 13, max: 13, score: 14, label: "13년 이상 ~ 14년 미만" },
  { min: 14, max: 14, score: 15, label: "14년 이상 ~ 15년 미만" },
  { min: 15, max: 99, score: 17, label: "15년 이상" },
];

function getHomelessScore(years: number): number {
  for (const s of HOMELESS_SCORES) {
    if (years >= s.min && years <= s.max) return s.score;
  }
  return 32;
}

function getDependentScore(count: number): number {
  if (count >= 6) return 35;
  const entry = DEPENDENT_SCORES.find((d) => d.count === count);
  return entry ? entry.score : 5;
}

function getAccountScore(years: number): number {
  for (const s of ACCOUNT_SCORES) {
    if (years >= s.min && years <= s.max) return s.score;
  }
  return 17;
}

export default function SubscriptionCalc() {
  const [homelessYears, setHomelessYears] = useState(5);
  const [dependents, setDependents] = useState(3);
  const [accountYears, setAccountYears] = useState(10);

  const result = useMemo(() => {
    const homelessScore = getHomelessScore(homelessYears);
    const dependentScore = getDependentScore(dependents);
    const accountScore = getAccountScore(accountYears);
    const totalScore = homelessScore + dependentScore + accountScore;

    let evaluation: string;
    let evaluationColor: string;
    if (totalScore >= 70) {
      evaluation = "당첨 가능성 매우 높음";
      evaluationColor = "text-green-600 dark:text-green-400";
    } else if (totalScore >= 55) {
      evaluation = "당첨 가능성 높음";
      evaluationColor = "text-primary-600 dark:text-primary-400";
    } else if (totalScore >= 40) {
      evaluation = "당첨 가능성 보통";
      evaluationColor = "text-amber-500";
    } else {
      evaluation = "당첨 가능성 낮음";
      evaluationColor = "text-health";
    }

    return {
      homelessScore,
      dependentScore,
      accountScore,
      totalScore,
      evaluation,
      evaluationColor,
    };
  }, [homelessYears, dependents, accountYears]);

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
        {/* 무주택기간 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            무주택기간 (년)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min="0"
            max="30"
            value={homelessYears}
            onChange={(e) => setHomelessYears(Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
          <p className="mt-1 text-xs text-gray-400">만 30세부터 산정 (배점: 0~32점)</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {[1, 3, 5, 8, 10, 15].map((v) => (
              <button
                key={v}
                onClick={() => setHomelessYears(v)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  homelessYears === v
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {v}년
              </button>
            ))}
          </div>
        </div>

        {/* 부양가족수 */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            부양가족수 (본인 제외)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min="0"
            max="6"
            value={dependents}
            onChange={(e) => setDependents(Math.min(6, Math.max(0, Number(e.target.value))))}
            className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
          <p className="mt-1 text-xs text-gray-400">배우자, 직계존비속 (배점: 5~35점)</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {[0, 1, 2, 3, 4, 5, 6].map((v) => (
              <button
                key={v}
                onClick={() => setDependents(v)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  dependents === v
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {v}명
              </button>
            ))}
          </div>
        </div>

        {/* 청약통장 가입기간 */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
            청약통장 가입기간 (년)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min="0"
            max="30"
            value={accountYears}
            onChange={(e) => setAccountYears(Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-right text-lg font-semibold text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
          <p className="mt-1 text-xs text-gray-400">청약저축/주택청약종합저축 (배점: 1~17점)</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {[1, 3, 5, 8, 10, 15].map((v) => (
              <button
                key={v}
                onClick={() => setAccountYears(v)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  accountYears === v
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {v}년
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result Section */}
      {result && (
        <div className="animate-fade-in-up rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          {/* 총 가점 */}
          <div className="mb-6 text-center">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">총 청약 가점</p>
            <p className="text-3xl font-extrabold text-primary-600 sm:text-4xl dark:text-primary-400">
              {result.totalScore}점
              <span className="ml-2 text-lg font-medium text-gray-400">/ 84점</span>
            </p>
            <p className={`mt-2 text-sm font-semibold ${result.evaluationColor}`}>
              {result.evaluation}
            </p>
          </div>

          {/* 항목별 점수 */}
          <div className="space-y-4">
            {/* 무주택기간 */}
            <div>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">무주택기간</span>
                <span className="font-bold text-gray-900 dark:text-gray-100">
                  {result.homelessScore}점 / 32점
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-full rounded-full bg-primary-500 transition-all"
                  style={{ width: `${(result.homelessScore / 32) * 100}%` }}
                />
              </div>
            </div>

            {/* 부양가족수 */}
            <div>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">부양가족수</span>
                <span className="font-bold text-gray-900 dark:text-gray-100">
                  {result.dependentScore}점 / 35점
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-full rounded-full bg-green-500 transition-all"
                  style={{ width: `${(result.dependentScore / 35) * 100}%` }}
                />
              </div>
            </div>

            {/* 청약통장 */}
            <div>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">청약통장 가입기간</span>
                <span className="font-bold text-gray-900 dark:text-gray-100">
                  {result.accountScore}점 / 17점
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-full rounded-full bg-amber-500 transition-all"
                  style={{ width: `${(result.accountScore / 17) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* 점수 비율 바 */}
          <div className="mt-5">
            <div className="flex h-4 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="bg-primary-500 transition-all"
                style={{ width: `${(result.homelessScore / 84) * 100}%` }}
                title="무주택기간"
              />
              <div
                className="bg-green-500 transition-all"
                style={{ width: `${(result.dependentScore / 84) * 100}%` }}
                title="부양가족수"
              />
              <div
                className="bg-amber-500 transition-all"
                style={{ width: `${(result.accountScore / 84) * 100}%` }}
                title="청약통장"
              />
            </div>
            <div className="mt-2 flex justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-primary-500" /> 무주택
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500" /> 부양가족
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-amber-500" /> 청약통장
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
