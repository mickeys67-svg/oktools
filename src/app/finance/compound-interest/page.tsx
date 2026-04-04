import type { Metadata } from "next";
import Link from "next/link";
import CompoundCalc from "@/components/finance/CompoundCalc";

export const metadata: Metadata = {
  title: "복리 계산기 - 복리 효과 투자 수익 시뮬레이션 무료",
  description: "무료 복리 계산기로 투자 수익을 시뮬레이션하세요. 초기 투자금, 월 적립금, 수익률 입력 후 자산 증식 효과를 바로 확인. 72법칙 적용.",
  keywords: ["복리계산기", "복리이자계산", "복리효과", "투자수익계산", "적립식투자", "복리72법칙", "자산증식", "장기투자시뮬레이션"],
  alternates: {
    canonical: "/finance/compound-interest",
  },
};

export default function CompoundInterestPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">복리 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">복리 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">초기 투자금과 월 적립금으로 복리 성장을 시뮬레이션합니다.</p>
      <CompoundCalc />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "복리 계산기",
          "description": "복리 효과 시뮬레이션 및 투자 성장 계산",
          "url": "https://www.oktools.co.kr/finance/compound-interest",
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
            { "@type": "ListItem", "position": 3, "name": "복리 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
