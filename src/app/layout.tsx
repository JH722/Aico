import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '아이코(AICO) - 단 3번의 클릭으로 만드는 쇼츠',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://aico.tv/ko&size=16"
      ></link>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
