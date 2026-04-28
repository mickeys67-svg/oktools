import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getFlaggedComments } from "@/lib/board-db";

export async function GET() {
  const session = await auth();
  if (!(session as unknown as Record<string, unknown>)?.isAdmin) {
    return NextResponse.json({ error: "관리자 권한이 필요합니다." }, { status: 403 });
  }
  return NextResponse.json(getFlaggedComments());
}
