import { Metadata } from 'next'
import { generateMetadata as generateMeta } from '@/lib/metadata'

export const metadata: Metadata = generateMeta({
  title: 'The Atelier - Membership',
  description: 'The Atelier is a private, yearlong membership for Kid Explorer Clubs families committed to both Summer and Academic Year programs. A studio for family legacy.',
  path: '/membership',
  keywords: ['the atelier', 'membership', 'family program', 'parent growth', 'year round membership'],
})

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
