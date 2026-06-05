'use client';

import { useState, useEffect } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState('light');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light';
    setTheme(stored);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
