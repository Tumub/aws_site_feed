import * as React from "react";
import { Button } from "@/components/ui/button";
import { LineChart } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export const EngagementSection = () => {
  const { t } = useLanguage();
  const [activePhase, setActivePhase] = React.useState<1 | 2>(1);

  return (
    <section
      id="engagement-model"
      className="mb-20 scroll-mt-28 space-y-8"
      aria-labelledby="engagement-heading"
    >
      <header className="space-y-3">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-accent">
          Risk-Reversal Engagement
        </p>
        <h2
          id="engagement-heading"
          className="font-display text-2xl uppercase tracking-tight sm:text-3xl md:text-4xl"
        >
          {t.engagement.headline}
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          {t.engagement.risk_reversal}
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-background via-secondary/70 to-background/90 p-6 shadow-[0_0_34px_hsl(var(--background)_/_0.9)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,_hsl(var(--accent))_0,_transparent_60%),radial-gradient(circle_at_right,_hsl(var(--primary))_0,_transparent_65%)] opacity-50" />

          <div className="relative space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-[0.6rem] font-mono uppercase tracking-[0.25em] text-muted-foreground/80">
              <LineChart className="h-3.5 w-3.5 text-accent" />
              <span>Engagement Timeline</span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div
                className={`rounded-2xl border p-4 cursor-pointer transition-colors ${activePhase === 1
                  ? "border-secondary/60 bg-secondary/80"
                  : "border-border/70 bg-background/80"
                  }`}
                onMouseEnter={() => setActivePhase(1)}
              >
                <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-accent">
                  PHASE 1
                </p>
                <h3 className="mt-2 font-display text-lg uppercase tracking-tight">
                  {t.engagement.phase1_title.includes("PHASE 1") ? t.engagement.phase1_title.split("-")[1] : t.engagement.phase1_title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.engagement.phase1_desc}
                </p>
                <ul className="mt-3 space-y-1 text-[0.75rem] text-muted-foreground">
                  <li>· Professional fees absorbed by us</li>
                  <li>· You cover only on-site and data costs</li>
                  <li>· Go / no-go decision at the end of the phase</li>
                </ul>
              </div>

              <div
                className={`rounded-2xl border p-4 cursor-pointer transition-colors ${activePhase === 2
                  ? "border-secondary/60 bg-secondary/80"
                  : "border-border/70 bg-background/80"
                  }`}
                onMouseEnter={() => setActivePhase(2)}
              >
                <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-primary">
                  PHASE 2
                </p>
                <h3 className="mt-2 font-display text-lg uppercase tracking-tight">
                  {t.engagement.phase2_title.includes("PHASE 2") ? t.engagement.phase2_title.split("-")[1] : t.engagement.phase2_title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.engagement.phase2_desc}
                </p>
                <ul className="mt-3 space-y-1 text-[0.75rem] text-muted-foreground">
                  <li>· Metrics hard-wired into governance</li>
                  <li>· Shared upside mechanisms available</li>
                  <li>· Embedded capability-building, not dependency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              This isn&apos;t a free workshop. It&apos;s a structured,{" "}
              <span className="font-semibold">capital-protected diagnostic</span>{" "}
              where both sides put{" "}
              <span className="font-semibold">skin in the game</span>. If the
              upside isn&apos;t there, you walk away with clarity—
              <span className="font-semibold">not a sunk fee stack</span>.
            </p>
            <p>
              If we proceed, we transition into a shared-reward model that links
              our economics to the
              <span className="font-semibold"> realized EBITDA</span> and
              working capital improvements.
            </p>
          </div>

          <Button
            className="mt-2 font-mono text-[0.75rem] uppercase tracking-[0.25em]"
            onClick={() => window.location.href = "/apply"}
          >
            {t.engagement.apply_btn}
          </Button>
        </div>
      </div>
    </section>
  );
};
