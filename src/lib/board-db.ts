import fs from "fs";
import path from "path";

/* ── Types ──────────────────────────────────────────────────────── */

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  authorEmail: string;
  createdAt: string;
  approved: boolean;
  rejected?: boolean;
  flaggedWords?: string[];
  comments: Comment[];
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  authorEmail?: string;
  content: string;
  createdAt: string;
  flagged?: boolean;
  flaggedWords?: string[];
}

interface DB {
  posts: Post[];
}

/* ── File path ──────────────────────────────────────────────────── */

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "board.json");

function readDB(): DB {
  if (!fs.existsSync(DB_PATH)) {
    return { posts: [] };
  }
  const raw = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(raw) as DB;
}

function writeDB(db: DB) {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
}

/* ── Posts ───────────────────────────────────────────────────────── */

export function getAllPosts(includeUnapproved = false): Post[] {
  const db = readDB();
  const posts = includeUnapproved ? db.posts : db.posts.filter((p) => p.approved);
  return posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function getPostById(id: string): Post | undefined {
  const db = readDB();
  return db.posts.find((p) => p.id === id);
}

export function getPendingPosts(): Post[] {
  const db = readDB();
  return db.posts.filter((p) => !p.approved).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function createPost(data: {
  title: string;
  content: string;
  author: string;
  authorEmail: string;
  flaggedWords?: string[];
}): Post {
  const db = readDB();
  const post: Post = {
    id: crypto.randomUUID(),
    title: data.title,
    content: data.content,
    author: data.author,
    authorEmail: data.authorEmail,
    createdAt: new Date().toISOString(),
    approved: false,
    flaggedWords: data.flaggedWords,
    comments: [],
  };
  db.posts.push(post);
  writeDB(db);
  return post;
}

export function approvePost(id: string): boolean {
  const db = readDB();
  const post = db.posts.find((p) => p.id === id);
  if (!post) return false;
  post.approved = true;
  writeDB(db);
  return true;
}

export function deletePost(id: string): boolean {
  const db = readDB();
  const idx = db.posts.findIndex((p) => p.id === id);
  if (idx === -1) return false;
  db.posts.splice(idx, 1);
  writeDB(db);
  return true;
}

export function rejectPost(id: string): boolean {
  const db = readDB();
  const post = db.posts.find((p) => p.id === id);
  if (!post) return false;
  post.rejected = true;
  post.approved = false;
  writeDB(db);
  return true;
}

/* ── Comments ───────────────────────────────────────────────────── */

export function addComment(
  postId: string,
  data: { author: string; authorEmail?: string; content: string; flagged?: boolean; flaggedWords?: string[] },
): Comment | null {
  const db = readDB();
  const post = db.posts.find((p) => p.id === postId);
  if (!post) return null;
  const comment: Comment = {
    id: crypto.randomUUID(),
    postId,
    author: data.author,
    authorEmail: data.authorEmail,
    content: data.content,
    createdAt: new Date().toISOString(),
    flagged: data.flagged,
    flaggedWords: data.flaggedWords,
  };
  post.comments.push(comment);
  writeDB(db);
  return comment;
}

export function deleteComment(postId: string, commentId: string): boolean {
  const db = readDB();
  const post = db.posts.find((p) => p.id === postId);
  if (!post) return false;
  const idx = post.comments.findIndex((c) => c.id === commentId);
  if (idx === -1) return false;
  post.comments.splice(idx, 1);
  writeDB(db);
  return true;
}

export function getAllComments(): (Comment & { postTitle: string })[] {
  const db = readDB();
  const comments: (Comment & { postTitle: string })[] = [];
  for (const post of db.posts) {
    for (const comment of post.comments) {
      comments.push({ ...comment, postTitle: post.title });
    }
  }
  return comments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function getFlaggedComments(): (Comment & { postTitle: string })[] {
  return getAllComments().filter((c) => c.flagged);
}

/* ── Stats ──────────────────────────────────────────────────────── */

export function getStats() {
  const db = readDB();
  const total = db.posts.length;
  const approved = db.posts.filter((p) => p.approved).length;
  const pending = db.posts.filter((p) => !p.approved && !p.rejected).length;
  const rejected = db.posts.filter((p) => p.rejected).length;
  const totalComments = db.posts.reduce((sum, p) => sum + p.comments.length, 0);
  const flaggedComments = db.posts.reduce((sum, p) => sum + p.comments.filter((c) => c.flagged).length, 0);
  return { total, approved, pending, rejected, totalComments, flaggedComments };
}
