import { Metadata } from 'next'
import { generateMetadata as generateMeta } from '@/lib/metadata'

export const metadata: Metadata = generateMeta({
  title: 'Frequently Asked Questions',
  description: 'Get answers to common questions about Kid Explorer Camps - enrollment, schedules, transportation, safety, and more.',
  path: '/faq',
  keywords: ['camp FAQ', 'enrollment questions', 'camp schedule', 'transportation', 'safety policies'],
})

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
