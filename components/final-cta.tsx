import { PhoneOff } from 'lucide-react';
import { Reveal } from './ui/reveal';
import { WaButton } from './ui/wa-button';

export function FinalCta() {
  return (
    <section id="contato" className="relative scroll-mt-24 px-4 py-24 sm:px-6">
      <Reveal>
        <div className="glass relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="dot-grid absolute inset-0" aria-hidden />
          <div
            className="absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full opacity-25 blur-[100px]"
            style={{ background: 'radial-gradient(closest-side, var(--primary), transparent)' }}
            aria-hidden
          />
          <div className="relative flex flex-col items-center gap-7">
            <span className="kicker">Agende agora</span>
            <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Seu Pet Merece um Diagnóstico{' '}
              <span className="text-gradient">Preciso e Sem Estresse</span>
            </h2>
            <p className="max-w-xl text-lg text-muted">
              Fale com nossa equipe agora mesmo pelo WhatsApp.
            </p>
            <WaButton origin="cta_final" size="lg">
              Agendar Atendimento
            </WaButton>
            <p className="glass mt-2 inline-flex items-center gap-2.5 rounded-full border-primary/30 px-5 py-2.5 text-sm font-semibold">
              <PhoneOff className="size-4 text-primary" aria-hidden />
              NÃO ATENDEMOS LIGAÇÕES. Atendimento exclusivamente via WhatsApp.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
