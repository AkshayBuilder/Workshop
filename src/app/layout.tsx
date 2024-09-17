'use client'
import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Adjust the path based on your project structure
import { ReactNode } from 'react';
import Image from 'next/image';

 const metadata: Metadata = {
  title: 'Book Inventory — Next.js App Router',
  description: 'View 2 million books from Goodreads.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
    <html lang="en">
      <body
        className={cn(
          'bg-[#171717] text-[#ffffff] font-titillium antialiased'
        )}
      > 
        <div className="group flex w-full">
          
          <div className="flex-1 flex flex-col min-h-screen">
            <div className="flex-1 flex flex-col p-1">{children}</div>
          </div>
        </div>
        
      </body>
    </html>
    </Provider>
    
  );
}