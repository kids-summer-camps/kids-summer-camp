import { Metadata } from 'next'
import { generateMetadata as generateMeta, programMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMeta(programMetadata['lil-launchers'])

export default function LilLaunchersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
