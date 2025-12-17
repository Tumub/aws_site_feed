import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export const ContactSection = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="mb-20 pt-24 lg:pt-32 space-y-8">
            <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8 bg-accent/50"></div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">{t.contact.communications}</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                    <h2 className="font-display text-3xl uppercase tracking-tight text-foreground md:text-4xl">
                        {t.contact.direct_line}
                    </h2>
                    <p className="max-w-md text-muted-foreground">
                        {t.contact.no_sdr}
                    </p>

                    <div className="space-y-4 font-mono text-sm">
                        <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded bg-secondary/50 text-accent">
                                <Mail className="h-4 w-4" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-muted-foreground">{t.contact.inquiries}</p>
                                <a href="mailto:info@torquefoundryadvisory.com" className="text-foreground hover:text-accent transition-colors">
                                    info@torquefoundryadvisory.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded bg-secondary/50 text-accent">
                                <MapPin className="h-4 w-4" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-muted-foreground">{t.contact.headquarters}</p>
                                <p className="text-foreground">{t.contact.location}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-border/50 bg-secondary/10 p-8 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                    <div className="relative z-10 space-y-6">
                        <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
                            {t.contact.immediate_action}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {t.contact.urgent_case}
                        </p>
                        <Button
                            variant="default"
                            size="lg"
                            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 uppercase tracking-widest font-mono font-bold"
                            onClick={() => window.location.href = "mailto:umut.bakin@torquefoundryadvisory.com?subject=URGENT: Operational Crisis Assessment"}
                        >
                            {t.contact.priority_btn}
                        </Button>
                        <p className="text-[0.65rem] text-muted-foreground/60 font-mono text-center">
                            {t.contact.priority_note}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
