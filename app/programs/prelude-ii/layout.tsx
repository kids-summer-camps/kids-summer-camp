import { Metadata } from 'next'
import { generateMetadata as generateMeta, programMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMeta(programMetadata['prelude-ii'])

export default function PreludeIILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
