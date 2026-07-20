'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Award, MapPin, ScanLine, Sparkles } from 'lucide-react';
import { WaButton } from './ui/wa-button';

const BADGES = [
  { icon: Award, label: 'Mais de 3.000 exames realizados' },
  { icon: Sparkles, label: 'Equipamentos de última geração' },
  { icon: MapPin, label: 'Curitiba e Região Metropolitana' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.6, 0.35, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 lg:pb-28">
      {/* atmosfera de fundo */}
      <div className="dot-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: 'radial-gradient(closest-side, var(--primary), transparent)' }}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-7"
        >
          <motion.span variants={item} className="kicker">
            Ultrassom veterinário móvel
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]"
          >
            Ultrassom Veterinário com Tecnologia de Ponta,{' '}
            <span className="text-gradient">Onde Seu Pet se Sente Mais Confortável</span>
          </motion.h1>

          <motion.p variants={item} className="max-w-xl text-lg leading-relaxed text-muted">
            Realizamos exames de ultrassom veterinário em clínicas parceiras e também no conforto
            do seu lar, reduzindo o estresse dos animais e oferecendo diagnósticos precisos com
            equipamentos de última geração.
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-2 sm:flex-wrap sm:gap-4">
            <WaButton size="lg" className="flex-1 justify-center !px-5 !py-3 !text-sm sm:flex-none sm:!px-9 sm:!py-[1.125rem] sm:!text-base">
              <span className="hidden sm:inline">Agendar pelo WhatsApp</span>
              <span className="sm:hidden">Agendar</span>
            </WaButton>
            <a
              href="#servicos"
              className="glass group flex-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 sm:flex-none sm:gap-2.5 sm:px-8 sm:py-4 font-display text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              <span className="hidden sm:inline">Conhecer </span>Serviços
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.ul variants={item} className="mt-2 grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:flex-wrap sm:gap-2.5">
            {BADGES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="glass flex items-start gap-2 rounded-2xl px-3 py-2.5 text-xs text-muted sm:items-center sm:rounded-full sm:gap-2.5 sm:px-4 sm:py-2 sm:text-sm"
              >
                <Icon className="mt-0.5 size-3.5 shrink-0 text-primary sm:mt-0 sm:size-4" aria-hidden />
                <span>{label}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Visual de sonar premium — substituível por foto real */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.21, 0.6, 0.35, 1], delay: 0.3 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="glass relative overflow-hidden rounded-[2rem] p-3">
            <div className="dot-grid relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-surface sm:aspect-[4/4]">
              {/* sonar */}
              <div className="relative flex size-[72%] items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-primary/15" />
                <div className="absolute inset-[15%] rounded-full border border-primary/20" />
                <div className="absolute inset-[30%] rounded-full border border-primary/25" />
                <div className="absolute inset-[45%] rounded-full border border-primary/30" />
                <div
                  className="animate-sweep absolute inset-0 rounded-full"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, transparent 280deg, rgba(255,107,0,0.25) 340deg, rgba(255,107,0,0.65) 360deg)',
                  }}
                />
                <div className="animate-ping-ring absolute inset-[20%] rounded-full border border-primary/40" />
                <div className="relative flex size-16 items-center justify-center rounded-full bg-primary/15 text-primary backdrop-blur">
                  <ScanLine className="size-7" aria-hidden />
                </div>
                {/* blips */}
                <span className="absolute left-[22%] top-[30%] size-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_var(--glow)]" />
                <span className="absolute right-[28%] bottom-[26%] size-2 rounded-full bg-primary shadow-[0_0_12px_2px_var(--glow)]" />
              </div>

              {/* onda de ultrassom */}
              <svg
                className="absolute inset-x-0 bottom-6 h-14 w-full text-primary/60"
                viewBox="0 0 640 60"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  className="animate-wave"
                  d="M0 30 L80 30 L96 12 L112 48 L128 22 L140 30 L240 30 L256 8 L272 52 L288 18 L300 30 L420 30 L436 14 L452 46 L468 24 L480 30 L640 30"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>

              <p className="absolute left-5 top-5 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                Diagnóstico em tempo real
              </p>
            </div>
          </div>

          {/* chips flutuantes */}
          <div className="animate-float glass-strong absolute -left-4 top-18 hidden items-center gap-2.5 rounded-2xl px-4 py-3 lg:flex">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Award className="size-4" aria-hidden />
            </span>
            <div>
              <p className="font-display text-sm font-bold leading-none">+3.000</p>
              <p className="mt-1 text-xs text-muted">exames realizados</p>
            </div>
          </div>
          <div
            className="animate-float glass-strong absolute -right-3 bottom-12 hidden items-center gap-2.5 rounded-2xl px-4 py-3 lg:flex"
            style={{ animationDelay: '1.6s' }}
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Sparkles className="size-4" aria-hidden />
            </span>
            <div>
              <p className="font-display text-sm font-bold leading-none">Laudo em 24h úteis</p>
              <p className="mt-1 text-xs text-muted">parecer imediato ao veterinário</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
