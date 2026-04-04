import type { Metadata } from "next";
import Link from "next/link";
import CompoundCalc from "@/components/finance/CompoundCalc";

export const metadata: Metadata = {
  title: "복리 계산기 - 복리 효과 시뮬레이션, 투자 성장 계산",
  description: "초기 투자금, 월 적립금, 예상 수익률을 입력하면 복리 효과로 자산이 얼마나 성장하는지 시뮬레이션합니다.",
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
    </div>
  );
}
