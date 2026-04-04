/**
 * 건강 관련 계산 유틸리티
 */

/* ─── BMI ────────────────────────────────────────────────────────── */

export interface BMIResult {
  bmi: number;
  category: string;
  categoryColor: string;
  /** 한국 비만학회 기준 */
  koreanCategory: string;
  normalWeightMin: number;
  normalWeightMax: number;
  difference: number; // 정상 체중과의 차이 (양수=초과, 음수=미달)
}

const BMI_KOREAN_RANGES = [
  { max: 18.5, label: "저체중", color: "#3B82F6" },
  { max: 23, label: "정상", color: "#10B981" },
  { max: 25, label: "과체중(비만 전단계)", color: "#F59E0B" },
  { max: 30, label: "1단계 비만", color: "#F97316" },
  { max: 35, label: "2단계 비만", color: "#EF4444" },
  { max: Infinity, label: "3단계 비만(고도비만)", color: "#991B1B" },
];

const BMI_WHO_RANGES = [
  { max: 18.5, label: "Underweight" },
  { max: 25, label: "Normal" },
  { max: 30, label: "Overweight" },
  { max: 35, label: "Obese Class I" },
  { max: 40, label: "Obese Class II" },
  { max: Infinity, label: "Obese Class III" },
];

export function calcBMI(heightCm: number, weightKg: number): BMIResult {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  const korean = BMI_KOREAN_RANGES.find((r) => bmi < r.max) ?? BMI_KOREAN_RANGES[BMI_KOREAN_RANGES.length - 1];
  const who = BMI_WHO_RANGES.find((r) => bmi < r.max) ?? BMI_WHO_RANGES[BMI_WHO_RANGES.length - 1];

  const normalWeightMin = 18.5 * heightM * heightM;
  const normalWeightMax = 23 * heightM * heightM; // 한국 기준

  let difference = 0;
  if (bmi >= 23) {
    difference = weightKg - normalWeightMax;
  } else if (bmi < 18.5) {
    difference = weightKg - normalWeightMin;
  }

  return {
    bmi,
    category: who.label,
    categoryColor: korean.color,
    koreanCategory: korean.label,
    normalWeightMin,
    normalWeightMax,
    difference,
  };
}

export { BMI_KOREAN_RANGES };

/* ─── 바이오리듬 ──────────────────────────────────────────────────── */

export interface BiorhythmPoint {
  date: Date;
  physical: number;
  emotional: number;
  intellectual: number;
}

export interface BiorhythmResult {
  today: BiorhythmPoint;
  chart: BiorhythmPoint[]; // 30 days (past 7 + today + future 22)
  daysSinceBirth: number;
}

function sineValue(daysSinceBirth: number, cycle: number): number {
  return Math.sin((2 * Math.PI * daysSinceBirth) / cycle);
}

export function calcBiorhythm(birthDate: Date, targetDate: Date): BiorhythmResult {
  const msPerDay = 86400000;
  const birthTime = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()).getTime();
  const targetTime = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate()).getTime();
  const daysSinceBirth = Math.round((targetTime - birthTime) / msPerDay);

  const todayPoint: BiorhythmPoint = {
    date: targetDate,
    physical: sineValue(daysSinceBirth, 23),
    emotional: sineValue(daysSinceBirth, 28),
    intellectual: sineValue(daysSinceBirth, 33),
  };

  // Generate chart: 7 days before ~ 22 days after = 30 days total
  const chart: BiorhythmPoint[] = [];
  for (let offset = -7; offset <= 22; offset++) {
    const d = daysSinceBirth + offset;
    const date = new Date(targetTime + offset * msPerDay);
    chart.push({
      date,
      physical: sineValue(d, 23),
      emotional: sineValue(d, 28),
      intellectual: sineValue(d, 33),
    });
  }

  return { today: todayPoint, chart, daysSinceBirth };
}

/* ─── 만 나이 ─────────────────────────────────────────────────────── */

