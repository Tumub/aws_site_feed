import React from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface ExpertiseLayoutProps {
  pillar: "flow" | "physics" | "digital" | "finance";
  icon: LucideIcon;
  accentColor?: "orange" | "cyan" | "emerald" | "amber";
}

export const ExpertiseLayout = ({ pillar, icon: Icon, accentColor = "orange" }: ExpertiseLayoutProps) => {
  const { t } = useLanguage();
  const content = t.expertise_pages[pillar];

  const colorClasses = {
    orange: "text-orange-500 border-orange-500/30 bg-orange-500/10",
    cyan: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    emerald: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
    amber: "text-amber-500 border-amber-500/30 bg-amber-500/10",
  };

  const accentShadow = {
    orange: "shadow-[0_0_34px_hsl(var(--primary)_/_0.3)]",
    cyan: "shadow-[0_0_34px_hsl(var(--accent)_/_0.3)]",
    emerald: "shadow-[0_0_34px_rgba(16,185,129,0.3)]",
    amber: "shadow-[0_0_34px_rgba(245,158,11,0.3)]",
  };

  return (
    <div className="relative z-10 min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-20 lg:px-8">
        
        {/* HERO SECTION */}
        <div className="mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-secondary/50 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.3em] text-accent">
            <Icon className="h-4 w-4" />
            <span>{content.hero_subtitle}</span>
          </div>
          <h1 className="font-display text-4xl uppercase tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-foreground">
            {content.hero_title} <span className="text-accent">///</span>
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {content.overview}
          </p>
        </div>

        {/* IMPACT METRICS BAR */}
        <div className={cn(
          "mb-24 rounded-2xl border border-border/50 bg-secondary/20 p-8 backdrop-blur-md",
          accentShadow[accentColor]
        )}>
          <div className="grid gap-8 md:grid-cols-1">
             <div className="flex flex-col items-center justify-center text-center">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-accent mb-4">Strategic Impact Pulse</span>
                <p className="font-display text-xl uppercase tracking-wide text-foreground sm:text-2xl md:text-3xl">
                   {content.impact_metrics}
                </p>
             </div>
          </div>
        </div>

        <div className="grid gap-20 lg:grid-cols-3">
          {/* CAPABILITIES (Left) */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="font-display text-2xl uppercase tracking-tight text-foreground border-b border-border/50 pb-4">
              {content.capabilities_title}
            </h2>
            <ul className="space-y-6">
              {content.capabilities.map((cap, i) => (
                <li key={i} className="flex gap-4 group">
                  <div className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-xs font-mono transition-colors",
                    colorClasses[accentColor]
                  )}>
                    0{i + 1}
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                    {cap}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* CASE STUDIES (Right) */}
          <div className="lg:col-span-2 space-y-12">
            <h2 className="font-display text-2xl uppercase tracking-tight text-foreground border-b border-border/50 pb-4">
              {content.case_studies_title}
            </h2>
            <div className="grid gap-12">
              {content.case_studies.map((study, i) => (
                <article key={i} className="group relative space-y-4 rounded-xl border border-border/30 bg-card/40 p-8 transition-all hover:border-accent/50 hover:bg-card/60">
                  <h3 className="font-display text-xl uppercase tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                      <span className="font-mono text-[0.6rem] uppercase tracking-widest text-accent">Challenge</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>
                    <div className="space-y-2">
                      <span className="font-mono text-[0.6rem] uppercase tracking-widest text-accent">Action</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.action}</p>
                    </div>
                    <div className="space-y-2">
                      <span className="font-mono text-[0.6rem] uppercase tracking-widest text-accent">Outcome</span>
                      <p className="text-sm font-medium text-foreground leading-relaxed">{study.outcome}</p>
                    </div>
                  </div>
                  {study.slug && (
                    <div className="pt-4 mt-4 border-t border-border/10">
                      <Link 
                        to={`/cases/${study.slug}`} 
                        className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-accent hover:underline"
                      >
                        VIEW FULL OPERATIONS LOG <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* VERIFIX CROSS-LINK (Conditional for Digital) */}
        {pillar === "digital" && (
           <div className="mt-24 rounded-xl border border-cyan-400/20 bg-cyan-950/5 p-8 text-center backdrop-blur-sm">
              <p className="text-muted-foreground mb-4">
                Our digital tools and training programs are deployed through <span className="text-accent font-semibold">VeriFix Logistics</span> — our dedicated logistics intelligence platform.
              </p>
              <a 
                href="https://checkbeforefixing.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-accent hover:underline"
              >
                Explore VeriFix <ArrowRight className="h-4 w-4" />
              </a>
           </div>
        )}

        {/* CALL TO ACTION */}
        <div className="mt-32 text-center">
           <div className="inline-block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <Link 
                to="/apply" 
                className="relative flex items-center gap-3 rounded-full bg-background px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest text-foreground border border-accent/50 transition-all hover:scale-105"
              >
                {content.cta_text}
                <ArrowRight className="h-4 w-4" />
              </Link>
           </div>
        </div>

      </main>
      <SiteFooter />
    </div>
  );
};
