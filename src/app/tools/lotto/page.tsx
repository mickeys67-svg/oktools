import type { Metadata } from "next";
import Link from "next/link";
import LottoRecommender from "@/components/tools/LottoRecommender";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "로또 번호 추천 - 미출현번호 통계 기반 스마트 추천",
  description:
    "무료 로또 번호 추천. 미출현 번호, 고빈도 번호, 균형 추천 등 4가지 전략으로 로또 6/45 번호를 생성하세요. 당첨번호 통계 분석.",
  keywords: ["로또번호추천", "로또번호생성", "로또당첨번호", "로또6/45", "로또통계", "미출현번호", "로또번호조합", "로또예측", "로또분석", "이번주로또", "로또자동번호"],
  openGraph: {
    title: "로또 번호 추천 - 미출현번호 통계 기반 스마트 추천",
    description:
      "무료 로또 번호 추천. 미출현 번호, 고빈도 번호, 균형 추천 등 4가지 전략으로 로또 6/45 번호를 생성하세요. 당첨번호 통계 분석.",
  },
  alternates: {
    canonical: "/tools/lotto",
  },
};

export default function LottoPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary-600">유틸리티</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">로또 번호 추천</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        로또 번호 추천
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        역대 당첨번호 통계를 기반으로 4가지 전략의 로또 번호를 추천받으세요.
      </p>

      <LottoRecommender />
      <ResultAd />

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">추천 모드 설명</h2>
        <p>
          <strong>균형 추천</strong>은 자주 나온 번호 3개와 적게 나온 번호 3개를 조합하여 균형 잡힌 번호를 추천합니다.
          <strong> 미출현 번호</strong>는 최근 10회차에 등장하지 않은 번호를 우선 선택합니다.
          <strong> 고빈도 번호</strong>는 역대 가장 많이 당첨된 상위 15개 번호에서 추천합니다.
          <strong> 랜덤</strong>은 완전한 무작위로 번호를 생성합니다.
        </p>
        <p className="text-xs text-gray-400">
          * 로또 번호 추천은 통계 기반 참고용이며, 당첨을 보장하지 않습니다. 도박에 주의하세요.
        </p>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/tools/random-number" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            랜덤 번호 생성기
          </Link>
          <Link href="/tools/character-count" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            글자수 세기
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
                name: "로또 당첨 확률은 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "로또 6/45의 1등 당첨 확률은 8,145,060분의 1입니다. 45개 번호 중 6개를 맞춰야 하며, 2등(5개+보너스)은 약 135만분의 1, 3등(5개)은 약 3만5천분의 1, 4등(4개)은 약 733분의 1, 5등(3개)은 약 45분의 1입니다.",
                },
              },
              {
                "@type": "Question",
                name: "로또 번호 추천은 당첨 확률을 높여주나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "통계 기반 번호 추천은 과거 데이터를 분석한 참고 자료이며, 모든 번호 조합의 당첨 확률은 동일합니다. 미출현 번호나 고빈도 번호 전략은 번호 선택의 재미를 더해줄 뿐, 당첨을 보장하지 않습니다.",
                },
              },
              {
                "@type": "Question",
                name: "로또 당첨금에 세금은 얼마나 내나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "로또 당첨금 200만원 이하는 비과세, 200만원 초과~3억원 이하는 22%(소득세 20%+지방소득세 2%), 3억원 초과분은 33%(소득세 30%+지방소득세 3%)의 세금이 원천징수됩니다.",
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
          "name": "로또 번호 추천",
          "description": "미출현 번호, 고빈도 번호, 균형 추천 등 로또 6/45 스마트 번호 추천",
          "url": "https://www.oktools.co.kr/tools/lotto",
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
            { "@type": "ListItem", "position": 3, "name": "로또 번호 추천" }
          ]
        }) }}
      />
    </div>
  );
}
