import type { Metadata } from "next";
import Link from "next/link";
import StopwatchApp from "@/components/tools/StopwatchApp";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "온라인 스톱워치 - 랩타임 기록, 운동 시간 측정",
  description:
    "무료 온라인 스톱워치. 랩타임 기록, 큰 화면 표시 지원. 운동·공부·요리 시간 측정에 바로 사용하세요.",
  keywords: ["온라인스톱워치", "스톱워치", "랩타임", "시간측정", "운동시간", "스톱워치앱", "초시계", "타임측정"],
  openGraph: {
    title: "온라인 스톱워치 - 랩타임 기록, 운동 시간 측정",
    description:
      "무료 온라인 스톱워치. 랩타임 기록, 큰 화면 표시 지원. 운동·공부·요리 시간 측정에 바로 사용하세요.",
  },
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

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">온���인 스톱워치 사용 가이드</h2>
          <p>
            온라인 스톱워치는 브라우저에서 바로 사용할 수 있는 시간 측정 도구입니다. 앱 설치 없이 시작 버튼 한 번으로
            정확한 시간 측정이 가능하며, 랩 기능으로 구간별 기록을 남길 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">활용 사례</h3>
          <p>
            운동 시 세트 간 휴식 시간 측정, 달리기와 수영 구간 기록, 공부 시간 체크, 프레젠테이션 연습 시간 측정,
            요리 시간 확인, 보드게임 턴 시간 제한 등 다양한 상황에서 활용할 수 있습니다.
            랩 기능을 사용하면 각 구간별 소요 시간과 전체 누적 시간을 동시에 확인할 수 있어 기록 비교에 편리합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">스톱워치와 타이머의 차이</h3>
          <p>
            스톱워치는 0부터 시작해 경과 시간을 측정하는 도구이고, 타이머는 설정한 시간부터 0까지 카운트다운하는 도구입니다.
            운동이나 시험처럼 소요 시간을 측정할 때는 스톱워치를, 라면이나 휴식처럼 정해진 시간을 기다릴 때는 타이머를 사용하세요.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/tools/timer" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            타이머
          </Link>
          <Link href="/tools/clock" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            온라인 시계
          </Link>
          <Link href="/finance/loan-calculator" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            대출 이자 계산기
          </Link>
          <Link href="/health/bmi" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            BMI 계산기
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
                name: "스톱워치와 타이머의 차이는 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "스톱워치는 0부터 시작하여 경과 시간을 측정하는 도구이고, 타이머는 설정한 시간부터 0까지 카운트다운하는 도구입니다. 운동 기록이나 시험 시간 측정에는 스톱워치가, 요리나 휴식 시간 알림에는 타이머가 적합합니다.",
                },
              },
              {
                "@type": "Question",
                name: "랩타임 기능은 어떻게 사용하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "스톱워치가 작동 중일 때 랩(Lap) 버튼을 누르면 현재 시점의 경과 시간이 기록됩니다. 이전 랩과의 차이(구간 시간)와 전체 누적 시간을 동시에 확인할 수 있어 달리기, 수영 등 구간별 기록 비교에 유용합니다.",
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
