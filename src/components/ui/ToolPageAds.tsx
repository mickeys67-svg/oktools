"use client";

import { useEffect, useRef } from "react";

const CLIENT_ID = "ca-pub-1642090914820195";

function AdUnit({ slot, format, className }: { slot: string; format: string; className: string }) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      const w = window as unknown as { adsbygoogle: unknown[] };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
      pushed.current = true;
    } catch {
      /* AdSense not loaded */
    }
  }, []);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
      <p className="mt-1 text-center text-[10px] text-gray-300 dark:text-gray-700">
        광고
      </p>
    </div>
  );
}

/**
 * 계산 결과 아래 광고 — 계산기 컴포넌트 바로 뒤에 삽입
 * 336×280 (PC) / 300×250 (모바일) 직사각형
 */
export function ResultAd() {
  return (
    <AdUnit
      slot="9442703372"
      format="auto"
      className="mx-auto my-8 max-w-[336px]"
    />
  );
}

/**
 * 관련 도구 섹션 바로 위 인-아티클 광고
 */
export function InArticleAd() {
  return (
    <AdUnit
      slot="7858158960"
      format="fluid"
      className="mx-auto my-8 max-w-[600px]"
    />
  );
}

/**
 * 사이드바 스티키 광고 (PC 전용, 1024px+)
 * 사용: 스크롤 긴 페이지에서 우측에 배치
 */
export function SidebarAd() {
  return (
    <div className="hidden xl:block">
      <div className="sticky top-20">
        <AdUnit
          slot="1738435768"
          format="vertical"
          className="w-[300px]"
        />
      </div>
    </div>
  );
}
