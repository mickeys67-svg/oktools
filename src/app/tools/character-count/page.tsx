import type { Metadata } from "next";
import Link from "next/link";
import CharacterCount from "@/components/tools/CharacterCount";

export const metadata: Metadata = {
  title: "글자수 세기 - 공백포함 제외, 바이트 계산기",
  description: "무료 글자수 세기 도구. 공백 포함·제외 글자수, 단어수, 바이트수를 실시간 계산하세요. 자기소개서·이력서·SNS 글자수 확인.",
  keywords: ["글자수세기", "글자수카운터", "자기소개서글자수", "이력서글자수", "바이트계산", "공백포함글자수", "공백제외글자수", "한글글자수", "SNS글자수"],
  alternates: {
    canonical: "/tools/character-count",
  },
};

export default function CharacterCountPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary-600">유틸리티</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">글자수 세기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">글자수 세기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">텍스트를 입력하면 글자수, 단어수, 바이트수를 실시간으로 계산합니다.</p>
      <CharacterCount />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "글자수 세기",
          "description": "한글, 영문, 공백 포함/제외 글자수 카운트",
          "url": "https://www.oktools.co.kr/tools/character-count",
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
            { "@type": "ListItem", "position": 1, "name": "��", "item": "https://www.oktools.co.kr" },
            { "@type": "ListItem", "position": 2, "name": "유틸리티", "item": "https://www.oktools.co.kr/tools" },
            { "@type": "ListItem", "position": 3, "name": "글자수 세기" }
          ]
        }) }}
      />
    </div>
  );
}
