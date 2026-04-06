import type { Metadata } from "next";
import Link from "next/link";
import PregnancyCalc from "@/components/health/PregnancyCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "임신 주수 계산기 - 출산예정일 삼분기 확인",
  description:
    "무료 임신 주수 계산기로 출산예정일과 현재 임신 주수를 확인하세요. 마지막 생리일 입력만으로 삼분기, 아기 크기, 주차별 발달 정보를 즉시 제공합니다.",
  keywords: ["임신주수계산기", "출산예정일계산", "임신몇주", "임신주수확인", "마지막생리일출산예정일", "삼분기", "임신초기증상", "예정일계산기", "아기크기"],
  openGraph: {
    url: "/health/pregnancy",
    title: "임신 주수 계산기 - 출산예정일 삼분기 확인",
    description:
      "무료 임신 주수 계산기로 출산예정일과 현재 임신 주수를 확인하세요. 마지막 생리일 입력만으로 삼분기, 아기 크기, 주차별 발달 정보를 즉시 제공합니다.",
  },
  alternates: {
    canonical: "/health/pregnancy",
  },
};

export default function PregnancyPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/health" className="hover:text-primary-600">건강 계산기</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">임신 주수 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">임신 주수 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">마지막 생리 시작일 기준으로 임신 주수와 출산 예정일을 계산합니다.</p>
      <PregnancyCalc />
      <ResultAd />

      {/* Info Section */}
      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            임신 주수 계산기 사용 가이드
          </h2>
          <p>
            임신 주수 계산기는 마지막 생리 시작일(LMP)을 입력하면 현재 임신 주수와 출산 예정일을 자동으로 계산해주는 도구입니다.
            산부인과 방문 전 대략적인 주수를 확인하거나, 임신 기간 중 어느 삼분기에 해당하는지 파악할 때 유용합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">출산 예정일 계산 방법</h3>
          <p>
            네겔레 법칙(Naegele&apos;s Rule)에 따라 마지막 생리 시작일에 280일(40주)을 더하여 출산 예정일을 계산합니다.
            이는 평균 생리 주기 28일을 기준으로 하며, 실제 출산일은 예정일 전후 2주 이내에 이루어지는 경우가 대부분입니다.
            생리 주기가 불규칙하거나 정확한 날짜를 모르는 경우에는 초음파 검사로 주수를 확인하는 것이 정확합니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">삼분기별 안내</h3>
          <p>
            1삼분기(1~12주)는 주요 장기가 형성되는 시기로 엽산 섭취가 중요합니다.
            2삼분기(13~27주)는 비교적 안정적인 시기로 태동을 느끼기 시작합니다.
            3삼분기(28~40주)는 태아가 급격히 성장하며 출산 준비를 하는 시기입니다.
            정기 산전검사를 통해 산모와 태아의 건강 상태를 꾸준히 확인하시기 바랍니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/health/dday" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            D-Day 계산기
          </Link>
          <Link href="/health/age" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            만 나이 계산기
          </Link>
          <Link href="/finance/loan-calculator" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            대출 이자 계산기
          </Link>
          <Link href="/fortune/tarot" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            타로카드
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
                name: "출산 예정일은 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "출산 예정일은 마지막 생리 시작일에 280일(40주)을 더하여 계산합니다. 네겔레 공식으로는 마지막 생리 시작일의 월에 9를 더하고(또는 3을 빼고), 일에 7을 더합니다. 실제 분만은 예정일 전후 2주 이내에 이루어지는 것이 정상입니다.",
                },
              },
              {
                "@type": "Question",
                name: "임신 주수는 어떻게 세나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "임신 주수는 마지막 생리 시작일부터 계산합니다. 실제 수정은 약 2주 후에 이루어지지만, 의학적으로는 생리 시작일을 기준으로 합니다. 임신 1주차는 실제로 아직 임신 전이며, 보통 임신 4~5주차에 임신을 확인하게 됩니다.",
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
          "name": "임신 주수 계산기",
          "description": "마지막 생리일 기�� 임신 주수 및 출산 예정일 계산",
          "url": "https://www.oktools.co.kr/health/pregnancy",
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
            { "@type": "ListItem", "position": 3, "name": "임신 주수 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
