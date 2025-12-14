import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

export const SiteHeader = () => {
  const { t } = useLanguage();

  const NAV_ITEMS = [
    { label: t.nav.core_expertise, href: "/#power-trio" },
    { label: t.nav.our_approach, href: "/#vertical-integration" },
    { label: t.nav.portfolio, href: "/portfolio" },
    { label: t.nav.insights, href: "/insights" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:py-4">
        <a
          href="/"
          className="flex items-center gap-3 text-sm font-mono uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/60 bg-secondary/40 text-xs font-semibold text-accent shadow-[0_0_18px_hsl(var(--accent)_/_0.4)]">
            TF
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="font-display text-sm font-bold tracking-tight">
              <span className="text-accent">Torque</span><span className="text-primary">Foundry</span>
            </span>
            <span className="text-[0.65rem] font-medium text-foreground/90 tracking-wide">Digital · Supply Chain · Manufacturing · Finance</span>
          </span>
        </a>

        <nav className="flex items-center gap-4">
          <ul className="hidden items-center gap-6 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={cn("transition-colors hover:text-foreground")}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <LanguageSwitcher />

          <Button
            size="sm"
            asChild
            className="font-mono text-[0.7rem] uppercase tracking-[0.25em]"
          >
            <a href="/apply">
              {t.nav.signal_check_btn}
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};