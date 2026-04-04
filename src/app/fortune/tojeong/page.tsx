import type { Metadata } from "next";
import Link from "next/link";
import TojeongApp from "@/components/fortune/TojeongApp";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "토정비결 2026 - 생년월일 무료 운세 (상중하원)",
  description:
    "생년월일 입력으로 토정비결 상원·중원·하원 운세를 무료 확인하세요. 재물운, 연애운, 건강운, 직업운까지 한눈에 풀이합니다.",
  keywords: ["토정비결", "토정비결2026", "무료토정비결", "올해운세", "신년운세", "생년월일운세", "토정비결보기", "토정비결풀이", "재물운", "연애운", "건강운"],
  alternates: {
    canonical: "/fortune/tojeong",
  },
};

export default function TojeongPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/fortune" className="hover:text-primary-600">운세·재미</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">토정비결</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        토정비결
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        생년월일을 입력하면 올해의 상원(1~4월), 중원(5~8월), 하원(9~12월) 운세를 확인합니다.
      </p>

      <TojeongApp />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">토정비결 가이드</h2>
          <p>
            토정비결은 조선 시대 학자 이지함(호: 토정)이 만든 것으로 알려진 한국 전통 운세입니다.
            음력 생년월일을 기반으로 한 해를 상원(1~4월), 중원(5~8월), 하원(9~12월)으로 나누어 운세를 봅니다.
            재물운, 연애운, 건강운, 직업운 등 삶의 주요 영역에 대한 풀이를 제공합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">토정비결의 원리</h3>
          <p>
            음력 생년의 천간지지, 월, 일을 조합하여 상원/중원/하원 각각의 괘(卦)를 뽑고,
            이에 해당하는 풀이를 통해 그 기간의 운세를 해석합니다.
            전통적으로 설날을 전후하여 새해 운세를 확인하는 것이 한국의 세시풍속이며,
            가족과 함께 서로의 토정비결을 확인하며 새해 덕담을 나누는 문화가 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">참고사항</h3>
          <p>
            본 서비스는 전통 토정비결의 알고리즘을 간소화하여 제공하며, 재미와 참고 용도로만 활용하시기 바랍니다.
            정확한 음력 변환을 기반으로 계산하지만, 전문 역술인의 해석과는 차이가 있을 수 있습니다.
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
          <Link href="/fortune/zodiac-animal" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            띠 계산기
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
          "name": "토정비결",
          "description": "생년월일로 보는 올해의 운세",
          "url": "https://www.oktools.co.kr/fortune/tojeong",
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
            { "@type": "ListItem", "position": 3, "name": "토정비결" }
          ]
        }) }}
      />
    </div>
  );
}
