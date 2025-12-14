import { useLanguage } from "@/lib/i18n";
import originMap from "@/assets/origin_strategy_map.png";
import umutPhoto from "@/assets/umut_photo.jpg";
import alperPhoto from "@/assets/alper_photo.jpg";

export const OriginStorySection = () => {
    const { t } = useLanguage();

    return (
        <section className="relative overflow-hidden bg-background py-24 sm:py-32">

            {/* BACKGROUND TEXTURE LAYER */}
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
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
                </div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">

                {/* 1. THE FOUNDER (Narrative + Signature V4) */}
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20 mb-24">

                    {/* Founder Text (Left Column) */}
                    <div className="space-y-8 relative z-10">
                        <h2 className="font-display text-3xl uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
                            {t.origin.headline}
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground/90 mix-blend-plus-lighter">
                            <p>{t.origin.story_p1}</p>
                            <p>{t.origin.story_p2}</p>
                        </div>

                        {/* V4 Signature Block */}
                        <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/5">
                            {/* Founder Avatar */}
                            <div className="shrink-0 relative w-20 h-20 rounded-full border border-white/10 overflow-hidden grayscale contrast-125">
                                <img
                                    src={umutPhoto}
                                    alt="Umut - Founder"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div>
                                <h3 className="font-display text-2xl uppercase text-white tracking-widest">
                                    {t.origin.founder_name}
                                </h3>
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mt-1">
                                    {t.origin.founder_title}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Global Context (Map) */}
                    <div className="relative hidden lg:block h-full min-h-[500px]">
                        {/* The background map covers this area naturally, 
                             but we can add specific overlay nodes or highlights here if needed.
                             For now, keeping it clean to let the map breathe as requested. */}
                        <div className="absolute right-0 top-1/4 p-6 border-r-2 border-accent/20 bg-background/50 backdrop-blur-md max-w-xs text-right">
                            <span className="font-mono text-[10px] text-accent uppercase tracking-widest">Global Operations</span>
                            <p className="text-white/80 text-sm mt-1">Stockholm · Istanbul · Basel</p>
                        </div>
                    </div>
                </div>

                {/* 2. THE EXECUTION CORE (Stealth Mode) */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-10 max-w-2xl">
                        <div className="h-px flex-1 bg-border/50" />
                        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
                            {t.origin.execution_core_title}
                        </h3>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Manufacturing Leader - Stealth */}
                        <div className="group relative overflow-hidden rounded-sm border-l-2 border-cyan-500/30 bg-background/40 p-8 backdrop-blur-sm transition-colors hover:border-cyan-400 hover:bg-cyan-950/10">
                            <h4 className="font-display text-xl text-white">{t.origin.leader.title}</h4>
                            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
                                {t.origin.leader.sub}
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80">
                                {t.origin.leader.desc}
                            </p>
                        </div>

                        {/* Systems Architect - Stealth */}
                        <div className="group relative overflow-hidden rounded-sm border-l-2 border-cyan-500/30 bg-background/40 p-8 backdrop-blur-sm transition-colors hover:border-cyan-400 hover:bg-cyan-950/10">
                            <h4 className="font-display text-xl text-white">{t.origin.architect.title}</h4>
                            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
                                {t.origin.architect.sub}
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80">
                                {t.origin.architect.desc}
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. STRATEGIC GOVERNANCE (Advisor Photo) */}
                <div>
                    <div className="flex items-center gap-4 mb-10 max-w-2xl">
                        <div className="h-px flex-1 bg-border/50" />
                        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-orange-400">
                            {t.origin.governance_title}
                        </h3>
                    </div>

                    <div className="relative overflow-hidden rounded-sm border border-white/5 bg-background/40 p-8 sm:p-10 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Advisor Photo (Real) */}
                            <div className="shrink-0 w-24 h-24 rounded-full border border-orange-500/30 overflow-hidden bg-neutral-800 grayscale contrast-110">
                                <img
                                    src={alperPhoto}
                                    alt="Alper Pekcan"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-display text-xl text-white">
                                        {t.origin.advisor.title}
                                    </h4>
                                    <p className="mt-2 font-mono text-xs uppercase tracking-wider text-orange-400">
                                        {t.origin.advisor.sub}
                                    </p>
                                </div>
                                <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground/80">
                                    {t.origin.advisor.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Closing */}
                <div className="mt-20 border-t border-white/5 pt-10 text-center relative z-20">
                    <p className="text-xl font-medium text-white sm:text-2xl tracking-tight">
                        {t.origin.closing}
                    </p>
                </div>

            </div>
        </section>
    );
};
