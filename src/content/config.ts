import { defineCollection, z } from 'astro:content';

const artikler = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional().default([]),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      credit: z.string(),
    }).optional(),
  }),
});

export const collections = { artikler };
