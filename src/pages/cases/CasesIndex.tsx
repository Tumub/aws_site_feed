import React from "react";
import { useLanguage } from "@/lib/i18n";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const CasesIndex = () => {
  const { t } = useLanguage();
  
  const cases = Object.entries(t.case_study_pages).map(([slug, content]) => ({
    slug,
    ...content,
  }));

  const pillarColors = {
    Flow: "text-amber-500 border-amber-500/30 bg-amber-500/10",
    Physics: "text-orange-500 border-orange-500/30 bg-orange-500/10",
    Code: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    Capital: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 lg:px-8">
        <div className="mb-16 space-y-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-accent">Operations Log</h2>
          <h1 className="font-display text-5xl uppercase tracking-tighter sm:text-7xl lg:text-8xl">
            Case Studies <span className="text-accent">///</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground font-poppins">
            Real-world execution results across Digital, Supply Chain, Manufacturing, and Finance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {cases.map((caseItem) => (
            <Link
              key={caseItem.slug}
              to={`/cases/${caseItem.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/20 p-8 transition-all hover:bg-card/30 hover:border-accent/30 flex flex-col justify-between min-h-[400px]"
            >
              <div className="space-y-6">
                <div className={cn(
                  "inline-flex items-center gap-3 rounded-full border px-3 py-1 text-[0.65rem] font-mono uppercase tracking-widest",
                  pillarColors[caseItem.pillar]
                )}>
                  {caseItem.pillar}
                </div>
                
                <h3 className="font-display text-3xl uppercase tracking-tight group-hover:text-accent transition-colors leading-tight">
                  {caseItem.title}
                </h3>
                
                <p className="text-muted-foreground font-poppins line-clamp-3 leading-relaxed">
                  {caseItem.subtitle}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {caseItem.impactMetrics.slice(0, 2).map((metric, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="font-display text-2xl text-foreground">{metric.value}</div>
                      <div className="font-mono text-[0.6rem] uppercase tracking-widest text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent group-hover:gap-4 transition-all">
                View Full Log <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default CasesIndex;
