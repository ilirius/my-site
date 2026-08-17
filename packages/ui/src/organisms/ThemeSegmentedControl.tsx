"use client";

import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "system";

const THEME_STORAGE_KEY = "theme";

const MODES: { value: ThemeMode; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

export function readStoredMode(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch {
    // localStorage недоступен — используем дефолт.
  }
  return "dark";
}

export function applyMode(mode: ThemeMode) {
  const root = document.documentElement;
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = mode === "dark" || (mode === "system" && prefersDark);

  if (isDark) {
    root.classList.add("dark");
    root.style.colorScheme = "dark";
  } else {
    root.classList.remove("dark");
    root.style.colorScheme = "light";
  }
}

export interface ThemeSegmentedControlProps {
  /** Контролируемый режим темы. */
  value?: ThemeMode;
  /** Колбэк при изменении режима. */
  onChange?: (mode: ThemeMode) => void;
  /** Без контролируемого value компонент управляет темой сам (localStorage + matchMedia). */
  defaultValue?: ThemeMode;
}

/**
 * Сегментный переключатель темы (Light / Dark / System) в стиле
 * Android 17 / Material You — три сегмента-капсулы, активный на акценте teal.
 */
export function ThemeSegmentedControl({
  value,
  onChange,
  defaultValue = "dark",
}: ThemeSegmentedControlProps) {
  const [mode, setMode] = useState<ThemeMode>(
    value ?? (typeof window === "undefined" ? defaultValue : readStoredMode()),
  );

  const currentMode = value ?? mode;

  useEffect(() => {
    if (value !== undefined) return;
    applyMode(mode);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      // localStorage недоступен — пропускаем сохранение.
    }

    // Подписка на изменение системной темы (только при mode === 'system').
    if (mode !== "system" || !window.matchMedia) return;

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyMode(mode);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [mode, value]);

  const handleSelect = (next: ThemeMode) => {
    if (value === undefined) {
      setMode(next);
    }
    onChange?.(next);
  };

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="inline-flex rounded-full border border-outline-variant bg-surface-container-high/60 p-1"
    >
      {MODES.map((item) => {
        const active = currentMode === item.value;
        return (
          <button
            key={item.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => handleSelect(item.value)}
            className={[
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200",
              active
                ? "bg-primary text-primary-on shadow-glow-primary"
                : "text-surface-on-variant hover:text-surface-on",
            ].join(" ")}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
