import type { Metadata } from "next";
import Link from "next/link";
import CompoundCalc from "@/components/finance/CompoundCalc";
import { ResultAd } from "@/components/ui/ToolPageAds";

export const metadata: Metadata = {
  title: "복리 계산기 - 복리 효과 투자 수익 시뮬레이션 무료",
  description: "무료 복리 계산기로 투자 수익을 시뮬레이션하세요. 초기 투자금, 월 적립금, 수익률 입력 후 자산 증식 효과를 바로 확인. 72법칙 적용.",
  keywords: ["복리계산기", "복리이자계산", "복리효과", "투자수익계산", "적립식투자", "복리72법칙", "자산증식", "장기투자시뮬레이션"],
  alternates: {
    canonical: "/finance/compound-interest",
  },
};

export default function CompoundInterestPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">복리 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">복리 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">초기 투자금과 월 적립금으로 복리 성장을 시뮬레이션합니다.</p>
      <CompoundCalc />
      <ResultAd />

      {/* Info Section */}
      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            복리 계산기 사용 가이드
          </h2>
          <p>
            복리 계산기는 초기 투자금과 월 적립금을 입력하면 연 수익률에 따라 자산이 어떻게 성장하는지 시뮬레이션해주는 도구입니다.
            장기 투자, 연금 계획, 목돈 마련 전략을 수립할 때 복리 효과를 눈으로 확인할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">복리의 원리와 72법칙</h3>
          <p>
            복리는 이자가 원금에 합산되어 다음 기간에 더 큰 이자를 만들어내는 구조입니다. 아인슈타인이 "인류 최대의 발명"이라고
            불렀다는 일화가 있을 만큼 장기간 적용하면 놀라운 효과를 발휘합니다.
            72법칙은 투자 원금이 2배가 되는 기간을 간단히 추정하는 방법으로, 72를 연 수익률로 나누면 됩니다.
            예를 들어 연 6% 수익이면 72 / 6 = 약 12년에 원금이 2배가 됩니다.
          </p>
        </div>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">투자 시 참고사항</h3>
          <p>
            복리 효과를 극대화하려면 가능한 일찍 시작하고, 꾸준히 적립하며, 수익을 재투자하는 것이 핵심입니다.
            주식, ETF, 펀드 등의 실제 투자에서는 수익률이 매년 일정하지 않으므로, 계산 결과는 평균 수익률 기준의 참고치입니다.
            인플레이션을 고려하면 실질 수익률은 명목 수익률보다 낮아지는 점도 감안하시기 바랍니다.
          </p>
        </div>
      </section>

      {/* 관련 도구 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">관련 도구</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link href="/finance/savings" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            적금 이자 계산기
          </Link>
          <Link href="/finance/deposit" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            예금 이자 계산기
          </Link>
          <Link href="/health/bmi" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            BMI 계산기
          </Link>
          <Link href="/fortune/tarot" className="rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400">
            타로카드
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "복리 계산기",
          "description": "복리 효과 시뮬레이션 및 투자 성장 계산",
          "url": "https://www.oktools.co.kr/finance/compound-interest",
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
            { "@type": "ListItem", "position": 2, "name": "금융 계산기", "item": "https://www.oktools.co.kr/finance" },
            { "@type": "ListItem", "position": 3, "name": "복리 계산기" }
          ]
        }) }}
      />
    </div>
  );
}
