import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

const markdownConfigs = {
  shikiConfig: {
    themes: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-macchiato'
    },
    langs: [],
    wrap: true,
    transformers: []
  }
};

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: markdownConfigs
});