import type { Metadata } from "next";
import { DM_Sans, Roboto_Serif, Roboto_Mono, Poppins } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL('https://kids-summer-camp.vercel.app'),
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
    url: 'https://kids-summer-camp.vercel.app',
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
        className={`${dmSans.variable} ${robotoSerif.variable} ${robotoMono.variable} ${poppins.variable} antialiased font-sans`}
      >
        <Analytics />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
