import type { Metadata } from "next";
import Link from "next/link";
import AgeCalculator from "@/components/health/AgeCalculator";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "만 나이 계산기 - 생년월일로 정확한 만나이 확인",
  description:
    "무료 만 나이 계산기로 생년월일 입력만으로 정확한 만나이, 생존 일수, 띠, 별자리를 확인하세요. 2023년 만나이 통일법 기준 자동 계산.",
  keywords: ["만나이계산기", "나이계산기", "만나이계산", "생년월일나이", "한국나이계산", "만나이통일법", "세는나이만나이", "띠계산", "별자리확인", "나이계산법"],
  openGraph: {
    url: "/health/age",
    title: "만 나이 계산기 - 생년월일로 정확한 만나이 확인",
    description:
      "무료 만 나이 계산기로 생년월일 입력만으로 정확한 만나이, 생존 일수, 띠, 별자리를 확인하세요. 2023년 만나이 통일법 기준 자동 계산.",
  },
  alternates: {
    canonical: "/health/age",
  },
};

export default function AgePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/health" className="hover:text-primary-600">건강 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">만 나이 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        만 나이 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        생년월일을 입력하면 만 나이, 생존 일수, 다음 생일까지 남은 일수를 계산합니다.
      </p>

      <AgeCalculator />
      <ResultAd />

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            만 나이 계산기 사용 가이드
          </h2>
          <p>
            만 나이 계산기는 생년월일을 입력하면 정확한 만 나이, 생존 일수, 다음 생일까지 남은 일수를 계산해주는 도구입니다.
            공식 서류 작성, 나이 제한 확인, 보험이나 연금 가입 자격 조회 등 만 나이가 필요한 다양한 상황에서 활용할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">만 나이 계산 방법</h3>
          <div className="rounded-lg bg-blue-50 p-4 text-blue-800 dark:bg-blue-950 dark:text-blue-200">
            <strong>만 나이</strong> = 현재 연도 - 출생 연도. 단, 올해 생일이 아직 지나지 않았으면 1을 빼줍니다.
          </div>
          <p className="mt-2">
            2023년 6월 28일부터 대한민국은 법적으로 만 나이를 공식 나이로 사용합니다.
            기존의 세는 나이(한국 나이)보다 1~2살 적으며, 병역, 선거, 음주와 흡연 연령 기준은 모두 만 나이를 따릅니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">연 나이와 세는 나이 비교</h3>
          <p>
            연 나이는 현재 연도에서 출생 연도를 단순히 뺀 값이고, 세는 나이는 태어나면 1살로 시작해 매년 1월 1일에 한 살씩 더합니다.
            만 나이 통일법 시행 이후에도 일부 전통 행사에서는 세는 나이를 관습적으로 사용하기도 합니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/health/dday" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            D-Day 계산기
          </Link>
          <Link href="/health/biorhythm" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            바이오리듬
          </Link>
          <Link href="/finance/loan-calculator" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            대출 이자 계산기
          </Link>
          <Link href="/fortune/tarot" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            타로카드
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
                name: "만 나이는 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "만 나이는 현재 연도에서 출생 연도를 빼되, 올해 생일이 아직 지나지 않았으면 1을 빼서 계산합니다.",
                },
              },
              {
                "@type": "Question",
                name: "한국 나이와 만 나이의 차이는?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "한국 나이(세는 나이)는 태어나면 바로 1살이고 매년 1월 1일에 한 살씩 추가됩니다. 만 나이보다 1~2살 많습니다. 2023년부터 법적으로 만 나이를 사용합니다.",
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
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.oktools.co.kr" },
            { "@type": "ListItem", "position": 2, "name": "건강 계산기", "item": "https://www.oktools.co.kr/health" },
            { "@type": "ListItem", "position": 3, "name": "만 나이 계산기" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "만 나이 계산기",
          "url": "https://www.oktools.co.kr/health/age",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW"
          },
          "description": "무료 만 나이 계산기로 생년월일 입력만으로 정확한 만나이, 생존 일수, 띠, 별자리를 확인하세요. 2023년 만나이 통일법 기준 자동 계산."
        }) }}
      />
    </div>
  );
}
