import { useState } from "react";
import { AlertTriangle } from "lucide-react";

interface ImageComparisonSliderProps {
  leftLabel: string;
  rightLabel: string;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const ImageComparisonSlider = ({ leftLabel, rightLabel }: ImageComparisonSliderProps) => {
  const [position, setPosition] = useState(50); // percentage, 0 = full physical, 100 = full digital
  const [dragging, setDragging] = useState(false);

  const updatePositionFromClientX = (clientX: number, rect: DOMRect) => {
    const relative = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(relative, 0, 100));
  };

  const handlePointerDown = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setDragging(true);
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();

    if ("touches" in event) {
      const touch = event.touches[0];
      updatePositionFromClientX(touch.clientX, rect);
    } else {
      updatePositionFromClientX(event.clientX, rect);
    }
  };

  const handlePointerMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();

    if ("touches" in event) {
      const touch = event.touches[0];
      updatePositionFromClientX(touch.clientX, rect);
    } else {
      updatePositionFromClientX(event.clientX, rect);
    }
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="relative mx-auto aspect-[21/9] w-full max-w-[1200px] max-h-[60vh] md:max-h-[500px] overflow-hidden rounded-3xl border border-border/80 bg-background/80 shadow-[0_0_34px_hsl(var(--background)_/_0.95)] backdrop-blur-2xl"
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      role="group"
      aria-label="Brownfield vs digital twin comparison slider"
    >
      {/* Right side: Digital evolution (full width) */}
      <div className="absolute inset-0">
        <div className="relative flex h-full items-stretch justify-stretch">
          <div className="relative flex-1">
            <img
              src="/images/brownfield-evolution-wireframe.png"
              alt="Cyan wireframe digital twin of an industrial factory floor"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0">
              {/* Throughput graph HUD */}
              <div className="absolute left-6 top-6 w-40 rounded-lg border border-border/70 bg-background/90 p-2 text-[0.6rem] text-muted-foreground shadow-[0_0_20px_hsl(var(--background)_/_0.9)] backdrop-blur-md">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="font-mono uppercase tracking-[0.25em]">THROUGHPUT</span>
                  <span className="font-semibold text-accent">+12%</span>
                </div>
                <div className="relative h-16 w-full">
                  <div className="absolute inset-x-0 bottom-2 h-px bg-muted" />
                  <svg viewBox="0 0 100 40" className="absolute inset-0 h-full w-full">
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-foreground/50"
                      points="0,32 20,30 40,28 60,26 80,24 100,22"
                    />
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent"
                      points="0,35 15,32 30,30 45,25 60,20 75,18 90,10 100,8"
                    />
                  </svg>
                </div>
              </div>

              {/* OEE status card */}
              <div className="absolute left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-accent/60 bg-background/90 px-3 py-2 text-left shadow-[0_0_28px_hsl(var(--accent)_/_0.65)] backdrop-blur-md">
                <p className="text-[0.55rem] font-mono uppercase tracking-[0.25em] text-muted-foreground">OEE</p>
                <p className="text-xl font-semibold leading-tight text-accent">85%</p>
                <p className="mt-0.5 text-[0.6rem] font-medium text-foreground">OPTIMIZED FLOW</p>
              </div>

              {/* Maintenance alert tag */}
              <div className="absolute right-10 top-1/3 inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--accent)_/_0.3)] bg-[hsl(var(--background)_/_0.8)] px-2.5 py-1 text-[0.6rem] font-mono uppercase tracking-[0.25em] text-accent shadow-[0_0_22px_hsl(var(--accent)_/_0.6)] backdrop-blur-md">
                <AlertTriangle className="h-3 w-3" aria-hidden="true" />
                <span>MAINTENANCE REQUIRED</span>
              </div>

              {/* Digital twin label */}
              <div className="absolute right-6 bottom-6 z-10 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--accent)_/_0.3)] bg-[hsl(var(--background)_/_0.8)] px-3 py-1 text-[0.7rem] font-mono uppercase tracking-[0.25em] text-accent backdrop-blur-md shadow-[0_0_20px_hsl(var(--accent)_/_0.4)]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{rightLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left side: Physical reality (clipped by slider position) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${100 - position}%` }}>
        <div className="relative flex h-full items-stretch justify-stretch">
          <div className="relative flex-1">
            <img
              src="/images/brownfield-reality-factory.png"
              alt="Gritty dark industrial factory floor with pipes and old machinery"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--accent)_/_0.24)] bg-[hsl(var(--background)_/_0.8)] px-3 py-1 text-[0.7rem] font-mono uppercase tracking-[0.25em] text-muted-foreground backdrop-blur-md shadow-[0_0_18px_hsl(var(--background)_/_0.8)]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{leftLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider handle */}
      <div className="absolute inset-y-0 z-20" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
        <div className="relative flex h-full items-center">
          <div className="h-full w-px bg-accent/60" />
          <button
            type="button"
            className="absolute left-1/2 flex -translate-x-1/2 transform items-center justify-center rounded-full border border-accent/60 bg-background/90 px-2 py-1 text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent shadow-[0_0_18px_hsl(var(--accent)_/_0.7)]"
            aria-label="Drag to scan between physical asset and digital twin"
          >
            <span className="mr-1 text-xs">⇆</span>
            <span className="text-[0.6rem] tracking-[0.25em]">DRAG TO SCAN</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const BrownfieldRealitySection = () => {
  return (
    <section className="mb-20 space-y-8" aria-labelledby="brownfield-heading">
      <header className="space-y-3">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-accent">See Through the Complexity</p>
        <h2
          id="brownfield-heading"
          className="font-display text-2xl uppercase tracking-tight sm:text-3xl md:text-4xl"
        >
          Operational Reality.
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          We map the real constraints—systems, contracts, people—and build a staged evolution path.
        </p>
      </header>

      <ImageComparisonSlider leftLabel="PHYSICAL ASSET (Legacy)" rightLabel="DIGITAL TWIN (Future)" />
    </section>
  );
};
