import Link from 'next/link';
import { getPosts } from 'app/utils/posts'; // Updated import

export function BlogPosts() {
  let allBlogs = getPosts('app/other/posts') || [];

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/other/${post.slug}`}
          >
            <div className="w-full grid md:grid-cols-[125px_1fr] md:gap-x-4 md:gap-y-4">
              <p className="w-[150px] tabular-nums text-gray-400">
                {post.metadata.publishedAt}
              </p>
              <p className="tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}