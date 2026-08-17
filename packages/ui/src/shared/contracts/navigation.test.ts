import { describe, expect, it } from "vitest";
import {
  ActiveSectionSchema,
  LanguageSchema,
  NavigationStateSchema,
  ThemeSchema,
} from "./navigation";

describe("Контракт состояния навигации (navigation.ts)", () => {
  it("валидная тема: light, dark, system", () => {
    expect(ThemeSchema.parse("light")).toBe("light");
    expect(ThemeSchema.parse("dark")).toBe("dark");
    expect(ThemeSchema.parse("system")).toBe("system");
  });

  it("отклоняет невалидную тему", () => {
    expect(() => ThemeSchema.parse("auto")).toThrow();
  });

  it("валидный язык: ru, en", () => {
    expect(LanguageSchema.parse("ru")).toBe("ru");
    expect(LanguageSchema.parse("en")).toBe("en");
  });

  it("отклоняет невалидный язык", () => {
    expect(() => LanguageSchema.parse("de")).toThrow();
  });

  it("валидный строгий список активных секций", () => {
    expect(ActiveSectionSchema.parse("about")).toBe("about");
    expect(ActiveSectionSchema.parse("experience")).toBe("experience");
    expect(ActiveSectionSchema.parse("projects")).toBe("projects");
    expect(ActiveSectionSchema.parse("tech-stack")).toBe("tech-stack");
    expect(ActiveSectionSchema.parse("contact")).toBe("contact");
  });

  it("отклоняет активную секцию вне списка", () => {
    expect(() => ActiveSectionSchema.parse("skills")).toThrow();
  });

  it("валидное полное состояние навигации", () => {
    const state = NavigationStateSchema.parse({
      theme: "system",
      language: "ru",
      activeSection: "about",
      isSettingsOpen: true,
    });
    expect(state).toEqual({
      theme: "system",
      language: "ru",
      activeSection: "about",
      isSettingsOpen: true,
    });
  });

  it("отклоняет состояние с невалидной секцией", () => {
    expect(() =>
      NavigationStateSchema.parse({
        theme: "dark",
        language: "en",
        activeSection: "home",
        isSettingsOpen: false,
      }),
    ).toThrow();
  });
});
