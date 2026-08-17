import type { Metadata } from "next";
import { WebVitals } from "@/src/features/web-vitals";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pixel & Code",
  description: "Персональное портфолио Ивана Гаврилова — Front-End Developer",
};

// Восстановление темы до первого рендера (защита от «мигания» — FOUC).
// Режимы: 'light' | 'dark' | 'system'. Дефолт — 'dark'.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var mode = stored === 'light' || stored === 'dark' || stored === 'system'
      ? stored
      : 'dark';
    var isDark =
      mode === 'dark' ||
      (mode === 'system' &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    var root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
