import { PARTNER_ADVANTAGES } from '@/lib/data';
import { Reveal } from './ui/reveal';
import { SectionHeading } from './ui/section-heading';
import { WaButton } from './ui/wa-button';

export function Partnership() {
  return (
    <section id="parceiros" className="relative scroll-mt-24 py-24">
      <div
        className="absolute left-1/2 top-1/2 h-[28rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]"
        style={{ background: 'radial-gradient(closest-side, var(--primary), transparent)' }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker="Parcerias"
          title="Seja um Parceiro Ecoprobe"
          subtitle="Condições pensadas para a rotina da sua clínica, com previsibilidade de agenda e suporte prioritário."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNER_ADVANTAGES.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Reveal key={advantage.title} delay={index * 0.08}>
                <article className="group glass relative h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold">{advantage.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {advantage.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <WaButton size="lg">Quero ser parceiro</WaButton>
        </Reveal>
      </div>
    </section>
  );
}
