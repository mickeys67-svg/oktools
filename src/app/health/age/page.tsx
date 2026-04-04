import type { Metadata } from "next";
import Link from "next/link";
import AgeCalculator from "@/components/health/AgeCalculator";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "만 나이 계산기 - 생년월일로 정확한 만나이 확인",
  description:
    "무료 만 나이 계산기로 생년월일 입력만으로 정확한 만나이, 생존 일수, 띠, 별자리를 확인하세요. 2023년 만나이 통일법 기준 자동 계산.",
  keywords: ["만나이계산기", "나이계산기", "만나이계산", "생년월일나이", "한국나이계산", "만나이통일법", "세는나이만나이", "띠계산", "별자리확인", "나이계산법"],
  alternates: {
    canonical: "/health/age",
  },
};

export default function AgePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/health" className="hover:text-primary-600">건강 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">만 나이 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        만 나이 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        생년월일을 입력하면 만 나이, 생존 일수, 다음 생일까지 남은 일수를 계산합니다.
      </p>

      <AgeCalculator />
      <ResultAd />

      <section className="mt-10 space-y-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          만 나이란?
        </h2>
        <p>
          만 나이는 태어난 날을 기준으로 실제로 살아온 햇수를 세는 나이 계산법입니다.
          2023년 6월 28일부터 대한민국은 법적으로 만 나이를 공식 나이로 사용합니다.
        </p>
        <div className="rounded-lg bg-blue-50 p-4 text-blue-800 dark:bg-blue-950 dark:text-blue-200">
          <strong>만 나이 계산법</strong>: 현재 연도 - 출생 연도. 단, 생일이 지나지 않았으면 1을 빼줍니다.
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "만 나이는 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "만 나이는 현재 연도에서 출생 연도를 빼되, 올해 생일이 아직 지나지 않았으면 1을 빼서 계산합니다.",
                },
              },
              {
                "@type": "Question",
                name: "한국 나이와 만 나이의 차이는?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "한국 나이(세는 나이)는 태어나면 바로 1살이고 매년 1월 1일에 한 살씩 추가됩니다. 만 나이보다 1~2살 많습니다. 2023년부터 법적으로 만 나이를 사용합니다.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.oktools.co.kr" },
            { "@type": "ListItem", "position": 2, "name": "건강 계산기", "item": "https://www.oktools.co.kr/health" },
            { "@type": "ListItem", "position": 3, "name": "만 나이 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
