import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CureAI - AI Healthcare Platform',
  description: 'Next-generation healthcare platform powered by AI',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gradient-to-br from-premium-light to-neutral-100">
        {children}
      </body>
    </html>
  );
}
