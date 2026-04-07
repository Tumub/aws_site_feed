import React from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface CaseStudyTemplateProps {
  title: string;
  subtitle: string;
  pillar: "Flow" | "Physics" | "Code" | "Capital";
  pillarColor?: string;
  challenge: string;
  action: string;
  outcomes: string[];
  impactMetrics: { value: string; label: string }[];
  relatedCases: { title: string; slug: string }[];
}

export const CaseStudyTemplate = ({
  title,
  subtitle,
  pillar,
  pillarColor,
  challenge,
  action,
  outcomes,
  impactMetrics,
  relatedCases,
}: CaseStudyTemplateProps) => {
  const accentColorClass = {
    Flow: "text-amber-500 border-amber-500/30 bg-amber-500/10",
    Physics: "text-orange-500 border-orange-500/30 bg-orange-500/10",
    Code: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    Capital: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
  }[pillar];

  const accentBorderClass = {
    Flow: "border-amber-500/50",
    Physics: "border-orange-500/50",
    Code: "border-cyan-400/50",
    Capital: "border-emerald-500/50",
  }[pillar];

  const accentTextClass = {
    Flow: "text-amber-500",
    Physics: "text-orange-500",
    Code: "text-cyan-400",
    Capital: "text-emerald-500",
  }[pillar];

  return (
    <div className="relative z-10 min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-20 lg:px-8">
        {/* HERO SECTION */}
        <div className="mb-20 space-y-6">
          <div className={cn(
            "inline-flex items-center gap-3 rounded-full border px-4 py-1.5 text-xs font-mono uppercase tracking-[0.3em]",
            accentColorClass
          )}>
            <span>{pillar}</span>
          </div>
          <h1 className="font-display text-4xl uppercase tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-tight">
            {title} <span className="text-accent">///</span>
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl font-poppins">
            {subtitle}
          </p>
        </div>

        {/* CHALLENGE & ACTION */}
        <div className="grid gap-12 lg:grid-cols-2 mb-24">
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Problem Statement</h2>
            <div className="p-8 rounded-xl border border-border/30 bg-card/20 backdrop-blur-sm">
              <p className="text-muted-foreground leading-relaxed font-poppins">
                {challenge}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Strategic Execution</h2>
            <div className="p-8 rounded-xl border border-border/30 bg-card/20 backdrop-blur-sm">
              <p className="text-muted-foreground leading-relaxed font-poppins">
                {action}
              </p>
            </div>
          </div>
        </div>

        {/* IMPACT METRICS */}
        <div className="mb-24 py-12 border-y border-border/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="font-display text-3xl md:text-5xl text-orange-500 mb-2">{metric.value}</div>
                <div className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* OUTCOMES */}
        <div className="mb-24">
          <h2 className="font-display text-2xl uppercase tracking-tight text-foreground border-b border-border/50 pb-4 mb-8">
            Strategic Outcomes
          </h2>
          <ul className="grid gap-6 md:grid-cols-2">
            {outcomes.map((outcome, i) => (
              <li key={i} className="flex gap-4 items-start group">
                <ChevronRight className="h-5 w-5 shrink-0 text-cyan-400 mt-0.5" />
                <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed font-poppins">
                  {outcome}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* CALL TO ACTION */}
        <div className="mb-32 text-center">
           <div className="inline-block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <Link 
                to="/apply" 
                className="relative flex items-center gap-3 rounded-full bg-background px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest text-foreground border border-accent/50 transition-all hover:scale-105"
              >
                SYSTEM CONTROL DIAGNOSTIC
                <ArrowRight className="h-4 w-4" />
              </Link>
           </div>
        </div>

        {/* RELATED CASES */}
        <div className="pt-16 border-t border-border/30">
          <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 text-center">Related Operations</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedCases.map((caseItem, i) => (
              <Link
                key={i}
                to={`/cases/${caseItem.slug}`}
                className="p-6 rounded-lg border border-border/30 bg-secondary/10 hover:bg-secondary/20 transition-all group flex items-center justify-between"
              >
                <span className="text-sm font-poppins text-muted-foreground group-hover:text-foreground transition-colors">{caseItem.title}</span>
                <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};
