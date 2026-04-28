"use client";

import { useState } from "react";
import type { Post } from "@/lib/board-db";

interface Props {
  initialPosts: Post[];
}

export default function AdminPanel({ initialPosts }: Props) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  async function handleApprove(id: string) {
    setLoading((prev) => ({ ...prev, [id]: true }));
    try {
      const res = await fetch(`/api/board/posts/${id}/approve`, { method: "POST" });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      }
    } finally {
      setLoading((prev) => ({ ...prev, [id]: false }));
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    setLoading((prev) => ({ ...prev, [id]: true }));
    try {
      const res = await fetch(`/api/board/posts/${id}/approve`, { method: "DELETE" });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      }
    } finally {
      setLoading((prev) => ({ ...prev, [id]: false }));
    }
  }

  if (posts.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
        승인 대기 중인 게시글이 없습니다.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        대기 중인 게시글: {posts.length}건
      </p>
      {posts.map((post) => (
        <div
          key={post.id}
          className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 dark:border-amber-800 dark:bg-amber-950/30"
        >
          <h3 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
            {post.title}
          </h3>
          <div className="mb-3 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span>{post.author}</span>
            <span>({post.authorEmail})</span>
            <span>{new Date(post.createdAt).toLocaleDateString("ko-KR")}</span>
          </div>
          <p className="mb-4 whitespace-pre-wrap text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            {post.content}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => handleApprove(post.id)}
              disabled={loading[post.id]}
              className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 disabled:opacity-50"
            >
              {loading[post.id] ? "처리 중..." : "승인"}
            </button>
            <button
              onClick={() => handleDelete(post.id)}
              disabled={loading[post.id]}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 disabled:opacity-50"
            >
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
