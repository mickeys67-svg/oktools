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
    url: "/tools/stopwatch",
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

      <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-5 text-sm leading-7 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">온라인 스톱워치 사용 가이드</h2>
        <p className="mb-3">
          온라인 스톱워치는 브라우저에서 바로 사용할 수 있는 시간 측정 도구입니다. 앱 설치 없이 시작 버튼 한 번으로
          0.01초 단위 정밀 측정이 가능하며, 랩(Lap) 기능으로 구간별 기록을 남길 수 있습니다.
          PC, 스마트폰, 태블릿 어디서든 동일하게 작동하며 다른 탭으로 전환해도 측정이 멈추지 않습니다.
        </p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">랩(Lap) 기능 활용법</h3>
        <p className="mb-3">
          측정 중 「랩」 버튼을 누르면 그 시점의 누적 시간이 기록되고, 이전 랩과의 차이(구간 시간)도 함께 표시됩니다.
          예를 들어 5km 달리기를 1km씩 5번 랩으로 나누면 각 1km 구간 페이스를 비교할 수 있어 부진 구간을 즉시 파악할 수 있습니다.
          랩은 무제한으로 추가할 수 있으며, 측정 종료 후에도 기록은 화면에 남아 있어 캡처해 보관할 수 있습니다.
        </p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">스포츠·학습·업무 활용 시나리오</h3>
        <ul className="mb-3 list-disc pl-5">
          <li className="mb-1"><strong>달리기/수영</strong> — 200m, 400m, 1km 같은 구간별 페이스 측정</li>
          <li className="mb-1"><strong>운동 휴식 시간</strong> — 세트 간 휴식 60초/90초/120초 정확히 지키기</li>
          <li className="mb-1"><strong>스피드 큐브 / 보드게임</strong> — 본인 최고 기록 갱신 도전</li>
          <li className="mb-1"><strong>발표 연습</strong> — 슬라이드별 소요 시간 측정 후 시간 안배 조정</li>
          <li className="mb-1"><strong>업무 시간 추적</strong> — 작업별 실제 소요 시간 측정 (시간 견적 정확도 향상)</li>
        </ul>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">스톱워치와 타이머의 차이</h3>
        <p>
          스톱워치는 0부터 시작해 경과 시간을 측정하는 <strong>카운트업(정방향)</strong> 도구이고,
          타이머는 설정한 시간부터 0까지 카운트다운하는 <strong>역방향</strong> 도구입니다.
          운동 기록·시험 소요 시간 측정에는 스톱워치, 라면 끓이기·뽀모도로처럼 정해진 시간을 지킬 때는 타이머를 사용하세요.
        </p>
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
