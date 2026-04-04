import type { Metadata } from "next";
import Link from "next/link";
import SalaryCalculator from "@/components/finance/SalaryCalculator";

export const metadata: Metadata = {
  title: "연봉 실수령액 계산기 - 4대보험, 소득세 공제 후 월급 계산",
  description:
    "연봉을 입력하면 국민연금, 건강보험, 고용보험, 소득세 등을 공제한 실수령액을 계산합니다. 2025년 기준 4대보험 요율 반영.",
};

export default function SalaryPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">연봉 실수령액 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        연봉 실수령액 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        연봉(세전)을 입력하면 4대 보험과 소득세를 공제한 월 실수령액을 계산합니다.
      </p>

      <SalaryCalculator />

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          공제 항목 안내
        </h2>
        <ul className="list-inside list-disc space-y-1">
          <li><strong>국민연금</strong>: 월 급여의 4.5% (근로자 부담분)</li>
          <li><strong>건강보험</strong>: 월 급여의 3.545%</li>
          <li><strong>장기요양보험</strong>: 건강보험의 12.95%</li>
          <li><strong>고용보험</strong>: 월 급여의 0.9%</li>
          <li><strong>소득세</strong>: 과세표준 구간별 누진세율 (6~45%)</li>
          <li><strong>지방소득세</strong>: 소득세의 10%</li>
        </ul>
        <p className="mt-3 text-xs text-gray-400">
          * 2025년 기준 요율을 적용한 근사치입니다. 실제 금액은 회사 정책 및 개인 상황에 따라 다를 수 있습니다.
        </p>
      </section>
    </div>
  );
}
