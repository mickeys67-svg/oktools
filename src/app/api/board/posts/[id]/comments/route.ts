import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { addComment } from "@/lib/board-db";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();
  const { content } = body as { content?: string };

  if (!content?.trim()) {
    return NextResponse.json({ error: "댓글 내용을 입력해주세요." }, { status: 400 });
  }

  const comment = addComment(id, {
    author: session.user.name ?? "익명",
    content: content.trim(),
  });

  if (!comment) {
    return NextResponse.json({ error: "게시글을 찾을 수 없습니다." }, { status: 404 });
  }

  return NextResponse.json(comment, { status: 201 });
}
