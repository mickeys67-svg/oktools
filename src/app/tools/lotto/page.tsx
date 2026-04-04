import type { Metadata } from "next";
import Link from "next/link";
import LottoRecommender from "@/components/tools/LottoRecommender";

export const metadata: Metadata = {
  title: "로또 번호 추천 - 미출현 번호, 통계 기반 스마트 추천",
  description:
    "미출현 번호, 고빈도 번호, 균형 추천 등 다양한 전략으로 로또 6/45 번호를 추천받으세요. 역대 당첨번호 통계 분석 제공.",
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
