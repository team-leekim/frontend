import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Newsnack',
  description: '신한해커톤 ~~~~',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white text-black">{children}</body>
    </html>
  );
}
