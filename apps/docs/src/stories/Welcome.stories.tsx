import type { Meta, StoryObj } from '@storybook/react';

const Welcome = () => (
  <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
    <h1>📚 Pixel & Code — Storybook</h1>
    <p>
      Здесь будет документация компонентов <code>@repo/ui</code>.
      Компоненты используют Atomic Design (atoms → molecules → organisms).
    </p>
  </div>
);

const meta: Meta<typeof Welcome> = {
  title: 'Docs/Welcome',
  component: Welcome,
};

export default meta;
type Story = StoryObj<typeof Welcome>;

export const Default: Story = {};
