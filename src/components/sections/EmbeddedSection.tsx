import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CASE_STUDIES = [
  {
    title: "Migrating Legacy ERP without stopping the line.",
    description:
      "Re-platformed core planning and execution from a 20-year-old ERP while maintaining service levels and OEE across three plants.",
    metrics: [
      "0 unscheduled line stops during cutover",
      "+9% schedule adherence in 6 months",
    ],
  },
  {
    title: "Unlocking $145M in Inventory.",
    description:
      "Segmented SKUs, redefined buffers, and synchronized procurement with true demand signals instead of spreadsheet heuristics.",
    metrics: [
      "-$145M net working capital",
      "+3.5 pts service improvement",
    ],
  },
];

export const EmbeddedSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const delta = direction === "left" ? -320 : 320;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section
      id="case-studies"
      className="mb-20 space-y-6 border-y border-border/60 py-12 lg:py-16"
      aria-labelledby="embedded-heading"
    >
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="space-y-3">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-accent">Embedded Philosophy</p>
          <h2
            id="embedded-heading"
            className="font-display text-2xl uppercase tracking-tight sm:text-3xl md:text-4xl"
          >
            Nested, Not Just Near.
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            We don&apos;t just advise. We embed. We sit inside your stand-ups, shift handovers, and control towers—helping your teams
            change from within.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 border-border/70 bg-secondary/50 text-muted-foreground hover:bg-secondary/80"
            aria-label="Previous case study"
            onClick={() => scroll("left")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 border-border/70 bg-secondary/50 text-muted-foreground hover:bg-secondary/80"
            aria-label="Next case study"
            onClick={() => scroll("right")}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-5 overflow-x-auto pb-2 pt-1 [scrollbar-width:none] [-ms-overflow-style:none]"
      >
        <div className="flex gap-5 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
          {CASE_STUDIES.map((cs) => (
            <article
              key={cs.title}
              className="relative w-80 shrink-0 snap-start rounded-2xl border border-border/70 bg-card/80 p-5 shadow-[0_0_26px_hsl(var(--background)_/_0.9)] backdrop-blur-2xl"
            >
              <p className="text-[0.7rem] font-mono uppercase tracking-[0.2em] text-muted-foreground/80">
                War Story
              </p>
              <h3 className="mt-2 font-display text-lg uppercase tracking-tight text-foreground">
                {cs.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{cs.description}</p>
              <ul className="mt-4 space-y-1 text-[0.75rem] text-muted-foreground">
                {cs.metrics.map((m) => (
                  <li key={m} className="flex items-center gap-2">
                    <span className="h-[1px] w-6 bg-accent/60" aria-hidden="true" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
