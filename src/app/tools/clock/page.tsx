import type { Metadata } from "next";
import Link from "next/link";
import ClockApp from "@/components/tools/ClockApp";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "온라인 시계 - 전체화면 벽시계, 5가지 테마",
  description:
    "무료 온라인 벽시계. 미니멀·클래식·네온·우주·레트로 5가지 테마, 전체화면 지원, 아날로그+디지털 동시 표시.",
  keywords: ["온라인시계", "전체화면시계", "벽시계", "디지털시계", "아날로그시계", "현재시각", "실시간시계", "네온시계", "큰화면시계"],
  openGraph: {
    title: "온라인 시계 - 전체화면 벽시계, 5가지 테마",
    description:
      "무료 온라인 벽시계. 미니멀·클래식·네온·우주·레트로 5가지 테마, 전체화면 지원, 아날로그+디지털 동시 표시.",
  },
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "온라인 시계의 시간은 정확한가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "온라인 시계는 사용자 기기(PC, 스마트폰)의 시스템 시간을 표시합니다. 기기의 시간이 인터넷 시간 서버(NTP)와 동기화되어 있다면 매우 정확합니다. Windows는 설정 > 시간 및 언어에서, Mac은 시스템 설정 > 날짜 및 시간에서 자동 동기화를 확인할 수 있습니다.",
                },
              },
              {
                "@type": "Question",
                name: "전체화면 시계는 어떻게 사용하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "전체화면 버튼을 클릭하면 시계가 모니터 전체를 채우는 벽시계 모드로 전환됩니다. 회의실, 교실, 카페 등에서 큰 화면 시계가 필요할 때 유용합니다. ESC 키를 누르면 전체화면에서 나올 수 있습니다.",
                },
              },
            ],
          }),
        }}
      />
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
