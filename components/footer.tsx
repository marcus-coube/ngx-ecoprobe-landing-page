import { AtSign, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { CITIES } from '@/lib/data';
import { EMAIL, INSTAGRAM_URL, NAV_LINKS, WHATSAPP_DISPLAY } from '@/lib/site';
import { WaButton } from './ui/wa-button';
import { WaLink } from './ui/wa-link';

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div className="flex flex-col items-start gap-5">
          <a href="#" className="flex items-center gap-2.5" aria-label="Ecoprobe — início">
            <Image
              src="/assets/logo_ecoprobe.png"
              alt="Logo Ecoprobe"
              width={44}
              height={44}
              className="size-11 rounded-full bg-primary"
            />
            <span className="font-display text-xl font-bold tracking-tight">
              Eco<span className="text-primary">probe</span>
            </span>
          </a>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Ultrassom Veterinário Móvel em Curitiba e Região Metropolitana. Diagnóstico por imagem
            de alto padrão, no conforto do lar ou em clínicas parceiras.
          </p>
          <WaButton origin="rodape">Agendar pelo WhatsApp</WaButton>
        </div>

        <nav className="flex flex-col gap-3" aria-label="Links rápidos">
          <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
            Links rápidos
          </h3>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-fit text-sm text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Contato</h3>
          <WaLink
            origin="rodape_contato"
            className="w-fit text-sm text-muted transition-colors hover:text-primary"
          >
            WhatsApp {WHATSAPP_DISPLAY}
          </WaLink>
          <a
            href={`mailto:${EMAIL}`}
            className="flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            <Mail className="size-4" aria-hidden />
            {EMAIL}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            <AtSign className="size-4" aria-hidden />
            @ecoprobe
          </a>
          <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-muted">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
            <span>Ultrassom veterinário em {CITIES.join(', ')} e região.</span>
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-muted sm:flex-row sm:px-6 sm:text-left">
          <p>© {new Date().getFullYear()} Ecoprobe — Ultrassom Veterinário Móvel. Todos os direitos reservados.</p>
          <p className="font-mono uppercase tracking-[0.18em]">Curitiba • PR • Brasil</p>
        </div>
      </div>
    </footer>
  );
}
