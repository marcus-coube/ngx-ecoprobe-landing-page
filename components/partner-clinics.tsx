import { PARTNER_CLINICS } from '@/lib/data';
import { SectionHeading } from './ui/section-heading';

/* Carrossel infinito de logos. Quando os logos reais chegarem, basta
   preencher `src` em PARTNER_CLINICS que a imagem substitui o wordmark. */
function ClinicLogo({ name, src }: { name: string; src?: string }) {
  return (
    <li className="marquee-item shrink-0">
      <div className="glass flex h-20 w-52 items-center justify-center rounded-2xl px-6 grayscale transition-all duration-500 hover:grayscale-0 hover:border-primary/40">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={`Logo ${name}`} className="max-h-12 w-auto object-contain" loading="lazy" />
        ) : (
          <span className="text-center font-display text-sm font-bold tracking-wide text-muted transition-colors duration-500">
            {name}
          </span>
        )}
      </div>
    </li>
  );
}

export function PartnerClinics() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker="Prova social"
          title="Clínicas que Confiam na Ecoprobe"
          subtitle="Temos orgulho de colaborar com clínicas veterinárias que compartilham nosso compromisso com excelência, tecnologia e bem-estar animal."
        />
      </div>

      <div className="marquee-paused relative mt-14">
        {/* máscaras laterais */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
        <ul className="animate-marquee flex w-max gap-5" aria-label="Clínicas parceiras">
          {[...PARTNER_CLINICS, ...PARTNER_CLINICS].map((clinic, index) => (
            <ClinicLogo key={`${clinic.name}-${index}`} {...clinic} />
          ))}
        </ul>
      </div>
    </section>
  );
}
