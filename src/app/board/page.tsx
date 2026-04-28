import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/board-db";
import { auth } from "@/lib/auth";
import PostForm from "@/components/board/PostForm";
import AuthButton from "@/components/board/AuthButton";

export const metadata: Metadata = {
  title: "커뮤니티 게시판",
  description: "오케이툴즈 커뮤니티 게시판 — 자유롭게 글을 작성하고 의견을 나눠보세요.",
  alternates: { canonical: "/board" },
};

export const dynamic = "force-dynamic";

export default async function BoardPage() {
  const posts = getAllPosts(false);
  const session = await auth();
  const isAdmin = !!(session as unknown as Record<string, unknown>)?.isAdmin;

  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">게시판</span>
      </nav>

      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-gray-50">
            커뮤니티 게시판
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            자유롭게 글을 작성하고 의견을 나눠보세요.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isAdmin && (
            <Link
              href="/board/admin"
              className="rounded-lg border border-amber-300 px-3 py-1.5 text-sm font-medium text-amber-700 transition-colors hover:bg-amber-50 dark:border-amber-700 dark:text-amber-400 dark:hover:bg-amber-950"
            >
              관리
            </Link>
          )}
          <AuthButton />
        </div>
      </div>

      {/* Post submission form */}
      <PostForm />

      {/* Write page link */}
      {session?.user && (
        <div className="mt-3 text-right">
          <Link
            href="/board/write"
            className="text-sm text-primary-600 hover:underline dark:text-primary-400"
          >
            전체 화면으로 글쓰기 &rarr;
          </Link>
        </div>
      )}

      {/* Post list */}
      <section className="mt-8">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">
          게시글 ({posts.length})
        </h2>
        {posts.length === 0 ? (
          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
            아직 게시글이 없습니다. 첫 번째 글을 작성해보세요!
          </div>
        ) : (
          <div className="grid gap-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/board/${post.id}`}
                className="group rounded-xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-5 dark:border-gray-800 dark:bg-gray-900"
              >
                <h3 className="mb-1 font-semibold text-gray-900 group-hover:text-primary-600 dark:text-gray-100">
                  {post.title}
                </h3>
                <p className="mb-3 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                  {post.content}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
                  <span>{post.author}</span>
                  <span>{new Date(post.createdAt).toLocaleDateString("ko-KR")}</span>
                  <span className="ml-auto">댓글 {post.comments.length}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
