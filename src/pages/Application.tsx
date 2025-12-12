import { useState } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const SPEND_OPTS = [
    { label: "< $50M (Start-up / SME)", value: "sme", reject: true },
    { label: "$50M - $200M (Mid-Market)", value: "mid", reject: false },
    { label: "> $200M (Enterprise)", value: "ent", reject: false },
];

const PAIN_OPTS = [
    { label: "Inventory Bleed (Capital Stuck)", value: "inventory" },
    { label: "The Black Box (Unknown Costs)", value: "visibility" },
    { label: "ERP Paralysis (Project Stalled)", value: "erp" },
    { label: "Throughput Stagnation", value: "throughput" },
];

const IT_OPTS = [
    { label: "Pristine (Single Instance SAP)", value: "clean" },
    { label: "Frankenstein (Legacy Mix)", value: "messy" },
    { label: "Analog (Paper & Excel)", value: "paper" },
];

const Application = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<any>({});
    const [isRejected, setIsRejected] = useState(false);

    const handleSpendSelect = (opt: any) => {
        setFormData({ ...formData, spend: opt.value });
        if (opt.reject) {
            setIsRejected(true);
        } else {
            setStep(2);
        }
    };

    const handlePainSelect = (opt: any) => {
        setFormData({ ...formData, pain: opt.value });
        setStep(3);
    };

    const handleITSelect = (opt: any) => {
        setFormData({ ...formData, it: opt.value });
        setStep(4);
    };

    const handleSubmit = () => {
        // Mock submission
        toast.success("SIGNAL RECEIVED. CLEARANCE REQUEST PENDING.");
        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    };

    return (
        <div className="relative z-10 min-h-screen bg-background text-foreground font-mono">
            <SiteHeader />
            <main className="mx-auto max-w-2xl px-4 py-24">
                <div className="mb-12 border-l-4 border-primary pl-6">
                    <h1 className="font-display text-4xl uppercase tracking-tighter text-foreground mb-2">
                        Initiate Signal Check
                    </h1>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest">
                        CO-INVESTMENT DIAGNOSTIC APPLICATION
                    </p>
                </div>

                {isRejected ? (
                    <div className="border border-border bg-secondary/20 p-8 rounded-lg">
                        <h2 className="text-xl text-primary mb-4 font-bold">STATUS: HOLD</h2>
                        <p className="text-muted-foreground">
                            Based on your volume, our engagement model (Risk-Reversal) is likely operational overkill for your current needs. We recommend establishing a stronger baseline using standard 3PL partners before embedding a transformation team.
                        </p>
                        <Button className="mt-6" variant="outline" onClick={() => window.location.href = "/"}>
                            RETURN TO BASE
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {step === 1 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4">
                                <h3 className="text-lg text-accent mb-6 uppercase tracking-widest">Step 01 /// Calibration</h3>
                                <p className="mb-6 text-xl">What is your estimated Annual Logistics & Manufacturing Spend?</p>
                                <div className="space-y-3">
                                    {SPEND_OPTS.map((opt) => (
                                        <button
                                            key={opt.value}
                                            onClick={() => handleSpendSelect(opt)}
                                            className="w-full text-left p-4 border border-border hover:border-primary hover:bg-secondary/40 transition-all uppercase tracking-wider text-sm"
                                        >
                                            [ ] {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4">
                                <h3 className="text-lg text-accent mb-6 uppercase tracking-widest">Step 02 /// Diagnostics</h3>
                                <p className="mb-6 text-xl">Identify your primary operational hemorrhage.</p>
                                <div className="space-y-3">
                                    {PAIN_OPTS.map((opt) => (
                                        <button
                                            key={opt.value}
                                            onClick={() => handlePainSelect(opt)}
                                            className="w-full text-left p-4 border border-border hover:border-primary hover:bg-secondary/40 transition-all uppercase tracking-wider text-sm"
                                        >
                                            [ ] {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4">
                                <h3 className="text-lg text-accent mb-6 uppercase tracking-widest">Step 03 /// Terrain</h3>
                                <p className="mb-6 text-xl">Describe your current IT Landscape.</p>
                                <div className="space-y-3">
                                    {IT_OPTS.map((opt) => (
                                        <button
                                            key={opt.value}
                                            onClick={() => handleITSelect(opt)}
                                            className="w-full text-left p-4 border border-border hover:border-primary hover:bg-secondary/40 transition-all uppercase tracking-wider text-sm"
                                        >
                                            [ ] {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4">
                                <h3 className="text-lg text-accent mb-6 uppercase tracking-widest">Step 04 /// CONFIRMATION</h3>
                                <div className="bg-secondary/20 p-6 border border-border mb-6 space-y-2 text-sm">
                                    <p><span className="text-muted-foreground mr-4">SPEND:</span> {formData.spend}</p>
                                    <p><span className="text-muted-foreground mr-4">PAIN:</span> {formData.pain}</p>
                                    <p><span className="text-muted-foreground mr-4">LANDSCAPE:</span> {formData.it}</p>
                                </div>
                                <Button
                                    size="lg"
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold tracking-[0.2em] uppercase py-8"
                                    onClick={handleSubmit}
                                >
                                    INITIATE SIGNAL CHECK
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </main>
            <SiteFooter />
        </div>
    );
};

export default Application;
