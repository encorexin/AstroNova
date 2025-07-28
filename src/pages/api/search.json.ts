import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');

  const publishedPosts = posts
    .filter((post) => !post.data.draft)
    .map((post) => {
      const readingTime = Math.ceil(post.body.split(' ').length / 200);
      return {
        title: post.data.title,
        description: post.data.description,
        url: `/blog/${post.slug}`,
        publishedAt: post.data.publishedAt.toISOString(),
        category: post.data.category,
        tags: post.data.tags,
        readingTime,
      };
    });

  return new Response(JSON.stringify(publishedPosts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
