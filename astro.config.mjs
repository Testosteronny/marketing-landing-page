import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sueleli.ch",
  devToolbar: {
    enabled: false,
  },
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en", "fr", "it"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
