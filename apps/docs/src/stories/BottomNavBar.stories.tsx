import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "storybook/test";
import { BottomNavBar, type ActiveSection } from "@repo/ui";

/**
 * BottomNavBar — мобильная стеклянная капсула навигации (видна только на md:hidden).
 *
 * Тестовые сценарии (TDD, фаза Red):
 * 1. Активный пункт помечен aria-current="page".
 * 2. Клик по пункту вызывает onNavigate с корректной секцией.
 * 3. Клик по «Настройки» вызывает onOpenSettings.
 * 4. Подписи пунктов локализуются: ru и en.
 *
 * Вьюпорт: mobile, иначе компонент скрыт через md:hidden.
 */

const meta: Meta<typeof BottomNavBar> = {
  title: "Ui/Organisms/BottomNavBar",
  component: BottomNavBar,
  argTypes: {
    activeSection: {
      control: "select",
      options: ["about", "experience", "projects", "tech-stack", "contact"],
    },
  },
  // Обёртка с тёмным фоном: стеклянная капсула должна быть видна.
  render: (args) => (
    <div style={{ minHeight: "100vh", background: "#0b1326", padding: "2rem" }}>
      <BottomNavBar {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof BottomNavBar>;

export const About: Story = {
  args: {
    activeSection: "about",
    language: "ru",
    onNavigate: fn<(section: ActiveSection) => void>(),
    onOpenSettings: fn(),
  },
  parameters: { viewport: { defaultViewport: "mobile1" } },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Активный пункт «Обо мне» подсвечен как текущая страница.
    await expect(canvas.getByRole("button", { name: "Обо мне" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    // Клик по «Опыт» передаёт секцию experience.
    await userEvent.click(canvas.getByRole("button", { name: "Опыт" }));
    await expect(args.onNavigate).toHaveBeenCalledWith("experience");
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
  },
  parameters: { viewport: { defaultViewport: "mobile1" } },
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
  },
  parameters: { viewport: { defaultViewport: "mobile1" } },
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
  },
  parameters: { viewport: { defaultViewport: "mobile1" } },
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
  },
  parameters: { viewport: { defaultViewport: "mobile1" } },
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

export const English: Story = {
  args: {
    activeSection: "projects",
    language: "en",
    onNavigate: fn<(section: ActiveSection) => void>(),
    onOpenSettings: fn(),
  },
  parameters: { viewport: { defaultViewport: "mobile1" } },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Английская локаль: активен пункт Projects.
    await expect(canvas.getByRole("button", { name: "Projects" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    // Клик по About передаёт секцию about.
    await userEvent.click(canvas.getByRole("button", { name: "About" }));
    await expect(args.onNavigate).toHaveBeenCalledWith("about");
    // Клик по Settings открывает шторку настроек.
    await userEvent.click(canvas.getByRole("button", { name: "Settings" }));
    await expect(args.onOpenSettings).toHaveBeenCalled();
  },
};
