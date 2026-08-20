import { Metadata } from 'next'
import { generateMetadata as generateMeta } from '@/lib/metadata'

export const metadata: Metadata = generateMeta({
  title: 'About Kid Explorer Clubs - Why We Move Different',
  description: 'Kid Explorer Clubs is a launch system for young minds. Pre-K through 8th grade, building identity, mastery, and mindset - not just for school, but for life.',
  path: '/about',
  keywords: ['kid explorer clubs', 'Chicago education', 'after school', 'educational innovation', 'year round program'],
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
