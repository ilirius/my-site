"use client";

import { Icon } from "./icons";
import { NAV_ITEMS, NAV_LABELS } from "./nav-items";
import type { ActiveSection, Language } from "../shared/contracts/navigation";

export interface VerticalDockProps {
  /** Активная секция. */
  activeSection: ActiveSection;
  /** Переход к секции. */
  onNavigate: (section: ActiveSection) => void;
  /** Текущий язык (для тултипов). */
  language?: Language;
  /** Открыть шторку настроек. */
  onOpenSettings: () => void;
  /** Плавный скролл к началу страницы. */
  onBackToTop?: () => void;
}

/**
 * Десктопная навигация — вертикальная плавающая стеклянная капсула
 * у правого края, по центру по вертикали.
 * Источник: макет «Kinetic Portfolio - Glass Capsule Dock & Integrated Motion».
 */
export function VerticalDock({
  activeSection,
  onNavigate,
  language = "ru",
  onOpenSettings,
  onBackToTop,
}: VerticalDockProps) {
  return (
    <nav
      className="fixed right-6 top-1/2 z-sticky hidden -translate-y-1/2 flex-col items-center gap-1 rounded-2xl border border-outline-variant bg-surface-container-high/90 px-2 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl md:flex"
      aria-label="Основная навигация"
    >
      {NAV_ITEMS.map((item) => {
        const active = item.section === activeSection;
        return (
          <div key={item.section} className="group relative">
            <button
              type="button"
              onClick={() => onNavigate(item.section)}
              aria-current={active ? "page" : undefined}
              aria-label={NAV_LABELS[item.section][language]}
              className="relative flex h-11 w-11 items-center justify-center rounded-full text-surface-on-variant transition-colors duration-200 hover:text-surface-on"
            >
              {active && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"
                />
              )}
              <span className={active ? "relative text-primary" : "relative"}>
                <Icon name={item.icon} filled={active} width={24} height={24} />
              </span>
            </button>

            {/* Tooltip (слева от дока) */}
            <span
              role="tooltip"
              className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-surface-container-highest px-2.5 py-1 text-xs font-medium text-surface-on opacity-0 shadow-modal transition-opacity duration-200 group-hover:opacity-100"
            >
              {NAV_LABELS[item.section][language]}
            </span>
          </div>
        );
      })}

      <div className="my-1 h-px w-8 bg-outline-variant" aria-hidden="true" />

      {/* Back to Top (только десктоп) */}
      <div className="group relative">
        <button
          type="button"
          onClick={onBackToTop}
          aria-label={language === "ru" ? "Наверх" : "Back to top"}
          className="flex h-11 w-11 items-center justify-center rounded-full text-surface-on-variant transition-colors duration-200 hover:text-surface-on"
        >
          <Icon name="arrow-up" width={24} height={24} />
        </button>
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-surface-container-highest px-2.5 py-1 text-xs font-medium text-surface-on opacity-0 shadow-modal transition-opacity duration-200 group-hover:opacity-100"
        >
          {language === "ru" ? "Наверх" : "Back to top"}
        </span>
      </div>

      {/* Settings */}
      <div className="group relative">
        <button
          type="button"
          onClick={onOpenSettings}
          aria-label={language === "ru" ? "Настройки" : "Settings"}
          className="flex h-11 w-11 items-center justify-center rounded-full text-surface-on-variant transition-colors duration-200 hover:text-surface-on"
        >
          <Icon name="settings" width={24} height={24} />
        </button>
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-surface-container-highest px-2.5 py-1 text-xs font-medium text-surface-on opacity-0 shadow-modal transition-opacity duration-200 group-hover:opacity-100"
        >
          {language === "ru" ? "Настройки" : "Settings"}
        </span>
      </div>
    </nav>
  );
}
