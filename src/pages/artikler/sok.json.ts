import type { APIRoute } from 'astro';
import { cardTags, getSortedArticles } from '../../lib/articles';

// Compact index of every article, fetched by the archive page only when the
// reader searches or picks a tag, so filtering works across all pages without
// shipping every card in the archive HTML.
export const GET: APIRoute = async () => {
  const artikler = await getSortedArticles();
  const index = artikler.map(a => ({
    slug: a.slug,
    title: a.data.title,
    description: a.data.description,
    tags: a.data.tags,
    cardTags: cardTags(a.data.tags),
    date: a.data.publishDate.toISOString(),
    image: a.data.image ? { src: a.data.image.src, alt: a.data.image.alt } : null,
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
