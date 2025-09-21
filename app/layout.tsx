import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EcoTrackers - Track Your Carbon Footprint',
  description: 'Track your carbon footprint, earn rewards, and build a greener future.',
  openGraph: {
    title: 'EcoTrackers',
    description: 'Track your carbon footprint, earn rewards, and build a greener future.',
    type: 'website',
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': '/api/og',
    'fc:frame:button:1': 'Start Tracking',
    'fc:frame:post_url': '/api/frame',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-bg">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
