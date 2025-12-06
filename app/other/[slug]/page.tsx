import { notFound } from 'next/navigation';
import { getPosts } from 'app/utils/posts';
import { PostLayout } from 'app/components/post-layout';
import { baseUrl } from 'app/sitemap';

// Configuration - The only thing that changes
const POSTS_DIR = 'app/other/posts';
const ROUTE_TYPE = 'other';

export async function generateStaticParams() {
  const posts = getPosts(POSTS_DIR);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
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