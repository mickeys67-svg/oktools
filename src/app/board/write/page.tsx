import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import WriteForm from "@/components/board/WriteForm";

export const metadata: Metadata = {
  title: "글쓰기 — 커뮤니티 게시판",
  description: "오케이툴즈 커뮤니티 게시판에 새 글을 작성하세요.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function WritePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/board/write");
  }

  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/board" className="hover:text-primary-600">게시판</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">글쓰기</span>
      </nav>

      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
          새 글 작성
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          관리자 승인 후 게시판에 공개됩니다.
        </p>
      </div>

      <WriteForm />
    </div>
  );
}
