import { getCollection } from 'astro:content';

export async function getSortedArticles() {
  return (await getCollection('artikler'))
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
}

// Tags on most articles say nothing about a single card, so they're skipped there.
const GENERIC_TAGS = new Set(['vektnedgang']);
const MAX_CARD_TAGS = 2;

/** The few most specific tags to show on an article card (frontmatter order). */
export function cardTags(tags: string[]): string[] {
  return tags.filter(t => !GENERIC_TAGS.has(t)).slice(0, MAX_CARD_TAGS);
}
