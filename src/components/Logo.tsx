"use client";

/**
 * OKTools Logo — Clean typographic mark
 * "OK" in a rounded square badge + "tools" text
 * Inspired by world-class tool sites: clean, bold, instantly readable
 */
export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-lg bg-[#005BBF] dark:bg-[#2563EB] ${className}`}
      aria-hidden="true"
    >
      <span className="text-[13px] font-extrabold leading-none tracking-tight text-white">
        OK
      </span>
    </div>
  );
}
