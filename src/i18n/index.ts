import en from "./en";
import de from "./de";
import fr from "./fr";
import it from "./it";

export const locales = ["de", "en", "fr", "it"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "de";

const dicts: Record<Lang, typeof en> = { en, de, fr, it };

export const getDict = (lang: Lang) => dicts[lang];

/** Root path of a locale: "/" for the default, "/en/" etc. otherwise. */
export const basePath = (lang: Lang) =>
  lang === defaultLang ? "/" : `/${lang}/`;

export const langNames: Record<Lang, string> = {
  de: "Deutsch",
  en: "English",
  fr: "Français",
  it: "Italiano",
};
