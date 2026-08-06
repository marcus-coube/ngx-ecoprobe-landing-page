'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { GA_MEASUREMENT_ID } from './site';

/** De qual bloco da página o visitante saiu para o WhatsApp. */
export type CtaOrigin =
  | 'header'
  | 'header_mobile'
  | 'hero'
  | 'tutores'
  | 'clinicas'
  | 'cobertura'
  | 'parceria'
  | 'cta_final'
  | 'rodape'
  | 'rodape_contato'
  | 'botao_flutuante';

/**
 * Dispara o evento de conversão no GA4.
 * Sem measurement ID configurado vira no-op — evita warning no console em dev.
 */
export function trackWhatsappClick(origem: CtaOrigin) {
  if (!GA_MEASUREMENT_ID) return;
  sendGAEvent('event', 'contato_whatsapp', { origem });
}
