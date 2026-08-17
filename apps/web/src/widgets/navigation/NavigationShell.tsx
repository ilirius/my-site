"use client";

import {
  BottomNavBar,
  VerticalDock,
  SettingsBottomSheet,
  NAV_ITEMS,
  type ActiveSection,
  type Language,
  type ThemeMode,
  readStoredMode,
  applyMode,
} from "@repo/ui";
import { useCallback, useEffect, useRef, useState } from "react";

const LANGUAGE_STORAGE_KEY = "i18nextLng";

function readStoredLanguage(): Language {
  if (typeof window === "undefined") return "ru";
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "ru" || stored === "en") return stored;
  } catch {
    // ignore
  }
  return "ru";
}

/**
 * Единая адаптивная навигационная оболочка портфолио:
 * - мобильный: BottomNavBar;
 * - десктоп: VerticalDock;
 * - общая шторка настроек SettingsBottomSheet (тема + язык);
 * - scroll-spy для подсветки активной секции.
 */
export function NavigationShell() {
  const [activeSection, setActiveSection] = useState<ActiveSection>("about");
  const [theme, setTheme] = useState<ThemeMode>(() => readStoredMode());
  const [language, setLanguage] = useState<Language>(() => readStoredLanguage());
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const activeRef = useRef<ActiveSection>("about");
  activeRef.current = activeSection;

  const navigate = useCallback((section: ActiveSection) => {
    const item = NAV_ITEMS.find((n) => n.section === section);
    if (!item) return;
    setActiveSection(section);
    const el = document.getElementById(item.anchor.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleBackToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("about");
  }, []);

  const handleThemeChange = useCallback((mode: ThemeMode) => {
    setTheme(mode);
    applyMode(mode);
    try {
      window.localStorage.setItem("theme", mode);
    } catch {
      // ignore
    }
  }, []);

  const handleLanguageChange = useCallback((lang: Language) => {
    setLanguage(lang);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, []);

  // Scroll-spy: подсветка активной секции по скроллу.
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((n) => n.anchor.replace("#", ""));

    const compute = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.35;
      let current: ActiveSection = "about";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = (NAV_ITEMS.find((n) => n.anchor === `#${id}`)?.section ??
            "about") as ActiveSection;
        }
      }
      setActiveSection(current);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    return () => window.removeEventListener("scroll", compute);
  }, []);

  // Синхронизация темы при изменении системной настройки (режим system).
  useEffect(() => {
    if (theme !== "system" || !window.matchMedia) return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyMode("system");
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [theme]);

  return (
    <>
      <BottomNavBar
        activeSection={activeSection}
        onNavigate={navigate}
        language={language}
        onOpenSettings={() => setSettingsOpen(true)}
      />
      <VerticalDock
        activeSection={activeSection}
        onNavigate={navigate}
        language={language}
        onOpenSettings={() => setSettingsOpen(true)}
        onBackToTop={handleBackToTop}
      />
      <SettingsBottomSheet
        open={isSettingsOpen}
        onClose={() => setSettingsOpen(false)}
        theme={theme}
        onThemeChange={handleThemeChange}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
    </>
  );
}
