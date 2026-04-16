import type { Metadata } from "next";
import Link from "next/link";
import LottoRecommender from "@/components/tools/LottoRecommender";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "로또 번호 추천 - 미출현번호 통계 기반 스마트 추천",
  description:
    "무료 로또 번호 추천. 미출현 번호, 고빈도 번호, 균형 추천 등 4가지 전략으로 로또 6/45 번호를 생성하세요. 당첨번호 통계 분석.",
  keywords: ["로또번호추천", "로또번호생성", "로또당첨번호", "로또6/45", "로또통계", "미출현번호", "로또번호조합", "로또예측", "로또분석", "이번주로또", "로또자동번호"],
  openGraph: {
    url: "/tools/lotto",
    title: "로또 번호 추천 - 미출현번호 통계 기반 스마트 추천",
    description:
      "무료 로또 번호 추천. 미출현 번호, 고빈도 번호, 균형 추천 등 4가지 전략으로 로또 6/45 번호를 생성하세요. 당첨번호 통계 분석.",
  },
  alternates: {
    canonical: "/tools/lotto",
  },
};

export default function LottoPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary-600">유틸리티</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">로또 번호 추천</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        로또 번호 추천
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        역대 당첨번호 통계를 기반으로 4가지 전략의 로또 번호를 추천받으세요.
      </p>

      <LottoRecommender />
      <ResultAd />

      <section className="mt-10 space-y-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">4가지 추천 모드 설명</h2>
          <p>
            <strong>균형 추천</strong>은 역대 자주 나온 고빈도 번호 3개와 최근 출현이 적은 미출현 번호 3개를
            조합하여 통계적 균형을 맞춘 번호 6개를 생성합니다.
            <strong> 미출현 번호</strong>는 최근 10회차에 등장하지 않은 번호를 우선 선택해 「오랫동안 안 나왔으니
            슬슬 나올 때」라는 회귀 효과(regression to the mean)를 기대하는 모드입니다.
            <strong> 고빈도 번호</strong>는 역대 누적 당첨 횟수가 가장 많은 상위 15개 번호에서 추천합니다.
            <strong> 랜덤</strong>은 브라우저의 암호학적 난수 생성기로 완전 무작위 6개를 생성합니다.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">로또 6/45 기본 규칙</h2>
          <p>
            대한민국 동행복권 로또 6/45는 1~45번 사이 숫자 6개를 맞추는 게임입니다. 1게임 가격은 1,000원이며
            한 회차 최대 5게임(5,000원)까지 자동·수동·반자동으로 구매할 수 있습니다. 매주 토요일 저녁 8시 35분에
            추첨이 진행되며, 1등 당첨금은 통상 10~30억 원대(이월 시 40억 원 이상), 1~5등까지 당첨 등수가 있습니다.
            온라인 구매는 동행복권 공식 사이트에서만 가능하며, 미성년자 구매는 금지됩니다.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">통계 기반 추천의 한계</h2>
          <p>
            로또 추첨은 매 회차 독립적인 사건입니다. 이론적으로는 모든 번호 조합이 동일한 8,145,060분의 1
            확률을 가집니다. 따라서 「미출현 번호가 곧 나올 것」이라는 도박사의 오류(Gambler&apos;s Fallacy)에 빠지지
            않도록 주의해야 합니다. 본 도구의 통계 추천은 번호 선택의 재미와 패턴 참고용이며, 당첨 확률 자체를
            높여주지는 않습니다. 다만 무작위 자동 번호와 비교했을 때 「의미 있는 선택」을 했다는 만족감과
            매주 통계 변동을 추적하는 즐거움을 더해줍니다.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">당첨 시 절차와 세금</h2>
          <p>
            당첨금 5만 원 이하는 가까운 복권 판매점에서 즉시 수령 가능합니다. 5만 원 초과 ~ 5천만 원 미만은
            농협은행 전국 지점, 5천만 원 이상 1등·2등은 서울 농협본점 또는 광주 호남본부에서만 수령합니다.
            지급 기한은 추첨일로부터 1년이며, 신분증·당첨 복권·통장 사본이 필요합니다. 세금은
            <strong> 200만 원 이하 비과세</strong>, 200만 원 초과 3억 원 이하 22%(소득세 20% + 지방소득세 2%),
            3억 원 초과분 33%(소득세 30% + 지방소득세 3%)가 원천징수된 후 지급됩니다.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">건전한 구매 가이드</h2>
          <p>
            로또는 「세금이 환원되는 공익 기금 모금 사업」으로 분류되지만, 본질적으로 사행성 게임입니다.
            한국도박문제예방치유원(국번없이 1336)은 「월 가처분 소득의 0.5% 이내」로 지출을 제한할 것을
            권고합니다. 매주 1만 원 이하의 소액으로 「이번 주는 어떤 번호일까」 정도의 즐거움을 누리는 선에서
            그치고, 당첨을 노린 대량 구매·반복 구매는 피해야 합니다. 도박 충동이 통제되지 않는다면 반드시
            전문 상담을 받으시기 바랍니다.
          </p>
        </div>

        <p className="text-xs text-gray-400">
          * 본 도구는 통계 기반 참고 자료입니다. 모든 번호 조합의 당첨 확률은 동일하며, 당첨을 보장하지 않습니다.
          18세 미만은 구매할 수 없으며, 도박 중독 상담은 한국도박문제예방치유원(1336)으로 연락하세요.
        </p>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/tools/random-number" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            랜덤 번호 생성기
          </Link>
          <Link href="/tools/character-count" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            글자수 세기
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
                name: "로또 당첨 확률은 얼마인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "로또 6/45의 1등 당첨 확률은 8,145,060분의 1입니다. 45개 번호 중 6개를 맞춰야 하며, 2등(5개+보너스)은 약 135만분의 1, 3등(5개)은 약 3만5천분의 1, 4등(4개)은 약 733분의 1, 5등(3개)은 약 45분의 1입니다.",
                },
              },
              {
                "@type": "Question",
                name: "로또 번호 추천은 당첨 확률을 높여주나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "통계 기반 번호 추천은 과거 데이터를 분석한 참고 자료이며, 모든 번호 조합의 당첨 확률은 동일합니다. 미출현 번호나 고빈도 번호 전략은 번호 선택의 재미를 더해줄 뿐, 당첨을 보장하지 않습니다.",
                },
              },
              {
                "@type": "Question",
                name: "로또 당첨금에 세금은 얼마나 내나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "로또 당첨금 200만원 이하는 비과세, 200만원 초과~3억원 이하는 22%(소득세 20%+지방소득세 2%), 3억원 초과분은 33%(소득세 30%+지방소득세 3%)의 세금이 원천징수됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "당첨 후 수령은 어디서 하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "5만 원 이하는 가까운 복권 판매점에서 즉시 수령, 5만 원 초과~5천만 원 미만은 농협은행 전국 지점, 5천만 원 이상 1·2등 고액 당첨은 서울 농협본점 또는 광주 호남본부에서만 수령합니다. 지급 기한은 추첨일로부터 1년이며 신분증·당첨 복권·통장 사본이 필요합니다.",
                },
              },
              {
                "@type": "Question",
                name: "미출현 번호 추천이 정말 효과가 있나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "미출현 번호 추천은 「오랫동안 안 나왔으니 곧 나올 것」이라는 도박사의 오류(Gambler's Fallacy)에 기반합니다. 실제로 매 추첨은 독립적인 사건이므로 각 번호의 출현 확률은 항상 동일합니다. 통계 추천은 번호 선택의 재미를 더하는 참고 자료일 뿐 당첨 확률을 높여주지는 않습니다.",
                },
              },
              {
                "@type": "Question",
                name: "로또 당첨금을 안전하게 관리하는 방법은?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "고액 당첨자는 신원 노출을 막기 위해 가족 외에는 비밀로 하고, 세금 공제 후 금액의 일부는 즉시 단기 예금·MMF에 분산 예치, 일부는 채권·인덱스 펀드로 장기 분산 투자하는 것이 일반적입니다. 단기간 내 큰 소비·고위험 투자·지인 대출은 피해야 하며, 세무사·재무 설계사와 상담하는 것이 안전합니다.",
                },
              },
              {
                "@type": "Question",
                name: "구매 한도는 얼마까지인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "한 회차당 1인 최대 10만 원까지 구매 가능합니다(온라인은 1주 5만 원). 1게임 1,000원 기준 100게임이 한도입니다. 단, 도박 중독 예방을 위해 「월 가처분 소득의 0.5% 이내」로 지출하는 것이 한국도박문제예방치유원의 권고입니다.",
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
          "name": "로또 번호 추천",
          "description": "미출현 번호, 고빈도 번호, 균형 추천 등 로또 6/45 스마트 번호 추천",
          "url": "https://www.oktools.co.kr/tools/lotto",
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
            { "@type": "ListItem", "position": 3, "name": "로또 번호 추천" }
          ]
        }) }}
      />
    </div>
  );
}
