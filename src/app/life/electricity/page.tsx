import type { Metadata } from "next";
import Link from "next/link";
import ElectricityCalc from "@/components/life/ElectricityCalc";

export const metadata: Metadata = {
  title: "전기요금 계산기 2026 - 한전 누진세 전기세 계산",
  description:
    "무료 전기요금 계산기로 한국전력 누진세 반영 전기세를 계산하세요. 월간 kWh 사용량 입력만으로 전기료, 누진 구간, 여름·겨울 요금을 즉시 확인합니다.",
  keywords: ["전기요금계산기", "전기세계산기", "한전전기요금", "전기누진��", "전기세조회", "전력사용량요금", "kWh요금", "한국전력요금표", "전기료계산", "여름전기세"],
  alternates: {
    canonical: "/life/electricity",
  },
};

export default function ElectricityPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">전기요금 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">전기요금 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">한국전력 주택용(저압) 누진세를 반영하여 전기요금을 계산합니다.</p>
      <ElectricityCalc />

      {/* Related Tools */}
      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/life/discount" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            할인율 계산기
          </Link>
          <Link href="/life/percentage" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            퍼센트 계산기
          </Link>
          <Link href="/life/car-tax" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            자동차세 계산기
          </Link>
          <Link href="/life/traffic-fine" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            교통범칙금 조회
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
              "name": "전기요금 누진세란 무엇인가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "누진세는 전기 사용량이 많을수록 높은 단가를 적용하는 요금 체계입니다. 한국전력 주택용 요금은 사용량 구간별로 kWh당 단가가 올라가며, 사용량이 많은 여름과 겨울에 전기세 부담이 커집니다." }
            },
            {
              "@type": "Question",
              "name": "전기요금을 절약하는 방법은?",
              "acceptedAnswer": { "@type": "Answer", "text": "에너지 효율 1등급 가전 사용, 대기전력 차단(멀티탭 끄기), 여름철 에어컨 적정온도(26~28도) 유지, LED 조명 교체 등이 효과적입니다. 누진 구간을 넘지 않도록 사용량을 관리하는 것이 핵심입니다." }
            },
            {
              "@type": "Question",
              "name": "여름철 전기요금이 왜 더 비싼가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "에어컨 사용으로 전력 사용량이 급증하면 높은 누진 구간에 진입하기 때문입니다. 다만 7~8월에는 누진 구간을 완화하는 하계 할인이 적용되어 부담을 줄여줍니다." }
            },
            {
              "@type": "Question",
              "name": "월 300kWh 사용 시 전기요금은 얼마인가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "주택용(저압) 기준 월 300kWh 사용 시 약 4~5만원 수준입니다. 기본요금, 전력량요금, 기후환경요금, 연료비조정액, 부가세, 전력기금이 합산됩니다." }
            }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "전기요금 계산기",
          "description": "한국전력 누진세 반영 전기요금 계산",
          "url": "https://www.oktools.co.kr/life/electricity",
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
            { "@type": "ListItem", "position": 2, "name": "생활 도구", "item": "https://www.oktools.co.kr/life" },
            { "@type": "ListItem", "position": 3, "name": "전기요금 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
