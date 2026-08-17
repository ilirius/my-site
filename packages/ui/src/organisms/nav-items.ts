import type { ActiveSection, Language, Theme } from "../shared/contracts/navigation";
import type { IconName } from "./icons";

/**
 * Единый источник правды для пунктов навигации.
 * Синхронизирован с `ActiveSectionSchema` (строгий enum) и макетами Stitch.
 */

export interface NavItem {
  /** Значение enum активной секции. */
  section: ActiveSection;
  /** Иконка Material Symbol. */
  icon: IconName;
  /** Подпись (локализуется в apps/web, здесь — нейтральный ключ). */
  labelKey: string;
  /** Якорь на странице. */
  anchor: string;
}

export const NAV_ITEMS: NavItem[] = [
  { section: "about", icon: "person", labelKey: "nav.about", anchor: "#about" },
  { section: "experience", icon: "timeline", labelKey: "nav.experience", anchor: "#experience" },
  { section: "projects", icon: "terminal", labelKey: "nav.projects", anchor: "#projects" },
  { section: "tech-stack", icon: "layers", labelKey: "nav.techStack", anchor: "#tech-stack" },
  { section: "contact", icon: "mail", labelKey: "nav.contact", anchor: "#contact" },
];

/** Локализованные подписи пунктов (ru/en) — для автономной работы @repo/ui. */
export const NAV_LABELS: Record<ActiveSection, Record<Language, string>> = {
  about: { ru: "Обо мне", en: "About" },
  experience: { ru: "Опыт", en: "Experience" },
  projects: { ru: "Проекты", en: "Projects" },
  "tech-stack": { ru: "Тех стек", en: "Tech Stack" },
  contact: { ru: "Контакты", en: "Contact" },
};

export type { ActiveSection, Language, Theme };
