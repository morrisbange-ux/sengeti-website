import en from './en';

/**
 * Languages the site is published in.
 *
 * To add a language (for example Shona, "sn"):
 *   1. Copy src/i18n/en.ts to src/i18n/sn.ts and translate the text.
 *   2. Import it below and add it to `dictionaries` and `languageNames`.
 *   3. Copy src/content/products/en/ to src/content/products/sn/ and translate.
 * The new language is then served under /sn/ (English stays at the root).
 */
export const dictionaries = { en } as const;
export const languageNames: Record<Lang, string> = { en: 'English' };

export type Lang = keyof typeof dictionaries;
export type Dict = typeof en;

export const defaultLang: Lang = 'en';
export const langs = Object.keys(dictionaries) as Lang[];

export const t = (lang: Lang): Dict => dictionaries[lang];

/** Turns a site path like "/about" into the right path for a language. */
export function localizePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

/** Static paths for pages under src/pages/[...lang]/: one per language. */
export function langPaths() {
  return langs.map((lang) => ({
    params: { lang: lang === defaultLang ? undefined : lang },
    props: { lang },
  }));
}
