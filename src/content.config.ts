import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Products live in src/content/products/<language>/<product>.md.
 * To add a product, copy an existing file, rename it and edit it.
 * The file name becomes the address, e.g. attendance.md -> /products/attendance
 */
const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    summary: z.string(),
    status: z.enum(['available', 'coming-soon']).default('available'),
    order: z.number().default(100),
    featured: z.boolean().default(false),
    category: z.string().default('BusinessApplication'),
    platforms: z.array(z.string()).default([]),
    features: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
  }),
});

export const collections = { products };
