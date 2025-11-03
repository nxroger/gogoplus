import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'GoGoPlus | AI 智慧旅遊平台',
  description:
    '以 AI 快速為你打造專屬旅遊行程，整合預算、交通與體驗推薦的智慧旅遊平台。'
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body className="font-body bg-[#f4f7fb] text-[#1f2a37] antialiased">
        {children}
      </body>
    </html>
  );
}
