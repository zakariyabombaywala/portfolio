import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Client reviews, read from src/data/reviews.json.
 * Add an entry there (or let the sync add it) and it appears on the site on the next build.
 */
const reviews = defineCollection({
  loader: file('src/data/reviews.json'),
  schema: z.object({
    source: z.string(),
    author: z.string(),
    /** Contract or project title */
    project: z.string(),
    /** When the contract ended, YYYY-MM-DD */
    date: z.coerce.date(),
    /** Out of 5 */
    rating: z.number().min(0).max(5).optional(),
    quote: z.string().min(1),
    url: z.string().url().optional(),
  }),
});

export const collections = { reviews };
