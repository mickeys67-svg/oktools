/**
 * 토정비결 데이터
 * 상원(1~4월), 중원(5~8월), 하원(9~12월) 운세
 * 실제 토정비결은 음력 생년월일 기반 괘를 참조하지만,
 * 여기서는 간소화된 버전으로 생년월일 기반 해시로 괘를 결정합니다.
 */

export interface TojeongResult {
  upperFortune: TojeongFortune; // 상원 (1~4월)
  middleFortune: TojeongFortune; // 중원 (5~8월)
  lowerFortune: TojeongFortune; // 하원 (9~12월)
  overallScore: number; // 1-100
  overallComment: string;
}

export interface TojeongFortune {
  title: string;
  score: number; // 1-100
  description: string;
  advice: string;
  luck: {
    money: number; // 1-5
    love: number;
    health: number;
    career: number;
  };
}

const FORTUNES: string[][] = [
  // [title, description, advice] sets
  ["봄 기운이 만물을 소생시키니", "새로운 시작이 좋은 결과를 맺을 때입니다. 준비해온 일들이 빛을 발하며, 주변의 도움도 기대할 수 있습니다.", "적극적으로 나서되 겸손을 잃지 마세요."],
  ["구름 사이로 달이 비치니", "어려움 속에서도 희망이 보이는 시기입니다. 인내심을 가지면 반드시 좋은 결과가 있을 것입니다.", "서두르지 말고 때를 기다리세요."],
  ["맑은 하늘에 바람이 부니", "순조로운 흐름 속에서 예상치 못한 변화가 있을 수 있습니다. 유연하게 대처하는 것이 중요합니다.", "변화를 두려워하지 말고 기회로 삼으세요."],
  ["깊은 산에 꽃이 피니", "숨겨진 재능이 드러나고 새로운 기회가 찾아오는 시기입니다. 자신감을 가지세요.", "용기를 내어 새로운 도전을 시작하세요."],
  ["강물이 바다로 흘러가니", "큰 흐름에 몸을 맡기면 자연스럽게 좋은 곳에 이르는 시기입니다. 순리를 따르세요.", "억지로 거슬러가려 하지 마세요."],
  ["나무에 열매가 맺히니", "그동안의 노력이 결실을 맺는 시기입니다. 수확의 기쁨을 누리되 나눔도 잊지 마세요.", "감사하는 마음으로 주변을 돌아보세요."],
  ["어두운 밤에 별이 빛나니", "힘든 시기지만 작은 희망의 빛이 보입니다. 포기하지 않으면 길이 열립니다.", "작은 성취에도 스스로를 격려하세요."],
  ["봄 바람에 꽃잎이 날리니", "즐거운 일이 많은 시기입니다. 인간관계가 활발해지고 좋은 만남이 기대됩니다.", "사람들과의 교류를 즐기세요."],
  ["가을 달이 밝게 비치니", "지혜와 통찰이 빛나는 시기입니다. 중요한 결정을 내리기에 적합합니다.", "직감을 믿되 논리적 판단도 병행하세요."],
  ["큰 나무 아래 그늘이 지니", "든든한 후원자가 나타나거나 안정적인 기반이 마련되는 시기입니다.", "감사의 마음을 잊지 말고 신뢰를 쌓으세요."],
  ["새가 높이 날아오르니", "야망을 실현할 수 있는 시기입니다. 큰 꿈을 향해 과감하게 도전하세요.", "자만하지 말고 실력을 꾸준히 갈고닦으세요."],
  ["연못에 잉어가 뛰어오르니", "입신양명의 기운이 있습니다. 시험, 승진, 합격 등 좋은 소식이 기대됩니다.", "방심하지 말고 끝까지 최선을 다하세요."],
  ["서리 내린 들판에 서있으니", "시련이 있지만 이를 통해 더 강해질 수 있습니다. 내면의 힘을 기르는 시기입니다.", "건강 관리에 특별히 신경 쓰세요."],
  ["물 위에 기름이 떠있으니", "겉으로는 화려하나 내실을 다질 필요가 있습니다. 외모보다 본질에 집중하세요.", "과도한 소비를 자제하고 저축을 늘리세요."],
  ["용이 여의주를 얻으니", "크게 길한 운세입니다. 큰 행운이 찾아올 수 있으니 기회를 놓치지 마세요.", "겸양의 미덕을 잃지 않으면 더 큰 복이 옵니다."],
  ["물이 가득 찬 그릇이니", "풍요로운 시기이나 넘치지 않도록 조절이 필요합니다. 절제가 미덕입니다.", "무리한 확장보다 현재에 충실하세요."],
];

function hashDate(year: number, month: number, day: number, offset: number): number {
  const h = ((year * 31 + month * 7 + day * 13 + offset * 17) * 2654435761) >>> 0;
  return h;
}

function pickFortune(hash: number): { title: string; description: string; advice: string } {
  const idx = hash % FORTUNES.length;
  return {
    title: FORTUNES[idx][0],
    description: FORTUNES[idx][1],
    advice: FORTUNES[idx][2],
  };
}

function scoreFortune(hash: number): number {
  return 35 + (hash % 60); // 35-94
}

function luckScore(hash: number, category: number): number {
  return 1 + ((hash + category * 37) % 5); // 1-5
}

export function calcTojeong(year: number, month: number, day: number): TojeongResult {
  const h1 = hashDate(year, month, day, 1);
  const h2 = hashDate(year, month, day, 2);
  const h3 = hashDate(year, month, day, 3);

  const upper = pickFortune(h1);
  const middle = pickFortune(h2);
  const lower = pickFortune(h3);

  const s1 = scoreFortune(h1);
  const s2 = scoreFortune(h2);
  const s3 = scoreFortune(h3);

  const upperFortune: TojeongFortune = {
    title: upper.title,
    score: s1,
    description: upper.description,
    advice: upper.advice,
    luck: {
      money: luckScore(h1, 0),
      love: luckScore(h1, 1),
      health: luckScore(h1, 2),
      career: luckScore(h1, 3),
    },
  };

  const middleFortune: TojeongFortune = {
    title: middle.title,
    score: s2,
    description: middle.description,
    advice: middle.advice,
    luck: {
      money: luckScore(h2, 0),
      love: luckScore(h2, 1),
      health: luckScore(h2, 2),
      career: luckScore(h2, 3),
    },
  };

  const lowerFortune: TojeongFortune = {
    title: lower.title,
    score: s3,
    description: lower.description,
    advice: lower.advice,
    luck: {
      money: luckScore(h3, 0),
      love: luckScore(h3, 1),
      health: luckScore(h3, 2),
      career: luckScore(h3, 3),
    },
  };

  const overallScore = Math.round((s1 + s2 + s3) / 3);

  let overallComment: string;
  if (overallScore >= 80) overallComment = "올해는 대길한 한 해입니다. 자신감을 갖고 도전하세요!";
  else if (overallScore >= 65) overallComment = "올해는 순조로운 한 해가 될 것입니다. 꾸준함이 핵심입니다.";
  else if (overallScore >= 50) overallComment = "올해는 평탄한 한 해입니다. 안정 속에서 내실을 다지세요.";
  else overallComment = "올해는 인내가 필요한 한 해입니다. 기초를 다지는 시간으로 삼으세요.";

  return { upperFortune, middleFortune, lowerFortune, overallScore, overallComment };
}
