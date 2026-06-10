'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/site';

export function WhatsappFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar Ultrassom pelo WhatsApp — resposta rápida"
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.6, ease: [0.21, 0.6, 0.35, 1] }}
      whileHover={{ scale: 1.05, y: -3 }}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25d366] py-3 pl-4 pr-5 text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.6)] sm:bottom-7 sm:right-7"
    >
      <span className="relative flex size-9 items-center justify-center">
        <span className="animate-ping-ring absolute inset-0 rounded-full border-2 border-white/70" />
        <MessageCircle className="size-7" aria-hidden />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-sm font-bold">Agendar Ultrassom</span>
        <span className="text-[0.68rem] font-medium opacity-90">● Resposta rápida</span>
      </span>
    </motion.a>
  );
}
