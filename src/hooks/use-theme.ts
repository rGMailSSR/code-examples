import { useLayoutEffect, useState } from 'react';

let storage: string | null;
let defaultTheme: string;

if (typeof window !== 'undefined') {
  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  storage = localStorage.getItem('app-theme');

  defaultTheme = isDarkTheme ? 'dark' : 'light';
}

export const useTheme = () => {
  const [theme, setTheme] = useState(storage ?? defaultTheme);

  useLayoutEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');

      localStorage.setItem('app-theme', theme);

      return;
    }

    document.documentElement.classList.remove('dark');

    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return { theme, setTheme };
};
