import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Devin Hart | Web Dev',
    template: 'Devin Hart | Web Dev',
  },
  description: 'Devin Hart Web Development Portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'Devin Hart Web Development Portfolio.',
    url: baseUrl,
    siteName: 'Devin Hart | Web Dev',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        "bg-cover bg-fixed bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/dlk1wqemy/image/upload/v1741022028/bg-2_lpliqk.webp')]",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 lg:mx-auto">
        <main className="flex-auto min-w-0 pt-6 flex flex-col px-2  text-[#DDDDDD] bg-[rgba(37,36,41,0.95)] pl-8 pr-8">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
