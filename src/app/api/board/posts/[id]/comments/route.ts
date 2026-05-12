import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { addComment } from "@/lib/board-db";
import { checkContent } from "@/lib/word-filter";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
  }

  const { id } = await params;
  let body: { content?: string };
  try {
    body = (await req.json()) as { content?: string };
  } catch {
    return NextResponse.json({ error: "잘못된 요청 형식입니다." }, { status: 400 });
  }
  const { content } = body;

  if (!content?.trim()) {
    return NextResponse.json({ error: "댓글 내용을 입력해주세요." }, { status: 400 });
  }

  if (content.length > 2000) {
    return NextResponse.json({ error: "댓글이 너무 깁니다 (2000자 이하)." }, { status: 413 });
  }

  const flagged = checkContent(content);

  if (flagged.length > 0) {
    return NextResponse.json(
      {
        error: "금지된 단어가 포함되어 있습니다.",
        flaggedWords: flagged,
      },
      { status: 422 },
    );
  }

  const comment = addComment(id, {
    author: session.user.name ?? "익명",
    authorEmail: session.user.email,
    content: content.trim(),
  });

  if (!comment) {
    return NextResponse.json({ error: "게시글을 찾을 수 없습니다." }, { status: 404 });
  }

  return NextResponse.json(comment, { status: 201 });
}
