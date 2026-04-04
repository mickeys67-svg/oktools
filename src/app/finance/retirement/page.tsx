import type { Metadata } from "next";
import Link from "next/link";
import RetirementCalc from "@/components/finance/RetirementCalc";

export const metadata: Metadata = {
  title: "퇴직금 계산기 - 근속연수 기반 퇴직금 계산",
  description: "입사일, 퇴사일, 평균 월급을 입력하면 퇴직금을 계산합니다.",
};

export default function RetirementPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">퇴직금 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">퇴직금 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">입사일, 퇴사일, 평균 월급을 입력하면 퇴직금을 계산합니다.</p>
      <RetirementCalc />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "퇴직금 계산기",
          "description": "근속연수 기반 퇴직금 계산",
          "url": "https://www.oktools.co.kr/finance/retirement",
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
            { "@type": "ListItem", "position": 3, "name": "퇴직금 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
