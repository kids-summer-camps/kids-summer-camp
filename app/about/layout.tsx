import { Metadata } from 'next'
import { generateMetadata as generateMeta } from '@/lib/metadata'

export const metadata: Metadata = generateMeta({
  title: 'About Us - Our Story',
  description: 'Discover the story behind Kid Explorer Camp - born from one mother\'s vision to create a space where curiosity is unleashed and the future is built.',
  path: '/about',
  keywords: ['summer camp story', 'Chicago education', 'camp founder', 'educational innovation'],
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
