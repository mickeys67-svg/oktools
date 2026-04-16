import type { Metadata } from "next";
import Link from "next/link";
import PercentageCalc from "@/components/life/PercentageCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "퍼센트 계산기 - % 증가 감소 비율 계산",
  description:
    "무료 퍼센트 계산기로 증가율, 감소율, 비율을 계산하세요. A의 B%는? A에서 B로 몇 % 변화? A는 B의 몇 %? 세 가지 모드를 즉시 이용할 수 있습니다.",
  keywords: [
    "퍼센트계산기", "퍼센트계산", "백분율계산", "퍼센트증가율", "퍼센트감소율",
    "비율계산기", "할인퍼센트", "증감률계산", "성장률계산", "퍼센트변환",
    "%계산기", "비율계산", "전월대비증감률", "전년동기대비", "퍼센트포인트",
    "할인율계산", "수익률계산", "마진율계산", "원가가산율",
  ],
  openGraph: {
    url: "/life/percentage",
    title: "퍼센트 계산기 - % 증가 감소 비율 계산",
    description:
      "무료 퍼센트 계산기로 증가율, 감소율, 비율을 계산하세요. A의 B%는? A에서 B로 몇 % 변화? A는 B의 몇 %? 세 가지 모드를 즉시 이용할 수 있습니다.",
  },
  alternates: {
    canonical: "/life/percentage",
  },
};

