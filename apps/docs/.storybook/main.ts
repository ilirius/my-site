import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Storybook 10 — "Ventura Mono" Design System
 * Хост: apps/docs
 * Истории: packages/ui/src/** (физически в соседнем пакете)
 */
const config: StorybookConfig = {
  stories: [
    "../../../packages/ui/src/**/*.mdx",
    "../../../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    // В Storybook 10 все аддоны встроены в ядро
    // (essentials, interactions, a11y, links)
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  features: {
    experimentalRSC: true,
  },

  docs: {
    autodocs: "tag",
  },

  /**
   * Резолвинг алиасов @repo/* — чтобы Storybook
   * видел Tailwind-конфиг и компоненты из соседнего пакета.
   */
  webpackFinal: async (config) => {
    if (config.resolve?.alias) {
      Object.assign(config.resolve.alias, {
        "@repo/config-tailwind": path.resolve(
          __dirname,
          "../../../packages/config-tailwind",
        ),
        "@repo/ui": path.resolve(__dirname, "../../../packages/ui/src/index.ts"),
      });
    }
    return config;
  },
};

export default config;
