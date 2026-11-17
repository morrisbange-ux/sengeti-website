import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLang, type Lang } from '../i18n';

export type Product = CollectionEntry<'products'> & { slug: string };

/** Products for a language, falling back to English for any not yet translated. */
export async function getProducts(lang: Lang): Promise<Product[]> {
  const all = await getCollection('products');
  const bySlug = new Map<string, Product>();
  for (const want of [defaultLang, lang]) {
    for (const entry of all) {
      const [entryLang, ...rest] = entry.id.split('/');
      if (entryLang === want) bySlug.set(rest.join('/'), { ...entry, slug: rest.join('/') });
    }
  }
  return [...bySlug.values()].sort(
    (a, b) => a.data.order - b.data.order || a.data.name.localeCompare(b.data.name),
  );
}
