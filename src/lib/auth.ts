import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Admin emails — add your Google email here
const ADMIN_EMAILS = (process.env.BOARD_ADMIN_EMAILS ?? "").split(",").filter(Boolean);

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session({ session }) {
      if (session.user?.email && ADMIN_EMAILS.includes(session.user.email)) {
        (session as unknown as Record<string, unknown>).isAdmin = true;
      }
      return session;
    },
  },
});
