import { getCollection } from 'astro:content';

export async function getSortedArticles() {
  return (await getCollection('artikler'))
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
}
