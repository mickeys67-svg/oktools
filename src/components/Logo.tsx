import Image from "next/image";

/** OKTools Logo — icon image + text */
export function LogoIcon({ size = 34, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/logo-icon.png"
      alt="oktools 로고"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      priority
    />
  );
}
