import type { Metadata } from "next";
import Link from "next/link";
import ClockApp from "@/components/tools/ClockApp";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "온라인 시계 - 전체화면 벽시계, 5가지 테마",
  description:
    "무료 온라인 벽시계. 미니멀·클래식·네온·우주·레트로 5가지 테마, 전체화면 지원, 아날로그+디지털 동시 표시. 회의실·교실·라이브 방송용 큰 시계.",
  keywords: [
    "온라인시계", "전체화면시계", "벽시계", "디지털시계", "아날로그시계",
    "현재시각", "실시간시계", "네온시계", "큰화면시계", "온라인벽시계",
    "회의실시계", "교실시계", "방송용시계", "데스크탑시계", "풀스크린시계",
    "한국시간", "현재시간", "지금몇시", "온라인탁상시계", "스마트시계웹",
  ],
  openGraph: {
    url: "/tools/clock",
    title: "온라인 시계 - 전체화면 벽시계, 5가지 테마",
    description:
      "무료 온라인 벽시계. 미니멀·클래식·네온·우주·레트로 5가지 테마, 전체화면 지원, 아날로그+디지털 동시 표시.",
  },
  alternates: {
    canonical: "/tools/clock",
  },
};

export default function ClockPage() {
  return (
    <>
      {/* 상단 브레드크럼 + 인트로 (서버 렌더링되어 크롤러가 즉시 인식) */}
      <div className="mx-auto max-w-[720px] px-4 pt-8 sm:px-6 sm:pt-12">
        <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/" className="hover:text-primary-600">홈</Link>
          <span className="mx-2">/</span>
          <Link href="/tools" className="hover:text-primary-600">유틸리티</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-100">온라인 시계</span>
        </nav>
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
          온라인 시계 — 전체화면 벽시계
        </h1>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          설치 없이 바로 사용하는 무료 웹 시계입니다. 미니멀·클래식·네온·우주·레트로 5가지 테마와
          아날로그·디지털 동시 표시, 전체화면 모드를 지원합니다.
        </p>
      </div>

      <ClockApp />
      <ResultAd />

      {/* 관련 도구 */}
      <div className="mx-auto max-w-[720px] px-4">
        <section className="mt-10">
          <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Link href="/tools/timer" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
              타이머
            </Link>
            <Link href="/tools/stopwatch" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
              스톱워치
            </Link>
            <Link href="/health/dday" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
              D-Day 계산기
            </Link>
            <Link href="/health/age" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
              만 나이 계산기
            </Link>
          </div>
        </section>

        {/* 본문 가이드 — Thin Content 보강 */}
        <section className="mt-12 space-y-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          <div>
            <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">
              온라인 시계 사용 가이드
            </h2>
            <p>
              오케이툴즈 온라인 시계는 별도의 앱 설치 없이 웹 브라우저에서 바로 사용할 수 있는 무료
              디지털·아날로그 시계입니다. 회사 회의실의 큰 화면 모니터, 학교 교실, 카페·매장의
              디스플레이, 유튜브 라이브 방송의 시간 표시 화면 등 다양한 환경에서 활용할 수 있도록
              5가지 테마와 전체화면 모드를 지원합니다. 시간은 사용자 기기의 시스템 시간을 기준으로
              실시간 갱신되며, 인터넷이 연결돼 있다면 NTP 동기화된 정확한 시각을 확인할 수 있습니다.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
              5가지 시계 테마 비교
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>미니멀(Minimal)</strong> — 흰색 배경에 깔끔한 산세리프 폰트. 사무실·회의실에서 가장 무난하게 사용할 수 있는 기본 테마입니다.</li>
              <li><strong>클래식(Classic)</strong> — 로마 숫자 아날로그 시계. 고풍스러운 분위기의 카페나 호텔 로비 디스플레이에 어울립니다.</li>
              <li><strong>네온(Neon)</strong> — 짙은 배경에 형광 컬러 디지털 시계. 어두운 환경, 라이브 방송 오버레이, 야간 매장에 적합합니다.</li>
              <li><strong>우주(Space)</strong> — 은하 배경의 SF 풍 시계. 어린이 교실, 키즈 카페, 전시 공간 등에서 시선을 끌기 좋습니다.</li>
              <li><strong>레트로(Retro)</strong> — 80년대 LED·플립 클락 스타일. 빈티지 인테리어나 콘셉트 매장에 사용됩니다.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
              전체화면 벽시계 모드 활용법
            </h2>
            <p>
              화면 우측 상단의 전체화면 버튼을 클릭하면 시계가 모니터 전체를 채우는 벽시계 모드로
              전환됩니다. 회의 시작 시간 표시, 발표·시험 시간 알림, 카페 영업시간 안내, 방송 송출
              화면 한 켠의 시계 오버레이 등으로 활용할 수 있습니다. ESC 키 또는 F11(브라우저
              전체화면 토글)로 빠져나올 수 있으며, 모니터의 자동 절전 모드를 잠시 꺼두면 24시간
              연속 시계 디스플레이로 운용할 수 있습니다.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
              시간 정확도 — NTP와 시스템 시간
            </h2>
            <p>
              본 시계는 사용자 기기(PC·스마트폰·태블릿)의 운영체제 시간을 표시합니다. Windows·macOS·
              Android·iOS 모두 기본적으로 NTP(Network Time Protocol) 서버와 자동 동기화되므로
              일반 환경에서는 ±수십 밀리초 이내의 정확도를 보장합니다. 만약 시각이 어긋난다면
              <strong> Windows의 「설정 → 시간 및 언어 → 시간 자동 설정」</strong>,
              <strong> macOS의 「시스템 설정 → 일반 → 날짜 및 시간」</strong>에서 자동 동기화 옵션이
              켜져 있는지 확인하세요. 한국 표준시(KST, UTC+9)는 기기 지역 설정을 「대한민국」으로
              두면 자동 적용됩니다.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
              브라우저별 호환성과 절전 모드
            </h2>
            <p>
              크롬, 사파리, 엣지, 파이어폭스, 삼성 인터넷 등 최신 브라우저에서 모두 정상 동작합니다.
              모바일에서는 화면이 자동으로 꺼지지 않도록 「기기 설정 → 디스플레이 → 화면 자동 꺼짐」을
              「사용 안 함」 또는 30분 이상으로 설정해 주세요. PC에서는 Windows 절전 옵션의 「디스플레이
              끄기」를 「적용 안 함」으로 두면 24시간 벽시계로 사용할 수 있습니다.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
              유튜브 라이브·줌 회의에서 사용하기
            </h2>
            <p>
              유튜브 라이브·트위치 송출에서는 OBS Studio의 「브라우저 소스」로 본 페이지 URL을 추가하면
              시계 위젯으로 활용할 수 있습니다. 줌·구글 미트 회의에서 「화면 공유 → 두 번째 모니터」
              또는 「브라우저 탭 공유」로 시계를 공유하면 모든 참가자가 동일한 시간을 확인할 수 있어
              세미나·온라인 강의·웨비나 진행에 유용합니다.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
              모바일에서 탁상 시계로 만들기
            </h2>
            <p>
              스마트폰을 가로로 거치하고 본 페이지를 열면 즉시 탁상 시계가 됩니다. 안드로이드의
              「홈 화면에 추가」 또는 iOS Safari의 「공유 → 홈 화면에 추가」로 PWA 아이콘을 만들어
              두면 한 번의 탭으로 시계 앱처럼 실행할 수 있습니다. 침실용 시계, 책상용 보조 시계,
              주방 시계 등으로 활용해 보세요.
            </p>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "온라인 시계의 시간은 정확한가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "온라인 시계는 사용자 기기(PC, 스마트폰)의 시스템 시간을 표시합니다. 기기의 시간이 인터넷 시간 서버(NTP)와 동기화되어 있다면 매우 정확합니다. Windows는 설정 > 시간 및 언어에서, Mac은 시스템 설정 > 날짜 및 시간에서 자동 동기화를 확인할 수 있습니다.",
                },
              },
              {
                "@type": "Question",
                name: "전체화면 시계는 어떻게 사용하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "전체화면 버튼을 클릭하면 시계가 모니터 전체를 채우는 벽시계 모드로 전환됩니다. 회의실, 교실, 카페 등에서 큰 화면 시계가 필요할 때 유용합니다. ESC 키를 누르면 전체화면에서 나올 수 있습니다.",
                },
              },
              {
                "@type": "Question",
                name: "5가지 테마 중 어떤 것을 사용해야 하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "사무실·회의실은 미니멀, 카페·호텔 로비는 클래식, 야간 환경·라이브 방송은 네온, 어린이 공간은 우주, 빈티지 인테리어는 레트로 테마가 어울립니다. 모든 테마는 클릭 한 번으로 즉시 전환되며 별도 저장이 필요 없습니다.",
                },
              },
              {
                "@type": "Question",
                name: "유튜브 라이브 방송에서 시계 위젯으로 쓸 수 있나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "네, OBS Studio의 「브라우저 소스」 기능으로 본 페이지 URL을 추가하면 라이브 방송 화면에 시계 오버레이를 표시할 수 있습니다. 네온 또는 미니멀 테마가 송출 화면에서 가독성이 좋습니다.",
                },
              },
              {
                "@type": "Question",
                name: "모바일에서 탁상 시계처럼 항상 켜둘 수 있나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "기기 설정에서 화면 자동 꺼짐을 「사용 안 함」으로 설정한 뒤 본 페이지를 열어 가로 모드로 거치하면 됩니다. iOS는 Safari에서 「홈 화면에 추가」, 안드로이드는 크롬에서 「홈 화면에 추가」로 PWA 아이콘을 만들면 한 번의 탭으로 시계 앱처럼 실행할 수 있습니다.",
                },
              },
              {
                "@type": "Question",
                name: "오프라인에서도 사용할 수 있나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "처음 한 번 페이지를 로드하면 브라우저 캐시에 저장되어 오프라인에서도 시계가 동작합니다. 단, 시간은 인터넷 연결이 끊겨도 기기의 시스템 시간을 그대로 사용하므로 정확도에 영향은 없습니다.",
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
          "name": "온라인 시계",
          "description": "전체화면 지원, 5가지 테마, 아날로그+디지털 동시 표시 무료 웹 시계",
          "url": "https://www.oktools.co.kr/tools/clock",
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
            { "@type": "ListItem", "position": 3, "name": "온라인 시계" }
          ]
        }) }}
      />
    </>
  );
}
