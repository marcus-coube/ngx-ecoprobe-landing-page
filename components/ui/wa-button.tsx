'use client';

import { MessageCircle } from 'lucide-react';
import type { ReactNode } from 'react';
import { type CtaOrigin, trackWhatsappClick } from '@/lib/analytics';
import { WHATSAPP_URL } from '@/lib/site';

export function WaButton({
  children,
  origin,
  variant = 'primary',
  size = 'md',
  className = '',
}: {
  children: ReactNode;
  origin: CtaOrigin;
  variant?: 'primary' | 'ghost';
  size?: 'md' | 'lg';
  className?: string;
}) {
  const base =
    'group inline-flex items-center justify-center gap-2.5 rounded-full font-display font-semibold transition-all duration-300 will-change-transform';
  const sizes = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-9 py-4.5 text-base',
  };
  const variants = {
    primary:
      'bg-primary text-white glow-primary hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-10px_var(--glow)]',
    ghost:
      'glass text-ink hover:border-primary/50 hover:text-primary hover:-translate-y-0.5',
  };

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsappClick(origin)}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <MessageCircle
        className={`${size === 'lg' ? 'size-5' : 'size-4'} transition-transform duration-300 group-hover:rotate-12`}
        aria-hidden
      />
      {children}
    </a>
  );
}
