import type { Metadata } from "next";
import Link from "next/link";
import BMRCalculator from "@/components/health/BMRCalculator";

export const metadata: Metadata = {
  title: "기초대사량 계산기 - BMR, 일일 권장 칼로리(TDEE) 계산",
  description: "성별, 나이, 키, 체중을 입력하면 기초대사량(BMR)과 활동 수준별 일일 권장 칼로리(TDEE)를 계산합니다.",
};

export default function BMRPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/health" className="hover:text-primary-600">건강 계산기</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">기초대사량 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">기초대사량 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">Mifflin-St Jeor 공식으로 기초대사량(BMR)과 활동별 권장 칼로리를 계산합니다.</p>
      <BMRCalculator />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "기초대사량 계산기",
          "description": "하루 기초대사량(BMR) 및 권장 칼로리 ���산",
          "url": "https://www.oktools.co.kr/health/bmr",
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
            { "@type": "ListItem", "position": 3, "name": "��초대사량 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
