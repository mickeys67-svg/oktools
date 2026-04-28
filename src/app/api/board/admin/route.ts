import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getPendingPosts, getAllPosts } from "@/lib/board-db";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!(session as unknown as Record<string, unknown>)?.isAdmin) {
    return NextResponse.json({ error: "관리자 권한이 필요합니다." }, { status: 403 });
  }

  const { searchParams } = new URL(req.url);
  const filter = searchParams.get("filter");

  if (filter === "all") {
    return NextResponse.json(getAllPosts(true));
  }

  return NextResponse.json(getPendingPosts());
}
