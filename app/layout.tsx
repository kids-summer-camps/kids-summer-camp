import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";
import { Analytics } from "@/components/Analytics";

// Fonts are self-hosted from /fonts (latin subsets only) instead of fetched from
// next/font/google at build time.
//
// Why: next/font/google fetches its stylesheet from fonts.googleapis.com during
// every build. Google intermittently answers with extensionless
// `fonts.gstatic.com/l/font?kit=...&skey=...` URLs, and Turbopack's font
// resolver parses the `&` as extra query entries, so the build dies with
// "Module not found: Can't resolve '@vercel/turbopack-next/internal/font/google/font'"
// plus "next/font/google queries have exactly one entry" (vercel/next.js#99114,
// same family as the 16.3.0 regression #97344). It is response dependent, so it
// hits some builds and not others (it failed Netlify builds twice while passing
// locally and in CI on the same commit). Self-hosting removes the network fetch
// from the build entirely.
//
// The woff2 files are the exact latin subsets the previous next/font/google
// build emitted, so rendering is unchanged. DM Sans, Roboto Serif and Roboto
// Mono are variable fonts: one file serves every weight. The latin-ext and
// other subsets Google used to download are not shipped; the site copy is
// basic latin, and anything outside it already falls back to the emoji/symbol
// fonts.
const dmSans = localFont({
  variable: "--font-dm-sans",
  display: "swap",
  src: [
    { path: "../fonts/dm-sans-latin.woff2", weight: "400", style: "normal" },
    { path: "../fonts/dm-sans-latin.woff2", weight: "500", style: "normal" },
    { path: "../fonts/dm-sans-latin.woff2", weight: "700", style: "normal" },
  ],
});

const robotoSerif = localFont({
  variable: "--font-roboto-serif",
  display: "swap",
  src: [
    { path: "../fonts/roboto-serif-latin.woff2", weight: "400", style: "normal" },
    { path: "../fonts/roboto-serif-latin.woff2", weight: "500", style: "normal" },
    { path: "../fonts/roboto-serif-latin.woff2", weight: "600", style: "normal" },
    { path: "../fonts/roboto-serif-latin.woff2", weight: "700", style: "normal" },
  ],
});

const robotoMono = localFont({
  variable: "--font-roboto-mono",
  display: "swap",
  src: [
    { path: "../fonts/roboto-mono-latin.woff2", weight: "400", style: "normal" },
    { path: "../fonts/roboto-mono-latin.woff2", weight: "500", style: "normal" },
    { path: "../fonts/roboto-mono-latin.woff2", weight: "600", style: "normal" },
    { path: "../fonts/roboto-mono-latin.woff2", weight: "700", style: "normal" },
  ],
});

const poppins = localFont({
  variable: "--font-poppins",
  display: "swap",
  src: [
    { path: "../fonts/poppins-latin-300.woff2", weight: "300", style: "normal" },
    { path: "../fonts/poppins-latin-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/poppins-latin-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/poppins-latin-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/poppins-latin-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/poppins-latin-800.woff2", weight: "800", style: "normal" },
  ],
});

const cinzelDecorative = localFont({
  variable: "--font-cinzel-decorative",
  display: "swap",
  src: [
    { path: "../fonts/cinzel-decorative-latin-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/cinzel-decorative-latin-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/cinzel-decorative-latin-900.woff2", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kids-summer-camps.netlify.app'),
  title: {
    default: "Kid Explorer Camps | Summer Programs in Chicago",
    template: "%s | Kid Explorer Camps"
  },
  description: "Where the Future Starts in the Summer. STEM innovation, creative arts, sports, and outdoor exploration for kids ages 3-14. Transportation across Chicago.",
  keywords: [
    "kids summer camp",
    "summer camp Chicago",
    "STEM summer camp",
    "kids programs Chicago",
    "summer activities for kids",
    "youth summer programs",
    "Chicago summer camp",
    "kids explorer camp",
    "STEM education",
    "creative arts camp",
    "sports camp Chicago",
    "ages 3-14 summer camp",
    "children summer programs"
  ],
  authors: [{ name: "Kid Explorer Camps" }],
  creator: "Kid Explorer Camps",
  publisher: "Kid Explorer Camps",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kids-summer-camps.netlify.app',
    siteName: 'Kid Explorer Camps',
    title: 'Kid Explorer Camps | Summer Programs in Chicago',
    description: 'Where the Future Starts in the Summer. STEM innovation, creative arts, sports, and outdoor exploration for kids ages 3-14. Transportation across Chicago.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kid Explorer Camps - Where the Future Starts in the Summer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kid Explorer Camps | Summer Programs in Chicago',
    description: 'Where the Future Starts in the Summer. STEM innovation, creative arts, sports, and outdoor exploration for kids ages 3-14.',
    images: ['/og-image.jpg'],
    creator: '@kidexplorercamps',
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
