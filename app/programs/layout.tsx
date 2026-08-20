import { Metadata } from 'next'
import { generateMetadata as generateMeta } from '@/lib/metadata'

export const metadata: Metadata = generateMeta({
  title: 'Programs',
  description: 'Explore Kid Explorer Clubs programs. Afterschool, grade bands from Pre-K to 8th grade, summer camps, and college readiness. One continuous journey.',
  path: '/programs',
  keywords: ['programs', 'afterschool', 'grade bands', 'summer camps', 'college readiness', 'kids programs'],
})

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
