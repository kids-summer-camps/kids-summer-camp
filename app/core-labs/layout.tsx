import { Metadata } from 'next'
import { generateMetadata as generateMeta } from '@/lib/metadata'

export const metadata: Metadata = generateMeta({
  title: 'Core Labs',
  description: 'Kid Explorer Clubs Core Labs - Mission Core, STEM, Entrepreneurship, Sports, and E-Gaming. Hands-on, high-impact labs where kids choose their lane and build their legacy.',
  path: '/core-labs',
  keywords: ['core labs', 'STEM program', 'e-gaming', 'sports program', 'entrepreneurship for kids', 'after school labs'],
})

export default function CoreLabsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
