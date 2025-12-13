import { useLanguage } from "@/lib/i18n";

export const SiteFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-0">
        <p className="font-mono uppercase tracking-[0.25em]">
          {t.footer.tagline}
        </p>
        <p className="text-[0.7rem] text-muted-foreground/80">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
};
