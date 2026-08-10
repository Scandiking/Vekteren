import rss from '@astrojs/rss';
import { getSortedArticles } from '../lib/articles';

export async function GET(context) {
  const artikler = await getSortedArticles();

  return rss({
    title: 'Vekteren',
    description: 'Vektnedgang som faktisk fungerer – artikler om kalorier, mat, trening og motivasjon.',
    site: context.site,
    items: artikler.map(a => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.publishDate,
      link: `/artikler/${a.slug}/`,
    })),
    customData: '<language>nb-no</language>',
  });
}
