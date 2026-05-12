import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById } from "@/lib/board-db";
import CommentSection from "@/components/board/CommentSection";
import AuthButton from "@/components/board/AuthButton";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = getPostById(id);
  if (!post || !post.approved) {
    return {
      title: "게시글을 찾을 수 없습니다",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: post.title,
    description: post.content.slice(0, 160),
    alternates: { canonical: `/board/${post.id}` },
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 160),
      url: `/board/${post.id}`,
      type: "article",
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post || !post.approved) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 sm:px-6 sm:py-12">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600">홈</Link>
        <span className="mx-2">/</span>
        <Link href="/board" className="hover:text-primary-600">게시판</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-gray-100">{post.title}</span>
      </nav>

      <div className="mb-6 flex justify-end">
        <AuthButton />
      </div>

      {/* Post content */}
      <article className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 dark:border-gray-800 dark:bg-gray-900">
        <h1 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-gray-50">
          {post.title}
        </h1>
        <div className="mb-6 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-700 dark:text-gray-300">{post.author}</span>
          <span>{new Date(post.createdAt).toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" })}</span>
        </div>
        <div className="whitespace-pre-wrap leading-relaxed text-gray-700 dark:text-gray-300">
          {post.content}
        </div>
      </article>

      {/* Comments */}
      <CommentSection postId={post.id} comments={post.comments} />

      <div className="mt-8 text-center">
        <Link
          href="/board"
          className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          목록으로
        </Link>
      </div>
    </div>
  );
}
