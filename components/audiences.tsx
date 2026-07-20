import { HOME_BENEFITS, CLINIC_BENEFITS } from '@/lib/data';
import { MediaFrame } from './ui/media-frame';
import { Reveal } from './ui/reveal';
import { WaButton } from './ui/wa-button';

/* Seções "Atendimento Domiciliar" (tutores) e "Parceria para Clínicas" */
export function Audiences() {
  return (
    <section id="atendimento" className="relative scroll-mt-24 py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 sm:px-6">
        {/* Tutores */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="flex flex-col items-start gap-6">
            <span className="kicker">Para tutores</span>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Ultrassom Veterinário no <span className="text-gradient">Conforto da Sua Casa</span>
            </h2>
            <p className="text-base leading-relaxed text-muted">
              O exame acontece onde o seu pet já se sente seguro — sem transporte, sem sala de
              espera, sem contato com outros animais.
            </p>
            <ul className="grid gap-3.5 sm:grid-cols-2">
              {HOME_BENEFITS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm font-medium">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="size-4.5" aria-hidden />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
            <WaButton className="mt-2">Agendar atendimento domiciliar</WaButton>
          </Reveal>
          <Reveal delay={0.12}>
            <MediaFrame
              label="Cão relaxado na almofada Ecoprobe durante o exame em casa"
              src="/assets/banners/dog-home.webp"
              aspect="aspect-[4/3.2]"
            />
          </Reveal>
        </div>

        {/* Clínicas */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1" delay={0.12}>
            <MediaFrame
              label="Profissional da Ecoprobe analisando material de citologia em clínica veterinária parceira"
              src="/assets/banners/equipment-2.webp"
              aspect="aspect-[4/3.2]"
            />
          </Reveal>
          <Reveal className="order-1 flex flex-col items-start gap-6 lg:order-2">
            <span className="kicker">Para clínicas</span>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Parceria para <span className="text-gradient">Clínicas Veterinárias</span>
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Oferecemos suporte especializado para clínicas veterinárias que desejam
              disponibilizar exames de ultrassom com qualidade premium sem necessidade de investir
              em estrutura própria.
            </p>
            <ul className="grid gap-3.5 sm:grid-cols-2">
              {CLINIC_BENEFITS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm font-medium">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="size-4.5" aria-hidden />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
            <WaButton className="mt-2" variant="ghost">
              Falar sobre parceria no WhatsApp
            </WaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
