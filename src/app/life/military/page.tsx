import type { Metadata } from "next";
import Link from "next/link";
import MilitaryCalc from "@/components/life/MilitaryCalc";

export const metadata: Metadata = {
  title: "전역일 계산기 - 군 복무기간 계산, 진급일 확인",
  description:
    "한국 남성 병역의무 전역일 계산기. 육군, 해군, 공군, 해병대, 사회복무요원 복무기간 계산 및 진급일 확인.",
};

export default function MilitaryPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">전역일 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        전역일 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        입대일과 군종을 선택하면 전역 예정일, 복무 진행률, 진급 일정을 한눈에 확인할 수 있습니다.
      </p>
      <MilitaryCalc />

      {/* SEO content */}
      <section className="mt-12 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
        <h2 className="text-base font-bold text-gray-900 dark:text-gray-100">한국 남성 병역의무 안내</h2>
        <p>
          대한민국 남성은 만 18세 이상이 되면 병역의무가 발생하며, 군종에 따라 18~21개월의 현역 복무를 수행합니다.
          육군과 해병대는 18개월, 해군은 20개월, 공군은 21개월이며, 사회복무요원은 21개월 복무합니다.
        </p>
        <p>
          병사 진급 체계는 이등병(입대 시), 일병(2개월), 상병(8개월), 병장(14개월)으로 구성됩니다.
          전역일은 입대일 기준으로 복무 일수를 더하여 계산합니다.
        </p>
      </section>
    </div>
  );
}
