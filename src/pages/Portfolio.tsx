import { useState, useEffect, useRef } from "react";
import { Award, Lock, Unlock, Loader2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

/* -------------------------------------------------------------------------- */
/*                                    TYPES                                   */
/* -------------------------------------------------------------------------- */

type PartnerKey = "supplyChain" | "manufacturing" | "digital";

interface CaseCardProps {
  title: string;
  pub: string;
  auth: string;
  isAuthorized: boolean;
}

/* -------------------------------------------------------------------------- */
/*                                 COMPONENTS                                 */
/* -------------------------------------------------------------------------- */

const CaseCard = ({ title, pub, auth, isAuthorized }: CaseCardProps) => {
  const { t } = useLanguage();
  return (
    <div className="rounded-lg border border-border/60 bg-secondary/30 p-4 transition-all hover:border-accent/50 hover:bg-secondary/50">
      <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide">{title}</h4>
      {isAuthorized ? (
        <p className="text-sm text-accent animate-in fade-in">{auth}</p>
      ) : (
        <div>
          <p className="text-sm text-muted-foreground">{pub}</p>
          <p className="mt-1 select-none font-mono text-xs text-muted-foreground/50 blur-[2px]">{t.portfolio.redacted}</p>
        </div>
      )}
    </div>
  );
};

const SecurityModal = ({ isOpen, onClose, onSuccess }: { isOpen: boolean; onClose: () => void; onSuccess: () => void }) => {
  const { t } = useLanguage();
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"IDLE" | "CHECKING" | "DENIED" | "GRANTED">("IDLE");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setInput("");
      setStatus("IDLE");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("CHECKING");

    // Artificial delay for "processing" feel
    setTimeout(() => {
      if (input === "TORQUE2025") {
        setStatus("GRANTED");
        setTimeout(onSuccess, 800);
      } else {
        setStatus("DENIED");
        setInput("");
        setTimeout(() => setStatus("IDLE"), 1500);
      }
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md overflow-hidden rounded-lg border border-accent bg-black shadow-[0_0_50px_hsl(var(--accent)_/_0.15)]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-accent/30 bg-accent/5 px-4 py-2">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-accent" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">{t.portfolio.security.header}</span>
          </div>
          <button onClick={onClose} className="text-accent/50 hover:text-accent font-mono text-xs">[ESC]</button>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono">
          <div className="mb-4 space-y-1 text-xs text-muted-foreground">
            <p>&gt; {t.portfolio.security.init_handshake}</p>
            <p>&gt; {t.portfolio.security.encrypted}</p>
            <p>&gt; {t.portfolio.security.awaiting}</p>
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-center gap-2 text-accent">
              <span className="animate-pulse">▶</span>
              <input
                ref={inputRef}
                type="password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-transparent outline-none placeholder:text-accent/30 text-accent uppercase tracking-widest"
                placeholder={t.portfolio.security.placeholder}
                autoComplete="off"
              />
            </div>

            {/* Status Indicator */}
            <div className="mt-6 flex h-8 items-center justify-center border border-accent/20 bg-accent/5 text-xs font-bold uppercase tracking-[0.2em]">
              {status === "IDLE" && <span className="text-accent animate-pulse">{t.portfolio.security.status.idle}</span>}
              {status === "CHECKING" && <span className="text-yellow-400 flex items-center gap-2"><Loader2 className="h-3 w-3 animate-spin" /> {t.portfolio.security.status.checking}</span>}
              {status === "DENIED" && <span className="text-red-500">{t.portfolio.security.status.denied}</span>}
              {status === "GRANTED" && <span className="text-green-400">{t.portfolio.security.status.granted}</span>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                MAIN PAGE                                   */
/* -------------------------------------------------------------------------- */

const Portfolio = () => {
  const { t } = useLanguage();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activePartner, setActivePartner] = useState<PartnerKey>("supplyChain");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const partners = t.portfolio.partners;
  const partner = partners[activePartner];
  // Cast keys back to PartnerKey array to map
  const partnerKeys = Object.keys(partners) as PartnerKey[];

  const MODULES = t.portfolio.modules;
  const TECH_CATEGORIES = t.portfolio.tech_categories;

  const handleUnlockRequest = () => {
    if (isAuthorized) {
      setIsAuthorized(false);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SecurityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          setIsAuthorized(true);
          setIsModalOpen(false);
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" className="font-mono text-sm uppercase tracking-wider text-accent transition-colors hover:text-accent/80">
            ← Back to Home
          </a>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              View Mode: <span className={isAuthorized ? "text-accent" : "text-primary"}>{isAuthorized ? "AUTHORIZED" : "PUBLIC"}</span>
            </span>
            <Button
              onClick={handleUnlockRequest}
              variant="outline"
              size="sm"
              className={cn(
                "font-mono text-xs uppercase tracking-widest transition-all",
                isAuthorized
                  ? "border-primary text-primary hover:bg-primary/10"
                  : "border-accent text-accent hover:bg-accent/10 hover:shadow-[0_0_15px_hsl(var(--accent)_/_0.25)]"
              )}
            >
              {isAuthorized ? <Lock className="mr-2 h-3 w-3" /> : <Unlock className="mr-2 h-3 w-3" />}
              {isAuthorized ? "LOCK DOSSIER" : "UNLOCK DATA"}
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-accent/50"></div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">{t.portfolio.dossier_label}</p>
          </div>
          <h1 className="mb-4 font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
            {t.portfolio.headline}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground border-l-2 border-primary/50 pl-4 py-1">
            {t.portfolio.subheadline}
          </p>
        </section>

        {/* Partner Dossiers */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-3xl uppercase tracking-tight">{t.portfolio.partners_title}</h2>
            <div className="hidden md:block h-px flex-1 bg-border ml-8"></div>
          </div>

          {/* Tab Buttons */}
          <div className="mb-8 flex flex-wrap gap-2">
            {partnerKeys.map((key) => {
              // We use the static key names from i18n but the display name from the object
              const pName = partners[key].name || key;
              return (
                <button
                  key={key}
                  onClick={() => setActivePartner(key)}
                  className={`rounded border px-4 py-2 font-mono text-xs uppercase transition-all ${activePartner === key
                    ? "border-accent bg-accent/10 text-accent shadow-[0_0_15px_hsl(var(--accent)_/_0.15)]"
                    : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
                    }`}
                >
                  {pName}
                </button>
              )
            })}
          </div>

          {/* Active Partner Content */}
          <div className="rounded-xl border border-border bg-card/50 p-6 shadow-xl">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between bg-secondary/20 p-4 rounded-lg border border-border/50">
              <div>
                <h3 className="font-display text-xl font-semibold uppercase text-foreground">{partner.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground font-mono">{partner.bio}</p>
              </div>
              {partner.badge && (
                <div className="flex items-center gap-2 rounded border border-amber-500/50 bg-amber-500/10 px-3 py-1.5 shadow-[0_0_10px_hsl(45_100%_50%_/_0.1)]">
                  <Award className="h-4 w-4 text-amber-400" />
                  <span className="font-mono text-xs text-amber-400 font-bold">{partner.badge}</span>
                </div>
              )}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {partner.cases.map((c) => (
                <CaseCard key={c.title} {...c} isAuthorized={isAuthorized} />
              ))}
            </div>
          </div>
        </section>

        {/* Executive Curriculum */}
        <section className="mb-16">
          <h2 className="mb-6 font-display text-3xl uppercase tracking-tight">{t.portfolio.curriculum_title}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {MODULES.map((mod, idx) => (
              <div key={idx} className="group flex items-start gap-4 rounded-lg border border-border/60 bg-card/50 p-5 transition-all hover:border-accent/50 hover:bg-secondary/40">
                <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-accent">0{idx + 1}</span>
                <p className="font-mono text-sm uppercase group-hover:text-foreground">{mod}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack */}
        <section>
          <h2 className="mb-6 font-display text-3xl uppercase tracking-tight">{t.portfolio.tech_stack_title}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {TECH_CATEGORIES.map((cat) => (
              <div key={cat.label} className="rounded-lg border border-border/60 bg-card/40 p-4">
                <p className="mb-3 font-mono text-xs font-semibold uppercase text-accent tracking-widest">{cat.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-border/50 bg-secondary/50 px-2 py-0.5 font-mono text-[0.65rem] uppercase text-muted-foreground hover:border-accent/30 hover:text-foreground transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/20 p-8 text-center">
        <p className="font-mono text-xs text-muted-foreground space-y-2">
          <span className="block">TORQUEFOUNDRY ADVISORY</span>
          <span className="block text-muted-foreground/60">BASEL, SWITZERLAND</span>
          <span className="block pt-4 text-[0.6rem] opacity-50">EST. 2025 // DIGITAL MEETS DIRTY HANDS</span>
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
