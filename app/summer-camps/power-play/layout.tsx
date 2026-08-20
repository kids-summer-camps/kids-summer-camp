import { Metadata } from 'next'
import { generateMetadata as generateMeta, programMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMeta(programMetadata['power-play'])

export default function PowerPlayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
