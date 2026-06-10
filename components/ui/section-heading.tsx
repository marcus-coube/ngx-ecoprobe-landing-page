import { Reveal } from './reveal';

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'center',
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <Reveal className={`flex flex-col gap-4 ${alignment}`}>
      <span className="kicker">{kicker}</span>
      <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle ? <p className="max-w-2xl text-base leading-relaxed text-muted">{subtitle}</p> : null}
    </Reveal>
  );
}
