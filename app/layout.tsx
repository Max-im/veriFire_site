import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VeryFire Addon',
  description:
    'An addon for Google Spreadsheets that validates email addresses and returns the results. Install this addon in your Google Spreadsheet to quickly validate email addresses and keep your list clean.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
