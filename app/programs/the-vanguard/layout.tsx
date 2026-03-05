import { Metadata } from 'next'
import { generateMetadata as generateMeta, programMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMeta(programMetadata['the-vanguard'])

export default function TheVanguardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
