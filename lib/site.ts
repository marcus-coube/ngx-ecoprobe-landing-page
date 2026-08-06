export const SITE_URL = 'https://ecoprobe.com.br';

/**
 * Measurement ID do stream "ECOPROBE-LP" (GA4 vinculado ao projeto Firebase).
 * Formato G-XXXXXXXXXX. Não é segredo: fica visível no HTML de qualquer site com GA.
 * Deixar vazio desativa completamente o tracking.
 */
export const GA_MEASUREMENT_ID = '';

export const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=41987191306&text&type=phone_number&app_absent=0';

export const WHATSAPP_DISPLAY = '(41) 98719-1306';

export const EMAIL = 'ecoprobe.contato@gmail.com';

export const INSTAGRAM_URL = 'https://www.instagram.com/ecoprobe/';

export const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Parceiros', href: '#parceiros' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
] as const;
