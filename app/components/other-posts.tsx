import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/other/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()
  

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          const titleA = a.metadata.publishedAt.toLowerCase(); // Extract the title and convert to lowercase for case-insensitive comparison
          const titleB = b.metadata.publishedAt.toLowerCase();
          
          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
          return 0; // titles must be equal
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1"
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
  )
}
