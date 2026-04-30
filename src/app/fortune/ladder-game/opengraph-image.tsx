import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "3D 사다리게임 — 동물 캐릭터로 즐기는 화려한 사다리타기";
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
            "linear-gradient(135deg, #8B5CF6 0%, #D946EF 50%, #F472B6 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontSize: 110,
            marginBottom: 24,
          }}
        >
          <span>🐵</span>
          <span>🐿️</span>
          <span>🐰</span>
          <span>🦊</span>
          <span>🐯</span>
          <span>🐼</span>
        </div>
        <div
          style={{
            fontSize: 78,
            fontWeight: 800,
            letterSpacing: -2,
            marginBottom: 14,
            textShadow: "0 4px 16px rgba(0,0,0,0.25)",
            display: "flex",
          }}
        >
          3D 사다리게임
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.95,
            marginBottom: 36,
            display: "flex",
            textAlign: "center",
          }}
        >
          동물 캐릭터로 즐기는 화려한 사다리타기 · 도망 이벤트 · 무료
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            fontSize: 22,
            opacity: 0.9,
          }}
        >
          <span
            style={{
              padding: "8px 20px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.18)",
              display: "flex",
            }}
          >
            🎲 참가자 2~20명
          </span>
          <span
            style={{
              padding: "8px 20px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.18)",
              display: "flex",
            }}
          >
            🏃 도망 이벤트
          </span>
          <span
            style={{
              padding: "8px 20px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.18)",
              display: "flex",
            }}
          >
            ⚡ 속도 조절
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 50,
            fontSize: 22,
            opacity: 0.85,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "white",
              color: "#8B5CF6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            OK
          </span>
          <span>oktools.co.kr</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
