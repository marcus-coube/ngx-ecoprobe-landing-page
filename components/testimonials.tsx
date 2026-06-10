'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { TESTIMONIALS } from '@/lib/data';
import { SectionHeading } from './ui/section-heading';

function Stars() {
  return (
    <div className="flex gap-1 text-primary" aria-label="Avaliação 5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" aria-hidden />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setIndex((current) => (current + delta + TESTIMONIALS.length) % TESTIMONIALS.length);
    },
    [],
  );

  useEffect(() => {
    const timer = setInterval(() => go(1), 7000);
    return () => clearInterval(timer);
  }, [go, index]);

  const testimonial = TESTIMONIALS[index];

  return (
    <section id="depoimentos" className="relative scroll-mt-24 py-24">
      <div className="dot-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          kicker="Depoimentos"
          title="O que tutores e veterinários dizem"
          subtitle="Avaliações reais de quem já confiou um diagnóstico à Ecoprobe."
        />

        <div className="relative mt-14">
          <div className="glass relative min-h-[19rem] overflow-hidden rounded-[2rem] p-8 sm:min-h-[17rem] sm:p-12">
            <Quote
              className="absolute right-8 top-8 size-14 text-primary/15"
              aria-hidden
            />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: 40 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 * direction }}
                transition={{ duration: 0.45, ease: [0.21, 0.6, 0.35, 1] }}
                className="flex h-full flex-col gap-6"
              >
                <Stars />
                <blockquote className="text-lg leading-relaxed sm:text-xl">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-bold text-primary">
                    {testimonial.author
                      .replace(/^Dra?\.\s*/i, '')
                      .split(' ')
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join('')}
                  </span>
                  <span className="font-display font-semibold">{testimonial.author}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-7 flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Ver depoimento ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    i === index ? 'w-8 bg-primary' : 'w-2.5 bg-line hover:bg-primary/40'
                  }`}
                  style={{ backgroundColor: i === index ? undefined : 'var(--line)' }}
                />
              ))}
            </div>
            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Depoimento anterior"
                className="glass flex size-11 items-center justify-center rounded-full text-muted transition-colors hover:border-primary/50 hover:text-primary"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Próximo depoimento"
                className="glass flex size-11 items-center justify-center rounded-full text-muted transition-colors hover:border-primary/50 hover:text-primary"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
