import type { Metadata } from "next";
import Link from "next/link";
import WheelConverter from "@/components/convert/WheelConverter";

export const metadata: Metadata = {
  title: "단위 변환기 - 길이 무게 온도 면적 부피 속도 데이터",
  description:
    "무료 단위 변환기. 길이·무게·온도·면적·부피·속도·데이터 용량을 휠 방식으로 간편하게 변환하세요. 평수 계산기, cm인치 변환 지원.",
  keywords: ["단위변환기", "길이변환", "무게변환", "온도변환", "면적변환", "평수계산기", "cm인치변환", "kg파운드변환", "섭씨화씨변환", "부피변환", "속도변환", "데이터용량변환", "평방미터평변환"],
  openGraph: {
    url: "/convert",
    title: "단위 변환기 - 길이 무게 온도 면적 부피 속도 데이터",
    description:
      "무료 단위 변환기. 길이·무게·온도·면적·부피·속도·데이터 용량을 휠 방식으로 간편하게 변환하세요. 평수 계산기, cm인치 변환 지원.",
  },
  alternates: {
    canonical: "/convert",
  },
};

export default function ConvertPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">
          홈
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">단위 변환</span>
      </nav>

      <div className="mb-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-white">
          <span className="text-xl font-bold">↔</span>
        </div>
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
          단위 변환기
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          휠을 돌려 단위를 선택하고, 값을 입력하면 바로 변환됩니다.
        </p>
      </div>

      <WheelConverter />

      {/* SEO Content */}
      <section className="mt-12 rounded-xl bg-gray-50 p-6 dark:bg-gray-800/50">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
          오케이툴즈 단위 변환기
        </h2>
        <div className="space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          <p>
            길이, 무게, 온도, 면적, 부피, 속도, 데이터 용량까지 7가지
            카테고리의 단위를 손쉽게 변환할 수 있습니다.
          </p>
          <p>
            한국 전통 단위(평, 근, 돈, 되, 말, 리)도 지원하여 부동산
            면적 계산이나 전통 단위 환산에도 활용할 수 있습니다.
          </p>
          <p>
            휠 방식의 직관적인 인터페이스로 모바일에서도 편리하게
            사용하세요. 모든 계산은 브라우저에서 즉시 처리됩니다.
          </p>
        </div>
      </section>

      {/* Related Tools */}
      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/life/percentage" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            퍼센트 계산기
          </Link>
          <Link href="/life/discount" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            할인율 계산기
          </Link>
          <Link href="/life/gpa" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            학점 계산기
          </Link>
          <Link href="/life/electricity" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            전기요금 계산기
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "1평은 몇 제곱미터(m²)인가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "1평은 약 3.3058m²입니다. 반대로 1m²는 약 0.3025평입니다. 부동산에서 33m²는 약 10평, 84m²는 약 25.4평에 해당합니다." }
            },
            {
              "@type": "Question",
              "name": "1인치는 몇 cm인가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "1인치(inch)는 정확히 2.54cm입니다. TV, 모니터, 스마트폰 화면 크기를 표시할 때 인치 단위를 사용하며, 대각선 길이를 의미합니다." }
            },
            {
              "@type": "Question",
              "name": "섭씨(°C)와 화씨(°F)는 어떻게 변환하나요?",
              "acceptedAnswer": { "@type": "Answer", "text": "섭씨를 화씨로 변환: °F = °C × 9/5 + 32. 화씨를 섭씨로 변환: °C = (°F - 32) × 5/9. 예를 들어 섭씨 36.5도는 화씨 97.7도입니다." }
            },
            {
              "@type": "Question",
              "name": "1kg은 몇 파운드(lb)인가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "1kg은 약 2.2046파운드(lb)입니다. 반대로 1파운드는 약 0.4536kg입니다. 해외직구나 운동 기구 무게 확인 시 자주 필요한 변환입니다." }
            }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "단위 변환기",
          "description": "길이, 무게, 온도, 면적, 부피, 속도, 데이터 — 휠 방식 통합 변환기",
          "url": "https://www.oktools.co.kr/convert",
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
            { "@type": "ListItem", "position": 2, "name": "단위 변환기" }
          ]
        }) }}
      />
    </div>
  );
}
