import NextAuth, { type Session } from "next-auth";
import Google from "next-auth/providers/google";
import { timingSafeEqual } from "crypto";

const ADMIN_EMAILS = (process.env.BOARD_ADMIN_EMAILS ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

// 상수시간 비교 — 길이가 달라도 안전하게 false를 반환
function safeEmailEquals(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  // timingSafeEqual은 버퍼 길이가 다르면 throw — 길이 mismatch는 한 번 더 비교해 타이밍 leak 방지
  if (ab.length !== bb.length) {
    // dummy 비교로 시간 평탄화
    timingSafeEqual(ab, ab);
    return false;
  }
  return timingSafeEqual(ab, bb);
}

function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  let match = false;
  for (const admin of ADMIN_EMAILS) {
    if (safeEmailEquals(email, admin)) match = true;
  }
  return match;
}

type SessionWithAdmin = Session & { isAdmin?: boolean };

export function isAdminSession(session: Session | null | undefined): boolean {
  return !!(session as SessionWithAdmin | null)?.isAdmin;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // 세션 쿠키 보안 옵션 명시 (NextAuth v5 기본값을 명확화)
  cookies: {
    sessionToken: {
      name:
        process.env.NODE_ENV === "production"
          ? "__Secure-authjs.session-token"
          : "authjs.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  callbacks: {
    session({ session }) {
      if (isAdminEmail(session.user?.email)) {
        (session as SessionWithAdmin).isAdmin = true;
      }
      return session;
    },
  },
});
