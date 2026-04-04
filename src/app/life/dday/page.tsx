import type { Metadata } from "next";
import Link from "next/link";
import DDayCounter from "@/components/life/DDayCounter";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "D-Day 카운터 - 디데이 날짜 계산기",
  description:
    "무료 D-Day 카운터로 목표 날짜까지 남은 일수를 실시간으로 확인하세요. 시험, 기념일, 여행 등 중요한 날까지의 카운트다운을 시간/분/초 단위로 제공합니다.",
  keywords: [
    "디데이계산기",
    "D-Day카운터",
    "남은일수계산",
    "디데이카운트다운",
    "날짜계산기",
    "기념일계산",
    "시험디데이",
    "카운트다운",
    "날짜세기",
    "디데이앱",
  ],
  openGraph: {
    title: "D-Day 카운터 - 디데이 날짜 계산기",
    description:
      "무료 D-Day 카운터로 목표 날짜까지 남은 일수를 실시간으로 확인하��요. 시험, 기념일, 여행 등 중요한 날까지의 카운트다운을 시간/분/초 단위로 제공합니다.",
  },
  alternates: {
    canonical: "/life/dday",
  },
};

export default function DDayPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">D-Day 카운터</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        D-Day 카운터
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        목표 날짜를 입력하면 남은 일수와 실시간 카운트다운을 보여줍니다.
      </p>

      <DDayCounter />
      <ResultAd />

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          D-Day 카운터 활용법
        </h2>
        <p className="mb-3">
          시험일, 기념일, 출산 예정일, 여행, 프로젝트 마감일 등 중요한 날짜까지의 남은 일수를
          한눈에 확인하세요. 실시간 카운트다운으로 시간, 분, 초 단위까지 확인할 수 있습니다.
          과거 날짜를 입력하면 해당 날로부터 며칠이 지났는지(D+)도 확인 가능합니다.
        </p>
        <p className="mb-3">
          수능, 공무원 시험, 자격증 시험 등 목표 시험일까지 남은 공부 일수를 파악하거나,
          커플 100일, 200일, 1주년 등 기념일을 계산하는 데 활용할 수 있습니다.
          여행 출발일까지 준비 기간을 확인하거나, 프로젝트 마감까지 남은 작업일을
          파악하는 데에도 유용합니다.
        </p>
        <p>
          D-Day 표기법은 한국에서 널리 사용되는 날짜 카운트다운 방식입니다.
          D-30은 목표일 30일 전, D-Day(D+0)는 당일, D+30은 목표일로부터 30일이 지난 날을 의미합니다.
          군대 전역일, 입사일 기준 근속 일수, 아기 태어난 지 며칠째인지 등
          다양한 상황에서 D-Day 카운터를 활용해 보세요.
        </p>
      </section>

      <InArticleAd />

      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/life/workdays" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            근무일수 계산기
          </Link>
          <Link href="/health/age" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            나이 계산기
          </Link>
          <Link href="/health/pregnancy-week" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            임신 주수 계산기
          </Link>
          <Link href="/life/parental-leave" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            육아휴직급여 계산기
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
                name: "D-Day는 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "D-Day는 목표 날짜에서 오늘 날짜를 빼서 계산합니다. 목표일이 미래면 D-N(N일 남음), 과거면 D+N(N일 지남), 오늘이면 D-Day입니다.",
                },
              },
              {
                "@type": "Question",
                name: "D-Day와 D+Day의 차이는?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "D-Day는 목표 당일을 의미합니다. D-30은 목표일 30일 전, D+30은 목표일로부터 30일이 지난 날을 뜻합니다.",
                },
              },
              {
                "@type": "Question",
                name: "실시간 카운트다운은 정확한가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "브라우저의 시스템 시계를 기준으로 1초마다 업데이트됩니다. 시스템 시계가 정확하다면 카운트다운도 정확합니다.",
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
            { "@type": "ListItem", "position": 3, "name": "D-Day 카운터" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "D-Day 카운터",
          "url": "https://www.oktools.co.kr/life/dday",
          "applicationCategory": "LifestyleApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW"
          },
          "description": "무료 D-Day 카운터로 목표 날짜까지 남은 일수를 실시간으로 확인하세요. 시험, 기념일, 여행 등 중요한 날까지의 카운트다운을 시간/분/초 단위로 제공합니다."
        }) }}
      />
    </div>
  );
}
