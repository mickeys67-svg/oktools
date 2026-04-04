import type { Metadata } from "next";
import Link from "next/link";
import AcquisitionTaxCalc from "@/components/finance/AcquisitionTaxCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "취득세 계산기 2026 - 부동산 주택 다주택자 취득세율",
  description:
    "무료 취득세 계산기로 부동산 취득세, 지방교육세, 농어촌특별세를 바로 확인하세요. 2026년 다주택자 중과세율 반영, 아파트 1주택 취득세 조회.",
  keywords: ["취득세계산기", "부동산취득세", "주택취득세", "다주택취득세", "취득세율", "아파트취득세", "1주택취득세", "지방교육세", "농어촌특별세", "부동산세금계산"],
  alternates: {
    canonical: "/finance/acquisition-tax",
  },
};

export default function AcquisitionTaxPage() {
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
        <span className="text-gray-900 dark:text-gray-100">취득세 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        취득세 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        부동산 유형과 취득가액을 입력하면 취득세, 지방교육세, 농어촌특별세를 계산합니다.
      </p>

      <AcquisitionTaxCalc />
      <ResultAd />

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          취득세 안내
        </h2>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <strong>취득세</strong>는 부동산을 취득할 때 납부하는 지방세입니다.
          </li>
          <li>
            <strong>다주택자 중과</strong>: 조정대상지역 2주택 8%, 3주택 이상 12%가 적용됩니다.
          </li>
          <li>
            <strong>지방교육세</strong>: 취득세액의 10%
          </li>
          <li>
            <strong>농어촌특별세</strong>: 전용면적 85m2 초과 주택 취득 시 취득세의 10%
          </li>
        </ul>
        <p className="mt-3 text-xs text-gray-400">
          * 2024년 기준 세율을 적용한 근사치입니다. 실제 세액은 감면 혜택 등에 따라 달라질 수
          있습니다.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "취득세 계��기",
          "description": "부동산 취득세, 지방교육세, 농어촌특별세 계산",
          "url": "https://www.oktools.co.kr/finance/acquisition-tax",
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
            { "@type": "ListItem", "position": 3, "name": "취��세 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
