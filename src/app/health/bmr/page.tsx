import type { Metadata } from "next";
import Link from "next/link";
import BMRCalculator from "@/components/health/BMRCalculator";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "기초대사량 계산기 - BMR TDEE 일일 칼로리 계산",
  description:
    "무료 기초대사량 계산기로 BMR과 활동별 일일 권장 칼로리(TDEE)를 계산하세요. 성별·나이·키·체중 입력만으로 다이어트 칼로리 목표를 즉시 확인.",
  keywords: ["기초대사량계산기", "BMR계산기", "TDEE계산기", "일일칼로리계산", "기초대사량", "다이어트칼로리", "하루권장칼로리", "칼로리계산기", "활동대사량"],
  openGraph: {
    url: "/health/bmr",
    title: "기초대사량 계산기 - BMR TDEE 일일 칼로리 계산",
    description:
      "무료 기초대사량 계산기로 BMR과 활동별 일일 권장 칼로리(TDEE)를 계산하세요. 성별·나이·키·체중 입력만으로 다이어트 칼로리 목표를 즉시 확인.",
  },
  alternates: {
    canonical: "/health/bmr",
  },
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
      <ResultAd />

      {/* Info Section */}
      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            기초대사량 계산기 사용 가이드
          </h2>
          <p>
            기초대사량(BMR) 계산기는 성별, 나이, 키, 체중을 입력하면 하루에 아무 활동 없이도 소모되는 최소 칼로리를 산출합니다.
            여기에 활동 수준을 반영한 일일 총 에너지 소비량(TDEE)도 함께 계산하여, 다이어트나 체중 관리의 기준점을 제공합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">Mifflin-St Jeor 공식</h3>
          <p>
            남성: BMR = (10 x 체중kg) + (6.25 x 키cm) - (5 x 나이) + 5,
            여성: BMR = (10 x 체중kg) + (6.25 x 키cm) - (5 x 나이) - 161.
            이 공식은 현재 가장 정확한 것으로 인정받고 있으며, 활동계수(1.2~1.9)를 곱하면 TDEE를 구할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">다이어트 활용 팁</h3>
          <p>
            체중 감량을 원한다면 TDEE에서 300~500kcal를 줄인 양을 섭취하는 것이 건강한 방법입니다.
            다만 BMR 이하로 섭취하면 근육 손실과 대사량 저하가 발생하므로, 기초대사량 이상은 반드시 섭취해야 합니다.
            근력 운동으로 근육량을 늘리면 기초대사량 자체가 올라가 장기적으로 체중 관리에 유리합니다.
          </p>
        </div>
      </section>

      <InArticleAd />
      {/* Related Tools */}
      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/health/bmi" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            BMI 계산기
          </Link>
          <Link href="/health/biorhythm" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            바이오리듬
          </Link>
          <Link href="/health/alcohol" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            알코올 분해 계산기
          </Link>
          <Link href="/health/age" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            나이 계산기
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
              "name": "기초대사량(BMR)이란 무엇인가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "기초대사량(BMR, Basal Metabolic Rate)은 생명 유지에 필요한 최소 에너지량으로, 숨쉬기, 체온 유지, 장기 활동 등에 사용되는 칼로리입니다. 아무 활동도 하지 않아도 소모되는 에너지입니다." }
            },
            {
              "@type": "Question",
              "name": "기초대사량을 높이려면 어떻게 해야 하나요?",
              "acceptedAnswer": { "@type": "Answer", "text": "근육량을 늘리는 것이 가장 효과적입니다. 근력 운동을 통해 근육을 키우면 기초대사량이 올라갑니다. 또한 충분한 수면, 규칙적인 식사, 단백질 섭취도 도움이 됩니다." }
            },
            {
              "@type": "Question",
              "name": "TDEE와 BMR의 차이는 무엇인가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "BMR은 아무 활동 없이 소모되는 기초 칼로리이고, TDEE(Total Daily Energy Expenditure)는 BMR에 일상 활동과 운동량을 반영한 하루 총 소모 칼로리입니다. 다이어트 시 TDEE를 기준으로 칼로리를 조절합니다." }
            },
            {
              "@type": "Question",
              "name": "다이어트 시 하루 몇 칼로리를 먹어야 하나요?",
              "acceptedAnswer": { "@type": "Answer", "text": "일반적으로 TDEE에서 300~500kcal를 줄인 양을 섭취하면 건강하게 감량할 수 있습니다. 다만 기초대사량 이하로 섭취하면 근손실과 요요 현상이 올 수 있으므로 BMR 이상은 섭취하는 것이 좋습니다." }
            }
          ]
        }) }}
      />
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
