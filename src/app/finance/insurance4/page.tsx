import type { Metadata } from "next";
import Link from "next/link";
import Insurance4Calc from "@/components/finance/Insurance4Calc";

export const metadata: Metadata = {
  title: "4대보험 계산기 - 국민연금 건강보험 고용보험 산재보험",
  description:
    "월 급여를 입력하면 국민연금, 건강보험, 장기요양보험, 고용보험 등 4대보험 근로자/사업주 부담금을 계산합니다.",
};

export default function Insurance4Page() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">4대보험 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        4대보험 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        월 급여를 입력하면 4대보험 근로자/사업주 부담금을 한눈에 확인할 수 있습니다.
      </p>

      <Insurance4Calc />

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          2025년 4대보험 요율 안내
        </h2>
        <ul className="list-inside list-disc space-y-1">
          <li><strong>국민연금</strong>: 근로자 4.5% + 사업주 4.5% = 9.0% (월 소득 590만원 상한)</li>
          <li><strong>건강보험</strong>: 근로자 3.545% + 사업주 3.545% = 7.09%</li>
          <li><strong>장기요양보험</strong>: 건강보험료의 12.81%</li>
          <li><strong>고용보험</strong>: 근로자 0.9% + 사업주 0.9~1.65% (기업 규모별 차등)</li>
        </ul>
        <p className="mt-3 text-xs text-gray-400">
          * 2025년 기준 요율이며, 산재보험은 전액 사업주 부담으로 업종별 요율이 다릅니다.
          실제 금액은 회사 정책에 따라 다를 수 있습니다.
        </p>
      </section>
    </div>
  );
}
