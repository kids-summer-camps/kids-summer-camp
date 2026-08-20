import type { Metadata } from "next";
import { DM_Sans, Roboto_Serif, Roboto_Mono, Poppins, Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";
import { Analytics } from "@/components/Analytics";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kidexplorerclubs.com'),
  title: {
    default: "Kid Explorer Clubs | After-School & Summer Programs in Chicago",
    template: "%s | Kid Explorer Clubs"
  },
  description: "Where the Future Starts. Kid Explorer Clubs is a year-round launch system for young minds ,  after-school, summer camps, and seasonal programs building coders, creators, and problem-solvers across Chicago.",
  keywords: [
    "kid explorer clubs",
    "after school program Chicago",
    "summer camp Chicago",
    "STEM program Chicago",
    "kids programs Chicago",
    "youth programs Chicago",
    "Chicago after school",
    "kid explorer camp",
    "STEM education",
    "creative arts program",
    "sports program Chicago",
    "kids enrichment Chicago",
    "children programs Chicago"
  ],
  authors: [{ name: "Kid Explorer Clubs" }],
  creator: "Kid Explorer Clubs",
  publisher: "Kid Explorer Clubs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kidexplorerclubs.com',
    siteName: 'Kid Explorer Clubs',
    title: 'Kid Explorer Clubs | After-School & Summer Programs in Chicago',
    description: 'Where the Future Starts. After-school, summer camps, and seasonal programs building coders, creators, and problem-solvers across Chicago.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kid Explorer Clubs - Where the Future Starts',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kid Explorer Clubs | After-School & Summer Programs in Chicago',
    description: 'Where the Future Starts. After-school, summer camps, and seasonal programs for kids across Chicago.',
    images: ['/og-image.jpg'],
    creator: '@kidexplorerclubs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${robotoSerif.variable} ${robotoMono.variable} ${poppins.variable} ${cinzelDecorative.variable} antialiased font-sans`}
      >
        <Analytics />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