export interface AgeResult {
  /** 만 나이 (정수) */
  age: number;
  /** 한국 나이 (세는 나이 - 2023년 폐지됨, 참고용) */
  koreanAge: number;
  /** 생존 일수 */
  totalDays: number;
  /** 생존 개월수 */
  totalMonths: number;
  /** 다음 생일까지 남은 일수 */
  daysUntilBirthday: number;
  /** 다음 생일 날짜 */
  nextBirthday: Date;
  /** 생일 지남 여부 (올해) */
  birthdayPassed: boolean;
  /** 태어난 요일 */
  birthDayOfWeek: string;
  /** 띠 */
  zodiacAnimal: string;
  /** 별자리 */
  zodiacSign: string;
}

const DAY_NAMES_KO = ["일", "월", "화", "수", "목", "금", "토"];

const ZODIAC_ANIMALS = [
  "원숭이", "닭", "개", "돼지", "쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양",
];

const ZODIAC_SIGNS = [
  { name: "물병자리", start: [1, 20], end: [2, 18] },
  { name: "물고기자리", start: [2, 19], end: [3, 20] },
  { name: "양자리", start: [3, 21], end: [4, 19] },
  { name: "황소자리", start: [4, 20], end: [5, 20] },
  { name: "쌍둥이자리", start: [5, 21], end: [6, 21] },
  { name: "게자리", start: [6, 22], end: [7, 22] },
  { name: "사자자리", start: [7, 23], end: [8, 22] },
  { name: "처녀자리", start: [8, 23], end: [9, 22] },
  { name: "천칭자리", start: [9, 23], end: [10, 22] },
  { name: "전갈자리", start: [10, 23], end: [11, 21] },
  { name: "사수자리", start: [11, 22], end: [12, 21] },
  { name: "염소자리", start: [12, 22], end: [1, 19] },
];

function getZodiacSign(month: number, day: number): string {
  for (const sign of ZODIAC_SIGNS) {
    const [sm, sd] = sign.start;
    const [em, ed] = sign.end;
    if (sm <= em) {
      if ((month === sm && day >= sd) || (month === em && day <= ed) || (month > sm && month < em)) {
        return sign.name;
      }
    } else {
      // wraps around year (염소자리: Dec 22 - Jan 19)
      if ((month === sm && day >= sd) || (month === em && day <= ed) || month > sm || month < em) {
        return sign.name;
      }
    }
  }
  return "염소자리";
}

export function calcAge(birthDate: Date, today: Date): AgeResult {
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();

  // 만 나이
  let age = todayYear - birthYear;
  if (todayMonth < birthMonth || (todayMonth === birthMonth && todayDay < birthDay)) {
    age--;
  }

  // 한국 나이 (참고용)
  const koreanAge = todayYear - birthYear + 1;

  // 생존 일수
  const msPerDay = 86400000;
  const totalDays = Math.floor(
    (new Date(todayYear, todayMonth, todayDay).getTime() -
      new Date(birthYear, birthMonth, birthDay).getTime()) /
      msPerDay
  );

  // 생존 개월수
  let totalMonths = (todayYear - birthYear) * 12 + (todayMonth - birthMonth);
  if (todayDay < birthDay) totalMonths--;

  // 다음 생일
  const birthdayPassed =
    todayMonth > birthMonth || (todayMonth === birthMonth && todayDay >= birthDay);
  const nextBirthdayYear = birthdayPassed ? todayYear + 1 : todayYear;
  const nextBirthday = new Date(nextBirthdayYear, birthMonth, birthDay);
  const daysUntilBirthday = birthdayPassed && todayMonth === birthMonth && todayDay === birthDay
    ? 0
    : Math.ceil((nextBirthday.getTime() - today.getTime()) / msPerDay);

  // 요일
  const birthDayOfWeek = DAY_NAMES_KO[birthDate.getDay()] + "요일";

  // 띠
  const zodiacAnimal = ZODIAC_ANIMALS[birthYear % 12];

  // 별자리
  const zodiacSign = getZodiacSign(birthMonth + 1, birthDay);

  return {
    age,
    koreanAge,
    totalDays,
    totalMonths,
    daysUntilBirthday,
    nextBirthday,
    birthdayPassed,
    birthDayOfWeek,
    zodiacAnimal,
    zodiacSign,
  };
}

/* ─── 기초대사량 (BMR) ───────────────────────────────────────────── */

export interface BMRResult {
  bmr: number;
  tdee: { label: string; description: string; multiplier: number; calories: number }[];
}

