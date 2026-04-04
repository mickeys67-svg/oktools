import type { Metadata } from "next";
import Link from "next/link";
import ClockApp from "@/components/tools/ClockApp";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "온라인 시계 - 전체화면 벽시계, 5가지 테마",
  description:
    "무료 온라인 벽시계. 미니멀·클래식·네온·우주·레트로 5가지 테마, 전체화면 지원, 아날로그+디지털 동시 표시.",
  keywords: ["온라인시계", "전체화면시계", "벽시계", "디지털시계", "아날로그시계", "현재시각", "실시간시계", "네온시계", "큰화면시계"],
  alternates: {
    canonical: "/tools/clock",
  },
};

export default function ClockPage() {
  return (
    <>
      <ClockApp />
      <ResultAd />

      {/* 관련 도구 */}
      <div className="mx-auto max-w-[720px] px-4">
        <section className="mt-10">
          <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Link href="/tools/timer" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
              타이머
            </Link>
            <Link href="/tools/stopwatch" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
              스톱워치
            </Link>
            <Link href="/finance/loan-calculator" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
              대출 이자 계산기
            </Link>
            <Link href="/health/bmi" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
              BMI 계산기
            </Link>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "온라인 시계",
          "description": "아름다운 디자인의 전체화면 벽시계",
          "url": "https://www.oktools.co.kr/tools/clock",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" },
          "inLanguage": "ko-KR"
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.oktools.co.kr" },
            { "@type": "ListItem", "position": 2, "name": "유틸리티", "item": "https://www.oktools.co.kr/tools" },
            { "@type": "ListItem", "position": 3, "name": "온라인 시계" }
          ]
        }) }}
      />
    </>
  );
}
