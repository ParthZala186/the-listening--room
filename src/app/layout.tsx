import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ConditionalFooter from '@/components/ConditionalFooter';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: {
    default: "The Listening Room",
    template: "%s | The Listening Room",
  },

  description:
    "Compassionate online counselling and psychotherapy across Ontario.",

  metadataBase: new URL("https://aorta-morphing-trimmer.ngrok-free.dev"),

  icons: {
    icon: "/logo/favicon.png",
    shortcut: "/logo/favicon.png",
    apple: "/logo/apple-touch-icon.png",
  },

  openGraph: {
    title: "The Listening Room | Counselling & Psychotherapy",
    description:
      "Compassionate online counselling and psychotherapy.",

    url: "https://aorta-morphing-trimmer.ngrok-free.dev",

    siteName: "The Listening Room",

    images: [
      {
        url: "/logo/og-image.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_CA",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "The Listening Room",

    description:
      "Compassionate online counselling.",

    images: ["/logo/og-image.png"],
  },

  // themeColor: "#2D4739",
};

export const viewport: Viewport = {
  themeColor: "#2D4739",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Changed bg-brand-cream to your explicit light coffee color bg-[#F6F3ED] */}
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#F6F3ED] text-brand-textDark antialiased`}>
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