import { Metadata } from 'next'

interface PageMetadata {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
}

export function generateMetadata({
  title,
  description,
  path = '',
  image = '/og-image.jpg',
  keywords = [],
}: PageMetadata): Metadata {
  const url = `https://kids-summer-camp.vercel.app${path}`

  return {
    title,
    description,
    keywords: [
      'kids summer camp',
      'summer camp Chicago',
      'STEM summer camp',
      ...keywords,
    ],
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}

export const programMetadata: Record<string, PageMetadata> = {
  'lil-launchers': {
    title: "Lil' Launchers - Ages 3-5",
    description: "Playful STEM exploration for preschoolers. Hands-on discovery, sensory activities, and early learning adventures.",
    path: '/programs/lil-launchers',
    keywords: ['preschool STEM', 'ages 3-5', 'early learning', 'sensory activities'],
  },
  'first-flight': {
    title: 'First Flight - Ages 5-7',
    description: 'Introduction to STEM concepts through interactive play and creative projects for young learners.',
    path: '/programs/first-flight',
    keywords: ['elementary STEM', 'ages 5-7', 'interactive learning', 'creative projects'],
  },
  'cosmic-curiosity': {
    title: 'Cosmic Curiosity - Ages 7-9',
    description: 'Dive deeper into STEM with experiments, coding basics, and space exploration for curious minds.',
    path: '/programs/cosmic-curiosity',
    keywords: ['STEM experiments', 'ages 7-9', 'coding for kids', 'space exploration'],
  },
  'robotics-maker': {
    title: 'Robotics Maker Camp - Ages 8-13',
    description: 'Build bots, code dreams, and engineer the future. Hands-on robotics, automation, and coding for young innovators.',
    path: '/programs/robotics-maker',
    keywords: ['robotics', 'coding', 'engineering', 'STEM', 'automation', 'ages 8-13'],
  },
  'engineering-maker': {
    title: 'Engineering Maker Camp - Ages 8-13',
    description: 'Design, build, test, repeat. Mechanical, electrical, and civil engineering through hands-on projects and 3D modeling.',
    path: '/programs/engineering-maker',
    keywords: ['engineering', 'maker', '3D printing', 'circuits', 'STEM', 'ages 8-13'],
  },
  'esports-gaming': {
    title: 'Esports Lab™ - Ages 8-14',
    description: 'Where young minds take control of the digital world—building, creating, and leading with confidence in a future powered by technology.',
    path: '/programs/esports-gaming',
    keywords: ['esports', 'gaming', 'game design', 'strategy', 'teamwork', 'digital literacy', 'ages 8-14'],
  },
  'the-blueprint': {
    title: 'The Blueprint - Ages 13-14',
    description: 'Advanced project-based learning, entrepreneurship, and real-world application of STEM skills.',
    path: '/programs/the-blueprint',
    keywords: ['entrepreneurship', 'ages 13-14', 'project-based learning', 'advanced STEM'],
  },
  'power-play': {
    title: 'Power Play - Sports & Athletics',
    description: 'Dynamic sports programs combining physical fitness, teamwork, and character development.',
    path: '/programs/power-play',
    keywords: ['sports camp', 'athletics', 'teamwork', 'fitness'],
  },
}
