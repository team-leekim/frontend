import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Newsnack',
  description: '세상을 만나는 가벼운 시작',
  icons: {
    icon: '/icon.png',
  },
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
