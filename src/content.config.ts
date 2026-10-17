import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Entries with `draft: true` (such as the example templates) are never published. */
const pattern = (ext: string) => `**/*.${ext}`;

/**
 * Products live in src/content/products/<language>/<product>.md.
 * To add a product, copy an existing file, rename it and edit it.
 * The file name becomes the address, e.g. attendance.md -> /products/attendance
 */
const products = defineCollection({
  loader: glob({ pattern: pattern('md'), base: './src/content/products' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      tagline: z.string(),
      summary: z.string(),
      status: z.enum(['available', 'coming-soon']).default('available'),
      order: z.number().default(100),
      featured: z.boolean().default(false),
      category: z.string().default('BusinessApplication'),
      platforms: z.array(z.string()).default([]),
      features: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
      // Real app screenshots (portrait phone screens). When present they replace the drawn mockup.
      screenshots: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      // Show the drawn Sengeti Attendance phone mockup when there are no screenshots.
      mockup: z.boolean().default(false),
    }),
});

/** News posts, case studies and insight articles: src/content/news/<language>/<post>.md */
const news = defineCollection({
  loader: glob({ pattern: pattern('md'), base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      type: z.enum(['news', 'case-study', 'article']).default('news'),
      client: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      draft: z.boolean().default(false),
    }),
});

/** Legal pages such as the privacy policy: src/content/legal/<language>/<page>.md */
const legal = defineCollection({
  loader: glob({ pattern: pattern('md'), base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.coerce.date(),
  }),
});

/** Client quotes: one file per quote in src/content/testimonials/. */
const testimonials = defineCollection({
  loader: glob({ pattern: pattern('md'), base: './src/content/testimonials' }),
  schema: ({ image }) =>
    z.object({
      quote: z.string(),
      name: z.string(),
      role: z.string().optional(),
      organisation: z.string().optional(),
      photo: image().optional(),
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

/** Client and partner logos: one file per client in src/content/clients/. */
const clients = defineCollection({
  loader: glob({ pattern: pattern('md'), base: './src/content/clients' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      logo: image(),
      url: z.url().optional(),
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

/**
 * Portfolio projects for the "Our work" page: src/content/projects/<language>/<project>.md
 * Copy example.md, fill it in and delete the `draft: true` line.
 */
const projects = defineCollection({
  loader: glob({ pattern: pattern('md'), base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      sector: z.string(),
      summary: z.string(),
      year: z.number(),
      services: z.array(z.string()).default([]),
      tech: z.array(z.string()).default([]),
      results: z.array(z.string()).default([]),
      // A real screenshot. Without one, a drawn illustration is shown.
      cover: image().optional(),
      coverAlt: z.string().default(''),
      // Drawn illustration used when there is no cover: attendance, website, dashboard or workflow.
      visual: z.enum(['attendance', 'website', 'dashboard', 'workflow']).default('dashboard'),
      // Optional links: a case study slug in news, a product slug, or a live address.
      caseStudy: z.string().optional(),
      product: z.string().optional(),
      url: z.url().optional(),
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

export const collections = { products, news, legal, testimonials, clients, projects };
