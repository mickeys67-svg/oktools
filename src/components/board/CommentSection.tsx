"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Comment } from "@/lib/board-db";

interface Props {
  postId: string;
  comments: Comment[];
}

export default function CommentSection({ postId, comments }: Props) {
  const { data: session } = useSession();
  const router = useRouter();
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [deleting, setDeleting] = useState<Record<string, boolean>>({});
  const [message, setMessage] = useState("");
  const [flaggedWords, setFlaggedWords] = useState<string[]>([]);

  const isAdmin = !!(session as unknown as { isAdmin?: boolean } | null)?.isAdmin;
  const myEmail = session?.user?.email ?? null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim()) return;
    setSubmitting(true);
    setMessage("");
    setFlaggedWords([]);

    try {
      const res = await fetch(`/api/board/posts/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      const data = await res.json();

      if (res.ok) {
        setContent("");
        router.refresh();
      } else if (res.status === 422 && data.flaggedWords) {
        setFlaggedWords(data.flaggedWords);
        setMessage(data.error);
      } else {
        setMessage(data.error ?? "오류가 발생했습니다.");
      }
    } catch {
      setMessage("네트워크 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(commentId: string) {
    if (!confirm("이 댓글을 삭제하시겠습니까?")) return;
    setDeleting((prev) => ({ ...prev, [commentId]: true }));
    try {
      const res = await fetch(`/api/board/posts/${postId}/comments/${commentId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    } finally {
      setDeleting((prev) => ({ ...prev, [commentId]: false }));
    }
  }

  return (
    <section className="mt-8">
      <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">
        댓글 ({comments.length})
      </h2>

      {/* Comment list */}
      {comments.length > 0 ? (
        <div className="mb-6 space-y-3">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {comment.author}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {new Date(comment.createdAt).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                {(isAdmin || (myEmail && comment.authorEmail === myEmail)) && (
                  <button
                    onClick={() => handleDelete(comment.id)}
                    disabled={deleting[comment.id]}
                    className="rounded px-2 py-1 text-xs text-red-500 transition-colors hover:bg-red-50 disabled:opacity-50 dark:text-red-400 dark:hover:bg-red-950"
                  >
                    {deleting[comment.id] ? "..." : "삭제"}
                  </button>
                )}
              </div>
              <p className="whitespace-pre-wrap text-sm text-gray-600 dark:text-gray-400">
                {comment.content}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mb-6 text-sm text-gray-400 dark:text-gray-500">
          아직 댓글이 없습니다.
        </p>
      )}

      {/* Word filter warning */}
      {message && (
        <div
          className={`mb-4 rounded-lg px-4 py-3 text-sm ${
            flaggedWords.length > 0
              ? "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300"
              : "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
          }`}
        >
          <p>{message}</p>
          {flaggedWords.length > 0 && (
            <p className="mt-1 font-medium">감지된 단어: {flaggedWords.join(", ")}</p>
          )}
        </div>
      )}

      {/* Comment form */}
      {session?.user ? (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="댓글을 입력하세요"
            maxLength={500}
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500"
          />
          <button
            type="submit"
            disabled={submitting || !content.trim()}
            className="shrink-0 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "..." : "등록"}
          </button>
        </form>
      ) : (
        <p className="text-sm text-gray-400 dark:text-gray-500">
          댓글을 작성하려면 로그인해주세요.
        </p>
      )}
    </section>
  );
}
