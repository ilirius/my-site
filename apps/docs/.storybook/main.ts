import type { StorybookConfig } from '@storybook/nextjs';

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  framework: '@storybook/nextjs',
  features: {
    experimentalRSC: true,
  },
} satisfies StorybookConfig;

export default config;