const ACTIVITY_LEVELS = [
  { label: "비활동적", description: "운동 안 함, 사무직", multiplier: 1.2 },
  { label: "가벼운 활동", description: "주 1~3회 가벼운 운동", multiplier: 1.375 },
  { label: "보통 활동", description: "주 3~5회 중간 강도 운동", multiplier: 1.55 },
  { label: "활동적", description: "주 6~7회 강한 운동", multiplier: 1.725 },
  { label: "매우 활동적", description: "하루 2회 운동/육체 노동", multiplier: 1.9 },
];

/** Mifflin-St Jeor formula */
export function calcBMR(gender: "male" | "female", age: number, heightCm: number, weightKg: number): BMRResult {
  const bmr =
    gender === "male"
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  const tdee = ACTIVITY_LEVELS.map((a) => ({
    ...a,
    calories: Math.round(bmr * a.multiplier),
  }));

  return { bmr: Math.round(bmr), tdee };
}

/* ─── D-Day ──────────────────────────────────────────────────────── */

export interface DDayResult {
  days: number; // 음수=남음, 양수=지남
  label: string; // "D-123" or "D+45" or "D-Day"
  weeks: number;
  months: number;
  totalHours: number;
}

export function calcDDay(targetDate: Date, today: Date): DDayResult {
  const msPerDay = 86400000;
  const t = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate()).getTime();
  const n = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  const diffDays = Math.round((n - t) / msPerDay);

  let label: string;
  if (diffDays === 0) label = "D-Day";
  else if (diffDays > 0) label = `D+${diffDays}`;
  else label = `D${diffDays}`;

  return {
    days: diffDays,
    label,
    weeks: Math.floor(Math.abs(diffDays) / 7),
    months: Math.floor(Math.abs(diffDays) / 30),
    totalHours: Math.abs(diffDays) * 24,
  };
}

/* ─── 임신 주수 ──────────────────────────────────────────────────── */

export interface PregnancyResult {
  weeks: number;
  days: number;
  totalDays: number;
  dueDate: Date;
  trimester: 1 | 2 | 3;
  trimesterLabel: string;
  daysUntilDue: number;
  progressPercent: number;
  sizeComparison: string;
}

const PREGNANCY_SIZES: [number, string][] = [
  [4, "양귀비 씨앗"],
  [6, "석류 씨앗"],
  [8, "콩"],
  [10, "포도알"],
  [12, "라임"],
  [14, "레몬"],
  [16, "아보카도"],
  [18, "고구마"],
  [20, "바나나"],
  [22, "파파야"],
  [24, "옥수수"],
  [26, "양배추"],
  [28, "가지"],
  [30, "코코넛"],
  [32, "호박"],
  [34, "멜론"],
  [36, "상추 한 포기"],
  [38, "대파 한 단"],
  [40, "수박"],
];

export function calcPregnancy(lastPeriodDate: Date, today: Date): PregnancyResult | null {
  const msPerDay = 86400000;
  const lmp = new Date(lastPeriodDate.getFullYear(), lastPeriodDate.getMonth(), lastPeriodDate.getDate()).getTime();
  const now = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  const totalDays = Math.round((now - lmp) / msPerDay);

  if (totalDays < 0 || totalDays > 300) return null;

  const weeks = Math.floor(totalDays / 7);
  const days = totalDays % 7;
  const dueDate = new Date(lmp + 280 * msPerDay);
  const daysUntilDue = Math.max(0, Math.round((dueDate.getTime() - now) / msPerDay));
  const progressPercent = Math.min((totalDays / 280) * 100, 100);

  let trimester: 1 | 2 | 3 = 1;
  let trimesterLabel = "초기 (1삼분기)";
  if (weeks >= 28) {
    trimester = 3;
    trimesterLabel = "후기 (3삼분기)";
  } else if (weeks >= 14) {
    trimester = 2;
    trimesterLabel = "중기 (2삼분기)";
  }

  let sizeComparison = "아직 초기";
  for (const [w, size] of PREGNANCY_SIZES) {
    if (weeks >= w) sizeComparison = size;
  }

  return { weeks, days, totalDays, dueDate, trimester, trimesterLabel, daysUntilDue, progressPercent, sizeComparison };
}
