import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ashikur Rahman Ovi — Software Engineer & Entrepreneur',
  description: 'The portfolio of Ashikur Rahman Ovi — software engineer, product builder, entrepreneur, and community builder from Bangladesh.',
  openGraph: { title: 'Ashikur Rahman Ovi', description: 'Building digital products. Engineering solutions. Growing communities.', type: 'website' },
  metadataBase: new URL('https://ashikurovi.com'),
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0c0806',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
