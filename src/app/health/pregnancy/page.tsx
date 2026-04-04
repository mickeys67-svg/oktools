import type { Metadata } from "next";
import Link from "next/link";
import PregnancyCalc from "@/components/health/PregnancyCalc";

export const metadata: Metadata = {
  title: "임신 주수 계산기 - 출산예정일 삼분기 확인",
  description:
    "무료 임신 주수 계산기로 출산예정일과 현재 임신 주수를 확인하세요. 마지막 생리일 입력만으로 삼분기, 아기 크기, 주차별 발달 정보를 즉시 제공합니다.",
  keywords: ["임신주수계산기", "출산예정일계산", "임신몇주", "임신주수확인", "마지막생리일출산예정일", "삼분기", "임신초기증상", "예정일계산기", "아기크기"],
  alternates: {
    canonical: "/health/pregnancy",
  },
};

export default function PregnancyPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/health" className="hover:text-primary-600">건강 계산기</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">임신 주수 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">임신 주수 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">마지막 생리 시작일 기준으로 임신 주수와 출산 예정일을 계산합니다.</p>
      <PregnancyCalc />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "임신 주수 계산기",
          "description": "마지막 생리일 기�� 임신 주수 및 출산 예정일 계산",
          "url": "https://www.oktools.co.kr/health/pregnancy",
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
            { "@type": "ListItem", "position": 2, "name": "건강 계산기", "item": "https://www.oktools.co.kr/health" },
            { "@type": "ListItem", "position": 3, "name": "임신 주수 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
