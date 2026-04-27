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

      {/* Long-form guide content (SEO) */}
      <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-5 text-sm leading-7 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">온라인 타이머 활용 가이드</h2>
        <p className="mb-3">오케이툴즈 타이머는 별도 앱 설치 없이 웹 브라우저에서 즉시 사용할 수 있는 카운트다운 타이머입니다. 시간 입력 후 시작 버튼을 누르면 0이 될 때까지 카운트다운하며, 완료 시 알림음과 시각적 피드백으로 알려줍니다. 라면, 운동, 공부, 요리 등 일상에서 필요한 모든 시간 측정을 한 곳에서 해결할 수 있습니다.</p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">주요 사용 시나리오 5가지</h3>
        <ul className="mb-3 list-disc pl-5">
          <li className="mb-1"><strong>라면 타이머 (3분/4분/5분)</strong> — 봉지라면 표준 3분, 농심 신라면 4분, 진라면 4분 30초 등 라면 종류별 권장 시간에 맞춰 끓이세요.</li>
          <li className="mb-1"><strong>뽀모도로 타이머 (25분 + 5분)</strong> — 25분 집중 후 5분 휴식을 4세트 반복하면 1뽀모도로 사이클(2시간)이 완성됩니다.</li>
          <li className="mb-1"><strong>운동 인터벌 타이머 (HIIT)</strong> — 타바타(20초 운동/10초 휴식 8세트), 서킷 트레이닝, 플랭크 등에 활용.</li>
          <li className="mb-1"><strong>요리 타이머</strong> — 계란 반숙(7분), 완숙(12분), 스테이크 미디엄(4분) 등 정확한 조리 시간이 필요한 요리에 필수.</li>
          <li className="mb-1"><strong>회의·발표 타이머</strong> — 발표 시간 제한, 회의 안건별 시간 배분, 토론 시간 관리에 활용.</li>
        </ul>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">타이머와 스톱워치, 어떻게 다른가요?</h3>
        <p className="mb-3">타이머는 미리 설정한 시간이 0이 될 때까지 거꾸로 세는 <strong>카운트다운(역방향)</strong> 도구이고, 스톱워치는 0초부터 경과 시간을 재는 <strong>카운트업(정방향)</strong> 도구입니다. 라면처럼 정해진 시간을 지켜야 할 때는 타이머, 100m 달리기처럼 걸린 시간을 측정할 때는 스톱워치를 사용하세요.</p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">알림음이 안 들릴 때 체크포인트</h3>
        <p className="mb-3">브라우저는 사용자의 명시적 상호작용(클릭) 후에만 소리를 재생할 수 있도록 설계되어 있습니다. 시작 버튼을 누른 직후 짧은 테스트음이 들리면 정상이고, 무음이면 시스템 볼륨/브라우저 음소거 탭을 확인하세요. iPhone/iPad는 무음 모드(벨 스위치) 활성화 시 미디어 소리도 차단되니 무음 해제 후 사용하세요.</p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">백그라운드 동작과 정확도</h3>
        <p>다른 탭으로 전환하거나 화면을 잠가도 카운트다운은 계속 진행되며, 완료 시점에 알림음을 울립니다. 단 모바일 브라우저는 절전 모드에서 정확도가 ±1초 차이 날 수 있어, 1초 단위로 중요한 작업에는 PC 사용을 권장합니다.</p>
      </section>

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
