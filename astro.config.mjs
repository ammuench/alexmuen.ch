// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import robots from "astro-robots";

// https://astro.build/config
export default defineConfig({
  site: "https://alexmuen.ch",
  integrations: [
    tailwind(),
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
});
