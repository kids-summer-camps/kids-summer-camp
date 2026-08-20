import { Metadata } from 'next'
import { generateMetadata as generateMeta, programMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMeta(programMetadata['prelude-i'])

export default function PreludeILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
