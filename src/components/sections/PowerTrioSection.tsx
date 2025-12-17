import { useEffect, useState } from "react";
import { Cog, Truck, Cpu, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

export const PowerTrioSection = () => {
  const { t } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pulseProgress, setPulseProgress] = useState(0);

  const TRIO_CARDS = [
    {
      id: "manufacturing",
      title: t.trio.manufacturing.title,
      subtitle: t.trio.manufacturing.subtitle,
      icon: Cog,
      tone: "neutral" as const,
      bullets: t.trio.manufacturing.bullets,
    },
    {
      id: "supply-chain",
      title: t.trio.supply_chain.title,
      subtitle: t.trio.supply_chain.subtitle,
      icon: Truck,
      tone: "amber" as const,
      bullets: t.trio.supply_chain.bullets,
    },
    {
      id: "digital-backbone",
      title: t.trio.digital.title,
      subtitle: t.trio.digital.subtitle,
      icon: Cpu,
      tone: "cyan" as const,
      bullets: t.trio.digital.bullets,
    },
    {
      id: "finance",
      title: t.trio.finance.title,
      subtitle: t.trio.finance.subtitle,
      icon: LineChart,
      tone: "emerald" as const, // Distinct tone for finance
      bullets: t.trio.finance.bullets,
    },
  ];

  useEffect(() => {
    let frameId: number;
    const duration = 5000; // 5s for a full pass
    const start = performance.now();

    const loop = () => {
      const now = performance.now();
      const elapsed = (now - start) % duration;
      setPulseProgress(elapsed / duration);
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section id="power-trio" className="mb-20 scroll-mt-28 space-y-8" aria-labelledby="trio-heading">
      <header className="space-y-3">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-accent">{t.nav.core_expertise}</p>
        <h2
          id="trio-heading"
          className="font-display text-2xl uppercase tracking-tight sm:text-3xl md:text-4xl"
        >
          {t.trio.headline}
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          {t.trio.description}
        </p>
      </header>

      <div className="relative mt-6">
        {/* Convergence line behind the trio */}
        <div className="pointer-events-none absolute inset-x-2 top-14 hidden h-px bg-accent/25 blur-[0.5px] md:block" />

        {/* Flowing data pulse dot */}
        <div className="pointer-events-none absolute inset-x-2 top-14 hidden md:block">
          <div
            className="absolute left-0 top-1/2 h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_hsl(var(--accent)_/_0.95)]"
            style={{ transform: `translateX(${pulseProgress * 100}%) translateY(-50%)` }}
          />
        </div>

        <div className="grid relative gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TRIO_CARDS.map((card, index) => {
            const Icon = card.icon;
            const isDimmed = hoveredId !== null && hoveredId !== card.id;
            const isActive = hoveredId === card.id;

            const center = TRIO_CARDS.length > 1 ? index / (TRIO_CARDS.length - 1) : 0.5;
            const distance = Math.abs(pulseProgress - center);
            const isPulseNear = distance < 0.18;

            return (
              <article
                key={card.id}
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={cn(
                  "group relative flex flex-col justify-between rounded-2xl border bg-card/70 p-5 shadow-[0_0_26px_hsl(var(--background)_/_0.9)] backdrop-blur-2xl transition-all duration-300",
                  isDimmed && "scale-[0.97] opacity-40",
                  isActive && "border-accent shadow-[0_0_34px_hsl(var(--accent)_/_0.55)]",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/50 px-3 py-1 text-[0.65rem] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {card.title}
                    </div>
                    <h3 className="font-display text-lg uppercase tracking-tight text-foreground">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{card.subtitle}</p>
                  </div>
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl border bg-secondary/60 text-accent shadow-[0_0_18px_hsl(var(--accent)_/_0.35)] transition-shadow duration-300",
                      card.tone === "amber" && "text-primary border-primary/60 bg-primary/10",
                      card.tone === "cyan" && "text-accent border-accent/60 bg-accent/10",
                      card.tone === "emerald" && "text-emerald-500 border-emerald-500/60 bg-emerald-500/10", // Added emerald handling
                      isPulseNear && "shadow-[0_0_28px_hsl(var(--accent)_/_0.95)]",
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[0.4rem] h-[1px] w-4 bg-accent/60" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between text-[0.7rem] font-mono uppercase tracking-[0.25em] text-muted-foreground/80">
                  <span>Embedded · {card.title}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
