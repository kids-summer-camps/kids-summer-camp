import { Metadata } from 'next'
import { generateMetadata as generateMeta, programMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMeta(programMetadata['the-blueprint'])

export default function TheBlueprintLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
