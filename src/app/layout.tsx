import './globals.css';

import { useState } from 'react';

import { Button } from '@material-tailwind/react';
import classNames from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TbArrowBadgeRight } from 'react-icons/tb';

import { ThemeProvider } from '@/components/shared/export-file/export-file';
import { Dashboard } from '@/components/widgets/dashboard';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Примеры компонентов',
  description: 'Примеры моей работы для потенциальных работодателей',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <html lang='ru'>
        <body
          className={classNames(inter.className, 'text-gray-800 dark:bg-black dark:text-gray-300')}
        >
          <div className='container my-10 flex h-[90vh] gap-3 overflow-hidden'>
            <Dashboard />
            <div className='relative flex-1 rounded-xl bg-gray-300 p-8 dark:bg-gray-800'>
              {children}
            </div>
            <div className='rounded-xl bg-gray-300 p-8 dark:bg-gray-800'>Описание компонента</div>
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
