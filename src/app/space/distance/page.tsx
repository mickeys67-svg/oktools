import type { Metadata } from "next";
import Link from "next/link";
import SpaceDistanceCalc from "@/components/space/SpaceDistanceCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "우주 거리 변환 - 광년 AU 파섹 km 변환기",
  description:
    "광년, 천문단위(AU), 파섹, km 등 우주 거리 단위를 무료로 변환하세요. 안드로메다까지 몇 광년인지 바로 확인.",
  keywords: ["우주거리변환", "광년변환", "천문단위", "AU변환", "파섹", "광년km변환", "우주거리단위", "안드로메다거리"],
  openGraph: {
    url: "/space/distance",
    title: "우주 거리 변환 - 광년 AU 파섹 km 변환기",
    description:
      "광년, 천문단위(AU), 파섹, km 등 우주 거리 단위를 무료로 변환하세요. 안드로메다까지 몇 광년인지 바로 확인.",
  },
  alternates: {
    canonical: "/space/distance",
  },
};

export default function SpaceDistancePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/space" className="hover:text-primary-600">우주/과학</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">우주 거리 변환</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">우주 거리 변환</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">광년, AU, 파섹, km 등 우주 거리 단위를 변환합니다.</p>
      <SpaceDistanceCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">우주 거리 변환 사용 가이드</h2>
          <p>
            우주 거리 변환 도구는 광년, 천문단위(AU), 파섹(pc), 킬로미터(km) 등 우주에서 사용하는 거리 단위를 상호 변환해줍니다.
            천문학 공부, 과학 보고서 작성, 우주 관련 뉴스 이해 시 거리 단위를 직관적으로 파악하는 데 도움이 됩니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">주요 거리 단위 설명</h3>
          <p>
            1 광년(light-year)은 빛이 1년간 이동하는 거리로 약 9.461조 km입니다.
            1 AU(천문단위)는 지구와 태양 사이의 평균 거리로 약 1.496억 km입니다.
            1 파섹(parsec)은 약 3.26광년으로, 전문 천문학에서 주로 사용됩니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">우주의 스케일</h3>
          <p>
            가장 가까운 별 프록시마 센타우리까지 약 4.24광년, 안드로메다 은하까지 약 254만 광년,
            관측 가능한 우주의 끝까지 약 465억 광년입니다. 이처럼 우주의 거리는 일상적인 단위로 표현하기 어려울 만큼
            광대하기 때문에 광년이나 파섹 같은 특별한 단위가 사용됩니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/space/travel-time" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            빛 여행 시간 계산기
          </Link>
          <Link href="/space/planet-weight" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            행성 무게 계산기
          </Link>
          <Link href="/finance/loan-calculator" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            대출 이자 계산기
          </Link>
          <Link href="/health/bmi" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            BMI 계산기
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
                name: "1광년은 몇 km인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "1광년은 빛이 1년 동안 이동하는 거리로 약 9조 4,607억 km(9.461 x 10^12 km)입니다. 빛의 속도는 초속 약 30만 km이며, 가장 가까운 별인 프록시마 센타우리까지 약 4.24광년 떨어져 있습니다.",
                },
              },
              {
                "@type": "Question",
                name: "천문단위(AU)는 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "천문단위(AU, Astronomical Unit)는 지구에서 태양까지의 평균 거리를 기준으로 한 단위로 약 1억 4,960만 km입니다. 태양계 내 행성 간 거리를 나타낼 때 주로 사용하며, 화성은 약 1.52AU, 목성은 약 5.2AU 떨어져 있습니다.",
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
          "name": "우주 거리 변환",
          "description": "광년, 천문단위, 파섹 등 우주 거리 변환",
          "url": "https://www.oktools.co.kr/space/distance",
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
            { "@type": "ListItem", "position": 2, "name": "우주/과학", "item": "https://www.oktools.co.kr/space" },
            { "@type": "ListItem", "position": 3, "name": "우주 거리 변환" }
          ]
        }) }}
      />
    </div>
  );
}
