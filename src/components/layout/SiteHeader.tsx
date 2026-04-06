import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const SiteHeader = () => {
  const { t } = useLanguage();

  const NAV_ITEMS = [
    { label: t.nav.core_expertise, href: "/#power-trio" },
    { label: t.nav.our_approach, href: "/#vertical-integration" },
    { label: t.nav.portfolio, href: "/portfolio" },
    { label: t.nav.insights, href: "/insights" },
    { label: t.nav.about, href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:py-4">
        <a
          href="/"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#07B9D5]/60 bg-[#263040]/40 shadow-[0_0_15px_-3px_rgba(7,185,213,0.3)] backdrop-blur-sm">
            <span className="font-mono text-sm font-bold tracking-tighter text-[#07B9D5]">TF</span>
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-mono text-lg font-bold uppercase tracking-[0.25em] leading-none">
              <span className="text-[#07B9D5]">TORQUE</span>
              <span className="text-[#F3671B]">FOUNDRY</span>
            </div>
            <div className="hidden lg:flex flex-col text-[0.6rem] font-mono font-medium text-slate-400 tracking-wider leading-tight mt-1">
              <span>Industrial Execution Advisory</span>
            </div>
          </div>
        </a>

        <nav className="flex items-center gap-2 lg:gap-6">
          <ul className="hidden items-center gap-6 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={cn("transition-colors hover:text-foreground")}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            <Button
              size="sm"
              asChild
              className="hidden sm:inline-flex font-mono text-[0.7rem] uppercase tracking-[0.25em]"
            >
              <a href="/apply">
                {t.nav.signal_check_btn}
              </a>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-xl border-l border-border/50">
                <div className="flex flex-col gap-8 mt-10">
                  <div className="flex flex-col gap-4">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground/60 border-b border-border/50 pb-2">Navigation</p>
                    <ul className="flex flex-col gap-4 text-sm font-mono uppercase tracking-[0.15em]">
                      {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                          <a href={item.href} className="transition-colors hover:text-accent py-2 block">
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground/60 border-b border-border/50 pb-2">Action</p>
                    <Button
                      asChild
                      className="w-full font-mono text-[0.7rem] uppercase tracking-[0.25em] h-12"
                    >
                      <a href="/apply">
                        {t.nav.signal_check_btn}
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header >
  );
};