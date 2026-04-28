"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { categories, getToolsByCategory, type Category } from "@/data/tools";
import { LogoIcon } from "@/components/Logo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (id: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(id);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  // Close dropdown on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDropdown(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-950/80">
      <nav aria-label="메인 내비게이션" className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <LogoIcon className="shrink-0" />
          <span className="text-[1.1rem] font-extrabold tracking-tight text-gray-900 dark:text-gray-50">
            ok<span className="text-[#005BBF] dark:text-[#5BA3E6]">tools</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-0.5 md:flex">
          {categories.map((cat) => (
            <DesktopDropdown
              key={cat.id}
              category={cat}
              isOpen={activeDropdown === cat.id}
              onOpen={() => openDropdown(cat.id)}
              onClose={closeDropdown}
            />
          ))}
          <Link
            href="/board"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
          >
            게시판
          </Link>
        </div>

        {/* Right: Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 md:hidden dark:text-gray-400 dark:hover:bg-gray-800"
            aria-label="메뉴 열기"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-gray-200 bg-white px-4 pb-4 md:hidden dark:border-gray-800 dark:bg-gray-950">
          {categories.map((cat) => (
            <MobileCategory key={cat.id} category={cat} onNavigate={() => setMobileOpen(false)} />
          ))}
          <Link
            href="/board"
            onClick={() => setMobileOpen(false)}
            className="block border-t border-gray-100 py-3 text-sm font-semibold text-gray-900 dark:border-gray-800 dark:text-gray-100"
          >
            게시판
          </Link>
        </div>
      )}
    </header>
  );
}

/* ─── Desktop Dropdown ─────────────────────────────────────────── */

function DesktopDropdown({
  category,
  isOpen,
  onOpen,
  onClose,
}: {
  category: Category;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const tools = getToolsByCategory(category.id);

  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Link
        href={category.path}
        className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          isOpen
            ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
        }`}
      >
        {category.name}
        <svg
          className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {isOpen && tools.length > 0 && (
        <div className="absolute left-0 top-full z-50 mt-1 w-64 rounded-xl border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-900">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.path}
              className="flex flex-col rounded-lg px-3 py-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {tool.name}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                {tool.description}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Mobile Category ──────────────────────────────────────────── */

function MobileCategory({
  category,
  onNavigate,
}: {
  category: Category;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const tools = getToolsByCategory(category.id);

  return (
    <div className="border-b border-gray-100 last:border-b-0 dark:border-gray-800">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between py-3 text-left"
      >
        <div className="flex items-center gap-2.5">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold text-white"
            style={{ backgroundColor: category.colorHex }}
          >
            {category.name.charAt(0)}
          </span>
          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {category.name}
          </span>
          <span className="text-xs text-gray-400">{tools.length}</span>
        </div>
        <svg
          className={`h-4 w-4 text-gray-400 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {expanded && (
        <div className="mb-2 grid grid-cols-2 gap-1.5 pl-9">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.path}
              onClick={onNavigate}
              className="rounded-lg bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {tool.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Theme Toggle ─────────────────────────────────────────────── */

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // 마운트 시 localStorage / 시스템 설정과 동기화
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
      aria-label="테마 전환"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    </button>
  );
}
