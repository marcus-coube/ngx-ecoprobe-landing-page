import { Check, X } from 'lucide-react';
import { COMPARISON } from '@/lib/data';
import { MediaFrame } from './ui/media-frame';
import { Reveal } from './ui/reveal';
import { SectionHeading } from './ui/section-heading';

export function Comparison() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading
        kicker="Por que domiciliar"
        title="Por que o atendimento domiciliar faz diferença?"
        subtitle="Especialmente para gatos e animais ansiosos, o ambiente do exame muda completamente a experiência — e a qualidade do diagnóstico."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal delay={0.05}>
          <div className="group h-full rounded-3xl border border-line bg-surface p-8 transition-all duration-300 hover:border-red-400/30">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                <X className="size-5" aria-hidden />
              </span>
              <h3 className="font-display text-xl font-bold">{COMPARISON.clinic.title}</h3>
            </div>
            <ul className="mt-6 flex flex-col gap-3.5">
              {COMPARISON.clinic.items.map((text) => (
                <li key={text} className="flex items-start gap-3 text-muted">
                  <X className="mt-1 size-4 shrink-0 text-red-400/70" aria-hidden />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glow-primary group relative h-full overflow-hidden rounded-3xl border border-primary/30 bg-surface p-8 transition-all duration-300 hover:-translate-y-1">
            <div
              className="absolute -right-20 -top-20 size-56 rounded-full opacity-20 blur-3xl"
              style={{ background: 'var(--primary)' }}
              aria-hidden
            />
            <div className="relative flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="size-5" aria-hidden />
              </span>
              <h3 className="font-display text-xl font-bold">{COMPARISON.ecoprobe.title}</h3>
            </div>
            <ul className="relative mt-6 flex flex-col gap-3.5">
              {COMPARISON.ecoprobe.items.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <MediaFrame
            label="Veterinária realizando ultrassom em um gato tranquilo dentro de casa"
            aspect="aspect-[16/10]"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote className="border-l-2 border-primary pl-6">
            <p className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
              “Seu pet não precisa sair da zona de conforto para receber um{' '}
              <span className="text-gradient">diagnóstico de excelência</span>.”
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
