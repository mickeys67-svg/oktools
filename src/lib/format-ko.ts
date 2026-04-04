/**
 * 한국식 숫자 포맷 유틸리티
 */

/** 숫자를 콤마 포맷으로 변환 (1234567 → "1,234,567") */
export function formatNumber(value: number, decimals = 0): string {
  return value.toLocaleString("ko-KR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/** 숫자를 원화 포맷으로 변환 (1234567 → "₩1,234,567") */
export function formatWon(value: number): string {
  return `₩${formatNumber(Math.round(value))}`;
}

/** 숫자를 한글 읽기로 변환 (150000000 → "1억 5,000만") */
export function formatKoreanNumber(value: number): string {
  if (value === 0) return "0";

  const isNegative = value < 0;
  let num = Math.abs(Math.round(value));

  const units = [
    { value: 1_0000_0000_0000, label: "조" },
    { value: 1_0000_0000, label: "억" },
    { value: 1_0000, label: "만" },
  ];

  const parts: string[] = [];

  for (const unit of units) {
    if (num >= unit.value) {
      const count = Math.floor(num / unit.value);
      parts.push(`${formatNumber(count)}${unit.label}`);
      num %= unit.value;
    }
  }

  if (num > 0) {
    parts.push(formatNumber(num));
  }

  const result = parts.join(" ");
  return isNegative ? `-${result}` : result;
}

/** 숫자를 한글 원화로 변환 (150000000 → "1억 5,000만 원") */
export function formatKoreanWon(value: number): string {
  if (value === 0) return "0원";
  return `${formatKoreanNumber(value)} 원`;
}

/** 퍼센트 포맷 (0.782 → "78.2%") */
export function formatPercent(value: number, decimals = 1): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/** 소수점 자동 포맷 (불필요한 0 제거) */
export function formatDecimal(value: number, maxDecimals = 6): string {
  const formatted = value.toFixed(maxDecimals);
  return parseFloat(formatted).toString();
}
