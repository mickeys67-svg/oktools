import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { getPendingPosts } from "@/lib/board-db";
import AdminPanel from "@/components/board/AdminPanel";

export const metadata: Metadata = {
  title: "게시판 관리 — 관리자 대시보드",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await auth();
  const isAdmin = !!(session as unknown as Record<string, unknown>)?.isAdmin;

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/board/admin");
  }

  if (!isAdmin) {
    return (
      <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
        <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-800 dark:bg-red-950">
          <h1 className="mb-2 text-xl font-bold text-red-700 dark:text-red-400">접근 권한 없음</h1>
          <p className="text-red-600 dark:text-red-400">관리자만 접근할 수 있는 페이지입니다.</p>
          <Link href="/board" className="mt-4 inline-block text-sm text-primary-600 hover:underline">
            게시판으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const pendingPosts = getPendingPosts();

  return (
    <div className="mx-auto max-w-[900px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/board" className="hover:text-primary-600">게시판</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">관리</span>
      </nav>

      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
          관리자 대시보드
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          게시글 승인, 삭제, 댓글 관리, 금지어 설정을 할 수 있습니다.
        </p>
      </div>

      <AdminPanel initialPosts={pendingPosts} />
    </div>
  );
}
