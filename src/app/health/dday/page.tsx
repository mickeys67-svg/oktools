import type { Metadata } from "next";
import Link from "next/link";
import DDayCalc from "@/components/health/DDayCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "기념일 디데이 계산기 - 100일 200일 커플 기념일 계산",
  description:
    "커플 100일, 200일, 1주년 기념일과 시험 디데이를 무료로 계산하세요. 날짜 간 일수 차이, 남은 일수, 지난 일수를 바로 확인할 수 있습니다.",
  keywords: ["기념일계산기", "100일계산", "200일계산", "커플디데이", "기념일디데이", "날짜차이계산", "일수계산"],
  openGraph: {
    title: "기념일 디데이 계산기 - 100일 200일 커플 기념일 계산",
    description:
      "커플 100일, 200일, 1주년 기념일과 시험 디데이를 무료로 계산하세요. 날짜 간 일수 차이, 남은 일수, 지난 일수를 바로 확인할 수 있습니다.",
  },
  alternates: {
    canonical: "/health/dday",
  },
};

export default function DDayPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/health" className="hover:text-primary-600">건강 계산기</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">D-Day 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">D-Day 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">목표 날짜까지 남은 일수와 지난 일수를 계산합니다.</p>
      <DDayCalc />
      <ResultAd />

      {/* Info Section */}
      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            D-Day 계산기 사용 가이드
          </h2>
          <p>
            D-Day 계산기는 특정 날짜를 입력하면 오늘부터 남은 일수 또는 지난 일수를 자동으로 계산해주는 도구입니다.
            시험일, 결혼 기념일, 여행 출발일, 프로젝트 마감일 등 중요한 날짜까지 남은 시간을 한눈에 파악할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">활용 사례</h3>
          <p>
            수능 D-Day 카운트다운, 커플 100일·200일·365일 기념일 계산, 출산 예정일까지 남은 날,
            자격증 시험까지 남은 공부 일수, 군대 전역일 카운트다운 등 다양한 상황에서 사용할 수 있습니다.
            과거 날짜를 입력하면 사귄 지 며칠째인지, 입사한 지 몇 일인지도 확인할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">D-Day 계산 방식</h3>
          <p>
            D-Day는 목표 날짜에서 오늘 날짜를 빼는 단순 계산입니다. 결과가 양수이면 아직 남은 미래 날짜,
            음수이면 이미 지난 과거 날짜입니다. 한국에서는 당일을 D-Day(D+0)로 표시하는 것이 일반적이며,
            일부에서는 D-1(전날)부터 카운트하기도 합니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/health/age" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            만 나이 계산기
          </Link>
          <Link href="/health/pregnancy-week" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            임신 주수 계산기
          </Link>
          <Link href="/life/dday" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            D-Day 카운터
          </Link>
          <Link href="/health/biorhythm" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            바이오리듬
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
                  text: "D-Day는 목표 날짜에서 오늘 날짜를 빼서 계산합니다. 미래 날짜면 'D-N'(N일 남음), 과거 날짜면 'D+N'(N일 지남)으로 표시합니다. 사귄 날 100일, 시험일, 여행일 등을 카운트다운하는 데 사용합니다.",
                },
              },
              {
                "@type": "Question",
                name: "사귄 날 100일은 어떻게 세나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "사귄 날을 1일차로 세면 100일째는 사귄 날로부터 99일 후입니다. 예를 들어 1월 1일에 사귀기 시작했다면 100일은 4월 10일입니다. 일부는 사귄 다음 날을 1일로 계산하기도 하므로 커플 간 약속이 중요합니다.",
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
          "name": "D-Day 계산기",
          "description": "특정 날짜까지 남은 일수 또는 지난 일수 계산",
          "url": "https://www.oktools.co.kr/health/dday",
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
            { "@type": "ListItem", "position": 2, "name": "건강 계산기", "item": "https://www.oktools.co.kr/health" },
            { "@type": "ListItem", "position": 3, "name": "D-Day 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
