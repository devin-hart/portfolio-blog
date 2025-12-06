// app/components/post-layout.tsx
import { CustomMDX } from 'app/components/mdx';
import { baseUrl } from 'app/sitemap';

interface PostLayoutProps {
  post: any;
  routeType: 'work' | 'other'; // Helps generate correct URLs
}

export function PostLayout({ post, routeType }: PostLayoutProps) {
  const url = `${baseUrl}/${routeType}/${post.slug}`;
  const { title, publishedAt, summary, image } = post.metadata;

  return (
    <section className="hs-screen fade-in">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: title,
            datePublished: publishedAt,
            dateModified: publishedAt,
            description: summary,
            image: image
              ? `${baseUrl}${image}`
              : `/og?title=${encodeURIComponent(title)}`,
            url: url,
            author: {
              '@type': 'Person',
              name: 'Devin Hart | Web Dev',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm">{publishedAt}</p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}