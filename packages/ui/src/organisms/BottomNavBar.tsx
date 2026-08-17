"use client";

import { Icon } from "./icons";
import { NAV_ITEMS, NAV_LABELS } from "./nav-items";
import type { ActiveSection, Language } from "../shared/contracts/navigation";

export interface BottomNavBarProps {
  /** Активная секция. */
  activeSection: ActiveSection;
  /** Переход к секции. */
  onNavigate: (section: ActiveSection) => void;
  /** Текущий язык (для подписей). */
  language?: Language;
  /** Открыть шторку настроек. */
  onOpenSettings: () => void;
}

/**
 * Мобильная навигация — плавающая стеклянная капсула.
 * Источник: макет «Mobile Portfolio - Floating Glass Nav & Pulse Effect».
 */
export function BottomNavBar({
  activeSection,
  onNavigate,
  language = "ru",
  onOpenSettings,
}: BottomNavBarProps) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-sticky px-4 pb-4 pt-2 md:hidden"
      aria-label="Основная навигация"
    >
      <div className="flex items-center justify-around rounded-2xl border border-outline-variant bg-surface-container-high/90 px-2 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        {NAV_ITEMS.map((item) => {
          const active = item.section === activeSection;
          return (
            <button
              key={item.section}
              type="button"
              onClick={() => onNavigate(item.section)}
              aria-current={active ? "page" : undefined}
              aria-label={NAV_LABELS[item.section][language]}
              className="relative flex flex-col items-center gap-1 text-surface-on-variant transition-colors duration-200 hover:text-surface-on"
            >
              {active && (
                <span
                  aria-hidden="true"
                  className="absolute -top-1 h-8 w-8 rounded-full bg-primary/10 animate-pulse"
                />
              )}
              <span
                className={[
                  "relative transition-colors duration-200",
                  active ? "text-primary" : "",
                ].join(" ")}
              >
                <Icon name={item.icon} filled={active} width={24} height={24} />
              </span>
              <span
                className={[
                  "hidden text-[10px] font-medium sm:block",
                  active ? "text-primary" : "",
                ].join(" ")}
              >
                {NAV_LABELS[item.section][language]}
              </span>
            </button>
          );
        })}

        {/* Settings */}
        <button
          type="button"
          onClick={onOpenSettings}
          aria-label="Настройки"
          className="flex flex-col items-center gap-1 text-surface-on-variant transition-colors duration-200 hover:text-surface-on"
        >
          <Icon name="settings" width={24} height={24} />
          <span className="hidden text-[10px] font-medium sm:block">
            {language === "ru" ? "Настройки" : "Settings"}
          </span>
        </button>
      </div>
    </nav>
  );
}
