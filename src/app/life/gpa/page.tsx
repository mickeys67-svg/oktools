import type { Metadata } from "next";
import Link from "next/link";
import GPACalculator from "@/components/life/GPACalculator";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "학점 계산기 - 대학교 GPA 평균평점 계산 (4.5/4.3)",
  description:
    "무료 학점 계산기로 대학교 평균 평점(GPA)을 계산하세요. 과목별 학점·성적 입력으로 4.5만점, 4.3만점 기준 GPA를 즉시 확인할 수 있습니다.",
  keywords: ["학점계산기", "GPA계산기", "대학학점계산", "평균평점계산", "4.5만점학점", "4.3만점학점", "학점평균", "성적계산기", "학점관리"],
  alternates: {
    canonical: "/life/gpa",
  },
};

export default function GPAPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">학점 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">학점 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">과목별 학점과 성적을 입력하여 평균 평점(GPA)을 계산합니다.</p>
      <GPACalculator />
      <ResultAd />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "학점 계산기",
          "description": "대학교 학점(GPA) 계산",
          "url": "https://www.oktools.co.kr/life/gpa",
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
            { "@type": "ListItem", "position": 3, "name": "학점 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
