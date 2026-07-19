import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalFooter from "@/components/ConditionalFooter";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thelisteningrm.com"),

  applicationName: "The Listening Room",

  title: {
    default: "The Listening Room | Online Counselling & Psychotherapy in Ontario",
    template: "%s | The Listening Room",
  },

  description:
    "The Listening Room offers compassionate online counselling and psychotherapy across Ontario. Providing confidential support for anxiety, depression, trauma, relationships, and personal growth.",

  keywords: [
    "online counselling Ontario",
    "psychotherapy Ontario",
    "virtual therapy Ontario",
    "mental health counselling",
    "anxiety counselling",
    "depression therapy",
    "trauma therapy",
    "relationship counselling",
    "online therapist Ontario",
    "The Listening Room",
  ],

  authors: [
    {
      name: "The Listening Room",
    },
  ],

  creator: "The Listening Room",

  publisher: "The Listening Room",

  category: "Health",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  icons: {
    icon: "/logo/favicon.png",
    shortcut: "/logo/favicon.png",
    apple: "/logo/apple-touch-icon.png",
  },

  openGraph: {
    title: "The Listening Room | Online Counselling & Psychotherapy in Ontario",

    description:
      "Professional online counselling and psychotherapy across Ontario. Confidential, compassionate, and personalized mental health support.",

    url: "https://thelisteningrm.com",

    siteName: "The Listening Room",

    locale: "en_CA",

    type: "website",

    images: [
      {
        url: "/logo/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Listening Room - Online Counselling",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "The Listening Room | Online Counselling",

    description:
      "Professional online counselling and psychotherapy across Ontario.",

    images: ["/logo/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#2D4739",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-[#F6F3ED] text-brand-textDark antialiased`}
      >
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <ConditionalFooter />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}