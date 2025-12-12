import * as React from "react";
import { Scan, CircuitBoard, Cog, Infinity } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    id: "deep-dive-diagnostic",
    label: "Step 1",
    title: "Deep-Dive Diagnostic",
    subtitle: "We map the messy reality of your brownfield site.",
    body: "We quantify constraints before writing code.",
    side: "left" as const,
    icon: Scan,
    tone: "accent" as const,
    trigger: 0.1,
  },
  {
    id: "blueprint",
    label: "Step 2",
    title: "The Blueprint",
    subtitle: "We design the digital overlay that fits your physical reality.",
    body: "No fantasy architectures. Only systems your floor can actually run.",
    side: "right" as const,
    icon: CircuitBoard,
    tone: "primary" as const,
    trigger: 0.35,
  },
  {
    id: "embedded-execution",
    label: "Step 3",
    title: "Embedded Execution",
    subtitle: "We ship change from inside your operation.",
    body: "We don\'t hand off the plan. We code and configure alongside your team on the floor to upskill them in real-time.",
    side: "left" as const,
    icon: Cog,
    tone: "accent" as const,
    trigger: 0.6,
  },
  {
    id: "continuous-optimization",
    label: "Step 4",
    title: "Continuous Optimization",
    subtitle: "We keep optimising until the P&L reflects the change.",
    body: "We verify the ROI and tune the system as conditions shift, not just at quarter-end reviews.",
    side: "right" as const,
    icon: Infinity,
    tone: "accent" as const,
    trigger: 0.85,
  },
];

export const VerticalIntegrationSection = () => {
  const [lineProgress, setLineProgress] = React.useState(0);
  const sectionRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      // If section is completely out of view, clamp progress.
      if (rect.bottom <= 0) {
        setLineProgress(0);
        return;
      }
      if (rect.top >= viewportHeight) {
        setLineProgress(0);
        return;
      }

      const totalScrollable = rect.height + viewportHeight;
      const travelled = viewportHeight - rect.top;
      const raw = travelled / totalScrollable;
      const clamped = Math.min(Math.max(raw * 1.4, 0), 1);

      setLineProgress(clamped * 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      id="vertical-integration"
      ref={sectionRef}
      className="mb-20 space-y-8"
      aria-labelledby="vertical-integration-heading"
    >
      <header className="space-y-3">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-accent">
          Our Approach
        </p>
        <h2
          id="vertical-integration-heading"
          className="font-display text-2xl uppercase tracking-tight sm:text-3xl md:text-4xl"
        >
          Vertical System Integration Timeline
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          We don&apos;t sell a generic framework. We run a fixed protocol that ties your brownfield reality to a live Digital Backbone
          from diagnostic through to P&amp;L.
        </p>
      </header>

      <div className="relative">
        {/* Left-aligned digital thread */}
        <div className="pointer-events-none absolute inset-y-0 left-3 w-px md:left-4">
          <div className="h-full w-px bg-border/60" aria-hidden="true" />
          <div
            className="absolute left-1/2 top-0 w-[3px] -translate-x-1/2 rounded-full bg-accent shadow-[0_0_24px_hsl(var(--accent)_/_0.9)]"
            style={{ height: `${lineProgress}%` }}
            aria-hidden="true"
          />
        </div>

        <ol className="space-y-10 md:space-y-16">
          {STEPS.map((step) => {
            const Icon = step.icon;
            const isActive = lineProgress / 100 >= step.trigger;

            const toneClasses =
              step.tone === "primary"
                ? "text-primary border-primary/60 bg-primary/10"
                : "text-accent border-accent/60 bg-accent/10";

            return (
              <li key={step.id} className="relative flex items-start gap-6 pl-10 md:pl-12">
                {/* Node on the line */}
                <div className="absolute left-0 top-0 flex flex-col items-center md:left-1">
                  <div
                    className={cn(
                      "z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent/40 bg-background/90 shadow-[0_0_18px_hsl(var(--background)_/_0.95)] transition-all duration-300",
                      isActive && "border-accent bg-accent/20 shadow-[0_0_26px_hsl(var(--accent)_/_0.9)]",
                    )}
                  >
                    <span
                      className={cn(
                        "block h-2 w-2 rounded-full bg-accent/40",
                        isActive && "bg-accent",
                      )}
                    />
                  </div>
                </div>

                {/* Card */}
                <article
                  className={cn(
                    "group relative w-full max-w-2xl rounded-2xl border bg-card/70 p-5 shadow-[0_0_26px_hsl(var(--background)_/_0.9)] backdrop-blur-2xl transition-all duration-300",
                    isActive && "border-accent shadow-[0_0_34px_hsl(var(--accent)_/_0.55)]",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/50 px-3 py-1 text-[0.6rem] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{step.label}</span>
                      </div>
                      <h3 className="font-display text-base uppercase tracking-tight sm:text-lg">
                        {step.title}
                      </h3>
                      <p className="text-xs text-muted-foreground sm:text-sm">{step.subtitle}</p>
                    </div>
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl border bg-secondary/60 text-accent shadow-[0_0_18px_hsl(var(--accent)_/_0.35)] transition-shadow duration-300",
                        toneClasses,
                        isActive && "shadow-[0_0_28px_hsl(var(--accent)_/_0.95)]",
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground">{step.body}</p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
