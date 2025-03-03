import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Devin Hart | Web Dev
      </h1>
      <p className="mb-4">
        {`There is code, and there is the absence of code. I have spent my time in the former, shaping it, bending it to purpose. HTML, CSS, JavaScript. The bones, the muscle, the blood. React, GraphQL, RESTful APIs. Tools of the trade. The means by which a thing becomes more than a thing.`}</p>

        <p className="mb-4">{`I have built for commerce. Watched the ebb and flow of traffic, the invisible hands clicking, scrolling, buying. The numbers rise and fall like tides. I have seen what makes a page fast and what makes it slow. What draws the eye and what sends it away. Accessibility, SEO, performance. Words that are more than words.`}</p>

        <p className="mb-4">{`And then there is DevOps. The quiet work beneath the work. The scaffolding that holds the thing together. A pipeline is not just a pipeline. A server is not just a server. They are the hum of something greater. A system breathing, living.`}</p>

        <p className="mb-4">{`I build. I refine. I deploy. There is always more to do. Always another problem to solve. I step forward into the unknown. And I build again.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
