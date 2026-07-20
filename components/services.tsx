import { SERVICES } from '@/lib/data';
import { Reveal } from './ui/reveal';
import { SectionHeading } from './ui/section-heading';

export function Services() {
  return (
    <section id="servicos" className="relative scroll-mt-24 py-24">
      <div className="dot-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker="Serviços"
          title="Exames de ultrassom veterinário com precisão de referência"
          subtitle="Modalidades diagnósticas e procedimentos ecoguiados realizados com equipamentos de alta definição, em clínicas parceiras ou no domicílio."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(index % 4) * 0.07}>
                <article className="group glass relative h-full overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 sm:rounded-3xl sm:p-7">
                  <div
                    className="absolute -right-12 -top-12 size-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
                    style={{ background: 'var(--primary)' }}
                    aria-hidden
                  />
                  <span className="relative flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white sm:size-12 sm:rounded-2xl">
                    <Icon className="size-5 sm:size-6" aria-hidden />
                  </span>
                  <h3 className="relative mt-3 font-display text-sm font-bold leading-snug sm:mt-5 sm:text-lg">{service.title}</h3>
                  <p className="relative mt-1.5 text-xs leading-relaxed text-muted sm:mt-2.5 sm:text-sm">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
