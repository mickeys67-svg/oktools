export function GET() {
  return new Response(
    "naver-site-verification: naver88beb20b4255fa30a98d713917c45eb3.html",
    {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    }
  );
}
