"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";

/* ── Types ─────────────────────────────────────────────── */
interface Track {
  id: string;
  name: string;
  durationSec: number;
}

type InputMode = "folder" | "single" | "import";
type OutputFormat = "youtube" | "markdown" | "plain";

/* ── Constants ─────────────────────────────────────────── */
const AUDIO_EXTS = new Set([
  "mp3","wav","flac","aac","ogg","m4a","wma","aiff","alac","opus",
  "mp4","webm","mkv","avi","mov",
]);
const SEPARATORS = [" - ", " | ", " · ", ". "];
const SENSITIVITY = [
  { label: "높음", threshold: 0.005, minSilence: 0.3 },
  { label: "보통", threshold: 0.01, minSilence: 0.8 },
  { label: "낮음", threshold: 0.02, minSilence: 1.5 },
];

/* ── Helpers ───────────────────────────────────────────── */
const genId = () => Math.random().toString(36).slice(2, 10);

function cleanFileName(name: string): string {
  const dot = name.lastIndexOf(".");
  if (dot > 0) name = name.slice(0, dot);
  name = name.replace(/^\d{1,3}\s*[-._)]\s*/, "");
  return name.replace(/_/g, " ").trim();
}

function fmtTime(sec: number, hrs: boolean): string {
  const s = Math.round(sec);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sc = s % 60;
  return hrs || h > 0
    ? `${h}:${String(m).padStart(2, "0")}:${String(sc).padStart(2, "0")}`
    : `${String(m).padStart(2, "0")}:${String(sc).padStart(2, "0")}`;
}

function fmtDur(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = Math.round(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function natSort(a: string, b: string) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function readDuration(file: File): Promise<number> {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    const a = new Audio();
    a.preload = "metadata";
    a.src = url;
    a.onloadedmetadata = () => { resolve(isFinite(a.duration) ? a.duration : 0); URL.revokeObjectURL(url); };
    a.onerror = () => { URL.revokeObjectURL(url); resolve(0); };
  });
}

function detectSilence(data: Float32Array, sr: number, threshold: number, minDur: number): number[] {
  const win = Math.floor(sr * 0.05);
  const minSamples = Math.floor(minDur * sr);
  const starts: number[] = [0];
  let silStart = -1;
  let inSil = false;

  for (let i = 0; i < data.length; i += win) {
    let sum = 0;
    const end = Math.min(i + win, data.length);
    for (let j = i; j < end; j++) sum += data[j] * data[j];
    const rms = Math.sqrt(sum / (end - i));

    if (rms < threshold) {
      if (!inSil) { silStart = i; inSil = true; }
    } else if (inSil) {
      const len = i - silStart;
      if (len >= minSamples) {
        const boundary = (silStart + len / 2) / sr;
        if (boundary - starts[starts.length - 1] >= 10) starts.push(boundary);
      }
      inSil = false;
    }
  }
  return starts;
}

/** 파형 데이터를 바 형태로 다운샘플 */
function downsampleWaveform(data: Float32Array, bars: number): number[] {
  const blockSize = Math.floor(data.length / bars);
  const result: number[] = [];
  for (let i = 0; i < bars; i++) {
    let sum = 0;
    const start = i * blockSize;
    for (let j = start; j < start + blockSize && j < data.length; j++) {
      sum += Math.abs(data[j]);
    }
    result.push(sum / blockSize);
  }
  // 정규화
  const max = Math.max(...result, 0.001);
  return result.map((v) => v / max);
}

