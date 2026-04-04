import type { Metadata } from "next";
import Link from "next/link";
import DreamApp from "@/components/fortune/DreamApp";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "꿈해몽 - 꿈 풀이 사전, 길몽 흉몽 확인",
  description:
    "꿈에서 본 동물·사람·장소의 의미를 무료로 풀이하세요. 돼지꿈, 뱀꿈, 치아꿈 등 길몽 흉몽을 상세하게 해석해드립니다.",
  keywords: ["꿈해몽", "꿈풀이", "꿈풀이사전", "돼지꿈", "뱀꿈", "치아꿈", "물꿈", "불꿈", "죽는꿈", "길몽흉몽", "태몽풀이", "꿈해석", "로또꿈"],
  alternates: {
    canonical: "/fortune/dream",
  },
};

export default function DreamPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/fortune" className="hover:text-primary-600">운세·재미</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">꿈해몽</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        꿈해몽
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        꿈에서 본 것을 검색하거나 카테고리별로 꿈의 의미를 알아보세요.
      </p>

      <DreamApp />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">꿈해몽 가이드</h2>
          <p>
            꿈해몽은 꿈에 나타난 상징이나 사건의 의미를 해석하는 것으로, 동양과 서양 모두에서 오랜 역사를 가지고 있습니다.
            꿈에서 본 동물, 사람, 장소, 상황 등을 검색하거나 카테고리별로 찾아보면 해당 꿈의 전통적 해석을 확인할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">자주 찾는 꿈 해석</h3>
          <p>
            돼지꿈은 재물과 행운을 상징하는 대표적인 길몽이며, 뱀꿈은 재물운이나 변화를 암시합니다.
            이빨이 빠지는 꿈은 가족의 건강에 대한 걱정을, 하늘을 나는 꿈은 목표 달성과 자유를 의미합니다.
            물에 빠지는 꿈은 감정적 혼란을, 시험 보는 꿈은 현실의 불안감을 반영하는 것으로 해석됩니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">길몽과 흉몽</h3>
          <p>
            길몽은 좋은 조짐을 나타내는 꿈으로, 금은보화, 용, 태양, 임신 등의 상징이 대표적입니다.
            흉몽은 주의가 필요한 신호를 담은 꿈이지만, 반드시 나쁜 일이 일어난다는 뜻은 아닙니다.
            꿈해몽은 전통적 해석을 바탕으로 한 재미 콘텐츠이므로 참고 용도로만 활용하시기 바랍니다.
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
          "name": "꿈해몽",
          "description": "꿈의 의미를 풀이하는 꿈해몽 사전",
          "url": "https://www.oktools.co.kr/fortune/dream",
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
            { "@type": "ListItem", "position": 3, "name": "꿈해몽" }
          ]
        }) }}
      />
    </div>
  );
}
