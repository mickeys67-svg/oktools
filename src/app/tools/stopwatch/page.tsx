import type { Metadata } from "next";
import Link from "next/link";
import StopwatchApp from "@/components/tools/StopwatchApp";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "온라인 스톱워치 - 랩타임 기록, 운동 시간 측정",
  description:
    "무료 온라인 스톱워치. 랩타임 기록, 큰 화면 표시 지원. 운동·공부·요리 시간 측정에 바로 사용하세요.",
  keywords: ["온라인스톱워치", "스톱워치", "랩타임", "시간측정", "운동시간", "스톱워치앱", "초시계", "타임측정"],
  alternates: {
    canonical: "/tools/stopwatch",
  },
};

export default function StopwatchPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary-600">유틸리티</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">스톱워치</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        온라인 스톱워치
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        시작 버튼을 누르면 시간이 측정됩니다. 랩 버튼으로 구간 기록을 남길 수 있습니다.
      </p>

      <StopwatchApp />
      <ResultAd />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "스톱워치",
          "description": "랩타임 기능 지원 온라인 스톱워치",
          "url": "https://www.oktools.co.kr/tools/stopwatch",
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
            { "@type": "ListItem", "position": 2, "name": "유틸리티", "item": "https://www.oktools.co.kr/tools" },
            { "@type": "ListItem", "position": 3, "name": "스톱워치" }
          ]
        }) }}
      />
    </div>
  );
}
