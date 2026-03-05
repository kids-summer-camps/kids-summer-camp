import { Metadata } from 'next'
import { generateMetadata as generateMeta } from '@/lib/metadata'

export const metadata: Metadata = generateMeta({
  title: 'Our Philosophy - The DREME 9',
  description: 'At Kid Explorer Camp, we\'re about the wonderment. Discover the DREME 9™ - our unique approach to building emotional intelligence, creativity, leadership, and resilience in young minds.',
  path: '/philosophy',
  keywords: ['DREME 9', 'educational philosophy', 'emotional intelligence', 'leadership development', 'critical thinking'],
})

export default function PhilosophyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
