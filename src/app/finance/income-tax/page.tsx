import type { Metadata } from "next";
import Link from "next/link";
import IncomeTaxCalc from "@/components/finance/IncomeTaxCalc";

export const metadata: Metadata = {
  title: "종합소득세 계산기 2025 - 세율표 프리랜서 사업소득세",
  description:
    "무료 종합소득세 계산기로 소득세와 지방소득세를 바로 확인하세요. 2025년 세율표 적용, 프리랜서 3.3% 세금, 과세표준 실효세율 조회.",
  keywords: ["종합소득세계산기", "소득세세율", "종합소득세율표2025", "프리랜서세금", "사업소득세", "3.3%세금", "소득세계산", "과세표준", "실효세율", "종소세신고"],
};

export default function IncomeTaxPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">
          홈
        </Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">
          금융 계산기
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">종합소득세 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        종합소득세 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        소득 유형과 금액을 입력하면 2025년 세율 기준으로 종합소득세를 계산합니다.
      </p>

      <IncomeTaxCalc />

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          종합소득세 안내
        </h2>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <strong>종합소득세</strong>는 근로소득, 사업소득, 이자/배당소득 등을 합산하여 과세합니다.
          </li>
          <li>
            <strong>근로소득공제</strong>는 총급여에 따라 자동으로 계산됩니다.
          </li>
          <li>
            <strong>프리랜서(3.3%)</strong>는 원천징수된 세금(기납부세액)을 차감하여 추가 납부 또는
            환급 여부를 확인할 수 있습니다.
          </li>
          <li>
            <strong>인적공제</strong>: 본인 150만원, 배우자 150만원, 부양가족 1인당 150만원
          </li>
        </ul>
        <p className="mt-3 text-xs text-gray-400">
          * 2025년 기준 세율을 적용한 근사치입니다. 실제 세액은 각종 세액공제 및 감면에 따라 달라질 수
          있습니다.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "종합소득세 계산기",
          "description": "근로소득, 사업소득, 프리랜서 종합소득세 세율 계산",
          "url": "https://www.oktools.co.kr/finance/income-tax",
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
            { "@type": "ListItem", "position": 2, "name": "금융 계산기", "item": "https://www.oktools.co.kr/finance" },
            { "@type": "ListItem", "position": 3, "name": "종합소득세 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
