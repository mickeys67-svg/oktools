import { NextRequest, NextResponse } from "next/server";
import { auth, isAdminSession } from "@/lib/auth";
import { getBannedWords, addBannedWord, removeBannedWord } from "@/lib/word-filter";

async function readWord(req: NextRequest): Promise<string | null> {
  try {
    const body = (await req.json()) as { word?: string };
    return body.word?.trim() ?? null;
  } catch {
    return null;
  }
}

export async function GET() {
  const session = await auth();
  if (!isAdminSession(session)) {
    return NextResponse.json({ error: "관리자 권한이 필요합니다." }, { status: 403 });
  }
  return NextResponse.json({ words: getBannedWords() });
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!isAdminSession(session)) {
    return NextResponse.json({ error: "관리자 권한이 필요합니다." }, { status: 403 });
  }

  const word = await readWord(req);
  if (!word) {
    return NextResponse.json({ error: "단어를 입력해주세요." }, { status: 400 });
  }

  const added = addBannedWord(word);
  if (!added) {
    return NextResponse.json({ error: "이미 등록된 단어입니다." }, { status: 409 });
  }
  return NextResponse.json({ success: true, words: getBannedWords() });
}

export async function DELETE(req: NextRequest) {
  const session = await auth();
  if (!isAdminSession(session)) {
    return NextResponse.json({ error: "관리자 권한이 필요합니다." }, { status: 403 });
  }

  const word = await readWord(req);
  if (!word) {
    return NextResponse.json({ error: "단어를 입력해주세요." }, { status: 400 });
  }

  const removed = removeBannedWord(word);
  if (!removed) {
    return NextResponse.json({ error: "등록되지 않은 단어입니다." }, { status: 404 });
  }
  return NextResponse.json({ success: true, words: getBannedWords() });
}
