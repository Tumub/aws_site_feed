import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { useLanguage } from "@/lib/i18n";

const Insights = () => {
    const { t } = useLanguage();
    const ARTICLES = t.insights_page.articles;

    return (
        <div className="relative z-10 min-h-screen bg-background text-foreground">
            <SiteHeader />
            <main className="mx-auto max-w-4xl px-4 py-16 lg:px-0">
                <div className="mb-12 space-y-4">
                    <h1 className="font-display text-4xl uppercase tracking-tight sm:text-5xl text-foreground">
                        {t.insights_page.headline} <span className="text-accent">///</span>
                    </h1>
                    <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                        {t.insights_page.subheadline}
                    </p>
                </div>

                <div className="grid gap-8">
                    {ARTICLES.map((article, index) => (
                        <article key={index} className="group relative border-l-2 border-border pl-6 hover:border-accent transition-colors duration-300">
                            <div className="mb-2 flex items-center gap-3">
                                <span className="font-mono text-xs text-primary uppercase tracking-widest">
                                    {t.insights_page.note_prefix}0{index + 1}
                                </span>
                                <span className="rounded-full bg-secondary/50 px-2 py-0.5 text-[0.6rem] font-mono uppercase text-muted-foreground">
                                    {article.tag}
                                </span>
                            </div>
                            <h2 className="mb-3 font-display text-2xl uppercase text-foreground group-hover:text-accent transition-colors">
                                {article.title}
                            </h2>
                            <p className="text-muted-foreground max-w-2xl">
                                {article.summary}
                            </p>
                            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs font-mono text-accent uppercase tracking-wider underline cursor-pointer">
                                    {t.insights_page.generate_btn}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
            <SiteFooter />
        </div>
    );
};

export default Insights;
