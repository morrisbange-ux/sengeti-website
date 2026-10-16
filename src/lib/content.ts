import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLang, type Lang } from '../i18n';

type Localized<C extends 'news' | 'legal'> = CollectionEntry<C> & { slug: string };

/** Entries stored as <language>/<slug>.md, falling back to English where a translation is missing. */
async function localized<C extends 'news' | 'legal'>(collection: C, lang: Lang): Promise<Localized<C>[]> {
  const all = (await getCollection(collection)) as CollectionEntry<C>[];
  const bySlug = new Map<string, Localized<C>>();
  for (const want of [defaultLang, lang]) {
    for (const entry of all) {
      const [entryLang, ...rest] = entry.id.split('/');
      if (entryLang === want) bySlug.set(rest.join('/'), { ...entry, slug: rest.join('/') });
    }
  }
  return [...bySlug.values()];
}

export type NewsPost = Localized<'news'>;

/** Published news posts and case studies, newest first. */
export async function getNews(lang: Lang): Promise<NewsPost[]> {
  const posts = await localized('news', lang);
  return posts
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const getLegalPages = (lang: Lang) => localized('legal', lang);

export async function getTestimonials() {
  return (await getCollection('testimonials', (e) => !e.data.draft)).sort((a, b) => a.data.order - b.data.order);
}

export async function getClients() {
  return (await getCollection('clients', (e) => !e.data.draft)).sort((a, b) => a.data.order - b.data.order);
}

export const formatDate = (date: Date, locale: string) =>
  date.toLocaleDateString(locale.replace('_', '-'), { year: 'numeric', month: 'long', day: 'numeric' });
