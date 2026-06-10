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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(index % 4) * 0.07}>
                <article className="group glass relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                  <div
                    className="absolute -right-12 -top-12 size-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
                    style={{ background: 'var(--primary)' }}
                    aria-hidden
                  />
                  <span className="relative flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="relative mt-5 font-display text-lg font-bold">{service.title}</h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-muted">
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
