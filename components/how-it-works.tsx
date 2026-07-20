import { Check } from 'lucide-react';
import { STEPS } from '@/lib/data';
import { MediaFrame } from './ui/media-frame';
import { Reveal } from './ui/reveal';
import { SectionHeading } from './ui/section-heading';

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeading
        kicker="Como funciona"
        title="Como funciona o exame, do agendamento ao laudo"
        subtitle="Um processo simples e transparente, pensado para o conforto do pet e a tranquilidade do tutor."
      />

      <div className="relative mt-16">
        {/* linha da timeline (desktop) */}
        <div
          className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 lg:block"
          aria-hidden
        />
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={index * 0.08}>
                <li className="group relative flex h-full flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="glass relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl text-primary transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <span className="font-mono text-xs tracking-[0.25em] text-muted">
                      PASSO {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                  {step.highlight ? (
                    <p className="mt-auto rounded-2xl border border-primary/25 bg-primary/[0.07] p-4 text-sm leading-relaxed">
                      {step.highlight}
                    </p>
                  ) : null}
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>

      <div className="mt-16 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <MediaFrame
            label="Gato relaxado recebendo ultrassom em ambiente residencial confortável"
            src="/assets/banners/cat-home.webp"
            aspect="aspect-[16/10]"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass flex h-full flex-col justify-center gap-5 rounded-3xl p-8 sm:p-10">
            <p className="font-display text-xl font-semibold leading-snug sm:text-2xl">
              Atendimentos domiciliares são realizados{' '}
              <span className="text-primary">mediante pedido médico</span>.
            </p>
            <ul className="flex flex-col gap-3">
              {['Parecer imediato ao veterinário responsável', 'Laudo completo em até 24h úteis'].map(
                (text) => (
                  <li key={text} className="flex items-center gap-3 text-muted">
                    <span className="flex size-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    {text}
                  </li>
                ),
              )}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
