import type { Metadata } from "next";
import Link from "next/link";
import InstallmentCalc from "@/components/finance/InstallmentCalc";

export const metadata: Metadata = {
  title: "할부 계산기 - 카드 할부 수수료 및 월 할부금 계산",
  description:
    "상품 가격과 할부 개월수를 입력하면 월 할부금, 총 수수료, 총 결제금액을 계산합니다. 무이자 할부 비교에 유용합니다.",
};

export default function InstallmentPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">할부 계산기</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        할부 계산기
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        상품 가격, 할부 개월, 수수료율을 입력하면 월 할부금과 총 수수료를 계산합니다.
      </p>

      <InstallmentCalc />
    </div>
  );
}
