import { Metadata } from 'next'
import { generateMetadata as generateMeta, programMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMeta(programMetadata['first-flight'])

export default function FirstFlightLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
