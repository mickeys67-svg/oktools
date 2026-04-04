import Image from "next/image";

/** OKTools Logo — icon image + text */
export function LogoIcon({ size = 34 }: { size?: number }) {
  return (
    <Image
      src="/logo-icon.png"
      alt="oktools 로고"
      width={size}
      height={size}
      className="shrink-0"
      priority
    />
  );
}
