import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const ARTICLES = [
    {
        title: "The Control Tower Mirage",
        summary: "Why spending $5M on a visual dashboard fails if your underlying data hygiene is trash. You cannot visualize what you cannot measure.",
        tag: "DIGITAL HYGIENE"
    },
    {
        title: "Stop Waiting for Greenfield",
        summary: "The perfect factory doesn't exist. How to overlay AI onto 1980s PLCs and legacy ERPs without ripping out the nervous system.",
        tag: "BROWNFIELD REALITY"
    },
    {
        title: "The Hidden Factory P&L",
        summary: "Your financial P&L lies. It hides the 'Shadow P&L' of rework, expedited freight, and manual Excel reconciliation. Here is how to audit it.",
        tag: "FINANCIAL FORENSICS"
    },
    {
        title: "Merging the Frankenstein",
        summary: "A case study on merging three different ERPs over a holiday weekend using an API layer instead of a migration script.",
        tag: "SYSTEM ARCHITECTURE"
    },
    {
        title: "The Uncomfortable Truth About Cost Reduction",
        summary: "You can't cut cost by emailing suppliers for a 2% discount. You cut cost by aligning your inbound logic with your production takt time.",
        tag: "SUPPLY CHAIN PHYSICS"
    }
];

const Insights = () => {
    return (
        <div className="relative z-10 min-h-screen bg-background text-foreground">
            <SiteHeader />
            <main className="mx-auto max-w-4xl px-4 py-16 lg:px-0">
                <div className="mb-12 space-y-4">
                    <h1 className="font-display text-4xl uppercase tracking-tight sm:text-5xl text-foreground">
                        Field Notes <span className="text-accent">///</span>
                    </h1>
                    <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                        LOGS FROM THE INDUSTRIAL FRONT LINE. NO FLUFF.
                    </p>
                </div>

                <div className="grid gap-8">
                    {ARTICLES.map((article, index) => (
                        <article key={index} className="group relative border-l-2 border-border pl-6 hover:border-accent transition-colors duration-300">
                            <div className="mb-2 flex items-center gap-3">
                                <span className="font-mono text-xs text-primary uppercase tracking-widest">
                                    NOTE_0{index + 1}
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
                                    Generate Full Report
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
