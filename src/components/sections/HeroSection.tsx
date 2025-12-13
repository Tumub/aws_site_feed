import { Button } from "@/components/ui/button";
import factoryBg from "@/assets/real_factory_arm.png";
export const HeroSection = () => {
  return <section id="top" className="relative mb-20 space-y-10 lg:space-y-0 lg:pb-4">
    <style>
      {`
          @keyframes telemetry-scanline {
            0% {
              transform: translateY(-10%);
              opacity: 0;
            }
            15% {
              opacity: 0.85;
            }
            50% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(110%);
              opacity: 0;
            }
          }

          @keyframes telemetry-blink {
            0%, 45% {
              opacity: 1;
            }
            50%, 100% {
              opacity: 0.1;
            }
          }
        `}
    </style>
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
      <div className="space-y-8">


        <div className="space-y-5">
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight uppercase sm:text-5xl md:text-6xl lg:text-7xl">
            Strategy That
            <br />
            <span className="text-primary">Survives The Shopfloor.</span>
          </h1>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base md:text-lg">
            We fuse Digital, Supply Chain, and Manufacturing to evolve your operations from within. No "rip and replace." Just execution that withstands the reality of production.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button asChild className="font-mono text-[0.75rem] uppercase tracking-[0.25em]">
            <a href="#engagement-model">SEE THE RISK-REVERSAL MODEL</a>
          </Button>
          <Button variant="outline" asChild className="border-accent bg-transparent font-mono text-[0.75rem] uppercase tracking-[0.25em] text-accent shadow-[0_0_15px_hsl(var(--accent)_/_0.35)] hover:bg-accent/10 hover:shadow-[0_0_25px_hsl(var(--accent)_/_0.6)]">
            <a href="#approach">OUR APPROACH</a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 text-[0.7rem] text-muted-foreground">
          <div className="space-y-1">
            <p className="font-mono uppercase tracking-[0.25em] text-xs text-muted-foreground/70">
              Embedded Domains
            </p>
            <p>Digital · Supply Chain · Manufacturing Systems</p>
          </div>
          <div className="space-y-1">
            <p className="font-mono uppercase tracking-[0.25em] text-xs text-muted-foreground/70">Engagement Model</p>
            <p>Co-investment, capital-protected diagnostics, shared upside.</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-background via-secondary to-background/90 p-5 shadow-[0_0_40px_hsl(var(--accent)_/_0.45)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--accent))_0,_transparent_58%),radial-gradient(circle_at_bottom,_hsl(var(--primary))_0,_transparent_65%)] opacity-60" />

          <div className="relative space-y-4">
            <div className="flex items-center justify-between text-[0.7rem] font-mono uppercase tracking-[0.25em] text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Live Factory Telemetry
              </span>
              <span className="inline-flex items-center gap-2 text-muted-foreground/70">
                <span className="h-1.5 w-1.5 rounded-full bg-destructive shadow-[0_0_10px_hsl(var(--destructive)_/_0.9)]" style={{
                  animation: "telemetry-blink 1s steps(2, start) infinite"
                }} aria-hidden="true" />
                <span>00:00:03 · LOOP</span>
              </span>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border/80 bg-background/80">
              <img className="absolute inset-0 h-full w-full object-cover opacity-60" src={factoryBg} alt="Factory telemetry feed" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent,_hsl(var(--background)))]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,_hsl(var(--border))_1px,transparent_1px),linear-gradient(180deg,_hsl(var(--border))_1px,transparent_1px)] bg-[length:24px_24px] opacity-30" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)_/_0.16)_0,_transparent_55%)] opacity-25 mix-blend-soft-light" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-10" style={{
                animation: "telemetry-scanline 3s linear infinite"
              }}>
                <div className="h-px w-full bg-[linear-gradient(to_right,_transparent,_hsl(var(--accent))_40%,_hsl(var(--accent))_60%,transparent)] shadow-[0_0_18px_hsl(var(--accent)_/_0.8)] opacity-70" />
              </div>
              <div className="relative flex h-full flex-col justify-between p-4">
                <div className="flex items-center justify-between text-[0.7rem] font-mono text-muted-foreground">
                  <span>/// Video feed: Factory floor · Overlay ready</span>
                  <span className="rounded-full border border-accent/50 bg-accent/10 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.2em] text-[hsl(142_70%_45%)]">
                    SIGNAL: ACTIVE
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-[0.7rem]">
                  <div className="space-y-1 rounded-xl border border-border/80 bg-secondary/40 p-2">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground/70">OEE</p>
                    <p className="text-lg font-semibold text-accent">96.3%</p>
                    <p className="text-[0.65rem] text-muted-foreground">Line availability in live pilots.</p>
                  </div>
                  <div className="space-y-1 rounded-xl border border-border/80 bg-secondary/40 p-2">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground/70">Inventory</p>
                    <p className="text-lg font-semibold text-primary">-18%</p>
                    <p className="text-[0.65rem] text-muted-foreground">Working capital unlocked in 12 months.</p>
                  </div>
                  <div className="space-y-1 rounded-xl border border-border/80 bg-secondary/40 p-2">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground/70">Throughput</p>
                    <p className="text-lg font-semibold text-foreground">+11%</p>
                    <p className="text-[0.65rem] text-muted-foreground">No additional capex, just evolution.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[0.68rem] text-muted-foreground">We design the overlays, telemetry, and decision HUDs that sit on top of your reality.</p>
          </div>
        </div>
      </div>
    </div>
  </section>;
};