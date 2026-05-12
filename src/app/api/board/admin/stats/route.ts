import { NextResponse } from "next/server";
import { auth, isAdminSession } from "@/lib/auth";
import { getStats } from "@/lib/board-db";

export async function GET() {
  const session = await auth();
  if (!isAdminSession(session)) {
    return NextResponse.json({ error: "관리자 권한이 필요합니다." }, { status: 403 });
  }
  return NextResponse.json(getStats());
}
