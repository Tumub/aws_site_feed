export const InsightsSection = () => {
  return (
    <section
      id="insights"
      className="mt-4 space-y-4 border-t border-border/60 pt-10"
      aria-labelledby="insights-heading"
    >
      <header className="space-y-2">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-accent">Insights</p>
        <h2
          id="insights-heading"
          className="font-display text-xl uppercase tracking-tight sm:text-2xl"
        >
          Field Notes from the Line.
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          Short, opinionated takes on what&apos;s actually working in brownfield digital, supply chain, and manufacturing
          transformations—no hype, just operating reality.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="group relative overflow-hidden rounded-2xl border border-border/70 border-l-4 border-l-primary bg-background/10 p-4 text-sm text-muted-foreground backdrop-blur-xl transition-all duration-300 hover:bg-background/20 hover:border-accent/80 hover:shadow-[0_0_30px_hsl(var(--accent)_/_0.45)]">
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-60 bg-[radial-gradient(circle_at_center,_hsl(var(--accent))_0,_transparent_55%)]" />
          <div className="relative">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/80">
              Supply Chain
            </p>
            <p className="mt-2">
              Why most &quot;control towers&quot; fail: they optimize slideware, not the planner&apos;s 7AM reality.
            </p>
          </div>
        </article>
        <article className="group relative overflow-hidden rounded-2xl border border-border/70 border-l-4 border-l-border bg-background/10 p-4 text-sm text-muted-foreground backdrop-blur-xl transition-all duration-300 hover:bg-background/20 hover:border-accent/80 hover:shadow-[0_0_30px_hsl(var(--accent)_/_0.45)]">
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-60 bg-[radial-gradient(circle_at_center,_hsl(var(--accent))_0,_transparent_55%)]" />
          <div className="relative">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/80">Manufacturing</p>
            <p className="mt-2">
              The fastest throughput gains rarely come from robots—they come from fixing invisible micro-constraints.
            </p>
          </div>
        </article>
        <article className="group relative overflow-hidden rounded-2xl border border-border/70 border-l-4 border-l-accent bg-background/10 p-4 text-sm text-muted-foreground backdrop-blur-xl transition-all duration-300 hover:bg-background/20 hover:border-accent/80 hover:shadow-[0_0_30px_hsl(var(--accent)_/_0.45)]">
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-60 bg-[radial-gradient(circle_at_center,_hsl(var(--accent))_0,_transparent_55%)]" />
          <div className="relative">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/80">Digital Backbone</p>
            <p className="mt-2">
              AI that ignores messy master data is theatre. Real impact comes from models that embrace imperfection.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
