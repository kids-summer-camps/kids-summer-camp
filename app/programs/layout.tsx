import { Metadata } from 'next'
import { generateMetadata as generateMeta } from '@/lib/metadata'

export const metadata: Metadata = generateMeta({
  title: 'Summer Camp Programs',
  description: 'Explore our summer camp programs for ages 3-14. From Lil\' Launchers to The Vanguard - STEM, sports, entrepreneurship, and leadership programs across Chicago.',
  path: '/programs',
  keywords: ['camp programs', 'summer activities', 'STEM programs', 'sports programs', 'leadership training'],
})

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
