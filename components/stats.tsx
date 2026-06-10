import { STATS } from '@/lib/data';
import { Counter } from './ui/counter';
import { Reveal } from './ui/reveal';

export function Stats() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Reveal>
        <div className="glass grid gap-px overflow-hidden rounded-3xl sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="group relative flex flex-col gap-2 bg-surface/60 p-8 transition-colors duration-300 hover:bg-primary/[0.06]"
            >
              <span className="font-display text-3xl font-extrabold tracking-tight text-gradient lg:text-4xl">
                {stat.isNumber ? (
                  <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                ) : (
                  stat.text
                )}
              </span>
              <span className="text-sm leading-relaxed text-muted">{stat.label}</span>
              <span className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