/** 타임스탬프 텍스트에서 트랙 파싱 */
function parseTimestampText(text: string): Track[] {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const tracks: Track[] = [];

  for (const line of lines) {
    // 다양한 타임스탬프 형식 매칭: 0:00, 00:00, 1:23:45
    const match = line.match(/^(\d{1,2}:)?(\d{1,2}):(\d{2})\s*[-–—|·.)\s]\s*(.+)$/);
    if (!match) {
      // 역순: 제목 먼저, 타임스탬프 나중
      const revMatch = line.match(/^(.+?)\s*[-–—|·.)\s]\s*(\d{1,2}:)?(\d{1,2}):(\d{2})$/);
      if (revMatch) {
        const hrs = revMatch[2] ? parseInt(revMatch[2]) * 3600 : 0;
        const totalSec = hrs + parseInt(revMatch[3]) * 60 + parseInt(revMatch[4]);
        tracks.push({ id: genId(), name: revMatch[1].trim(), durationSec: totalSec });
      }
      continue;
    }
    const hrs = match[1] ? parseInt(match[1]) * 3600 : 0;
    const totalSec = hrs + parseInt(match[2]) * 60 + parseInt(match[3]);
    tracks.push({ id: genId(), name: match[4].trim(), durationSec: totalSec });
  }

  // 타임스탬프를 duration으로 변환 (각 트랙의 duration = 다음 시작 - 현재 시작)
  if (tracks.length > 1) {
    const converted: Track[] = [];
    for (let i = 0; i < tracks.length; i++) {
      const startSec = tracks[i].durationSec; // 여기선 아직 시작시간
      const endSec = i < tracks.length - 1 ? tracks[i + 1].durationSec : startSec + 180; // 마지막 곡은 3분 추정
      converted.push({ id: tracks[i].id, name: tracks[i].name, durationSec: endSec - startSec });
    }
    return converted;
  }
  return tracks;
}

