import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "storybook/test";
import { VerticalDock, type ActiveSection } from "@repo/ui";

/**
 * VerticalDock — десктопная стеклянная капсула навигации (видна только на md+).
 *
 * Тестовые сценарии (TDD, фаза Red):
 * 1. Активный пункт помечен aria-current="page".
 * 2. Клик по пункту вызывает onNavigate с корректной секцией.
 * 3. Клик по «Наверх» вызывает onBackToTop.
 * 4. Клик по «Настройки» вызывает onOpenSettings.
 * 5. Подписи пунктов локализуются: ru и en.
 *
 * Вьюпорт: desktop, иначе компонент скрыт через hidden md:flex.
 */

const meta: Meta<typeof VerticalDock> = {
  title: "Ui/Organisms/VerticalDock",
  component: VerticalDock,
  argTypes: {
    activeSection: {
      control: "select",
      options: ["about", "experience", "projects", "tech-stack", "contact"],
    },
  },
  // Обёртка с тёмным фоном: стеклянный док должен быть виден.
  render: (args) => (
    <div style={{ minHeight: "100vh", background: "#0b1326", padding: "2rem" }}>
      <VerticalDock {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof VerticalDock>;

export const About: Story = {
  args: {
    activeSection: "about",
    language: "ru",
    onNavigate: fn<(section: ActiveSection) => void>(),
    onOpenSettings: fn(),
    onBackToTop: fn(),
  },
  parameters: { viewport: { defaultViewport: "desktop" } },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Активный пункт «Обо мне» подсвечен как текущая страница.
    await expect(canvas.getByRole("button", { name: "Обо мне" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    // Клик по «Проекты» передаёт секцию projects.
    await userEvent.click(canvas.getByRole("button", { name: "Проекты" }));
    await expect(args.onNavigate).toHaveBeenCalledWith("projects");
    // Клик по «Настройки» открывает шторку настроек.
    await userEvent.click(canvas.getByRole("button", { name: "Настройки" }));
    await expect(args.onOpenSettings).toHaveBeenCalled();
  },
};

export const Experience: Story = {
  args: {
    activeSection: "experience",
    language: "ru",
    onNavigate: fn<(section: ActiveSection) => void>(),
    onOpenSettings: fn(),
    onBackToTop: fn(),
  },
  parameters: { viewport: { defaultViewport: "desktop" } },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Активный пункт «Опыт» подсвечен как текущая страница.
    await expect(canvas.getByRole("button", { name: "Опыт" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    // Клик по «Тех стек» передаёт секцию tech-stack.
    await userEvent.click(canvas.getByRole("button", { name: "Тех стек" }));
    await expect(args.onNavigate).toHaveBeenCalledWith("tech-stack");
  },
};

export const Projects: Story = {
  args: {
    activeSection: "projects",
    language: "ru",
    onNavigate: fn<(section: ActiveSection) => void>(),
    onOpenSettings: fn(),
    onBackToTop: fn(),
  },
  parameters: { viewport: { defaultViewport: "desktop" } },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Активный пункт «Проекты» подсвечен как текущая страница.
    await expect(canvas.getByRole("button", { name: "Проекты" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    // Клик по «Контакты» передаёт секцию contact.
    await userEvent.click(canvas.getByRole("button", { name: "Контакты" }));
    await expect(args.onNavigate).toHaveBeenCalledWith("contact");
  },
};

export const TechStack: Story = {
  args: {
    activeSection: "tech-stack",
    language: "ru",
    onNavigate: fn<(section: ActiveSection) => void>(),
    onOpenSettings: fn(),
    onBackToTop: fn(),
  },
  parameters: { viewport: { defaultViewport: "desktop" } },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Активный пункт «Тех стек» подсвечен как текущая страница.
    await expect(canvas.getByRole("button", { name: "Тех стек" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    // Клик по «Опыт» передаёт секцию experience.
    await userEvent.click(canvas.getByRole("button", { name: "Опыт" }));
    await expect(args.onNavigate).toHaveBeenCalledWith("experience");
  },
};

export const Contact: Story = {
  args: {
    activeSection: "contact",
    language: "ru",
    onNavigate: fn<(section: ActiveSection) => void>(),
    onOpenSettings: fn(),
    onBackToTop: fn(),
  },
  parameters: { viewport: { defaultViewport: "desktop" } },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Активный пункт «Контакты» подсвечен как текущая страница.
    await expect(canvas.getByRole("button", { name: "Контакты" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    // Клик по «Проекты» передаёт секцию projects.
    await userEvent.click(canvas.getByRole("button", { name: "Проекты" }));
    await expect(args.onNavigate).toHaveBeenCalledWith("projects");
  },
};

export const BackToTop: Story = {
  args: {
    activeSection: "contact",
    language: "ru",
    onNavigate: fn<(section: ActiveSection) => void>(),
    onOpenSettings: fn(),
    onBackToTop: fn(),
  },
  parameters: { viewport: { defaultViewport: "desktop" } },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Клик по стрелке «Наверх» вызывает onBackToTop.
    await userEvent.click(canvas.getByRole("button", { name: "Наверх" }));
    await expect(args.onBackToTop).toHaveBeenCalled();
  },
};

export const English: Story = {
  args: {
    activeSection: "experience",
    language: "en",
    onNavigate: fn<(section: ActiveSection) => void>(),
    onOpenSettings: fn(),
    onBackToTop: fn(),
  },
  parameters: { viewport: { defaultViewport: "desktop" } },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Английская локаль: активен пункт Experience.
    await expect(canvas.getByRole("button", { name: "Experience" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    // Клик по Back to top вызывает onBackToTop.
    await userEvent.click(canvas.getByRole("button", { name: "Back to top" }));
    await expect(args.onBackToTop).toHaveBeenCalled();
    // Клик по Settings открывает шторку настроек.
    await userEvent.click(canvas.getByRole("button", { name: "Settings" }));
    await expect(args.onOpenSettings).toHaveBeenCalled();
  },
};
