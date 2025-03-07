import { BlogPosts } from 'app/components/other-posts'

export const metadata = {
  title: 'Other',
  description: 'Thoughts',
}

export default function Page() {
  return (
    <section className="hs-screeen">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Work</h1>
      <BlogPosts />
    </section>
  )
}
