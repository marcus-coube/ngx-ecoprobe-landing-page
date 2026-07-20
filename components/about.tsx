import { HeartPulse, ShieldCheck, Sparkles } from 'lucide-react';
import { MediaFrame } from './ui/media-frame';
import { Reveal } from './ui/reveal';

const PILLARS = [
  { icon: HeartPulse, label: 'Bem-estar animal em primeiro lugar' },
  { icon: Sparkles, label: 'Tecnologia de última geração' },
  { icon: ShieldCheck, label: 'Precisão diagnóstica' },
];

export function About() {
  return (
    <section id="sobre" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <MediaFrame
            label="Transdutor de ultrassom de última geração usado nos atendimentos Ecoprobe"
            src="/assets/banners/equipment.webp"
            aspect="aspect-[4/3.4]"
          />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col items-start gap-6">
          <span className="kicker">Quem somos</span>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Especialistas em levar o <span className="text-gradient">diagnóstico por imagem</span>{' '}
            até o seu pet
          </h2>
          <p className="text-base leading-relaxed text-muted">
            A Ecoprobe oferece serviços de ultrassom veterinário móvel de última geração. Nossa
            missão é fornecer diagnósticos precisos em um ambiente confortável e familiar para o
            seu animal de estimação, reduzindo o estresse tanto para os animais quanto para os
            tutores. Levamos a clínica até você, garantindo uma experiência tranquila e acolhedora
            com tecnologia de ponta.
          </p>
          <ul className="mt-2 flex flex-col gap-4">
            {PILLARS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3.5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
