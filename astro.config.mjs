import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const markdownConfig = {
  shikiConfig: {
    themes: {
      light: "catppuccin-latte",
      dark: "catppuccin-macchiato",
    },
    langs: [],
    wrap: true,
    transformers: [],
  },
};

const imageConfig = {
  remotePatterns: [{ protocol: "https" }],
};

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: markdownConfig,
  image: imageConfig,
});
