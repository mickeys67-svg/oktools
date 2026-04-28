import SessionProvider from "@/components/board/SessionProvider";

export default function BoardLayout({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
