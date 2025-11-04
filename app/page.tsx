import Image from 'next/image';
import d2 from '../public/images/d2.webp';

export default function Page() {
  return (
    <section className="hs-screen fade-in">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Devin Hart | Web Dev
      </h1>
      <p >Ideas turned into form, logic into movement.</p>
      <br />
      <Image src={d2} alt="me" />
    </section>
  )
}
