import type { Preview } from "@storybook/react";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import "../app/globals.css";

// ════════════════════════════════════════════════
// Типы
// ════════════════════════════════════════════════

export type Locale = "ru" | "en";

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string, fallback?: string) => string;
}

// ════════════════════════════════════════════════
// i18n — словари RU/EN
// ════════════════════════════════════════════════

const translations: Record<Locale, Record<string, string>> = {
  ru: {
    "hero.greeting": "Привет, я Иван",
    "hero.role": "Front-End Developer",
    "hero.cta": "Смотреть работы",
    "nav.about": "Обо мне",
    "nav.experience": "Опыт",
    "nav.projects": "Проекты",
    "nav.techStack": "Тех стек",
    "nav.contact": "Контакты",
    "nav.settings": "Настройки",
    "theme.light": "Светлая тема",
    "theme.dark": "Тёмная тема",
    "theme.system": "Системная тема",
    "lang.ru": "Русский",
    "lang.en": "English",
  },
  en: {
    "hero.greeting": "Hi, I'm Ivan",
    "hero.role": "Front-End Developer",
    "hero.cta": "View Projects",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.techStack": "Tech Stack",
    "nav.contact": "Contact",
    "nav.settings": "Settings",
    "theme.light": "Light Theme",
    "theme.dark": "Dark Theme",
    "theme.system": "System Theme",
    "lang.ru": "Русский",
    "lang.en": "English",
  },
};

function translate(key: string, locale: Locale, fallback?: string): string {
  return translations[locale]?.[key] ?? fallback ?? key;
}

// ════════════════════════════════════════════════
// React Context (i18n)
// ════════════════════════════════════════════════

export const I18nContext = createContext<I18nContextValue>({
  locale: "ru",
  setLocale: () => {},
  t: (_, fallback) => fallback ?? "",
});

export const useI18n = () => useContext(I18nContext);

// ════════════════════════════════════════════════
// Декоратор 1: Тема (Dark / Light через .dark)
// ════════════════════════════════════════════════

const ThemeDecorator = (Story: React.FC, context: { globals?: { theme?: string } }) => {
  const themeFromToolbar = context.globals?.theme ?? "dark";

  useEffect(() => {
    const el = document.documentElement;
    if (themeFromToolbar === "dark") {
      el.classList.add("dark");
      el.style.colorScheme = "dark";
    } else if (themeFromToolbar === "light") {
      el.classList.remove("dark");
      el.style.colorScheme = "light";
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        el.classList.add("dark");
        el.style.colorScheme = "dark";
      } else {
        el.classList.remove("dark");
        el.style.colorScheme = "light";
      }
    }
  }, [themeFromToolbar]);

  const isDark =
    themeFromToolbar === "dark" ||
    (themeFromToolbar === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div
      className={isDark ? "dark" : ""}
      style={{
        minHeight: "100vh",
        background: isDark ? "#0b1326" : "#f8fafc",
        color: isDark ? "#e2e8f0" : "#1e1e1e",
        fontFamily:
          "var(--font-body, 'Inter', system-ui, -apple-system, sans-serif)",
        transition: "background-color 400ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Story />
    </div>
  );
};

// ════════════════════════════════════════════════
// Декоратор 2: i18n (RU / EN переключатель)
// ════════════════════════════════════════════════

const I18nDecorator = (Story: React.FC, context: { globals?: { locale?: string } }) => {
  const localeFromToolbar = (context.globals?.locale as Locale) ?? "ru";
  const [locale, setLocale] = useState<Locale>(localeFromToolbar);

  useEffect(() => {
    setLocale(localeFromToolbar);
  }, [localeFromToolbar]);

  const value: I18nContextValue = {
    locale,
    setLocale,
    t: (key, fallback) => translate(key, locale, fallback),
  };

  return React.createElement(
    I18nContext.Provider,
    { value },
    React.createElement(Story),
  );
};

// ════════════════════════════════════════════════
// Preview
// ════════════════════════════════════════════════

const preview: Preview = {
  decorators: [ThemeDecorator, I18nDecorator],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    // Фоны для панели Backgrounds
    backgrounds: {
      default: "dark",
      values: [
        { name: "Dark (Kinetic)", value: "#0b1326" },
        { name: "Light (aluminium)", value: "#f8fafc" },
        { name: "Surface Container", value: "#152238" },
        { name: "Surface Lowest", value: "#060b18" },
      ],
    },

    // Next.js App Router
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },

    // Accessibility
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: true }],
      },
    },
  },

  // Toolbar: переключатели темы и языка
  globalTypes: {
    theme: {
      name: "Тема / Theme",
      description: "Переключение Dark / Light режима",
      defaultValue: "dark",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "dark", title: "🌙 Тёмная (Dark)", left: "🌙" },
          { value: "light", title: "☀️ Светлая (Light)", left: "☀️" },
          { value: "system", title: "🖥️ Системная (System)", left: "🖥️" },
        ],
        dynamicTitle: true,
      },
    },
    locale: {
      name: "Язык / Language",
      description: "Локализация интерфейса",
      defaultValue: "ru",
      toolbar: {
        icon: "globe",
        items: [
          { value: "ru", title: "🇷🇺 Русский", right: "RU" },
          { value: "en", title: "🇬🇧 English", right: "EN" },
        ],
        dynamicTitle: true,
      },
    },
  },

  tags: ["autodocs"],
};

export default preview;
