import type { Metadata } from "next";
import Link from "next/link";
import DiscountCalc from "@/components/life/DiscountCalc";

export const metadata: Metadata = {
  title: "할인율 계산기 - 할인가, 할인율, 원래 가격 계산",
  description: "원래 가격과 할인율을 입력하면 할인 금액과 최종 가격을 계산합니다.",
};

export default function DiscountPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/life" className="hover:text-primary-600">생활 도구</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">할인율 계산기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">할인율 계산기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">원래 가격과 할인율로 할인 금액과 최종 가격을 계산합니다.</p>
      <DiscountCalc />
    </div>
  );
}
