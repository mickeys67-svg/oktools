import type { Metadata } from "next";
import Link from "next/link";
import TimerApp from "@/components/tools/TimerApp";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "온라인 타이머 - 카운트다운 라면타이머 운동타이머",
  description:
    "무료 온라인 카운트다운 타이머. 라면 타이머, 운동 타이머, 공부 타이머 등 프리셋 지원, 소리 알림, 큰 화면 표시.",
  keywords: ["온라인타이머", "카운트다운타이머", "라면타이머", "운동타이머", "공부타이머", "요리타이머", "3분타이머", "5분타이머", "10분타이머", "뽀모도로"],
  openGraph: {
    url: "/tools/timer",
    title: "온라인 타이머 - 카운트다운 라면타이머 운동타이머",
    description:
      "무료 온라인 카운트다운 타이머. 라면 타이머, 운동 타이머, 공부 타이머 등 프리셋 지원, 소리 알림, 큰 화면 표시.",
  },
  alternates: {
    canonical: "/tools/timer",
  },
};

export default function TimerPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary-600">유틸리티</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">타이머</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        온라인 타이머
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        시간을 설정하고 시작하세요. 종료 시 소리로 알려드립니다.
      </p>

      <TimerApp />
      <ResultAd />

      <InArticleAd />
      {/* Related Tools */}
      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/tools/stopwatch" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            스톱워치
          </Link>
          <Link href="/tools/clock" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            세계 시계
          </Link>
          <Link href="/tools/random-number" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            랜덤 숫자 생성기
          </Link>
          <Link href="/tools/character-count" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            글자수 세기
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "온라인 타이머는 어떻게 사용하나요?",
              "acceptedAnswer": { "@type": "Answer", "text": "원하는 시간을 설정하거나 프리셋(3분, 5분, 10분 등)을 선택한 후 시작 버튼을 누르면 됩니다. 카운트다운이 끝나면 소리로 알려줍니다. 브라우저에서 바로 사용할 수 있어 앱 설치가 필요 없습니다." }
            },
            {
              "@type": "Question",
              "name": "라면 타이머로 사용할 수 있나요?",
              "acceptedAnswer": { "@type": "Answer", "text": "네, 3분 프리셋을 선택하면 라면 타이머로 바로 사용할 수 있습니다. 라면 종류에 따라 4분, 5분도 설정 가능하며, 종료 시 알림음이 울립니다." }
            },
            {
              "@type": "Question",
              "name": "뽀모도로 타이머로 활용할 수 있나요?",
              "acceptedAnswer": { "@type": "Answer", "text": "25분 집중 + 5분 휴식의 뽀모도로 기법에 활용할 수 있습니다. 25분을 설정하고 집중한 후, 알림이 울리면 5분 휴식 타이머를 설정하세요." }
            }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "타이머",
          "description": "프리셋 지원 온라인 카운트다운 타이머",
          "url": "https://www.oktools.co.kr/tools/timer",
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
            { "@type": "ListItem", "position": 3, "name": "타이머" }
          ]
        }) }}
      />
    </div>
  );
}
