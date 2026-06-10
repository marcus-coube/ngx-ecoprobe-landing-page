'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { FAQ } from '@/lib/data';
import { Reveal } from './ui/reveal';
import { SectionHeading } from './ui/section-heading';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative mx-auto max-w-4xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeading
        kicker="Dúvidas frequentes"
        title="Perguntas frequentes sobre ultrassom veterinário"
        subtitle="Tudo o que tutores e clínicas costumam perguntar antes de agendar."
      />

      <div className="mt-12 flex flex-col gap-3.5">
        {FAQ.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <Reveal key={item.question} delay={index * 0.04}>
              <div
                className={`glass overflow-hidden rounded-2xl transition-colors duration-300 ${
                  isOpen ? 'border-primary/40' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold sm:text-lg">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full ${
                      isOpen ? 'bg-primary text-white' : 'bg-primary/12 text-primary'
                    }`}
                  >
                    <Plus className="size-4.5" aria-hidden />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.21, 0.6, 0.35, 1] }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted sm:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