/* ── Waveform Component ───────────────────────────────── */
function WaveformView({ data, silencePoints, duration }: {
  data: number[];
  silencePoints: number[];
  duration: number;
}) {
  const barCount = data.length;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
      <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">파형 분석 결과</p>
      <div className="relative flex h-24 items-end gap-[1px] overflow-hidden rounded-lg bg-gray-50 px-1 dark:bg-gray-800">
        {data.map((v, i) => {
          const time = (i / barCount) * duration;
          const isBoundary = silencePoints.some((sp) => Math.abs(sp - time) < duration / barCount * 2);
          return (
            <div
              key={i}
              className={`flex-1 rounded-t-sm transition-colors ${isBoundary ? "bg-red-400 dark:bg-red-500" : "bg-tools/60 dark:bg-tools/40"}`}
              style={{ height: `${Math.max(v * 100, 2)}%` }}
            />
          );
        })}
        {/* 무음 구간 마커 */}
        {silencePoints.slice(1).map((sp) => {
          const pct = (sp / duration) * 100;
          return (
            <div key={sp} className="absolute top-0 h-full w-[2px] bg-red-500/80"
              style={{ left: `${pct}%` }}>
              <span className="absolute -top-0.5 left-1 text-[9px] font-mono text-red-500">
                {fmtTime(sp, duration >= 3600)}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-1 text-[10px] text-gray-400 dark:text-gray-500">
        빨간 선 = 감지된 트랙 구분점 ({silencePoints.length - 1}개)
      </p>
    </div>
  );
}

/* ── Component ─────────────────────────────────────────── */
export default function YoutubeTracklist() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<InputMode>("folder");
  const [tracks, setTracks] = useState<Track[]>([]);
  const [header, setHeader] = useState("✨ Tracklist");
  const [separator, setSeparator] = useState(" - ");
  const [loading, setLoading] = useState(false);
  const [loadMsg, setLoadMsg] = useState("");
  const [loadPct, setLoadPct] = useState(0);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [sens, setSens] = useState(1);
  const [outFmt, setOutFmt] = useState<OutputFormat>("youtube");
  const [showNumbers, setShowNumbers] = useState(false);
  const [importText, setImportText] = useState("");
  const [waveform, setWaveform] = useState<number[] | null>(null);
  const [silencePoints, setSilencePoints] = useState<number[]>([]);
  const [audioDuration, setAudioDuration] = useState(0);
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [dragOverIdx, setDragOverIdx] = useState<number | null>(null);
  const folderRef = useRef<HTMLInputElement>(null);
  const singleRef = useRef<HTMLInputElement>(null);
  const singleFileRef = useRef<File | null>(null);

  useEffect(() => setMounted(true), []);

  const totalSec = useMemo(() => tracks.reduce((s, t) => s + t.durationSec, 0), [tracks]);
  const hrs = totalSec >= 3600;

  const output = useMemo(() => {
    if (!tracks.length) return "";
    const lines: string[] = [];

    if (header.trim()) lines.push(header.trim());
    if (outFmt === "youtube" || outFmt === "plain") lines.push("");

    let cum = 0;
    for (let i = 0; i < tracks.length; i++) {
      const t = tracks[i];
      const ts = fmtTime(cum, hrs);
      const name = t.name || "제목 없음";
      const num = showNumbers ? `${i + 1}. ` : "";

      if (outFmt === "markdown") {
        lines.push(`| ${ts} | ${num}${name} | ${fmtDur(t.durationSec)} |`);
      } else {
        lines.push(`${ts}${separator}${num}${name}`);
      }
      cum += t.durationSec;
    }

    if (outFmt === "markdown") {
      // 마크다운 테이블 헤더 삽입
      const headerLine = lines.findIndex((l) => l.startsWith("|"));
      if (headerLine >= 0) {
        lines.splice(headerLine, 0, "| 시간 | 곡명 | 길이 |", "| :--- | :--- | :--- |");
      }
    }

    // 푸터: 총 곡수/시간
    lines.push("");
    lines.push(`총 ${tracks.length}곡 · ${fmtDur(totalSec)}`);

    return lines.join("\n");
  }, [tracks, header, separator, hrs, outFmt, showNumbers, totalSec]);

  const handleFolder = useCallback(async (files: FileList | null) => {
    if (!files?.length) return;
    setLoading(true); setLoadPct(0); setLoadMsg("파일 목록 스캔 중..."); setError("");
    setWaveform(null); setSilencePoints([]);
    const af: File[] = [];
    for (let i = 0; i < files.length; i++) {
      const ext = files[i].name.split(".").pop()?.toLowerCase() || "";
      if (AUDIO_EXTS.has(ext)) af.push(files[i]);
    }
    if (!af.length) { setError("지원되는 음악/영상 파일이 없습니다."); setLoading(false); return; }
    af.sort((a, b) => natSort(a.name, b.name));
    const t: Track[] = [];
    for (let idx = 0; idx < af.length; idx++) {
      setLoadMsg(`메타데이터 읽는 중... (${idx + 1}/${af.length})`);
      setLoadPct(Math.round(((idx + 1) / af.length) * 100));
      const dur = await readDuration(af[idx]);
      t.push({ id: genId(), name: cleanFileName(af[idx].name), durationSec: dur });
    }
    setTracks(t); setLoading(false);
  }, []);

  const handleSingle = useCallback(async (files: FileList | null) => {
    if (!files?.length) return;
    const file = files[0];
    const ext = file.name.split(".").pop()?.toLowerCase() || "";
    if (!AUDIO_EXTS.has(ext)) { setError("지원되지 않는 파일 형식입니다."); return; }
    singleFileRef.current = file;
    setLoading(true); setError(""); setLoadMsg("오디오 디코딩 중..."); setLoadPct(20);
    setWaveform(null); setSilencePoints([]);
    try {
      const buf = await file.arrayBuffer();
      setLoadPct(40);
      const ctx = new AudioContext();
      setLoadMsg("파형 분석 중...");
      const ab = await ctx.decodeAudioData(buf);
      await ctx.close();
      setLoadPct(70);
      setLoadMsg("무음 구간 감지 중...");
      const channelData = ab.getChannelData(0);
      const opt = SENSITIVITY[sens];
      const starts = detectSilence(channelData, ab.sampleRate, opt.threshold, opt.minSilence);

      // 파형 시각화 데이터 생성
      const wfData = downsampleWaveform(channelData, 200);
      setWaveform(wfData);
      setSilencePoints(starts);
      setAudioDuration(ab.duration);
      setLoadPct(90);

      if (starts.length <= 1) {
        setError("무음 구간을 찾지 못했습니다. 감도를 '높음'으로 변경해 보세요.");
        setLoading(false); return;
      }
      const t: Track[] = [];
      const baseName = cleanFileName(file.name);
      for (let i = 0; i < starts.length; i++) {
        const end = i < starts.length - 1 ? starts[i + 1] : ab.duration;
        t.push({ id: genId(), name: `${baseName} - 트랙 ${i + 1}`, durationSec: end - starts[i] });
      }
      setTracks(t);
      setLoadPct(100);
    } catch { setError("파일을 분석할 수 없습니다. 브라우저가 지원하는 형식인지 확인해 주세요."); }
    setLoading(false);
  }, [sens]);

  const handleImport = useCallback(() => {
    if (!importText.trim()) { setError("텍스트를 입력해 주세요."); return; }
    setError("");
    setWaveform(null); setSilencePoints([]);
    const parsed = parseTimestampText(importText);
    if (!parsed.length) {
      setError("타임스탬프를 인식할 수 없습니다. '00:00 - 곡 제목' 형식으로 입력해 주세요.");
      return;
    }
    setTracks(parsed);
  }, [importText]);

  const updateName = (id: string, name: string) =>
    setTracks((p) => p.map((t) => (t.id === id ? { ...t, name } : t)));
  const remove = (id: string) =>
    setTracks((p) => p.filter((t) => t.id !== id));
  const move = (i: number, d: -1 | 1) =>
    setTracks((p) => {
      const n = [...p]; const t = i + d;
      if (t < 0 || t >= n.length) return p;
      [n[i], n[t]] = [n[t], n[i]]; return n;
    });

  // 드래그 앤 드롭
  const handleDragStart = (i: number) => setDragIdx(i);
  const handleDragOver = (e: React.DragEvent, i: number) => { e.preventDefault(); setDragOverIdx(i); };
  const handleDragEnd = () => {
    if (dragIdx !== null && dragOverIdx !== null && dragIdx !== dragOverIdx) {
      setTracks((p) => {
        const n = [...p];
        const [item] = n.splice(dragIdx, 1);
        n.splice(dragOverIdx, 0, item);
        return n;
      });
    }
    setDragIdx(null); setDragOverIdx(null);
  };

  // 트랙 병합 (현재 트랙 + 다음 트랙)
  const mergeWithNext = (i: number) => {
    setTracks((p) => {
      if (i >= p.length - 1) return p;
      const merged = {
        ...p[i],
        name: `${p[i].name} + ${p[i + 1].name}`,
        durationSec: p[i].durationSec + p[i + 1].durationSec,
      };
      const n = [...p];
      n.splice(i, 2, merged);
      return n;
    });
  };

  // 트랙 분할 (반으로)
  const splitTrack = (i: number) => {
    setTracks((p) => {
      const t = p[i];
      const half = t.durationSec / 2;
      const n = [...p];
      n.splice(i, 1,
        { id: genId(), name: `${t.name} (1)`, durationSec: half },
        { id: genId(), name: `${t.name} (2)`, durationSec: half },
      );
      return n;
    });
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  if (!mounted) {
    return (
      <div className="space-y-6">
        <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-900">
          <div className="mb-3 text-4xl">📁</div>
          <span className="inline-block rounded-lg bg-tools px-6 py-3 text-sm font-bold text-white">로딩 중...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 모드 선택 탭 */}
      <div className="flex gap-1 rounded-xl bg-gray-100 p-1 dark:bg-gray-800">
        {([["folder", "📁 폴더 분석"], ["single", "🎵 단일 파일"], ["import", "📋 텍스트 가져오기"]] as const).map(([m, label]) => (
          <button
            key={m}
            onClick={() => { setMode(m); setTracks([]); setError(""); setWaveform(null); }}
            className={`flex-1 rounded-lg px-3 py-2.5 text-xs font-medium transition-colors sm:text-sm ${
              mode === m
                ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-gray-100"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 파일 선택 영역 - 폴더/단일 모드 */}
      {mode !== "import" && (
        <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-8 text-center transition-colors hover:border-tools dark:border-gray-700 dark:bg-gray-900 dark:hover:border-tools">
          <input ref={folderRef} type="file"
            // @ts-expect-error webkitdirectory is non-standard
            webkitdirectory="" directory="" multiple className="hidden"
            onChange={(e) => handleFolder(e.target.files)} />
          <input ref={singleRef} type="file" accept="audio/*,video/*" className="hidden"
            onChange={(e) => handleSingle(e.target.files)} />

          <div className="mb-3 text-4xl">{mode === "folder" ? "📁" : "🎵"}</div>
          <button
            onClick={() => (mode === "folder" ? folderRef : singleRef).current?.click()}
            className="rounded-lg bg-tools px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "분석 중..." : mode === "folder" ? "음악 폴더 선택" : "음악 파일 선택"}
          </button>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            {mode === "folder"
              ? "폴더를 선택하면 안의 음악/영상 파일을 자동으로 분석합니다. (파일은 업로드되지 않습니다)"
              : "한 파일에 여러 곡이 들어있으면 무음 구간을 감지해 자동으로 트랙을 나눕니다."}
          </p>

          {mode === "single" && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-800">
              <span className="text-xs text-gray-500 dark:text-gray-400">감도:</span>
              {SENSITIVITY.map((opt, i) => (
                <button key={opt.label} onClick={() => setSens(i)}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                    sens === i ? "bg-tools text-white" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  }`}>{opt.label}</button>
              ))}
            </div>
          )}

          {error && <p className="mt-2 text-xs font-medium text-red-500">{error}</p>}
        </div>
      )}

      {/* 텍스트 가져오기 모드 */}
      {mode === "import" && (
        <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
          <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">기존 트랙리스트 붙여넣기</p>
          <p className="mb-3 text-xs text-gray-400 dark:text-gray-500">
            &quot;00:00 - 곡 제목&quot; 형식의 타임스탬프를 붙여넣으면 편집할 수 있습니다.
          </p>
          <textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder={"00:00 - 첫 번째 곡\n03:45 - 두 번째 곡\n07:20 - 세 번째 곡"}
            rows={8}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 font-mono text-sm text-gray-900 placeholder:text-gray-400 focus:border-tools focus:ring-1 focus:ring-tools dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500"
          />
          <button onClick={handleImport}
            className="mt-3 rounded-lg bg-tools px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-600">
            트랙리스트 가져오기
          </button>
          {error && <p className="mt-2 text-xs font-medium text-red-500">{error}</p>}
        </div>
      )}

      {/* 로딩 - 진행률 표시 */}
      {loading && (
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto mb-3 h-2 w-48 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <div className="h-full rounded-full bg-tools transition-all duration-300" style={{ width: `${loadPct}%` }} />
          </div>
          <p className="text-sm text-gray-500">{loadMsg}</p>
          <p className="mt-1 text-xs text-gray-400">{loadPct}%</p>
        </div>
      )}

      {/* 파형 시각화 (단일 파일 모드) */}
      {waveform && !loading && (
        <WaveformView data={waveform} silencePoints={silencePoints} duration={audioDuration} />
      )}

      {/* 트랙 목록 편집 */}
      {tracks.length > 0 && !loading && (
        <>
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                트랙 목록 ({tracks.length}곡 · 총 {fmtDur(totalSec)})
              </p>
              {mode !== "import" && (
                <button onClick={() => (mode === "folder" ? folderRef : singleRef).current?.click()}
                  className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                  다시 선택
                </button>
              )}
            </div>
            <div className="space-y-2">
              {tracks.map((t, i) => {
                let cum = 0;
                for (let j = 0; j < i; j++) cum += tracks[j].durationSec;
                const isDragOver = dragOverIdx === i && dragIdx !== i;
                return (
                  <div key={t.id}
                    draggable
                    onDragStart={() => handleDragStart(i)}
                    onDragOver={(e) => handleDragOver(e, i)}
                    onDragEnd={handleDragEnd}
                    className={`flex items-center gap-2 rounded-lg border p-2 transition-colors ${
                      isDragOver
                        ? "border-tools bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-800/50"
                    } ${dragIdx === i ? "opacity-50" : ""}`}
                  >
                    {/* 드래그 핸들 + 순서 버튼 */}
                    <div className="flex flex-col items-center gap-0.5">
                      <button onClick={() => move(i, -1)} disabled={i === 0}
                        className="rounded px-1 text-xs text-gray-400 hover:text-gray-700 disabled:opacity-30 dark:hover:text-gray-200" aria-label="위로">▲</button>
                      <span className="cursor-grab text-gray-300 dark:text-gray-600" title="드래그로 이동">⠿</span>
                      <button onClick={() => move(i, 1)} disabled={i === tracks.length - 1}
                        className="rounded px-1 text-xs text-gray-400 hover:text-gray-700 disabled:opacity-30 dark:hover:text-gray-200" aria-label="아래로">▼</button>
                    </div>
                    <span className="w-14 shrink-0 text-center font-mono text-xs text-gray-400 dark:text-gray-500">{fmtTime(cum, hrs)}</span>
                    <input value={t.name} onChange={(e) => updateName(t.id, e.target.value)}
                      className="min-w-0 flex-1 rounded border border-gray-200 bg-white px-2 py-1 text-sm text-gray-900 focus:border-tools focus:ring-1 focus:ring-tools dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
                    <span className="w-12 shrink-0 text-center text-xs text-gray-400 dark:text-gray-500">{fmtDur(t.durationSec)}</span>
                    {/* 액션 버튼들 */}
                    <div className="flex gap-0.5">
                      {i < tracks.length - 1 && (
                        <button onClick={() => mergeWithNext(i)}
                          className="rounded px-1 py-0.5 text-xs text-gray-400 hover:bg-yellow-50 hover:text-yellow-600 dark:hover:bg-yellow-900/30" aria-label="다음 트랙과 병합" title="다음 트랙과 병합">⊕</button>
                      )}
                      <button onClick={() => splitTrack(i)}
                        className="rounded px-1 py-0.5 text-xs text-gray-400 hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-900/30" aria-label="트랙 분할" title="반으로 분할">✂</button>
                      <button onClick={() => remove(t.id)}
                        className="rounded px-1.5 py-0.5 text-xs text-gray-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/30" aria-label="삭제">✕</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 옵션 */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">출력 옵션</p>
            <div className="flex flex-wrap items-end gap-4">
              <div>
                <label className="mb-1 block text-xs text-gray-500">헤더</label>
                <input value={header} onChange={(e) => setHeader(e.target.value)} placeholder="✨ Tracklist"
                  className="w-48 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-tools focus:ring-1 focus:ring-tools dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-gray-500">구분자</label>
                <div className="flex gap-1">
                  {SEPARATORS.map((sep) => (
                    <button key={sep} onClick={() => setSeparator(sep)}
                      className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                        separator === sep ? "bg-tools text-white" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                      }`}>{sep.trim() || "없음"}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs text-gray-500">출력 형식</label>
                <div className="flex gap-1">
                  {([["youtube", "YouTube"], ["markdown", "Markdown"], ["plain", "텍스트"]] as const).map(([fmt, label]) => (
                    <button key={fmt} onClick={() => setOutFmt(fmt)}
                      className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                        outFmt === fmt ? "bg-tools text-white" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                      }`}>{label}</button>
                  ))}
                </div>
              </div>
              <label className="flex cursor-pointer items-center gap-2">
                <input type="checkbox" checked={showNumbers} onChange={(e) => setShowNumbers(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-tools focus:ring-tools" />
                <span className="text-xs text-gray-600 dark:text-gray-400">번호 표시</span>
              </label>
            </div>
          </div>

          {/* 미리보기 */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">미리보기</p>
              <div className="flex gap-2">
                <button onClick={copy}
                  className="rounded-lg bg-tools px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-600">
                  {copied ? "복사 완료!" : "복사"}
                </button>
                <button onClick={() => { setTracks([]); setError(""); setWaveform(null); }}
                  className="rounded-lg bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                  초기화
                </button>
              </div>
            </div>
            <pre className="whitespace-pre-wrap rounded-lg bg-gray-50 p-4 font-mono text-sm leading-relaxed text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              {output}
            </pre>
          </div>
        </>
      )}
    </div>
  );
}
