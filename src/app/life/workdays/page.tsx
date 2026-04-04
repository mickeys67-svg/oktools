import type { Metadata } from "next";
import Link from "next/link";
import WorkdayCalc from "@/components/life/WorkdayCalc";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "공휴일/근무일수 계산기 - 2026년 한국 공휴일 기준",
  description:
    "무료 근무일수 계산기로 기간 내 근무일, 주말, 공휴일 수를 계산하세요. 2026년 대한민국 공휴일(대체공휴일 포함) 기준으로 정확한 근무일수를 확인할 수 있습니다.",
  keywords: [
    "근무일수계산기",
    "공휴일계산기",
    "영업일계산",
    "근무일계산",
    "2026공휴일",
    "대체공휴일",
    "평일계산기",
    "주말제외날짜",
    "근로일수",
    "한국공휴일2026",
  ],
  openGraph: {
    title: "공휴일/근무일수 계산기 - 2026년 한국 공휴일 기준",
    description:
      "무료 근무일수 계산기로 기간 내 근무일, 주말, 공휴일 수를 계산하세요. 2026년 대한민국 공휴일(대체��휴일 포함) 기준으�� 정확한 근무일수를 확인할 수 있습니다.",
  },
  alternates: {
    canonical: "/life/workdays",
  },
};

export default function WorkdaysPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">근무일수 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        공휴일/근무일수 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        시작일과 종료일을 선택하면 근무일수, 주말, 공휴일 수를 계산합니다.
      </p>

      <WorkdayCalc />
      <ResultAd />

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          근무일수 계산기 사용 가이드
        </h2>
        <p className="mb-4">
          근무일수 계산기는 시작일과 종료일 사이의 평일(근무일), 주말, 공휴일 수를 자동으로 계산하는 도구입니다.
          프로젝트 일정 수립, 급여 정산, 연차 계획, 계약 기간 산정 등 다양한 업무에서 정확한 근무일수 파악이 필요할 때
          유용합니다. 2026년 대한민국 공휴일과 대체공휴일을 모두 반영하여 계산하므로, 별도로 달력을 확인할 필요 없이
          정확한 영업일 수를 바로 확인할 수 있습니다. 주말(토/일)에 겹치는 공휴일은 이중 차감하지 않으며,
          대체공휴일이 적용되는 경우 자동으로 반영됩니다.
        </p>

        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          2026년 대한민국 공휴일
        </h2>
        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2.5 font-medium">날짜</th>
                <th className="px-4 py-2.5 font-medium">공휴일</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr><td className="px-4 py-2.5">1월 1일</td><td className="px-4 py-2.5">신정</td></tr>
              <tr><td className="px-4 py-2.5">2월 16~18일</td><td className="px-4 py-2.5">설날 연휴</td></tr>
              <tr><td className="px-4 py-2.5">2월 19일</td><td className="px-4 py-2.5">설날 대체공휴일</td></tr>
              <tr><td className="px-4 py-2.5">3월 1일</td><td className="px-4 py-2.5">삼일절</td></tr>
              <tr><td className="px-4 py-2.5">5월 5일</td><td className="px-4 py-2.5">어린이날</td></tr>
              <tr><td className="px-4 py-2.5">5월 24일</td><td className="px-4 py-2.5">부처님오신날</td></tr>
              <tr><td className="px-4 py-2.5">6월 6일</td><td className="px-4 py-2.5">현충일</td></tr>
              <tr><td className="px-4 py-2.5">8월 15일</td><td className="px-4 py-2.5">광복절</td></tr>
              <tr><td className="px-4 py-2.5">9월 24~26일</td><td className="px-4 py-2.5">추석 연휴</td></tr>
              <tr><td className="px-4 py-2.5">10월 3일</td><td className="px-4 py-2.5">개천절</td></tr>
              <tr><td className="px-4 py-2.5">10월 5일</td><td className="px-4 py-2.5">개천절 대체공휴일</td></tr>
              <tr><td className="px-4 py-2.5">10월 9일</td><td className="px-4 py-2.5">한글날</td></tr>
              <tr><td className="px-4 py-2.5">12월 25일</td><td className="px-4 py-2.5">크리스마스</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <InArticleAd />

      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/life/dday" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            D-Day 카운터
          </Link>
          <Link href="/life/parental-leave" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            육아휴직급여 계산기
          </Link>
          <Link href="/health/age" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            나이 계산기
          </Link>
          <Link href="/finance/income-tax" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            소득세 계산기
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
                name: "근무일수는 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "총 일수에서 주말(토/일)과 평일 공휴일을 제외한 일수가 근무일수입니다. 주말에 겹치는 공휴일은 근무일에서 이중 차감하지 않습니다.",
                },
              },
              {
                "@type": "Question",
                name: "2026년 대체공휴일은 언제인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "2026년 대체공휴일은 2월 19일(설날 대체공휴일, 일요일 겹침)과 10월 5일(개천절 대체공휴일, 토요일 겹침)입니다.",
                },
              },
              {
                "@type": "Question",
                name: "영업일과 근무일의 차이는?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "일반적으로 영업일과 근무일은 같은 의미로, 주말과 공휴일을 제외한 평일을 뜻합니다. 다만 업종에 따라 영업일이 다를 수 있으므로 회사 규정을 확인하세요.",
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
            { "@type": "ListItem", "position": 2, "name": "생활 계산기", "item": "https://www.oktools.co.kr/life" },
            { "@type": "ListItem", "position": 3, "name": "근무일수 계산기" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "공휴일/근무일수 계산기",
          "url": "https://www.oktools.co.kr/life/workdays",
          "applicationCategory": "LifestyleApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW"
          },
          "description": "무료 근무일수 계산기로 기간 내 근무일, 주말, 공휴일 수를 계산하세요. 2026년 대한민국 공휴일(대체공휴일 포함) 기준으로 정확한 근무일수를 확인할 수 있습니다."
        }) }}
      />
    </div>
  );
}