export default function PercentagePage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">퍼센트 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">퍼센트 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">퍼센트 계산 세 가지 모드를 지원합니다.</p>
      <PercentageCalc />
      <ResultAd />

      <section className="mt-10 space-y-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">퍼센트 계산기 사용 가이드</h2>
          <p>
            퍼센트 계산기는 일상에서 가장 자주 필요한 세 가지 계산 모드를 한 번에 제공합니다.
            특정 숫자의 몇 퍼센트를 구하거나, 두 숫자 간의 증감률을 계산하거나,
            한 숫자가 다른 숫자의 몇 퍼센트인지 구할 수 있습니다. 할인율 계산, 성적 비율 산출,
            매출 전월 대비 증감 분석, 연봉 인상률 확인 등 실무·학업·쇼핑 모든 상황에서 활용할 수 있습니다.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">세 가지 계산 모드와 공식</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>모드 1 — A의 B%는 얼마?</strong> 공식: <code>A × B ÷ 100</code>. 예: 50,000원의 20% = 10,000원. 할인 금액·세금·팁 계산에 사용.</li>
            <li><strong>모드 2 — A에서 B로 몇 % 변화?</strong> 공식: <code>(B − A) ÷ A × 100</code>. 예: 100 → 130은 30% 증가, 200 → 150은 25% 감소. 매출·주가·체중 변화율 분석에 사용.</li>
            <li><strong>모드 3 — A는 B의 몇 %?</strong> 공식: <code>A ÷ B × 100</code>. 예: 75는 150의 50%. 시험 점수 비율, 목표 달성률, 시장 점유율 계산에 사용.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">실생활 활용 예시</h2>
          <p>
            <strong>쇼핑</strong> — 「30% 할인」 표시된 50,000원 상품의 할인 금액 계산(50,000 × 30 ÷ 100 = 15,000원),
            최종 결제 금액은 35,000원. <strong>연봉</strong> — 작년 4,000만 원에서 올해 4,400만 원으로 인상되었다면
            (4,400 − 4,000) ÷ 4,000 × 100 = 10% 인상. <strong>다이어트</strong> — 목표 체중 60kg, 현재 체중 75kg일 때
            목표 대비 (75 ÷ 60) × 100 = 125%, 즉 25% 초과 상태. <strong>매출 분석</strong> — 1월 매출 1,200만 원,
            2월 매출 1,500만 원이라면 (1,500 − 1,200) ÷ 1,200 × 100 = 25% 증가.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">퍼센트(%)와 퍼센트포인트(%p) 차이</h2>
          <p>
            많은 사람이 혼동하는 개념입니다. <strong>퍼센트포인트(%p)</strong>는 두 퍼센트 값의 차이를 그대로
            나타낸 것이고, <strong>퍼센트(%)</strong>는 비율의 변화율입니다. 예: 금리가 3%에서 5%로 올랐다면
            「2%p 인상」(절대 차이) 또는 「약 67% 인상」(상대 변화율: (5−3) ÷ 3 × 100). 뉴스·경제 기사에서
            금리·실업률·지지율 등을 다룰 때 두 단위가 다르게 쓰이므로 의미를 정확히 구분해야 합니다.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">자주 발생하는 계산 실수</h2>
          <p>
            <strong>실수 1 — 「30% 인상 후 30% 인하 = 원래 가격」이라는 착각.</strong> 실제로는 원래 가격의 91%로 떨어집니다
            (1.3 × 0.7 = 0.91). <strong>실수 2 — 「100% 증가 = 2배」, 「200% 증가 = 3배」 헷갈림.</strong> 100% 증가는
            원래 값의 2배, 200% 증가는 3배입니다(증가분만 200%이므로 1 + 2 = 3배). <strong>실수 3 — 분모와 분자
            바꿔 적용.</strong> 「전월 대비」와 「당월 대비」는 분모가 다르므로 결과가 달라집니다. 항상 「무엇을 기준으로
            한 비율인지」 명시하는 것이 중요합니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/life/discount" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            할인율 계산기
          </Link>
          <Link href="/life/gpa" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            학점 계산기
          </Link>
          <Link href="/finance/loan-calculator" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            대출 이자 계산기
          </Link>
          <Link href="/finance/compound-interest" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            복리 계산기
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
                name: "퍼센트 증가율은 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "퍼센트 증가율 = ((새 값 - 원래 값) / 원래 값) × 100입니다. 예를 들어 100에서 130으로 증가했다면 (130-100)/100 × 100 = 30% 증가입니다.",
                },
              },
              {
                "@type": "Question",
                name: "A의 B%는 어떻게 구하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A × B / 100으로 계산합니다. 예를 들어 500의 20%는 500 × 20 / 100 = 100입니다. 할인 계산, 세금 계산, 팁 계산 등에 자주 사용되는 기본 퍼센트 공식입니다.",
                },
              },
              {
                "@type": "Question",
                name: "퍼센트(%)와 퍼센트포인트(%p)는 무엇이 다른가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "퍼센트포인트는 두 퍼센트 값의 절대 차이이고, 퍼센트는 비율의 변화율입니다. 예를 들어 금리가 3%에서 5%로 올랐다면 「2%p 인상」(절대 차이) 또는 「약 67% 인상」((5-3)/3 × 100, 상대 변화율)로 표현할 수 있습니다. 뉴스·경제 기사에서 두 단위가 다르게 쓰이므로 구분이 중요합니다.",
                },
              },
              {
                "@type": "Question",
                name: "30% 인상 후 30% 인하하면 원래 가격이 되나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "아니요. 원래 가격의 91%로 떨어집니다. 1.3 × 0.7 = 0.91이므로 9% 더 싸집니다. 퍼센트 변화는 적용 시점의 기준값이 다르기 때문에 단순 가감으로 계산할 수 없습니다.",
                },
              },
              {
                "@type": "Question",
                name: "100% 증가는 두 배인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "네, 100% 증가는 원래 값의 2배입니다. 200% 증가는 3배(증가분 200% + 원래 100% = 300%), 50% 증가는 1.5배입니다. 「몇 % 증가」는 원래 값에 더해진 비율이므로 1 + 증가율/100 = 배수가 됩니다.",
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
          "name": "퍼센트 계산기",
          "description": "퍼센트 증가/감소, 비율 계산 — 세 가지 모드 무료 도구",
          "url": "https://www.oktools.co.kr/life/percentage",
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
            { "@type": "ListItem", "position": 2, "name": "생활 도구", "item": "https://www.oktools.co.kr/life" },
            { "@type": "ListItem", "position": 3, "name": "퍼센트 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
