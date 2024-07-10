import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Form Builder',
  description: 'Build your own personalized forms',
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen', inter.className)}>{children}</body>
    </html>
  );
};

export default RootLayout;
