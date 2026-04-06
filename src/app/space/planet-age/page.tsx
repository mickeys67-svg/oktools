import type { Metadata } from "next";
import Link from "next/link";
import PlanetAgeCalc from "@/components/space/PlanetAgeCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "행성 나이 계산기 - 화성 목성에서의 내 나이",
  description:
    "지구 나이를 입력하면 화성·목성·토성 등 태양계 행성에서의 나이를 무료로 계산합니다. 공전주기 기반 우주 나이 확인.",
  keywords: ["행성나이계산기", "화성나이", "목성나이", "행성공전주기", "우주나이", "태양계나이", "행성년수"],
  openGraph: {
    url: "/space/planet-age",
    title: "행성 나이 계산기 - 화성 목성에서의 내 나이",
    description:
      "지구 나이를 입력하면 화성·목성·토성 등 태양계 행성에서의 나이를 무료로 계산합니다. 공전주기 기반 우주 나이 확인.",
  },
  alternates: {
    canonical: "/space/planet-age",
  },
};

export default function PlanetAgePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/space" className="hover:text-primary-600">우주/과학</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">행성 나이 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">행성 나이 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">내 나이가 다른 행성에서는 몇 살인지 확인해보세요.</p>
      <PlanetAgeCalc />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">행성 나이 계산기 사용 가이드</h2>
          <p>
            행성 나이 계산기는 지구 나이를 입력하면 태양계 각 행성에서의 나이를 계산해주는 도구입니다.
            각 행성의 공전주기(1년의 길이)가 다르기 때문에, 같은 시간이라도 행성마다 다른 나이가 됩니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">계산 원리: 공전주기</h3>
          <p>
            행성 나이 = 지구 나이(일) / 해당 행성의 공전주기(일)입니다.
            수성의 공전주기는 약 88일이므로 지구 나이 30세는 수성에서 약 124세가 됩니다.
            반대로 해왕성의 공전주기는 약 165년이므로 지구 나이 30세는 해왕성에서 약 0.18세에 불과합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">주요 행성 공전주기</h3>
          <p>
            수성 88일, 금성 225일, 지구 365일, 화성 687일, 목성 약 12년, 토성 약 29년, 천왕성 약 84년, 해왕성 약 165년.
            공전주기는 태양과의 거리가 멀수록 길어지며, 이는 케플러의 행성 운동 제3법칙으로 설명됩니다.
            이 도구는 천문학적 개념을 재미있게 체험하는 교육용 콘텐츠입니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/space/planet-weight" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            행성 무게 계산기
          </Link>
          <Link href="/space/travel-time" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            빛 여행 시간 계산기
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
                name: "화성에서 내 나이는 어떻게 되나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "화성의 공전주기는 지구의 약 1.88배이므로, 지구 나이를 1.88로 나누면 화성 나이를 알 수 있습니다. 예를 들어 지구에서 30세인 사람은 화성에서 약 16세입니다.",
                },
              },
              {
                "@type": "Question",
                name: "목성에서 1년은 지구 시간으로 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "목성의 공전주기는 지구의 약 11.86년입니다. 따라서 목성에서 1년은 지구 시간으로 약 11년 10개월에 해당합니다. 지구에서 30세인 사람은 목성에서 약 2.5세밖에 되지 않습니다.",
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
          "name": "행성 나이 계산기",
          "description": "다른 행성에서의 내 나이 계산",
          "url": "https://www.oktools.co.kr/space/planet-age",
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
            { "@type": "ListItem", "position": 3, "name": "행성 나이 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
