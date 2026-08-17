"use client";

import { useCallback, useEffect } from "react";
import { ThemeSegmentedControl, type ThemeMode } from "./ThemeSegmentedControl";
import type { Language } from "../shared/contracts/navigation";

export interface SettingsBottomSheetProps {
  /** Видимость шторки. */
  open: boolean;
  /** Закрыть шторку. */
  onClose: () => void;
  /** Текущий режим темы. */
  theme: ThemeMode;
  /** Изменить режим темы. */
  onThemeChange: (mode: ThemeMode) => void;
  /** Текущий язык. */
  language: Language;
  /** Изменить язык. */
  onLanguageChange: (language: Language) => void;
}

const LANGUAGES: { value: Language; label: string }[] = [
  { value: "ru", label: "RU" },
  { value: "en", label: "EN" },
];

/**
 * Общая шторка настроек в стиле Android 17 / Material You:
 * крупные скругления-капсулы, мягкие пастельные поверхности,
 * сегментный переключатель темы (Light/Dark/System) и чипы RU/EN.
 */
export function SettingsBottomSheet({
  open,
  onClose,
  theme,
  onThemeChange,
  language,
  onLanguageChange,
}: SettingsBottomSheetProps) {
  // Блокировка прокрутки фона при открытой шторке + Escape для закрытия.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-modal flex items-end justify-center bg-black/40 backdrop-blur-sm md:items-center"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Settings"
        className="w-full rounded-t-3xl border border-outline-variant bg-surface-container-high/95 p-6 shadow-modal backdrop-blur-xl md:max-w-sm md:rounded-3xl"
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-surface-on">Настройки</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-1.5 text-surface-on-variant transition-colors hover:bg-surface-container-high hover:text-surface-on"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          {/* Тема */}
          <section>
            <h3 className="mb-2 text-sm font-medium text-surface-on-variant">Тема</h3>
            <ThemeSegmentedControl value={theme} onChange={onThemeChange} />
          </section>

          {/* Язык */}
          <section>
            <h3 className="mb-2 text-sm font-medium text-surface-on-variant">Язык</h3>
            <div className="flex gap-2">
              {LANGUAGES.map((item) => {
                const active = language === item.value;
                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => onLanguageChange(item.value)}
                    className={[
                      "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors duration-200",
                      active
                        ? "bg-primary text-primary-on shadow-glow-primary"
                        : "bg-surface-container text-surface-on-variant hover:text-surface-on",
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
