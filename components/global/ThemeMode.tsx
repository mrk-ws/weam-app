"use client"
import { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // التحقق من وضع النظام الافتراضي
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const storedTheme = localStorage.getItem('theme') || systemTheme;

    setTheme(storedTheme);
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full  hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      {theme === 'light' ? (
        <BsMoon className="text-gray-800 dark:text-gray-200" size={24} />
      ) : (
        <BsSun className="text-gray-200" size={24} />
      )}
    </button>
  );
}
