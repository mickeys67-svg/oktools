import type { Metadata } from "next";
import Link from "next/link";
import SavingsCalc from "@/components/finance/SavingsCalc";

export const metadata: Metadata = {
  title: "적금 이자 계산기 - 월 납입금, 금리별 만기 수령액 계산",
  description: "매월 적금 납입금과 금리를 입력하면 만기 수령액과 세후 이자를 계산합니다.",
};

export default function SavingsPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/finance" className="hover:text-primary-600">금융 계산기</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">적금 이자 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">적금 이자 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">월 납입금, 금리, 기간을 입력하면 만기 수령액을 계산합니다.</p>
      <SavingsCalc />
    </div>
  );
}
