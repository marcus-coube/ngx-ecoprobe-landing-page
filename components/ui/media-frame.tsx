import { ScanLine } from 'lucide-react';

/* Placeholder premium para fotos reais. Quando a imagem existir,
   basta passar `src` que ela substitui a arte de sonar. */
export function MediaFrame({
  label,
  src,
  alt,
  aspect = 'aspect-[4/3]',
  className = '',
}: {
  label: string;
  src?: string;
  alt?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-line bg-surface ${aspect} ${className}`}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt ?? label} className="h-full w-full object-cover" loading="lazy" />
      ) : (
        <div className="dot-grid absolute inset-0 flex flex-col items-center justify-center gap-5 p-8">
          {/* arte de sonar */}
          <div className="relative flex size-36 items-center justify-center sm:size-44">
            <div className="absolute inset-0 rounded-full border border-primary/20" />
            <div className="absolute inset-[18%] rounded-full border border-primary/25" />
            <div className="absolute inset-[36%] rounded-full border border-primary/30" />
            <div
              className="animate-sweep absolute inset-0 rounded-full"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0deg, transparent 290deg, rgba(255,107,0,0.35) 350deg, rgba(255,107,0,0.7) 360deg)',
              }}
            />
            <div className="animate-ping-ring absolute inset-0 rounded-full border border-primary/40" />
            <span className="relative flex size-11 items-center justify-center rounded-full bg-primary/15 text-primary">
              <ScanLine className="size-5" aria-hidden />
            </span>
          </div>
          <p className="max-w-60 text-center font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
            {label}
          </p>
        </div>
      )}
      {/* moldura de brilho no topo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </div>
  );
}
