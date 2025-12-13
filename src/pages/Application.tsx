import { useState } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const SPEND_OPTS = [
    { label: "< $20M (Growth Stage)", value: "growth", reject: false },
    { label: "$20M - $100M (Mid-Market)", value: "mid", reject: false },
    { label: "$100M - $500M (Corporate)", value: "corp", reject: false },
    { label: "> $500M (Enterprise)", value: "ent", reject: false },
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

    const handleContextSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(5);
    };

    const handleFinalSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock submission
        const data = { ...formData };
        console.log("Submission:", data);

        toast.success("SIGNAL RECEIVED. CLEARANCE REQUEST PENDING.");
        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                                <h3 className="text-lg text-accent mb-6 uppercase tracking-widest">Step 04 /// Intel</h3>
                                <p className="mb-6 text-xl">Brief Mission Context (Optional)</p>
                                <p className="mb-4 text-sm text-muted-foreground">Without revealing classified IP, briefly describe the operational friction or the target state you need to achieve.</p>
                                <form onSubmit={handleContextSubmit} className="space-y-6">
                                    <textarea
                                        name="context"
                                        rows={6}
                                        className="w-full bg-secondary/10 border border-border p-4 text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none rounded-sm resize-none"
                                        placeholder="// Enter mission brief data here..."
                                        onChange={handleInputChange}
                                    />
                                    <Button
                                        size="lg"
                                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold tracking-[0.2em] uppercase"
                                        type="submit"
                                    >
                                        PROCEED TO ID CHECK
                                    </Button>
                                </form>
                            </div>
                        )}

                        {step === 5 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4">
                                <h3 className="text-lg text-accent mb-6 uppercase tracking-widest">Step 05 /// Identity</h3>
                                <div className="bg-secondary/10 p-6 border border-border mb-8 space-y-2 text-xs">
                                    <p><span className="text-muted-foreground mr-4">CALIBRATION:</span> {formData.spend?.toUpperCase()}</p>
                                    <p><span className="text-muted-foreground mr-4">DIAGNOSTIC:</span> {formData.pain?.toUpperCase()}</p>
                                    <p><span className="text-muted-foreground mr-4">TERRAIN:</span> {formData.it?.toUpperCase()}</p>
                                </div>

                                <form onSubmit={handleFinalSubmit} className="space-y-4">
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-muted-foreground">Operative Name</label>
                                            <input
                                                required
                                                name="name"
                                                type="text"
                                                className="w-full h-12 px-4 bg-background border border-border focus:border-accent outline-none"
                                                placeholder="Full Name"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-muted-foreground">Organization</label>
                                            <input
                                                required
                                                name="company"
                                                type="text"
                                                className="w-full h-12 px-4 bg-background border border-border focus:border-accent outline-none"
                                                placeholder="Company Name"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Secure Comms (Email)</label>
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            className="w-full h-12 px-4 bg-background border border-border focus:border-accent outline-none"
                                            placeholder="corporate@domain.com"
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Role / Clearance Level</label>
                                        <input
                                            name="role"
                                            type="text"
                                            className="w-full h-12 px-4 bg-background border border-border focus:border-accent outline-none"
                                            placeholder="e.g. COO, VP Supply Chain"
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <Button
                                        size="lg"
                                        className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground font-bold tracking-[0.2em] uppercase py-6 shadow-[0_0_20px_hsl(var(--accent)_/_0.4)]"
                                        type="submit"
                                    >
                                        TRANSMIT SIGNAL
                                    </Button>
                                    <p className="text-[0.6rem] text-center text-muted-foreground pt-4">
                                        * By transmitting, you authorize a discrete initial reconnaissance of your public supply chain footprint.
                                    </p>
                                </form>
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
