import type { Metadata } from "next";
import Link from "next/link";
import LoanCalculator from "@/components/finance/LoanCalculator";

export const metadata: Metadata = {
  title: "대출 이자 계산기 - 원리금균등/원금균등/만기일시 상환 계산",
  description:
    "대출 이자를 쉽고 정확하게 계산하세요. 원리금균등, 원금균등, 만기일시 상환 방식별 월 상환액, 총 이자, 상환 스케줄을 한눈에 확인할 수 있습니다.",
};

export default function LoanCalculatorPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">
          홈
        </Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">
          금융 계산기
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">대출 이자 계산기</span>
      </nav>

      {/* Title */}
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        대출 이자 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        대출 금액, 이자율, 기간을 입력하면 상환 방식별 월 상환액과 총 이자를 계산합니다.
      </p>

      {/* Calculator */}
      <LoanCalculator />

      {/* Info Section */}
      <section className="mt-10 space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            상환 방식 안내
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">원리금균등상환</h3>
              <p>매달 같은 금액을 상환합니다. 초기에는 이자 비중이 크고, 시간이 지날수록 원금 비중이 커집니다. 가장 일반적인 상환 방식입니다.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">원금균등상환</h3>
              <p>매달 같은 금액의 원금을 상환하고, 이자는 남은 원금에 대해 계산됩니다. 초기 상환 부담이 크지만 총 이자가 원리금균등보다 적습니다.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">만기일시상환</h3>
              <p>매달 이자만 납부하고, 만기일에 원금을 한꺼번에 상환합니다. 월 부담은 가장 적지만 총 이자가 가장 많습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "원리금균등상환과 원금균등상환의 차이는?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "원리금균등상환은 매달 같은 금액을 상환하며, 원금균등상환은 매달 같은 원금에 줄어드는 이자를 더해 상환합니다. 원금균등이 총 이자는 적지만 초기 상환 부담이 큽니다.",
                },
              },
              {
                "@type": "Question",
                name: "1억 원을 연 3.5%로 30년 대출하면 월 상환액은?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "원리금균등상환 기준 월 약 449,045원입니다. 총 이자는 약 6,165만 원이며, 총 상환액은 약 1억 6,165만 원입니다.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
