import { getBlogPosts } from 'app/work/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/work', '/misc'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
