import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '@/config/site';

export async function GET(context) {
  const posts = await getCollection('blog');
  const publishedPosts = posts
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
    );

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/blog/${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
