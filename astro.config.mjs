// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import robots from "astro-robots";

// https://astro.build/config
export default defineConfig({
  site: "https://alexmuen.ch",

  build: {
    inlineStylesheets: "auto",
  },

  integrations: [
    sitemap(),
    robots({
      host: "alexmuen.ch",
      policy: [
        {
          // @ts-ignore
          userAgent: [
            "Applebot",
            "Googlebot",
            "bingbot",
            "Yandex",
            "Yeti",
            "Baiduspider",
            "360Spider",
            "Kagibot",
            "*",
          ],
          allow: ["/"],
          crawlDelay: 5,
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
