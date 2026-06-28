import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ConditionalFooter from '@/components/ConditionalFooter';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: {
    default: 'The Listening Room | Counselling & Psychotherapy',
    template: '%s | The Listening Room' // This automatically formats sub-pages like "About | The Listening Room"
  },
  description: 'A safe space to be heard, understood, and supported. Compassionate online counselling for anxiety, stress, ADHD, and life transitions across Ontario.',
  keywords: ['therapy', 'counselling', 'psychotherapy', 'online therapy', 'Ontario therapist', 'anxiety support', 'ADHD counselling'],
  openGraph: {
    title: 'The Listening Room | Counselling & Psychotherapy',
    description: 'A safe space to be heard, understood, and supported. Compassionate online counselling.',
    url: 'https://thelisteningroom.com',
    siteName: 'The Listening Room',
    images: [
      {
        url: '/images/minh-pham-OtXADkUh3-I-unsplash.jpg', // This image will show up in iMessage/Facebook previews!
        width: 1200,
        height: 630,
        alt: 'The Listening Room Therapy Clinic',
      },
    ],
    locale: 'en_CA',
    type: 'website',
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
      </body>
    </html>
  );
}