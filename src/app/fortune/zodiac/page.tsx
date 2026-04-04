import type { Metadata } from "next";
import Link from "next/link";
import ZodiacApp from "@/components/fortune/ZodiacApp";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "별자리 운세 - 12궁 오늘의 운세 무료",
  description:
    "생년월일로 나의 별자리를 확인하고, 오늘의 종합운·연애운·금전운·건강운을 무료로 확인하세요. 12별자리 성격과 궁합도 제공.",
  keywords: ["별자리운세", "오늘의별자리운세", "12별자리", "물병자리운세", "물고기자리운세", "양자리운세", "별자리성격", "별자리궁합", "별자리계산", "오늘운세"],
  alternates: {
    canonical: "/fortune/zodiac",
  },
};

export default function ZodiacPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/fortune" className="hover:text-primary-600">운세·재미</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">별자리 운세</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        별자리 운세
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        생년월일 또는 별자리를 선택하면 오늘의 운세를 확인할 수 있습니다.
      </p>

      <ZodiacApp />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">별자리 운세 가이드</h2>
          <p>
            별자리 운세는 태양이 태어난 시점에 위치한 황도 12궁의 별자리를 기반으로 운세를 점치는 서양 점성술의 일종입니다.
            생년월일을 입력하거나 별자리를 직접 선택하면 오늘의 종합운, 연애운, 금전운, 건강운을 확인할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">4대 원소와 12별자리</h3>
          <p>
            불(양자리, 사자자리, 사수자리)은 열정과 행동력, 흙(황소자리, 처녀자리, 염소자리)은 안정과 현실 감각,
            바람(쌍둥이자리, 천칭자리, 물병자리)은 소통과 지적 호기심, 물(게자리, 전갈자리, 물고기자리)은 감성과 직관을 상징합니다.
            같은 원소의 별자리끼리 궁합이 잘 맞는다고 알려져 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">별자리 확인 방법</h3>
          <p>
            별자리는 생일에 따라 결정됩니다. 양자리(3/21~4/19), 황소자리(4/20~5/20), 쌍둥이자리(5/21~6/21) 등
            각 별자리마다 약 한 달의 기간이 할당됩니다. 경계일에 태어난 경우 연도에 따라 별자리가 달라질 수 있으니
            정확한 생년월일로 확인하는 것이 좋습니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/fortune/tarot" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            타로카드
          </Link>
          <Link href="/fortune/tojeong" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            토정비결
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
          "name": "별자리 운세",
          "description": "12별자리별 오늘의 운세",
          "url": "https://www.oktools.co.kr/fortune/zodiac",
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
            { "@type": "ListItem", "position": 3, "name": "별자리 운세" }
          ]
        }) }}
      />
    </div>
  );
}
