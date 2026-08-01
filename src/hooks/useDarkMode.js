import { useState, useEffect } from 'react';

export default function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('wedding-dark') === 'true';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', dark);
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('wedding-dark', dark);
  }, [dark]);

  return [dark, setDark];
}
