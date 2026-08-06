'use client';

import type { ReactNode } from 'react';
import { type CtaOrigin, trackWhatsappClick } from '@/lib/analytics';
import { WHATSAPP_URL } from '@/lib/site';

/** Link de texto para o WhatsApp — mesmo tracking do WaButton, sem estilo de botão. */
export function WaLink({
  children,
  origin,
  className = '',
}: {
  children: ReactNode;
  origin: CtaOrigin;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsappClick(origin)}
      className={className}
    >
      {children}
    </a>
  );
}
