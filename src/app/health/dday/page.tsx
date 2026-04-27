import type { Metadata } from "next";
import Link from "next/link";
import DDayCalc from "@/components/health/DDayCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "기념일 디데이 계산기 - 100일 200일 커플 기념일 계산",
  description:
    "커플 100일, 200일, 1주년 기념일과 시험 디데이를 무료로 계산하세요. 날짜 간 일수 차이, 남은 일수, 지난 일수를 바로 확인할 수 있습니다.",
  keywords: ["기념일계산기", "100일계산", "200일계산", "커플디데이", "기념일디데이", "날짜차이계산", "일수계산"],
  openGraph: {
    url: "/health/dday",
    title: "기념일 디데이 계산기 - 100일 200일 커플 기념일 계산",
    description:
      "커플 100일, 200일, 1주년 기념일과 시험 디데이를 무료로 계산하세요. 날짜 간 일수 차이, 남은 일수, 지난 일수를 바로 확인할 수 있습니다.",
  },
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
      <ResultAd />

      {/* Info Section — 기념일/커플/출산 중심 */}
      <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-5 text-sm leading-7 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
          커플 기념일·출산 D-Day 계산 가이드
        </h2>
        <p className="mb-3">
          이 페이지는 커플 기념일과 출산 예정일을 중심으로 한 디데이 계산에 최적화되어 있습니다.
          시험·프로젝트 일정 관리는 <Link className="text-primary-600 underline" href="/life/dday">생활 D-Day 카운터</Link>를,
          임신 주수 단위 계산은 <Link className="text-primary-600 underline" href="/health/pregnancy-week">임신 주수 계산기</Link>를 이용하세요.
        </p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">커플 100일·1주년 계산법</h3>
        <p className="mb-3">
          한국 커플 문화에서 사귄 날을 1일차로 세어 100일을 기념하는 관습이 있습니다.
          1월 1일에 사귀기 시작했다면 100일은 <strong>4월 10일</strong>(사귄 날 +99일), 200일은 7월 19일, 1주년(365일)은 12월 31일입니다.
          만약 사귄 다음 날을 1일로 세는 커플이라면 위 날짜에서 하루씩 더해주세요.
          본 계산기는 사귄 날을 1일차로 계산하는 표준 방식을 사용합니다.
        </p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">출산 예정일·아기 D-Day</h3>
        <p className="mb-3">
          출산 예정일(EDD)은 마지막 생리 첫날(LMP)로부터 280일(40주)이며,
          예정일을 입력하면 임산부가 매일 D-N으로 카운트다운하기 좋습니다.
          출산 후에는 같은 화면에서 D+로 전환되어 「우리 아기 태어난 지 며칠째」를 확인할 수 있어
          백일잔치(D+99일), 돌(D+365일) 일정 계산에도 활용할 수 있습니다.
        </p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">결혼·약혼·연애 기념일</h3>
        <p className="mb-3">
          결혼기념일·약혼식·프러포즈 받은 날·첫 만남 등 두 사람만의 특별한 날짜를 입력해
          매년 다가오는 기념일까지의 남은 일수를 미리 확인할 수 있습니다.
          소소한 깜짝 이벤트, 기념일 선물 준비, 여행 예약 시점 결정에 도움이 됩니다.
        </p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">D-Day 표기 규칙</h3>
        <p>
          D-30 = 목표일 30일 전, D-Day(D-0) = 당일, D+30 = 목표일로부터 30일 경과.
          한국에서는 당일을 D-Day(D-0)로 쓰는 것이 표준이며, 일부 일정 관리 앱은 D-1부터 카운트하므로 표기 차이를 확인하세요.
        </p>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/health/age" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            만 나이 계산기
          </Link>
          <Link href="/health/pregnancy-week" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            임신 주수 계산기
          </Link>
          <Link href="/life/dday" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            D-Day 카운터
          </Link>
          <Link href="/health/biorhythm" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
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
                name: "D-Day는 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "D-Day는 목표 날짜에서 오늘 날짜를 빼서 계산합니다. 미래 날짜면 'D-N'(N일 남음), 과거 날짜면 'D+N'(N일 지남)으로 표시합니다. 사귄 날 100일, 시험일, 여행일 등을 카운트다운하는 데 사용합니다.",
                },
              },
              {
                "@type": "Question",
                name: "사귄 날 100일은 어떻게 세나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "사귄 날을 1일차로 세면 100일째는 사귄 날로부터 99일 후입니다. 예를 들어 1월 1일에 사귀기 시작했다면 100일은 4월 10일입니다. 일부는 사귄 다음 날을 1일로 계산하기도 하므로 커플 간 약속이 중요합니다.",
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
