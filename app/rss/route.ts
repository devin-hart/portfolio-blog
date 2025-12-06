import { baseUrl } from 'app/sitemap';
import { getPosts } from 'app/utils/posts'; // Updated import

export async function GET() {
  // Fetch and tag them so we know which URL structure to use
  let workPosts = getPosts('app/work/posts').map((post) => ({
    ...post,
    url: `${baseUrl}/work/${post.slug}`,
  }));
  
  let otherPosts = getPosts('app/other/posts').map((post) => ({
    ...post,
    url: `${baseUrl}/other/${post.slug}`,
  }));

  let allBlogs = [...workPosts, ...otherPosts];

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map(
      (post) =>
        `<item>
          <title>${post.metadata.title}</title>
          <link>${post.url}</link>
          <description>${post.metadata.summary || ''}</description>
          <pubDate>${new Date(
            post.metadata.publishedAt
          ).toUTCString()}</pubDate>
        </item>`
    )
    .join('\n');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}