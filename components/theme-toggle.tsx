'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsLight(document.documentElement.classList.contains('light'));
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle('light', next);
    try {
      localStorage.setItem('ecoprobe-theme', next ? 'light' : 'dark');
    } catch {
      /* armazenamento indisponível */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? 'Ativar modo escuro' : 'Ativar modo claro'}
      className="glass flex size-10 items-center justify-center rounded-full text-muted transition-colors duration-300 hover:text-primary"
    >
      {mounted && isLight ? <Moon className="size-4.5" /> : <Sun className="size-4.5" />}
    </button>
  );
}
