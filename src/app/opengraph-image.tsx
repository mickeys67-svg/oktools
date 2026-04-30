import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "오케이툴즈 - 61가지 무료 온라인 도구";
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
            "linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #818CF8 100%)",
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
            gap: 24,
          }}
        >
          {/* OK badge matching new logo */}
          <svg
            width="96"
            height="96"
            viewBox="0 0 100 100"
            fill="none"
          >
            <rect x="0" y="0" width="100" height="100" rx="30" fill="white" />
            <circle cx="35" cy="50" r="15" stroke="#4F46E5" strokeWidth="8" fill="none" />
            <path d="M60 30 V70" stroke="#4F46E5" strokeWidth="8" strokeLinecap="round" />
            <path d="M60 50 L75 30" stroke="#4F46E5" strokeWidth="8" strokeLinecap="round" />
            <path d="M60 50 L75 70" stroke="#4F46E5" strokeWidth="8" strokeLinecap="round" />
          </svg>
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
          61가지 무료 온라인 도구
        </div>
        <div
          style={{ display: "flex", gap: 16, fontSize: 22, opacity: 0.8 }}
        >
          <span>금융</span>
          <span>·</span>
          <span>건강</span>
          <span>·</span>
          <span>생활</span>
          <span>·</span>
          <span>운세</span>
          <span>·</span>
          <span>단위변환</span>
          <span>·</span>
          <span>우주</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
