import { useLanguage } from "@/lib/i18n";
import originMap from "@/assets/origin_strategy_map.png";

export const OriginStorySection = () => {
    const { t } = useLanguage();

    return (
        <section className="relative overflow-hidden bg-background py-24 sm:py-32">

            {/* BACKGROUND TEXTURE LAYER */}
            {/* Extends from top right downwards, fading out at bottom and left */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full">
                    <img
                        src={originMap}
                        alt=""
                        className="w-full h-full object-cover opacity-60"
                        style={{
                            maskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 100%)"
                        }}
                    />
                    {/* Horizontal fade to blend with text on left */}
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
                    {/* Vertical fade for bottom cards */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
                </div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">

                {/* Top Row: Narrative (Left) & HUD (Right) */}
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Left Column: Founder's Narrative */}
                    <div className="space-y-8">
                        <h2 className="font-display text-3xl uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
                            {t.origin.headline}
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground/90 mix-blend-plus-lighter">
                            <p>{t.origin.story_p1}</p>
                            <p>{t.origin.story_p2}</p>
                            <p className="font-medium text-white">{t.origin.story_p3}</p>
                            <p>{t.origin.story_p4}</p>
                        </div>
                    </div>

                    {/* Right Column: HUD Overlay (Floating over map) */}
                    <div className="relative hidden lg:block h-full min-h-[400px]">
                        <div className="absolute inset-0 flex flex-col justify-between py-6">
                            <div className="flex justify-end">
                                <div className="text-right space-y-2">
                                    <div className="flex items-center justify-end gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_cyan]" />
                                        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cyan-400">Strategic Coverage</span>
                                    </div>
                                    <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/40">EU-MENA-CH Corridor</div>
                                </div>
                            </div>

                            <div className="flex justify-end items-end">
                                <div className="space-y-2 text-right">
                                    <div className="h-px w-24 bg-gradient-to-l from-cyan-500/50 to-transparent ml-auto" />
                                    <span className="block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/30">Origin Node</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. The Execution Core */}
                <div className="mt-24">
                    <div className="flex items-center gap-4 mb-10 max-w-2xl">
                        <div className="h-px flex-1 bg-border" />
                        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                            {t.origin.execution_core_title}
                        </h3>
                        {/* <div className="h-px flex-1 bg-border" /> */}
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Manufacturing Leader */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-secondary/5 p-8 backdrop-blur-sm transition-colors hover:border-accent/30 hover:bg-secondary/10">
                            <h4 className="font-display text-xl text-white">{t.origin.leader.title}</h4>
                            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-accent">
                                {t.origin.leader.sub}
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80">
                                {t.origin.leader.desc}
                            </p>
                        </div>

                        {/* Systems Architect */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-secondary/5 p-8 backdrop-blur-sm transition-colors hover:border-accent/30 hover:bg-secondary/10">
                            <h4 className="font-display text-xl text-white">{t.origin.architect.title}</h4>
                            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-accent">
                                {t.origin.architect.sub}
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80">
                                {t.origin.architect.desc}
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. Strategic Governance */}
                <div className="mt-12">
                    <div className="flex items-center gap-4 mb-10 max-w-2xl">
                        <div className="h-px flex-1 bg-border" />
                        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            {t.origin.governance_title}
                        </h3>
                        {/* <div className="h-px flex-1 bg-border" /> */}
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-primary/5 p-8 sm:p-10 backdrop-blur-sm">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-display text-xl text-white">
                                        {t.origin.advisor.title}
                                    </h4>
                                    <p className="mt-2 font-mono text-xs uppercase tracking-wider text-primary">
                                        {t.origin.advisor.sub}
                                    </p>
                                </div>
                                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground/80">
                                    {t.origin.advisor.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Closing */}
                <div className="mt-20 border-t border-white/10 pt-10 text-center relative z-20">
                    <p className="text-xl font-medium text-white sm:text-2xl">
                        {t.origin.closing}
                    </p>
                </div>

            </div>
        </section>
    );
};
