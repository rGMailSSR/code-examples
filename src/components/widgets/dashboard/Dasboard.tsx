'use client';

import { useEffect, useState } from 'react';

import { Button } from '@material-tailwind/react';
import { TbSmartHome } from 'react-icons/tb';
import { TbArrowBadgeRight } from 'react-icons/tb';

import { ItemDashboard } from '@/components/shared/item-dashboard';
import { useTheme } from '@/hooks/use-theme';

export function Dashboard() {
  const { setTheme } = useTheme();

  return (
    <div className={`relative grid grid-cols-1 gap-3`}>
      <Button>
        <TbArrowBadgeRight className='absolute left-0 top-0 flex h-12 w-12 cursor-pointer rounded-full text-red-600' />
      </Button>

      <div className='flex flex-col gap-1 rounded-xl bg-gray-300 p-8 dark:bg-gray-800'>
        <ItemDashboard icon={<TbSmartHome />} text='Ссылка на образец' />
        <ItemDashboard icon={<TbSmartHome />} text='Ссылка на образец' />
        <ItemDashboard icon={<TbSmartHome />} text='Ссылка на образец' />
        <ItemDashboard icon={<TbSmartHome />} text='Ссылка на образец' />
        <ItemDashboard icon={<TbSmartHome />} text='Ссылка на образец' />
        <ItemDashboard icon={<TbSmartHome />} text='Ссылка на образец' />
      </div>
      <div className='flex flex-col gap-1 rounded-xl bg-gray-300 p-8 dark:bg-gray-800'>
        <ItemDashboard icon={<TbSmartHome />} text='Настройки' />
        <Button className='bg-orange-600' onClick={() => setTheme('dark')}>
          сменить тему на тёмную
        </Button>
        <Button className='bg-red-700' onClick={() => setTheme('light')}>
          сменить тему на светлую
        </Button>
      </div>
      <div className='flex flex-col gap-1 rounded-xl bg-gray-300 p-8 dark:bg-gray-800'>
        <ItemDashboard icon={<TbSmartHome />} text='Информация' />
        <Button className='bg-red-700'>jhjhjh</Button>
      </div>
    </div>
  );
}
