"use client";

/**
 * OKTools Logo — Squircle badge with OK letterforms
 * O = circle stroke, K = vertical + diagonal strokes
 * Color: Indigo #4F46E5 (dark: #6366F1)
 */
export function LogoIcon({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="100" height="100" rx="30" className="fill-[#4F46E5] dark:fill-[#6366F1]" />
      <circle cx="35" cy="50" r="15" stroke="white" strokeWidth="8" fill="none" />
      <path d="M60 30 V70" stroke="white" strokeWidth="8" strokeLinecap="round" />
      <path d="M60 50 L75 30" stroke="white" strokeWidth="8" strokeLinecap="round" />
      <path d="M60 50 L75 70" stroke="white" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}
