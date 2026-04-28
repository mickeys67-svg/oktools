import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { deleteComment } from "@/lib/board-db";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string; commentId: string }> },
) {
  const session = await auth();
  if (!(session as unknown as Record<string, unknown>)?.isAdmin) {
    return NextResponse.json({ error: "관리자 권한이 필요합니다." }, { status: 403 });
  }

  const { id, commentId } = await params;
  const ok = deleteComment(id, commentId);
  if (!ok) {
    return NextResponse.json({ error: "댓글을 찾을 수 없습니다." }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
