import { useLanguage } from "@/lib/i18n";
import originMap from "@/assets/origin_strategy_map.png";

export const OriginStorySection = () => {
    const { t } = useLanguage();

    return (
        <section className="relative overflow-hidden bg-background py-20 lg:py-32">
            <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-0">

                {/* Left Column: Text */}
                <div className="space-y-8">
                    <div className="space-y-6">
                        <h2 className="font-display text-3xl uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
                            {t.origin.headline}
                        </h2>

                        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            <p>
                                {t.origin.story}
                            </p>
                            <p>
                                {t.origin.pattern}
                            </p>
                            <p className="text-lg font-medium text-white">
                                {t.origin.closing}
                            </p>
                            <p>
                                {t.origin.solo_game}
                            </p>
                            <ul className="space-y-4 border-l-2 border-primary/30 pl-6">
                                <li>
                                    <strong className="block text-white">{t.origin.leader_role.split(":")[0]}</strong>
                                    <span className="text-xs uppercase tracking-wider text-muted-foreground/80">{t.origin.leader_role.split(":")[1]}</span>
                                </li>
                                <li>
                                    <strong className="block text-white">{t.origin.architect_role.split(":")[0]}</strong>
                                    <span className="text-xs uppercase tracking-wider text-muted-foreground/80">{t.origin.architect_role.split(":")[1]}</span>
                                </li>
                            </ul>
                            <p>
                                {t.origin.no_magic}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Visual */}
                <div className="relative">
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-secondary/20 shadow-2xl transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_40px_hsl(var(--accent)_/_0.15)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/0 to-background/80 z-10" />

                        {/* HUD Overlay */}
                        <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-accent">{t.origin.strategic_coverage}</span>
                                </div>
                                <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">{t.origin.corridor}</span>
                            </div>

                            <div className="flex justify-between items-end">
                                <div className="space-y-1">
                                    <div className="h-0.5 w-12 bg-primary/60" />
                                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">{t.origin.origin_node}</span>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <img
                            src={originMap}
                            alt="Strategic Map: Sweden, Turkey, Switzerland"
                            className="w-full object-cover opacity-80"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};
