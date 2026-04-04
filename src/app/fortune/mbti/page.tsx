import type { Metadata } from "next";
import Link from "next/link";
import MBTICompatibility from "@/components/fortune/MBTICompatibility";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "MBTI 궁합 테스트 - 16유형 연애 친구 궁합",
  description:
    "나와 상대 MBTI를 선택하면 궁합 점수와 관계 분석을 무료로 확인하세요. 16유형 연애·친구·직장 궁합 총정리.",
  keywords: ["MBTI궁합", "MBTI궁합테스트", "MBTI연애궁합", "INFP궁합", "ENFP궁합", "INTJ궁합", "MBTI성격유형", "MBTI테스트", "16유형궁합", "MBTI커플궁합"],
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

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">MBTI란?</h2>
        <p>
          MBTI(Myers-Briggs Type Indicator)는 캐서린 브릭스와 이사벨 마이어스가 개발한 성격 유형 검사입니다.
          4가지 선호 지표(외향/내향, 감각/직관, 사고/감정, 판단/인식)의 조합으로 16가지 성격 유형을 분류합니다.
        </p>
        <p className="text-xs text-gray-400">
          * MBTI 궁합은 재미와 참고 용도입니다. 실제 관계는 개인의 노력과 이해가 더 중요합니다.
        </p>
      </section>

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
