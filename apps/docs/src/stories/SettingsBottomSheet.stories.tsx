import type { Meta, StoryObj } from "@storybook/react";
import { expect, fireEvent, fn, userEvent, within } from "storybook/test";
import {
  SettingsBottomSheet,
  type Language,
  type ThemeMode,
} from "@repo/ui";

/**
 * SettingsBottomSheet — шторка настроек в стиле Material You (тема + язык).
 *
 * Тестовые сценарии (TDD, фаза Red):
 * 1. open=true рендерит диалог, open=false не рендерит ничего.
 * 2. Активный режим темы помечен aria-checked="true" (light/dark/system).
 * 3. Клик по сегменту темы вызывает onThemeChange.
 * 4. Клик по чипу языка (RU/EN) вызывает onLanguageChange.
 * 5. Закрытие: кнопка Close, клик по подложке, клавиша Escape — onClose.
 */

const meta: Meta<typeof SettingsBottomSheet> = {
  title: "Ui/Organisms/SettingsBottomSheet",
  component: SettingsBottomSheet,
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark", "system"],
    },
    language: {
      control: "select",
      options: ["ru", "en"],
    },
  },
  // Обёртка с тёмным фоном: шторка и подложка должны быть видны.
  render: (args) => (
    <div style={{ minHeight: "100vh", background: "#0b1326", padding: "2rem" }}>
      <SettingsBottomSheet {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof SettingsBottomSheet>;

export const OpenDarkRussian: Story = {
  args: {
    open: true,
    theme: "dark",
    language: "ru",
    onClose: fn(),
    onThemeChange: fn<(mode: ThemeMode) => void>(),
    onLanguageChange: fn<(language: Language) => void>(),
  },
  parameters: { viewport: { defaultViewport: "mobile1" } },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Шторка открыта: диалог виден, активна тема Dark.
    await expect(canvas.getByRole("dialog", { name: "Settings" })).toBeInTheDocument();
    await expect(canvas.getByRole("radio", { name: "Dark" })).toHaveAttribute(
      "aria-checked",
      "true",
    );
    // Переключение темы на Light вызывает onThemeChange("light").
    await userEvent.click(canvas.getByRole("radio", { name: "Light" }));
    await expect(args.onThemeChange).toHaveBeenCalledWith("light");
    // Переключение языка на EN вызывает onLanguageChange("en").
    await userEvent.click(canvas.getByRole("button", { name: "EN" }));
    await expect(args.onLanguageChange).toHaveBeenCalledWith("en");
    // Кнопка Close вызывает onClose.
    await userEvent.click(canvas.getByRole("button", { name: "Close" }));
    await expect(args.onClose).toHaveBeenCalled();
  },
};

export const LightThemeEnglish: Story = {
  args: {
    open: true,
    theme: "light",
    language: "en",
    onClose: fn(),
    onThemeChange: fn<(mode: ThemeMode) => void>(),
    onLanguageChange: fn<(language: Language) => void>(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Активна тема Light.
    await expect(canvas.getByRole("radio", { name: "Light" })).toHaveAttribute(
      "aria-checked",
      "true",
    );
    // Переключение темы на System вызывает onThemeChange("system").
    await userEvent.click(canvas.getByRole("radio", { name: "System" }));
    await expect(args.onThemeChange).toHaveBeenCalledWith("system");
    // Переключение языка на RU вызывает onLanguageChange("ru").
    await userEvent.click(canvas.getByRole("button", { name: "RU" }));
    await expect(args.onLanguageChange).toHaveBeenCalledWith("ru");
    // Клавиша Escape вызывает onClose.
    fireEvent.keyDown(document, { key: "Escape" });
    await expect(args.onClose).toHaveBeenCalled();
  },
};

export const SystemTheme: Story = {
  args: {
    open: true,
    theme: "system",
    language: "ru",
    onClose: fn(),
    onThemeChange: fn<(mode: ThemeMode) => void>(),
    onLanguageChange: fn<(language: Language) => void>(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Активна тема System.
    await expect(canvas.getByRole("radio", { name: "System" })).toHaveAttribute(
      "aria-checked",
      "true",
    );
    // Клик по подложке (backdrop) вызывает onClose.
    fireEvent.click(canvas.getByRole("presentation"));
    await expect(args.onClose).toHaveBeenCalled();
  },
};

export const Closed: Story = {
  args: {
    open: false,
    theme: "dark",
    language: "ru",
    onClose: fn(),
    onThemeChange: fn<(mode: ThemeMode) => void>(),
    onLanguageChange: fn<(language: Language) => void>(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // При open=false компонент не рендерит диалог.
    await expect(canvas.queryByRole("dialog")).toBeNull();
  },
};
