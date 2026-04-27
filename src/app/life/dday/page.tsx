import type { Metadata } from "next";
import Link from "next/link";
import DDayCounter from "@/components/life/DDayCounter";
import { ResultAd, InArticleAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "D-Day 카운터 - 디데이 날짜 계산기",
  description:
    "무료 D-Day 카운터로 목표 날짜까지 남은 일수를 실시간으로 확인하세요. 시험, 기념일, 여행 등 중요한 날까지의 카운트다운을 시간/분/초 단위로 제공합니다.",
  keywords: [
    "디데이계산기",
    "D-Day카운터",
    "남은일수계산",
    "디데이카운트다운",
    "날짜계산기",
    "기념일계산",
    "시험디데이",
    "카운트다운",
    "날짜세기",
    "디데이앱",
  ],
  openGraph: {
    url: "/life/dday",
    title: "D-Day 카운터 - 디데이 날짜 계산기",
    description:
      "무료 D-Day 카운터로 목표 날짜까지 남은 일수를 실시간으로 확인하세요. 시험, 기념일, 여행 등 중요한 날까지의 카운트다운을 시간/분/초 단위로 제공합니다.",
  },
  alternates: {
    canonical: "/life/dday",
  },
};

export default function DDayPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">D-Day 카운터</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        D-Day 카운터
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        목표 날짜를 입력하면 남은 일수와 실시간 카운트다운을 보여줍니다.
      </p>

      <DDayCounter />
      <ResultAd />

      <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-5 text-sm leading-7 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
          시험·일정·실시간 카운트다운 D-Day
        </h2>
        <p className="mb-3">
          이 카운터는 학업·업무 일정 관리에 최적화된 D-Day 도구입니다. <strong>시·분·초 실시간 카운트다운</strong>으로
          긴장감 있게 남은 시간을 시각화해 동기 부여 효과를 극대화합니다.
          커플 기념일·출산 예정일은 <Link className="text-primary-600 underline" href="/health/dday">기념일 디데이 계산기</Link>가 더 적합합니다.
        </p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">시험 D-Day 활용법</h3>
        <ul className="mb-3 list-disc pl-5">
          <li className="mb-1"><strong>수능 D-Day</strong> — 매년 11월 둘째 주 목요일. 자기 학습 계획표와 함께 카운트다운하면 효과적</li>
          <li className="mb-1"><strong>공무원 시험</strong> — 9급 국가직, 7급 국가직, 지방직 등 목표 시험일별로 별도 D-Day</li>
          <li className="mb-1"><strong>자격증 시험</strong> — 정보처리기사, 토익, 한국사능력검정 등 응시일까지 남은 학습 기간 파악</li>
          <li className="mb-1"><strong>대학 입시 면접·논술</strong> — 수시 1차 발표, 수시 면접일, 정시 원서 접수 마감일</li>
        </ul>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">업무·프로젝트 마감 관리</h3>
        <p className="mb-3">
          프로젝트 데드라인, 분기 결산일, 계약 만료일, 발표 자료 제출 마감 등을 D-Day로 등록하면
          매일 화면을 켤 때마다 남은 일수를 의식하게 되어 일정 관리 정확도가 올라갑니다.
          업무 일수만 카운트하고 싶다면 <Link className="text-primary-600 underline" href="/life/workdays">근무일수 계산기</Link>를 함께 활용하세요.
        </p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">군대 전역일·입사 근속 일수</h3>
        <p className="mb-3">
          전역일 D-Day는 군 복무 중 사기 진작에 빠지지 않는 도구입니다. 정확한 전역일 산정은
          <Link className="text-primary-600 underline" href="/life/military">전역일 계산기</Link>로 입대일과 군별 복무 기간을 입력해 산출한 후,
          그 결과 날짜를 본 D-Day 카운터에 등록하면 매일 확인할 수 있습니다.
          반대로 과거 입사일을 입력하면 입사 후 며칠째 근속 중인지 D+ 형태로 표시됩니다.
        </p>

        <h3 className="mt-5 mb-2 text-base font-bold text-gray-900 dark:text-gray-100">실시간 카운트다운의 정확도</h3>
        <p>
          본 카운터는 브라우저 시스템 시계를 기준으로 1초마다 업데이트됩니다. PC·스마트폰의 시간이 인터넷 시간 동기화(NTP)된 상태라면
          오차는 무시할 만한 수준입니다. 다른 탭에서 작업해도 백그라운드에서 시간이 멈추지 않으며, 페이지 재방문 시 즉시 갱신됩니다.
        </p>
      </section>

      <InArticleAd />

      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/life/workdays" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            근무일수 계산기
          </Link>
          <Link href="/health/age" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            나이 계산기
          </Link>
          <Link href="/health/pregnancy-week" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            임신 주수 계산기
          </Link>
          <Link href="/life/parental-leave" className="rounded-lg border border-gray-200 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            육아휴직급여 계산기
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
                  text: "D-Day는 목표 날짜에서 오늘 날짜를 빼서 계산합니다. 목표일이 미래면 D-N(N일 남음), 과거면 D+N(N일 지남), 오늘이면 D-Day입니다.",
                },
              },
              {
                "@type": "Question",
                name: "D-Day와 D+Day의 차이는?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "D-Day는 목표 당일을 의미합니다. D-30은 목표일 30일 전, D+30은 목표일로부터 30일이 지난 날을 뜻합니다.",
                },
              },
              {
                "@type": "Question",
                name: "실시간 카운트다운은 정확한가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "브라우저의 시스템 시계를 기준으로 1초마다 업데이트됩니다. 시스템 시계가 정확하다면 카운트다운도 정확합니다.",
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
            { "@type": "ListItem", "position": 2, "name": "생활 계산기", "item": "https://www.oktools.co.kr/life" },
            { "@type": "ListItem", "position": 3, "name": "D-Day 카운터" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "D-Day 카운터",
          "url": "https://www.oktools.co.kr/life/dday",
          "applicationCategory": "LifestyleApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW"
          },
          "description": "무료 D-Day 카운터로 목표 날짜까지 남은 일수를 실시간으로 확인하세요. 시험, 기념일, 여행 등 중요한 날까지의 카운트다운을 시간/분/초 단위로 제공합니다."
        }) }}
      />
    </div>
  );
}
