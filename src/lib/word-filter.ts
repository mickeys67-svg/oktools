import fs from "fs";
import path from "path";

/* ── Types ──────────────────────────────────────────────────────── */

interface WordFilterDB {
  bannedWords: string[];
}

/* ── File path ──────────────────────────────────────────────────── */

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "word-filter.json");

function readDB(): WordFilterDB {
  if (!fs.existsSync(DB_PATH)) {
    return { bannedWords: [] };
  }
  const raw = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(raw) as WordFilterDB;
}

function writeDB(db: WordFilterDB) {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
}

/* ── Public API ─────────────────────────────────────────────────── */

export function getBannedWords(): string[] {
  return readDB().bannedWords;
}

export function addBannedWord(word: string): boolean {
  const db = readDB();
  const normalized = word.trim().toLowerCase();
  if (!normalized || db.bannedWords.includes(normalized)) return false;
  db.bannedWords.push(normalized);
  db.bannedWords.sort();
  writeDB(db);
  return true;
}

export function removeBannedWord(word: string): boolean {
  const db = readDB();
  const normalized = word.trim().toLowerCase();
  const idx = db.bannedWords.indexOf(normalized);
  if (idx === -1) return false;
  db.bannedWords.splice(idx, 1);
  writeDB(db);
  return true;
}

/**
 * Check text against banned words.
 * Returns matched words, or empty array if clean.
 */
export function checkContent(text: string): string[] {
  const db = readDB();
  if (db.bannedWords.length === 0) return [];

  const lower = text.toLowerCase();
  return db.bannedWords.filter((word) => lower.includes(word));
}
