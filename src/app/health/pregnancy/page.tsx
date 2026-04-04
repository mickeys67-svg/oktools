import type { Metadata } from "next";
import Link from "next/link";
import PregnancyCalc from "@/components/health/PregnancyCalc";

export const metadata: Metadata = {
  title: "임신 주수 계산기 - 출산 예정일, 삼분기 확인",
  description: "마지막 생리 시작일을 입력하면 현재 임신 주수, 출산 예정일, 삼분기, 아기 크기를 확인할 수 있습니다.",
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
    </div>
  );
}
