import { MapPin } from 'lucide-react';
import { CITIES } from '@/lib/data';
import { Reveal } from './ui/reveal';
import { WaButton } from './ui/wa-button';

/* posições aproximadas (ilustrativas) das cidades ao redor de Curitiba */
const CITY_POSITIONS: Record<string, { top: string; left: string }> = {
  Curitiba: { top: '46%', left: '50%' },
  'São José dos Pinhais': { top: '64%', left: '68%' },
  Colombo: { top: '22%', left: '62%' },
  Pinhais: { top: '38%', left: '74%' },
  Araucária: { top: '72%', left: '30%' },
  'Campo Largo': { top: '40%', left: '16%' },
  'Fazenda Rio Grande': { top: '84%', left: '52%' },
};

export function Coverage() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="flex flex-col items-start gap-6">
          <span className="kicker">Área de atendimento</span>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Atendemos <span className="text-gradient">Curitiba e Região Metropolitana</span>
          </h2>
          <p className="text-base leading-relaxed text-muted">
            Consulte disponibilidade e valores para sua região pelo WhatsApp.
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {CITIES.map((city) => (
              <li
                key={city}
                className="glass rounded-full px-4 py-2 text-sm text-muted transition-colors duration-300 hover:border-primary/40 hover:text-primary"
              >
                {city}
              </li>
            ))}
          </ul>
          <WaButton className="mt-2">Consultar minha região</WaButton>
        </Reveal>

        {/* mapa ilustrativo estilo radar */}
        <Reveal delay={0.12}>
          <div className="glass relative overflow-hidden rounded-[2rem] p-3">
            <div className="dot-grid relative aspect-square overflow-hidden rounded-3xl bg-surface sm:aspect-[5/4]">
              <div className="absolute inset-0 m-auto aspect-square w-[88%]">
                <div className="absolute inset-0 rounded-full border border-primary/12" />
                <div className="absolute inset-[16%] rounded-full border border-primary/18" />
                <div className="absolute inset-[32%] rounded-full border border-primary/24" />
                <div
                  className="animate-sweep absolute inset-0 rounded-full"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(255,107,0,0.18) 350deg, rgba(255,107,0,0.4) 360deg)',
                  }}
                />
              </div>
              {CITIES.map((city) => {
                const pos = CITY_POSITIONS[city];
                const isCenter = city === 'Curitiba';
                return (
                  <div
                    key={city}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={pos}
                  >
                    <div className="group flex flex-col items-center gap-1.5">
                      <span
                        className={`relative flex items-center justify-center rounded-full ${
                          isCenter
                            ? 'size-5 bg-primary shadow-[0_0_18px_4px_var(--glow)]'
                            : 'size-2.5 bg-accent/80'
                        }`}
                      >
                        {isCenter && (
                          <span className="animate-ping-ring absolute inset-0 rounded-full border border-primary" />
                        )}
                      </span>
                      <span
                        className={`whitespace-nowrap rounded-full px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] ${
                          isCenter ? 'glass-strong text-ink' : 'text-muted'
                        }`}
                      >
                        {city}
                      </span>
                    </div>
                  </div>
                );
              })}
              <p className="absolute bottom-4 left-5 flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                <MapPin className="size-3.5 text-primary" aria-hidden />
                Mapa ilustrativo
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
