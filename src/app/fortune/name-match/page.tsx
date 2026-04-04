import type { Metadata } from "next";
import Link from "next/link";
import NameMatchApp from "@/components/fortune/NameMatchApp";

export const metadata: Metadata = {
  title: "이름 궁합 테스트 - 이름으로 보는 우리의 궁합",
  description:
    "한글 자모 획수 기반 전통 이름 궁합 테스트. 두 사람의 이름을 입력하면 피라미드 방식으로 궁합 점수를 계산합니다.",
};

export default function NameMatchPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/fortune" className="hover:text-primary-600">운세·재미</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">이름 궁합</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        이름 궁합 테스트
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        두 사람의 이름을 입력하면 한글 획수 기반으로 궁합 점수를 계산합니다.
      </p>

      <NameMatchApp />

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">이름 궁합 원리</h2>
        <p>
          두 이름을 한 글자씩 번갈아 배치한 뒤, 각 글자의 한글 자모 획수를 구합니다.
          인접한 두 숫자를 더해 일의 자리만 취하는 피라미드 방식으로 줄여나가 최종 2자리 궁합 점수를 산출합니다.
        </p>
        <p className="text-xs text-gray-400">
          * 이름 궁합은 재미와 참고 용도입니다.
        </p>
      </section>
    </div>
  );
}
