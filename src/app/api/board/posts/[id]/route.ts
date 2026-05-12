import { NextResponse } from "next/server";
import { auth, isAdminSession } from "@/lib/auth";
import { getPostById, deletePost } from "@/lib/board-db";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getPostById(id);
  if (!post) {
    return NextResponse.json({ error: "게시글을 찾을 수 없습니다." }, { status: 404 });
  }
  return NextResponse.json(post);
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
  }

  const { id } = await params;
  const post = getPostById(id);
  if (!post) {
    return NextResponse.json({ error: "게시글을 찾을 수 없습니다." }, { status: 404 });
  }

  // 관리자 또는 본인 글만 삭제 가능
  const isAdmin = isAdminSession(session);
  const isAuthor = post.authorEmail === session.user.email;
  if (!isAdmin && !isAuthor) {
    return NextResponse.json({ error: "삭제 권한이 없습니다." }, { status: 403 });
  }

  const ok = deletePost(id);
  if (!ok) {
    return NextResponse.json({ error: "게시글을 찾을 수 없습니다." }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
