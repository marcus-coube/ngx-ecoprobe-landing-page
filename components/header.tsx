'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/lib/site';
import { ThemeToggle } from './theme-toggle';
import { WaButton } from './ui/wa-button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled || open ? 'glass-nav shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]' : ''
          }`}
        >
          <a href="#" className="flex items-center gap-2.5" aria-label="Ecoprobe — início">
            <Image
              src="/assets/logo_ecoprobe.png"
              alt="Logo Ecoprobe"
              width={40}
              height={40}
              className="size-10 rounded-full bg-primary"
              priority
            />
            <span className="font-display text-lg font-bold tracking-tight">
              Eco<span className="text-primary">probe</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <div className="hidden sm:block">
              <WaButton>Agendar pelo WhatsApp</WaButton>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              className="glass flex size-10 items-center justify-center rounded-full text-ink lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="glass-nav mt-2 flex flex-col gap-1 rounded-2xl p-3 lg:hidden"
              aria-label="Navegação móvel"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <div className="p-2 sm:hidden">
                <WaButton className="w-full">Agendar pelo WhatsApp</WaButton>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
