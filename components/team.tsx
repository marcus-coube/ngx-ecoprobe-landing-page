import { UserRound } from 'lucide-react';
import { TEAM } from '@/lib/data';
import { Reveal } from './ui/reveal';
import { SectionHeading } from './ui/section-heading';

export function Team() {
  return (
    <section id="equipe" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeading
        kicker="Equipe"
        title="Quem cuida do diagnóstico do seu pet"
        subtitle="Médicas-veterinárias dedicadas exclusivamente ao diagnóstico por imagem."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((member, index) => (
          <Reveal key={member.name} delay={index * 0.1}>
            <article className="group glass relative overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
              {/* foto (placeholder até as fotos reais) */}
              <div className="dot-grid relative flex aspect-[4/3.4] items-center justify-center bg-surface">
                {member.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.photo}
                    alt={`Foto de ${member.name}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative flex size-24 items-center justify-center">
                    <div className="animate-ping-ring absolute inset-0 rounded-full border border-primary/30" />
                    <span className="flex size-20 items-center justify-center rounded-full bg-primary/12 text-primary">
                      <UserRound className="size-9" aria-hidden />
                    </span>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold">{member.name}</h3>
                <p className="mt-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-primary">
                  {member.role}
                </p>
                <p className="mt-3.5 text-sm leading-relaxed text-muted">{member.bio}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
