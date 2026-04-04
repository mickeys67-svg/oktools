import type { Metadata } from "next";
import Link from "next/link";
import RetirementCalc from "@/components/finance/RetirementCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "퇴직금 계산기 2026 - 근속연수별 퇴직금 자동 계산",
  description: "무료 퇴직금 계산기로 입사일, 퇴사일, 평균 월급 입력 후 퇴직금을 바로 확인하세요. 근속연수별 퇴직금 정산, 세금 공제액까지 조회 가능.",
  keywords: ["퇴직금계산기", "퇴직금계산방법", "퇴직금계산법", "퇴직금정산", "퇴직금지급기준", "퇴직금세금", "근속연수퇴직금", "1년미만퇴직금", "퇴직연금"],
  alternates: {
    canonical: "/finance/retirement",
  },
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
      <ResultAd />

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
