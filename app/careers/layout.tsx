import { Metadata } from 'next'
import { generateMetadata as generateMeta } from '@/lib/metadata'

export const metadata: Metadata = generateMeta({
  title: 'Careers',
  description: 'Join the Kid Explorer Clubs crew. Build identity in motion, grow with intention, and help engineer the next generation of young icons.',
  path: '/careers',
  keywords: ['careers', 'jobs', 'join the crew', 'education careers', 'youth development'],
})

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
