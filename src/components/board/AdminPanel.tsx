"use client";

import { useState, useEffect, useCallback } from "react";
import type { Post, Comment } from "@/lib/board-db";

type Tab = "pending" | "posts" | "comments" | "filter" | "stats";

interface Stats {
  total: number;
  approved: number;
  pending: number;
  rejected: number;
  totalComments: number;
  flaggedComments: number;
}

interface Props {
  initialPosts: Post[];
}

export default function AdminPanel({ initialPosts }: Props) {
  const [tab, setTab] = useState<Tab>("pending");
  const [pending, setPending] = useState<Post[]>(initialPosts);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [flaggedComments, setFlaggedComments] = useState<(Comment & { postTitle: string })[]>([]);
  const [bannedWords, setBannedWords] = useState<string[]>([]);
  const [newWord, setNewWord] = useState("");
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const fetchAllPosts = useCallback(async () => {
    const res = await fetch("/api/board/admin?filter=all");
    if (res.ok) setAllPosts(await res.json());
  }, []);

  const fetchFlaggedComments = useCallback(async () => {
    const res = await fetch("/api/board/admin/comments");
    if (res.ok) setFlaggedComments(await res.json());
  }, []);

  const fetchWords = useCallback(async () => {
    const res = await fetch("/api/board/admin/words");
    if (res.ok) {
      const data = await res.json();
      setBannedWords(data.words);
    }
  }, []);

  const fetchStats = useCallback(async () => {
    const res = await fetch("/api/board/admin/stats");
    if (res.ok) setStats(await res.json());
  }, []);

  useEffect(() => {
    if (tab === "posts") fetchAllPosts();
    if (tab === "comments") fetchFlaggedComments();
    if (tab === "filter") fetchWords();
    if (tab === "stats") fetchStats();
  }, [tab, fetchAllPosts, fetchFlaggedComments, fetchWords, fetchStats]);

  async function handleApprove(id: string) {
    setLoading((prev) => ({ ...prev, [id]: true }));
    try {
      const res = await fetch(`/api/board/posts/${id}/approve`, { method: "POST" });
      if (res.ok) {
        setPending((prev) => prev.filter((p) => p.id !== id));
      }
    } finally {
      setLoading((prev) => ({ ...prev, [id]: false }));
    }
  }

  async function handleDeletePost(id: string) {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    setLoading((prev) => ({ ...prev, [id]: true }));
    try {
      const res = await fetch(`/api/board/posts/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPending((prev) => prev.filter((p) => p.id !== id));
        setAllPosts((prev) => prev.filter((p) => p.id !== id));
      }
    } finally {
      setLoading((prev) => ({ ...prev, [id]: false }));
    }
  }

  async function handleDeleteComment(postId: string, commentId: string) {
    if (!confirm("이 댓글을 삭제하시겠습니까?")) return;
    setLoading((prev) => ({ ...prev, [commentId]: true }));
    try {
      const res = await fetch(`/api/board/posts/${postId}/comments/${commentId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setFlaggedComments((prev) => prev.filter((c) => c.id !== commentId));
      }
    } finally {
      setLoading((prev) => ({ ...prev, [commentId]: false }));
    }
  }

  async function handleAddWord(e: React.FormEvent) {
    e.preventDefault();
    if (!newWord.trim()) return;
    const res = await fetch("/api/board/admin/words", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ word: newWord }),
    });
    if (res.ok) {
      const data = await res.json();
      setBannedWords(data.words);
      setNewWord("");
    }
  }

  async function handleRemoveWord(word: string) {
    const res = await fetch("/api/board/admin/words", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ word }),
    });
    if (res.ok) {
      const data = await res.json();
      setBannedWords(data.words);
    }
  }

  const tabs: { key: Tab; label: string; count?: number }[] = [
    { key: "pending", label: "승인 대기", count: pending.length },
    { key: "posts", label: "전체 게시글" },
    { key: "comments", label: "신고 댓글" },
    { key: "filter", label: "금지어 관리" },
    { key: "stats", label: "통계" },
  ];

  return (
    <div>
      {/* Tab bar */}
      <div className="mb-6 flex gap-1 overflow-x-auto rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex-shrink-0 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              tab === t.key
                ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-gray-100"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            {t.label}
            {t.count !== undefined && (
              <span className="ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-100 px-1.5 text-xs font-semibold text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                {t.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Pending posts */}
      {tab === "pending" && (
        <div>
          {pending.length === 0 ? (
            <EmptyState text="승인 대기 중인 게시글이 없습니다." />
          ) : (
            <div className="space-y-4">
              {pending.map((post) => (
                <PostCard key={post.id} post={post}>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleApprove(post.id)}
                      disabled={loading[post.id]}
                      className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 disabled:opacity-50"
                    >
                      {loading[post.id] ? "처리 중..." : "승인"}
                    </button>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      disabled={loading[post.id]}
                      className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 disabled:opacity-50"
                    >
                      삭제
                    </button>
                  </div>
                </PostCard>
              ))}
            </div>
          )}
        </div>
      )}

      {/* All posts */}
      {tab === "posts" && (
        <div>
          {allPosts.length === 0 ? (
            <EmptyState text="게시글이 없습니다." />
          ) : (
            <div className="space-y-3">
              {allPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-start justify-between gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <StatusBadge approved={post.approved} rejected={post.rejected} />
                      <h3 className="truncate font-medium text-gray-900 dark:text-gray-100">
                        {post.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span>{post.author}</span>
                      <span>{new Date(post.createdAt).toLocaleDateString("ko-KR")}</span>
                      <span>댓글 {post.comments.length}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    disabled={loading[post.id]}
                    className="shrink-0 rounded-lg border border-red-300 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-950"
                  >
                    삭제
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Flagged comments */}
      {tab === "comments" && (
        <div>
          {flaggedComments.length === 0 ? (
            <EmptyState text="신고된 댓글이 없습니다." />
          ) : (
            <div className="space-y-3">
              {flaggedComments.map((comment) => (
                <div
                  key={comment.id}
                  className="rounded-lg border border-orange-200 bg-orange-50/50 p-4 dark:border-orange-800 dark:bg-orange-950/30"
                >
                  <div className="mb-2 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {comment.author}
                    </span>
                    <span>|</span>
                    <span>게시글: {comment.postTitle}</span>
                    <span>{new Date(comment.createdAt).toLocaleDateString("ko-KR")}</span>
                  </div>
                  <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                    {comment.content}
                  </p>
                  {comment.flaggedWords && comment.flaggedWords.length > 0 && (
                    <p className="mb-3 text-xs text-red-600 dark:text-red-400">
                      감지된 금지어: {comment.flaggedWords.join(", ")}
                    </p>
                  )}
                  <button
                    onClick={() => handleDeleteComment(comment.postId, comment.id)}
                    disabled={loading[comment.id]}
                    className="rounded-lg bg-red-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-red-700 disabled:opacity-50"
                  >
                    삭제
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Word filter management */}
      {tab === "filter" && (
        <div>
          <form onSubmit={handleAddWord} className="mb-6 flex gap-2">
            <input
              type="text"
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
              placeholder="금지어를 입력하세요"
              className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500"
            />
            <button
              type="submit"
              disabled={!newWord.trim()}
              className="shrink-0 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              추가
            </button>
          </form>

          {bannedWords.length === 0 ? (
            <EmptyState text="등록된 금지어가 없습니다." />
          ) : (
            <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                등록된 금지어: {bannedWords.length}개
              </p>
              <div className="flex flex-wrap gap-2">
                {bannedWords.map((word) => (
                  <span
                    key={word}
                    className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300"
                  >
                    {word}
                    <button
                      onClick={() => handleRemoveWord(word)}
                      className="ml-0.5 rounded-full p-0.5 text-red-400 transition-colors hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900"
                      aria-label={`${word} 삭제`}
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Statistics */}
      {tab === "stats" && (
        <div>
          {stats ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <StatCard label="전체 게시글" value={stats.total} />
              <StatCard label="승인됨" value={stats.approved} color="green" />
              <StatCard label="대기 중" value={stats.pending} color="amber" />
              <StatCard label="거절됨" value={stats.rejected} color="red" />
              <StatCard label="전체 댓글" value={stats.totalComments} />
              <StatCard label="신고 댓글" value={stats.flaggedComments} color="orange" />
            </div>
          ) : (
            <EmptyState text="통계를 불러오는 중..." />
          )}
        </div>
      )}
    </div>
  );
}

/* ── Sub-components ─────────────────────────────────────────────── */

function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
      {text}
    </div>
  );
}

function PostCard({ post, children }: { post: Post; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
      <h3 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">{post.title}</h3>
      <div className="mb-3 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
        <span>{post.author}</span>
        <span>({post.authorEmail})</span>
        <span>{new Date(post.createdAt).toLocaleDateString("ko-KR")}</span>
      </div>
      {post.flaggedWords && post.flaggedWords.length > 0 && (
        <p className="mb-2 text-xs text-red-600 dark:text-red-400">
          금지어 포함: {post.flaggedWords.join(", ")}
        </p>
      )}
      <p className="mb-4 whitespace-pre-wrap text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {post.content}
      </p>
      {children}
    </div>
  );
}

function StatusBadge({ approved, rejected }: { approved: boolean; rejected?: boolean }) {
  if (rejected) {
    return (
      <span className="inline-flex rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900 dark:text-red-300">
        거절
      </span>
    );
  }
  if (approved) {
    return (
      <span className="inline-flex rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
        승인
      </span>
    );
  }
  return (
    <span className="inline-flex rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900 dark:text-amber-300">
      대기
    </span>
  );
}

function StatCard({ label, value, color }: { label: string; value: number; color?: string }) {
  const colorMap: Record<string, string> = {
    green: "text-green-600 dark:text-green-400",
    amber: "text-amber-600 dark:text-amber-400",
    red: "text-red-600 dark:text-red-400",
    orange: "text-orange-600 dark:text-orange-400",
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-800 dark:bg-gray-900">
      <p className={`text-2xl font-bold ${color ? colorMap[color] : "text-gray-900 dark:text-gray-100"}`}>
        {value}
      </p>
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{label}</p>
    </div>
  );
}
