import { defineCollection, z } from 'astro:content';

// Variants and typos that should collapse into one tag, so articles on the
// same topic don't end up split across different tag filters.
const TAG_ALIASES: Record<string, string> = {
  magefedt: 'magefett',
  magevekt: 'magefett',
  'ultraprosessert mat': 'ultraprosessert',
};

function normalizeTags(tags: string[]): string[] {
  const normalized = tags.map(tag => {
    const lower = tag.trim().toLowerCase();
    return TAG_ALIASES[lower] ?? lower;
  });
  return [...new Set(normalized)];
}

const artikler = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional().default([]).transform(normalizeTags),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      credit: z.string(),
    }).optional(),
  }),
});

export const collections = { artikler };
