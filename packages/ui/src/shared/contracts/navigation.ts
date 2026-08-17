import { z } from "zod";

/**
 * Сквозной контракт состояния навигационной оболочки.
 *
 * Паттерн typed-service-contracts — «parse, don't validate»: единый
 * источник правды для BottomNavBar, VerticalDock, SettingsBottomSheet
 * и layout `apps/web`. Исключает рассинхронизацию темы, языка и активной
 * секции между мобильной и десктопной версиями.
 */

export const ThemeSchema = z.enum(["light", "dark", "system"]);
export const LanguageSchema = z.enum(["ru", "en"]);
export const ActiveSectionSchema = z.enum([
  "about",
  "experience",
  "projects",
  "tech-stack",
  "contact",
]);

export const NavigationStateSchema = z.object({
  theme: ThemeSchema,
  language: LanguageSchema,
  activeSection: ActiveSectionSchema,
  isSettingsOpen: z.boolean(),
});

export type Theme = z.infer<typeof ThemeSchema>;
export type Language = z.infer<typeof LanguageSchema>;
export type ActiveSection = z.infer<typeof ActiveSectionSchema>;
export type NavigationState = z.infer<typeof NavigationStateSchema>;
