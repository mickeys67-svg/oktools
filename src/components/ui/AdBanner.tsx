"use client";

import { useEffect, useRef } from "react";

type AdSlot = "result" | "leaderboard" | "sidebar" | "in-article";

const AD_CONFIG: Record<AdSlot, { slotId: string; format: string; className: string }> = {
  result: {
    slotId: "9442703372",
    format: "rectangle",
    className: "mx-auto max-w-[336px] min-h-[250px] sm:max-w-[336px]",
  },
  leaderboard: {
    slotId: "1738435768",
    format: "horizontal",
    className: "mx-auto min-h-[50px] sm:min-h-[90px] max-w-[728px]",
  },
  sidebar: {
    slotId: "1738435768",
    format: "vertical",
    className: "min-h-[250px] w-[300px]",
  },
  "in-article": {
    slotId: "7858158960",
    format: "fluid",
    className: "mx-auto max-w-[600px] min-h-[100px]",
  },
};

/**
 * Google AdSense ad banner component
 * Renders a responsive ad unit in the specified slot
 */
export default function AdBanner({ slot }: { slot: AdSlot }) {
  const adRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      const adsbygoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle;
      if (adsbygoogle) {
        adsbygoogle.push({});
        pushed.current = true;
      }
    } catch {
      // AdSense not loaded yet — silently ignore
    }
  }, []);

  const config = AD_CONFIG[slot];

  return (
    <div
      className={`overflow-hidden ${slot === "leaderboard" ? "border-b border-gray-100 bg-gray-50/50 py-2 dark:border-gray-800 dark:bg-gray-900/50" : "my-6"}`}
    >
      <div ref={adRef} className={config.className}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-1642090914820195"
          data-ad-slot={config.slotId}
          data-ad-format={config.format === "rectangle" ? "auto" : config.format}
          data-full-width-responsive="true"
        />
      </div>
      <p className="mt-1 text-center text-[10px] text-gray-300 dark:text-gray-700">
        광고
      </p>
    </div>
  );
}
