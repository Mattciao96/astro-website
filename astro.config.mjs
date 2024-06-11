import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
const markdownConfig = {
  shikiConfig: {
    themes: {
      light: "catppuccin-latte",
      dark: "catppuccin-macchiato"
    },
    langs: [],
    wrap: true,
    transformers: []
  }
};
const imageConfig = {
  remotePatterns: [{
    protocol: "https"
  }]
};

// the url of the hosted website
// useful for ssr feed
const siteConfig = "https://example.com";


// https://astro.build/config
export default defineConfig({
  site: siteConfig,
  integrations: [tailwind(), react(), mdx()],
  markdown: markdownConfig,
  image: imageConfig
});