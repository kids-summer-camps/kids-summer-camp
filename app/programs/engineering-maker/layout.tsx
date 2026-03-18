import { generateMetadata, programMetadata } from '@/lib/metadata'

export const metadata = generateMetadata(programMetadata['engineering-maker'])

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
