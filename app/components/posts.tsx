import Link from 'next/link'
import { getPosts } from 'app/work/posts'

export function BlogPosts() {
  const allBlogs = getPosts('app/work/posts') || []

  // Normalize "publishedAt" to group "Full Site Build (Hybrid)" under "Full Site Build"
  const grouped = allBlogs.reduce((acc, post) => {
    let section = post.metadata.publishedAt
    if (section === 'Full Site Build (Hybrid)') {
      section = 'Full Site Build'
    }
    if (!acc[section]) acc[section] = []
    acc[section].push(post)
    return acc
  }, {})

  const sectionOrder = [
    'Addon',
    'Customization',
    'Full Site Build',
    'Project',
    'Tool'
  ]

  return (
    <div>
      {sectionOrder.map((section) => (
        grouped[section] && (
          <div key={section} className="mb-8">
            <h2 className="text-xl font-bold mb-4" id={section.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}>{section}</h2>
            <div className="space-y-3">
              {grouped[section].map((post) => (
                <Link
                key={post.slug}
                className="flex flex-col py-0"
                href={`/work/${post.slug}`}
                >
                <div className="w-full grid md:grid-cols-[125px_1fr] md:gap-x-4">
                    <p className="w-[150px] tabular-nums text-gray-400 !mb-0">
                    {post.metadata.publishedAt}
                    </p>
                    <p className="tracking-tight !mb-0">
                    {post.metadata.title}
                    </p>
                </div>
            </Link>

              ))}
            </div>
          </div>
        )
      ))}
    </div>
  )
}
