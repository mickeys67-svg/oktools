import type { Metadata } from "next";
import Link from "next/link";
import PregnancyWeekCalc from "@/components/health/PregnancyWeekCalc";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "태아 성장 계산기 - 주수별 태아 크기와 발달 확인",
  description:
    "마지막 생리일을 입력하면 현재 태아 크기(키, 몸무게), 주수별 발달 단계, 출산 예정일을 확인할 수 있습니다. 임신 진행률과 삼분기 정보를 한눈에 제공합니다.",
  keywords: [
    "임신주수계산기",
    "출산예정일계산",
    "임신몇주",
    "임신계산기",
    "출산일계산",
    "태아크기",
    "임신주수확인",
    "마지막생리일",
    "임신진행률",
    "삼분기계산",
  ],
  openGraph: {
    url: "/health/pregnancy-week",
    title: "태아 성장 계산기 - 주수별 태아 크기와 발달 확인",
    description:
      "마지막 생리일을 입력하면 현재 태아 크기(키, 몸무게), 주수별 발달 단계, 출산 예정일을 확인할 수 있습니다. 임신 진행률과 삼분기 정보를 한눈에 제공합니다.",
  },
  alternates: {
    canonical: "/health/pregnancy-week",
  },
};

export default function PregnancyWeekPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/health" className="hover:text-primary-600">건강 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">임신 주수 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        임신 주수 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        마지막 생리 시작일을 입력하면 현재 임신 주수와 출산 예정일을 계산합니다.
      </p>

      <PregnancyWeekCalc />
      <ResultAd />

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          임신 주수 계산 방법
        </h2>
        <p className="mb-3">
          임신 주수는 마지막 생리 시작일(LMP)부터 계산합니다. 실제 수정일이 아닌 LMP 기준으로
          40주(280일)를 출산 예정일로 봅니다.
        </p>
        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2.5 font-medium">삼분기</th>
                <th className="px-4 py-2.5 font-medium">기간</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr><td className="px-4 py-2.5">1삼분기 (초기)</td><td className="px-4 py-2.5">1~12주</td></tr>
              <tr><td className="px-4 py-2.5">2삼분기 (중기)</td><td className="px-4 py-2.5">13~26주</td></tr>
              <tr><td className="px-4 py-2.5">3삼분기 (후기)</td><td className="px-4 py-2.5">27~40주</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <InArticleAd />

      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/health/bmi" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            BMI 계산기
          </Link>
          <Link href="/health/calorie" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            칼로리 계산기
          </Link>
          <Link href="/health/age" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            나이 계산기
          </Link>
          <Link href="/life/dday" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            D-Day 카운터
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "임신 주수는 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "마지막 생리 시작일(LMP)부터 오늘까지의 일수를 7로 나누어 계산합니다. 예를 들어 LMP로부터 70일이 지났다면 임신 10주 0일입니다.",
                },
              },
              {
                "@type": "Question",
                name: "출산 예정일은 어떻게 정해지나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "출산 예정일은 마지막 생리 시작일(LMP)로부터 280일(40주)을 더한 날짜입니다. 네겔레 공식이라고도 하며, 실제 출산일은 예정일 전후 2주 이내가 정상 범위입니다.",
                },
              },
              {
                "@type": "Question",
                name: "삼분기(trimester)란 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "임신 기간을 3등분한 것으로, 1삼분기(1~12주)는 주요 장기 형성기, 2삼분기(13~26주)는 안정기, 3삼분기(27~40주)는 출산 준비기입니다.",
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
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.oktools.co.kr" },
            { "@type": "ListItem", "position": 2, "name": "건강 계산기", "item": "https://www.oktools.co.kr/health" },
            { "@type": "ListItem", "position": 3, "name": "임신 주수 계산기" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "임신 주수 계산기",
          "url": "https://www.oktools.co.kr/health/pregnancy-week",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW"
          },
          "description": "무료 임신 주수 계산기로 현재 임신 주수와 출산 예정일을 확인하세요. 마지막 생리일 입력만으로 임신 진행률, 삼분기, 태아 크기 정보를 즉시 확인할 수 있습니다."
        }) }}
      />
    </div>
  );
}
