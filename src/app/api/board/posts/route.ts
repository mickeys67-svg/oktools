import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getAllPosts, createPost } from "@/lib/board-db";
import { checkContent } from "@/lib/word-filter";

export async function GET() {
  const posts = getAllPosts(false);
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
  }

  const body = await req.json();
  const { title, content } = body as { title?: string; content?: string };

  if (!title?.trim() || !content?.trim()) {
    return NextResponse.json({ error: "제목과 내용을 입력해주세요." }, { status: 400 });
  }

  const combined = `${title} ${content}`;
  const flagged = checkContent(combined);

  if (flagged.length > 0) {
    return NextResponse.json(
      {
        error: "금지된 단어가 포함되어 있습니다.",
        flaggedWords: flagged,
      },
      { status: 422 },
    );
  }

  const post = createPost({
    title: title.trim(),
    content: content.trim(),
    author: session.user.name ?? "익명",
    authorEmail: session.user.email,
  });

  return NextResponse.json(post, { status: 201 });
}
