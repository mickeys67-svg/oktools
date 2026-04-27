import type { Metadata } from "next";
import Link from "next/link";
import { getToolsByCategory, getCategoryById } from "@/data/tools";

export const metadata: Metadata = {
  title: "생활 계산기 모음 - 전기요금 학점 퍼센트 할인율 무료",
  description:
    "전기요금계산기, 학점계산기, 퍼센트계산, 할인율계산, 전역일계산기, 과태료조회, 자동차세계산 등 일상생활에 필요한 무료 계산기 도구 모음.",
  keywords: ["생활계산기", "전기요금계산", "학점계산기", "퍼센트계산", "할인율계산", "전역일계산기", "과태료조회", "자동차세계산"],
  openGraph: {
    url: "/life",
    title: "생활 계산기 모음 - 전기요금 학점 퍼센트 할인율 무료",
    description:
      "전기요금계산기, 학점계산기, 퍼센트계산, 할인율계산, 전역일계산기, 과태료조회, 자동차세계산 등 일상생활에 필요한 무료 계산기 도구 모음.",
  },
  alternates: {
    canonical: "/life",
  },
};

export default function LifePage() {
  const category = getCategoryById("life")!;
  const tools = getToolsByCategory("life");

  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">{category.name}</span>
      </nav>
      <div className="mb-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ backgroundColor: category.colorHex }}>
          <span className="text-xl">🏠</span>
        </div>
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">{category.name}</h1>
        <p className="text-gray-500 dark:text-gray-400">{category.description}</p>
      </div>

      <section className="mb-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <p>전기요금, 학점(GPA), 퍼센트, 할인율, 전역일, 과태료, 자동차세, D-Day, 육아휴직급여, 근무일수 등 일상생활에서 자주 필요한 계산기를 모았습니다. 복잡한 공식을 몰라도 숫자만 입력하면 즉시 결과를 확인할 수 있어 누구나 간편하게 사용할 수 있습니다.</p>
      </section>

      <section className="mb-8 rounded-2xl border border-gray-100 bg-white p-5 text-sm leading-7 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
        <h2 className="mb-3 text-base font-bold text-gray-900 dark:text-gray-100">생활 계산기 10종, 어떤 상황에 쓰나요?</h2>
        <p className="mb-3"><strong>전기요금 계산기</strong>는 한전 누진제 3단계 요율을 반영해 한 달 사용량(kWh) 입력만으로 청구 금액을 미리 확인할 수 있어 에어컨·전기차 충전 비용 시뮬레이션에 유용합니다. <strong>학점 계산기(GPA)</strong>는 4.5/4.3/4.0 만점 환산을 모두 지원해 대학원·해외 유학 지원 시 평점 변환에 그대로 사용할 수 있습니다.</p>
        <p className="mb-3"><strong>퍼센트 계산기</strong>는 ‘A는 B의 몇 %?’, ‘A의 X%는?’, ‘A에서 B로 변화율은?’ 3가지 모드를 한 화면에서 처리해 가격 인상률·시험 정답률·체중 감량률 등 일상 계산을 단번에 끝냅니다. <strong>할인율 계산기</strong>는 정가·할인가·할인율 3개 값 중 2개만 입력하면 나머지 1개를 자동 계산해 쇼핑몰 가격 비교에 편리합니다.</p>
        <h3 className="mt-5 mb-2 text-sm font-bold text-gray-900 dark:text-gray-100">법정·공공 데이터 기반 4종</h3>
        <p className="mb-3"><strong>자동차세</strong>는 배기량 cc별 세율·연식 경감률(3년 후부터 연 5%, 최대 50%)을 적용하며, <strong>과태료 계산기</strong>는 속도·신호위반·주정차 등 도로교통법 위반 항목별 부과액과 사전납부 20% 할인을 반영합니다. <strong>육아휴직급여 계산기</strong>는 2026년 개정 요율(1~3월 100%/250만, 4~6월 100%/200만, 7개월~ 80%/150만)을 적용해 12개월 총수령액을 보여줍니다. <strong>전역일 계산기</strong>는 입대일과 군 복무 기간(육군 18·해군 20·공군 21개월)을 입력하면 정확한 전역일과 D-Day를 계산합니다.</p>
        <h3 className="mt-5 mb-2 text-sm font-bold text-gray-900 dark:text-gray-100">날짜·근무 관리 도구 2종</h3>
        <p><strong>D-Day 카운터</strong>는 시험·결혼식·이사일 같은 미래 일정까지의 남은 일수와 지난 기념일의 경과 일수를 동시에 확인할 수 있어 일정 관리에 유용합니다. <strong>근무일수 계산기</strong>는 2026년 한국 공휴일·대체휴일을 자동 차감해 두 날짜 사이의 실제 근무일을 산출하며, 인사팀의 출근일·연차 차감 계산에 그대로 활용할 수 있습니다.</p>
      </section>

      <div className="grid gap-3">
        {tools.map((tool) => (
          <Link key={tool.id} href={tool.path}
            className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-5 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-life dark:bg-pink-950">
              <span className="text-lg">🏠</span>
            </div>
            <div className="min-w-0">
              <h2 className="font-semibold text-gray-900 dark:text-gray-100">{tool.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{tool.description}</p>
            </div>
            <svg className="ml-auto h-5 w-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "생활 도구",
          "url": "https://www.oktools.co.kr/life",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "전기요금 계산기", "url": "https://www.oktools.co.kr/life/electricity" },
              { "@type": "ListItem", "position": 2, "name": "학점 계산기", "url": "https://www.oktools.co.kr/life/gpa" },
              { "@type": "ListItem", "position": 3, "name": "퍼센트 계산기", "url": "https://www.oktools.co.kr/life/percentage" },
              { "@type": "ListItem", "position": 4, "name": "할인율 계산기", "url": "https://www.oktools.co.kr/life/discount" },
              { "@type": "ListItem", "position": 5, "name": "전역일 계산기", "url": "https://www.oktools.co.kr/life/military" },
              { "@type": "ListItem", "position": 6, "name": "과태료 계산기", "url": "https://www.oktools.co.kr/life/traffic-fine" },
              { "@type": "ListItem", "position": 7, "name": "자동차세 계산기", "url": "https://www.oktools.co.kr/life/car-tax" },
              { "@type": "ListItem", "position": 8, "name": "D-Day 카운터", "url": "https://www.oktools.co.kr/life/dday" },
              { "@type": "ListItem", "position": 9, "name": "육아휴직급여 계산기", "url": "https://www.oktools.co.kr/life/parental-leave" },
              { "@type": "ListItem", "position": 10, "name": "근무일수 계산기", "url": "https://www.oktools.co.kr/life/workdays" }
            ]
          }
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.oktools.co.kr" },
            { "@type": "ListItem", "position": 2, "name": "생활 도구" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "전기요금 계산기는 한전 실제 요금과 같은가요?", "acceptedAnswer": { "@type": "Answer", "text": "네, 한국전력공사의 주택용 저압 누진제 3단계 요율(2026년 기준)과 기본요금·전력산업기반기금·부가세를 모두 반영합니다. 다만 시간대별 요금제(계시별 요금제) 가입자는 별도 계산이 필요합니다." } },
            { "@type": "Question", "name": "학점(GPA) 계산기는 어떤 만점 체계를 지원하나요?", "acceptedAnswer": { "@type": "Answer", "text": "4.5만점, 4.3만점, 4.0만점 3가지 체계를 지원하며, 세 가지 만점 간 환산도 자동으로 해줍니다. 미국 대학원·교환학생 지원 시 4.0 환산이 필요할 때 그대로 사용할 수 있습니다." } },
            { "@type": "Question", "name": "육아휴직급여는 2026년 기준이 적용되나요?", "acceptedAnswer": { "@type": "Answer", "text": "네, 2026년 개정 요율을 반영합니다. 1~3개월 통상임금 100%(상한 250만원), 4~6개월 100%(상한 200만원), 7개월 이후 80%(상한 150만원)으로 12개월 총수령액을 자동 계산합니다." } },
            { "@type": "Question", "name": "근무일수 계산기는 공휴일을 자동으로 빼주나요?", "acceptedAnswer": { "@type": "Answer", "text": "네, 2026년 대한민국 법정공휴일과 대체휴일(설날·추석 연휴, 어린이날 등)을 자동 차감합니다. 토·일요일 외에 공휴일도 제외되어 실제 근무일수를 정확히 계산합니다." } },
            { "@type": "Question", "name": "자동차세는 차량 연식에 따라 줄어드나요?", "acceptedAnswer": { "@type": "Answer", "text": "네, 차령 3년차부터 매년 5%씩 경감되어 12년차에 최대 50%까지 감면됩니다. 자동차세 계산기는 연식·배기량·하이브리드 여부를 모두 반영해 1년치 세액을 정확히 계산합니다." } },
            { "@type": "Question", "name": "D-Day 카운터와 근무일수 계산기는 어떻게 다른가요?", "acceptedAnswer": { "@type": "Answer", "text": "D-Day 카운터는 미래 일정까지의 단순 일수를 카운트(공휴일 포함)하고, 근무일수 계산기는 두 날짜 사이의 영업일수만(주말·공휴일 제외) 계산합니다. 결혼식·시험 같은 개인 일정은 D-Day, 인사·근태 관리는 근무일수를 사용하세요." } }
          ]
        }) }}
      />
    </div>
  );
}
