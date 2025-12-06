import { notFound } from 'next/navigation';
import { getPosts } from 'app/utils/posts'; // Import from central utility
import { PostLayout } from 'app/components/post-layout'; // Import shared UI
import { baseUrl } from 'app/sitemap';

// Configuration
const POSTS_DIR = 'app/work/posts';
const ROUTE_TYPE = 'work';

export async function generateStaticParams() {
  const posts = getPosts(POSTS_DIR);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // Await params for Next.js 15+
  const post = getPosts(POSTS_DIR).find((post) => post.slug === slug);
  if (!post) return;

  const { title, publishedAt, summary, image } = post.metadata;
  const ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: 'article',
      publishedTime: publishedAt,
      url: `${baseUrl}/${ROUTE_TYPE}/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: summary,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }) {
  const { slug } = await params;
  const post = getPosts(POSTS_DIR).find((post) => post.slug === slug);

  if (!post) notFound();

  return <PostLayout post={post} routeType={ROUTE_TYPE} />;
}