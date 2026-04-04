import type { Metadata } from "next";
import Link from "next/link";
import DepositCalc from "@/components/finance/DepositCalc";

export const metadata: Metadata = {
  title: "예금 이자 계산기 - 예금 금리별 세후 이자 계산",
  description: "예금 금액과 금리를 입력하면 만기 수령액과 세후 이자를 계산합니다.",
};

export default function DepositPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">예금 이자 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">예금 이자 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">예금 금액, 금리, 기간을 입력하면 세후 이자와 만기 수령액을 계산합니다.</p>
      <DepositCalc />
    </div>
  );
}
