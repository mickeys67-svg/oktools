import type { Metadata } from "next";
import Link from "next/link";
import RandomGenerator from "@/components/tools/RandomGenerator";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "랜덤 번호 생성기 - 로또 주사위 동전 던지기",
  description: "무료 랜덤 번호 생성기. 로또 번호, 주사위 굴리기, 동전 던지기, 추첨 번호 등 다양한 무작위 생성 도구를 바로 사용하세요.",
  keywords: ["랜덤번호생성기", "랜덤숫자", "로또번호", "추첨번호", "주사위굴리기", "동전던지기", "무작위번호", "제비뽑기", "랜덤뽑기"],
  alternates: {
    canonical: "/tools/random-number",
  },
};

export default function RandomNumberPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary-600">유틸리티</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">랜덤 번호 생성기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">랜덤 번호 생성기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">로또 번호, 랜덤 숫자, 동전 던지기, 주사위 등 다양한 랜덤 도구입니다.</p>
      <RandomGenerator />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">랜덤 번호 생성기 사용 가이드</h2>
          <p>
            랜덤 번호 생성기는 로또 번호, 주사위, 동전 던지기, 범위 지정 랜덤 숫자 등 다양한 무작위 생성 기능을 제공하는 도구입니다.
            추첨, 제비뽑기, 순서 정하기, 게임 등 공정한 무작위 선택이 필요한 상황에서 활용할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">난수 생성 원리</h3>
          <p>
            이 도구는 브라우저의 암호학적 난수 생성기(Crypto.getRandomValues)를 활용하여 예측 불가능한 무작위 값을 생성합니다.
            Math.random()보다 더 높은 품질의 난수를 제공하므로 공정한 추첨에 적합합니다.
            다만 로또 당첨을 보장하는 것은 아니며, 모든 번호 조합의 당첨 확률은 동일합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">활용 사례</h3>
          <p>
            회식 메뉴 결정(1~5 랜덤), 팀 나누기, 발표 순서 정하기, 보드게임 주사위 대용,
            경품 추첨 번호 생성, 비밀번호용 랜덤 숫자 생성 등 일상에서 다양하게 활용할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/tools/lotto" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            로또 번호 추천
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "랜덤 번호 생성기",
          "description": "로또 번호, 랜덤 숫자, 추첨 번호 생성",
          "url": "https://www.oktools.co.kr/tools/random-number",
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
            { "@type": "ListItem", "position": 3, "name": "랜덤 번호 생성기" }
          ]
        }) }}
      />
    </div>
  );
}
