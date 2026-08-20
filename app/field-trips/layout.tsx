import { Metadata } from 'next'
import { generateMetadata as generateMeta } from '@/lib/metadata'

export const metadata: Metadata = generateMeta({
  title: 'Field Trips',
  description: 'Kid Explorer Clubs field trips are full-sensory launch missions. From iFLY indoor skydiving to the Adler Planetarium, kids explore worlds where science and imagination collide.',
  path: '/field-trips',
  keywords: ['field trips', 'iFLY', 'adler planetarium', 'museum of science', 'kids adventures'],
})

export default function FieldTripsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
