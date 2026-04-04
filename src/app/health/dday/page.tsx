import type { Metadata } from "next";
import Link from "next/link";
import DDayCalc from "@/components/health/DDayCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "D-Day 계산기 - 디데이 날짜 계산, 남은 일수 확인",
  description:
    "무료 디데이 계산기로 남은 일수와 지난 일수를 계산하세요. 시험 D-Day, 기념일, 100일·200일 커플 디데이, 수능 카운트다운을 즉시 확인할 수 있습니다.",
  keywords: ["디데이계산기", "D-Day계산기", "날짜계산기", "남은일수계산", "기념일계산", "100일계산", "200일계산", "시험디데이", "수능디데이", "커플디데이"],
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
          <Link href="/health/pregnancy" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            임신 주수 계산기
          </Link>
          <Link href="/finance/loan-calculator" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            대출 이자 계산기
          </Link>
          <Link href="/fortune/tarot" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            타로카드
          </Link>
        </div>
      </section>

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
