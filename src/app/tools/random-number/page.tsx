import type { Metadata } from "next";
import Link from "next/link";
import RandomGenerator from "@/components/tools/RandomGenerator";

export const metadata: Metadata = {
  title: "랜덤 번호 생성기 - 로또, 주사위, 동전 던지기",
  description: "로또 번호, 랜덤 숫자, 동전 던지기, 주사위 굴리기 등 다양한 랜덤 생성 도구를 제공합니다.",
};

export default function RandomNumberPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link><span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-primary-600">유틸리티</Link><span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">랜덤 번호 생성기</span>
      </nav>
      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">랜덤 번호 생성기</h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">로또 번호, 랜덤 숫자, 동전 던지기, 주사위 등 다양한 랜덤 도구입니다.</p>
      <RandomGenerator />
    </div>
  );
}
