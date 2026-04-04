import type { Metadata } from "next";
import Link from "next/link";
import DDayCalc from "@/components/health/DDayCalc";

export const metadata: Metadata = {
  title: "D-Day 계산기 - 디데이 날짜 계산, 남은 일수 확인",
  description:
    "무료 디데이 계산기로 남은 일수와 지난 일수를 계산하세요. 시험 D-Day, 기념일, 100일·200일 커플 디데이, 수능 카운트다운을 즉시 확인할 수 있습니다.",
  keywords: ["디데이계산기", "D-Day계산기", "날짜계산기", "남은일수계산", "기념일계산", "100일계산", "200일계산", "시험디데이", "수능디데이", "커플디데이"],
  alternates: {
    canonical: "/health/dday",
  },
};

export default function DDayPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/health" className="hover:text-primary-600">건강 계산기</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">D-Day 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">D-Day 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">목표 날짜까지 남은 일수와 지난 일수를 계산합니다.</p>
      <DDayCalc />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "D-Day 계산기",
          "description": "특정 날짜까지 남은 일수 또는 지난 일수 계산",
          "url": "https://www.oktools.co.kr/health/dday",
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
            { "@type": "ListItem", "position": 3, "name": "D-Day 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
