import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "오케이툴즈 - 59가지 무료 온라인 도구";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <span
            style={{
              background: "white",
              color: "#4F46E5",
              padding: "8px 24px",
              borderRadius: 16,
              fontSize: 64,
            }}
          >
            OK
          </span>
          <span>오케이툴즈</span>
        </div>
        <div
          style={{
            fontSize: 36,
            opacity: 0.9,
            marginBottom: 40,
            display: "flex",
          }}
        >
          59가지 무료 온라인 도구
        </div>
        <div
          style={{ display: "flex", gap: 16, fontSize: 22, opacity: 0.8 }}
        >
          <span>💰 금융</span>
          <span>❤️ 건강</span>
          <span>🏠 생활</span>
          <span>🔮 운세</span>
          <span>↔️ 단위변환</span>
          <span>🚀 우주</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
