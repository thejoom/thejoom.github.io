import { getCollection } from 'astro:content';

export const SITE_URL = 'https://www.thejoom.net';
export const BLOG_BASE = '/blog';

export const categoryLabels = {
  agents: 'Agents',
  devlog: 'Devlog',
  lessons: 'Lessons',
  notes: 'Notes',
} as const;

export type Category = keyof typeof categoryLabels;

export const getPublishedPosts = async () => {
  const posts = await getCollection('blog', ({ data }) => data.draft !== true);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
};

export const getPostUrl = (slug: string) => `${BLOG_BASE}/${slug}/`;

export const getCategoryUrl = (category: string) => `${BLOG_BASE}/category/${category}/`;

export const getTagUrl = (tag: string) => `${BLOG_BASE}/tags/${encodeURIComponent(tag)}/`;

export const getCanonicalUrl = (path = `${BLOG_BASE}/`) => new URL(path, SITE_URL).toString();

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
