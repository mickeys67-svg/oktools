import type { Metadata } from "next";
import Link from "next/link";
import BodyFatCalc from "@/components/health/BodyFatCalc";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "체지방률 계산기 - US Navy 공식 체지방 측정",
  description:
    "무료 체지방률 계산기로 US Navy 공식 기반 체지방률을 측정하세요. 허리둘레, 목둘레, 키를 입력하면 체지방률(%), 체지방량, 제지방량과 판정 결과를 즉시 확인할 수 있습니다.",
  keywords: [
    "체지방률계산기",
    "체지방측정",
    "체지방률",
    "USNavy체지방",
    "체지방량",
    "제지방량",
    "비만판정",
    "체지방계산",
    "허리둘레체지방",
    "체성분분석",
  ],
  openGraph: {
    title: "체지방률 계산기 - US Navy 공식 체지방 측정",
    description:
      "무료 체지방률 계산기로 US Navy 공식 기반 체지방률을 측정하세요. 허리둘레, 목둘레, 키를 입력하면 체지방률(%), 체지방량, 제지방량과 판정 결과를 즉시 확인할 수 있습니다.",
  },
  alternates: {
    canonical: "/health/body-fat",
  },
};

export default function BodyFatPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/health" className="hover:text-primary-600">건강 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">체지방률 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        체지방률 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        US Navy 공식으로 체지방률을 측정합니다. 허리둘레, 목둘레, 키를 입력하세요.
      </p>

      <BodyFatCalc />
      <ResultAd />

      <section className="mt-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          US Navy 체지방 측정법이란?
        </h2>
        <p className="mb-3">
          미 해군(US Navy)에서 개발한 체지방률 추정 공식으로, 줄자만으로 간편하게 체지방률을
          추정할 수 있습니다. 허리둘레, 목둘레, 키(여성은 엉덩이둘레 추가)를 측정하여 계산합니다.
        </p>
        <p className="mb-3">
          체성분 분석기(InBody)만큼 정확하지는 않지만, 가정에서 손쉽게 체지방률을 추정할 수
          있어 건강 관리의 기초 지표로 널리 활용됩니다.
        </p>
        <p className="mb-3">
          남성의 건강(정상) 체지방률은 14~17%, 여성은 21~24%입니다. 남성 25% 이상, 여성 32% 이상은
          비만으로 분류됩니다. 체지방률은 BMI와 달리 근육량과 지방량을 구분할 수 있어 '마른 비만'
          (체중은 정상이나 체지방이 높은 경우)을 판별하는 데 유용합니다.
        </p>
        <p>
          측정 시 허리둘레는 배꼽 높이에서, 목둘레는 목의 가장 좁은 부분에서, 엉덩이둘레(여성)는
          엉덩이의 가장 넓은 부분에서 줄자로 수평하게 측정합니다. 아침 공복 상태에서 측정하면
          더 일관된 결과를 얻을 수 있습니다.
        </p>
      </section>

      <InArticleAd />

      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/health/bmi" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            BMI 계산기
          </Link>
          <Link href="/health/bmr" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            기초대사량 계산기
          </Link>
          <Link href="/health/calorie" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            칼로리 계산기
          </Link>
          <Link href="/health/biorhythm" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            바이오리듬
          </Link>
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
                name: "체지방률이란 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "체지방률은 체중에서 지방이 차지하는 비율(%)입니다. BMI와 달리 근육량과 지방량을 구분하여 건강 상태를 더 정확하게 파악할 수 있습니다.",
                },
              },
              {
                "@type": "Question",
                name: "남성과 여성의 정상 체지방률 기준은?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "남성의 건강(정상) 체지방률은 14~17%, 여성은 21~24%입니다. 남성 25% 이상, 여성 32% 이상은 비만으로 분류됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "US Navy 체지방 측정법은 얼마나 정확한가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "US Navy 공식은 DEXA 스캔 대비 약 3~4%의 오차가 있습니다. 가정에서 줄자만으로 간편하게 측정할 수 있어 건강 관리의 기초 지표로 유용합니다.",
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
            { "@type": "ListItem", "position": 3, "name": "체지방률 계산기" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "체지방률 계산기",
          "url": "https://www.oktools.co.kr/health/body-fat",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW"
          },
          "description": "무료 체지방률 계산기로 US Navy 공식 기반 체지방률을 측정하세요. 허리둘레, 목둘레, 키를 입력하면 체지방률, 체지방량, 제지방량과 판정 결과를 확인할 수 있습니다."
        }) }}
      />
    </div>
  );
}
