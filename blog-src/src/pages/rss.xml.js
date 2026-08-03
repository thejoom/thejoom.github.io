import rss from '@astrojs/rss';
import { getPublishedPosts, SITE_URL, BLOG_BASE } from '../lib/blog';

export async function GET(context) {
  const posts = await getPublishedPosts();

  return rss({
    title: 'thejoom blog',
    description: '작업 기록과 에이전트 운영 노트를 모으는 블로그입니다.',
    site: `${SITE_URL}${BLOG_BASE}/`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${BLOG_BASE}/${post.slug}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
  });
}
