import type { Metadata } from "next";
import Link from "next/link";
import TarotApp from "@/components/fortune/TarotApp";

export const metadata: Metadata = {
  title: "무료 타로카드 리딩 - 원카드, 쓰리카드 스프레드",
  description:
    "무료 온라인 타로카드 리딩. 메이저 아르카나 22장으로 원카드, 쓰리카드(과거·현재·미래) 스프레드를 체험하세요.",
};

export default function TarotPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/fortune" className="hover:text-primary-600">운세·재미</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">타로카드</span>
      </nav>

      <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
        타로카드 리딩
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        마음을 가다듬고 카드를 선택하세요. 메이저 아르카나 22장이 메시지를 전합니다.
      </p>

      <TarotApp />

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">타로카드란?</h2>
        <p>
          타로카드는 78장의 카드로 구성된 점술 도구로, 메이저 아르카나 22장과 마이너 아르카나 56장으로 이루어져 있습니다.
          이 도구에서는 가장 상징적인 메이저 아르카나 22장을 사용합니다.
        </p>
        <p>
          카드는 정방향과 역방향에 따라 다른 의미를 가집니다.
          역방향은 해당 카드의 에너지가 차단되거나 반대 방향으로 작용함을 의미합니다.
        </p>
        <p className="text-xs text-gray-400">
          * 타로카드 리딩은 재미와 참고 용도입니다. 중요한 결정은 전문가와 상담하세요.
        </p>
      </section>
    </div>
  );
}
