import { getPosts } from 'app/utils/posts'; // Updated import
export const baseUrl = 'https://portfolio-blog-starter.vercel.app';

export default async function sitemap() {
  // Fetch from both directories
  let workLogs = getPosts('app/work/posts').map((post) => ({
    url: `${baseUrl}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let otherLogs = getPosts('app/other/posts').map((post) => ({
    url: `${baseUrl}/other/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/work', '/other'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...workLogs, ...otherLogs];
}