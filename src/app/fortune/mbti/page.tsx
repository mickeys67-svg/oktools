import type { Metadata } from "next";
import Link from "next/link";
import MBTICompatibility from "@/components/fortune/MBTICompatibility";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "MBTI 궁합 테스트 - 16유형 연애 친구 궁합",
  description:
    "나와 상대 MBTI를 선택하면 궁합 점수와 관계 분석을 무료로 확인하세요. 16유형 연애·친구·직장 궁합 총정리.",
  keywords: ["MBTI궁합", "MBTI궁합테스트", "MBTI연애궁합", "INFP궁합", "ENFP궁합", "INTJ궁합", "MBTI성격유형", "MBTI테스트", "16유형궁합", "MBTI커플궁합"],
  openGraph: {
    url: "/fortune/mbti",
    title: "MBTI 궁합 테스트 - 16유형 연애 친구 궁합",
    description:
      "나와 상대 MBTI를 선택하면 궁합 점수와 관계 분석을 무료로 확인하세요. 16유형 연애·친구·직장 궁합 총정리.",
  },
  alternates: {
    canonical: "/fortune/mbti",
  },
};

export default function MBTIPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/fortune" className="hover:text-primary-600">운세·재미</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">MBTI 궁합</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        MBTI 궁합
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        나와 상대방의 MBTI를 선택하면 궁합 점수와 관계 분석을 확인합니다.
      </p>

      <MBTICompatibility />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">MBTI 궁합 가이드</h2>
          <p>
            MBTI(Myers-Briggs Type Indicator)는 캐서린 브릭스와 이사벨 마이어스가 개발한 성격 유형 검사입니다.
            4가지 선호 지표(외향/내향, 감각/직관, 사고/감정, 판단/인식)의 조합으로 16가지 성격 유형을 분류합니다.
            나와 상대의 MBTI를 선택하면 궁합 점수와 관계 분석을 확인할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">궁합 판정 기준</h3>
          <p>
            MBTI 궁합은 인지기능(Cognitive Functions) 이론을 기반으로 합니다. 일반적으로 일부 지표가 같고 일부가 다른
            조합이 서로를 보완하여 좋은 궁합으로 알려져 있습니다. 예를 들어 INFP와 ENFJ, INTJ와 ENTP는 높은 궁합으로 평가됩니다.
            같은 유형끼리는 공감대가 높지만 비슷한 약점을 가질 수 있고, 정반대 유형은 매력적이지만 갈등이 생길 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">참고사항</h3>
          <p>
            MBTI는 심리학적 도구로 널리 사용되지만, 성격을 16가지로 명확히 구분하기는 어렵다는 학술적 비판도 있습니다.
            궁합 결과는 재미와 대화 소재로 활용하시고, 실제 관계에서는 개인의 성장과 상호 이해가 더 중요합니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/fortune/blood-type" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            혈액형 궁합
          </Link>
          <Link href="/fortune/name-match" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            이름 궁합
          </Link>
          <Link href="/fortune/tarot" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            타로카드
          </Link>
          <Link href="/fortune/zodiac-animal" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            띠별 운세
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
                name: "MBTI 궁합이 가장 좋은 조합은 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "MBTI에서 궁합이 좋다고 알려진 대표적 조합은 INFP-ENFJ, INTJ-ENTP, ISFJ-ESFP, ISTJ-ESTP 등입니다. 일반적으로 일부 지표는 같고 일부는 다른 보완적 조합이 좋은 궁합으로 평가됩니다. 다만 실제 관계에서는 개인의 성숙도와 소통 노력이 더 중요합니다.",
                },
              },
              {
                "@type": "Question",
                name: "MBTI 4가지 지표는 무엇을 의미하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "MBTI는 4가지 선호 지표로 구성됩니다. E(외향)/I(내향)은 에너지 방향, S(감각)/N(직관)은 정보 인식 방식, T(사고)/F(감정)은 판단 기준, J(판단)/P(인식)은 생활 양식을 나타냅니다. 이 조합으로 INTJ, ENFP 등 16가지 성격 유형이 만들어집니다.",
                },
              },
              {
                "@type": "Question",
                name: "MBTI가 같으면 궁합이 좋은가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "같은 MBTI끼리는 서로를 잘 이해하고 공감대가 높다는 장점이 있지만, 비슷한 약점을 공유하여 문제 해결이 어려울 수 있습니다. 예를 들어 P형끼리 만나면 계획성이 부족해질 수 있고, J형끼리는 주도권 다툼이 생길 수 있습니다.",
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
          "name": "MBTI 궁합",
          "description": "MBTI 유형별 궁합 확인",
          "url": "https://www.oktools.co.kr/fortune/mbti",
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
            { "@type": "ListItem", "position": 2, "name": "운세/재미", "item": "https://www.oktools.co.kr/fortune" },
            { "@type": "ListItem", "position": 3, "name": "MBTI 궁합" }
          ]
        }) }}
      />
    </div>
  );
}
