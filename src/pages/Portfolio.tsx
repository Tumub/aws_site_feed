import { useState } from "react";
import { Award } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                 DATA STORE                                 */
/* -------------------------------------------------------------------------- */

const UMUT_CASES = [
  {
    title: "Volvo Cars CoE",
    pub: "Intercontinental Ops Center.",
    auth: "Created team of 34 from scratch. Unified 40k shipments/year across 3 regions."
  },
  {
    title: "AI Track & Trace",
    pub: "GIT Reduction & Auto-Audit.",
    auth: "Reduced GIT by 125 MSEK (~$11M). 70% reduction in manual invoicing via AI milestones."
  },
  {
    title: "Global Transport Sourcing",
    pub: "Coupa Optimization ($790M).",
    auth: "30% value improvement on $790M spend. Cycle time reduced 8mo → 4mo using 'Best Value' logic."
  },
  {
    title: "Crisis Management",
    pub: "Covid Volume Surge.",
    auth: "Managed $1.2B spend during port lockdowns. Volume surged 596k → 638k TEU."
  },
  {
    title: "DCSA Control Tower",
    pub: "Snowflake & API Integration.",
    auth: "Reduced carrier onboarding 6mo → 4 weeks using DCSA standards."
  },
  {
    title: "Global Capacity Planning",
    pub: "IKEA Supplier Capacity.",
    auth: "Predicted stock-outs months in advance via monthly IBP cycles."
  },
  {
    title: "Coupa Excellence 2024",
    pub: "Global Sourcing Award.",
    auth: "Best-in-class implementation for >$600M spend."
  },
];

const EMRAH_CASES = [
  {
    title: "Chemical Optimization",
    pub: "Process & Recipe Optimization.",
    auth: "$1.5M Annual Savings via Six Sigma without compromising quality."
  },
  {
    title: "The 'Invisible' Machine",
    pub: "Line Balancing (5 → 4 machines).",
    auth: "Eliminated €450K machine cost. Unlocked $1.0M capacity value."
  },
  {
    title: "Greenfield Commissioning",
    pub: "4 Major Facility Setups.",
    auth: "Managed €5M+ investment. Plating & Extrusion plants (Auto & White Goods)."
  },
  {
    title: "Solar Energy Revenue",
    pub: "Sustainability as Profit.",
    auth: "Generated $300k/year revenue via SPP installation."
  },
  {
    title: "Market Entry Line",
    pub: "Kartepe White Goods Line.",
    auth: "Unlocked contracts with Arçelik, Vestel & Uğur Cooling."
  },
];

const SEBASTIAN_CASES = [
  {
    title: "Agentic Logistics",
    pub: "Swarm of AI Agents.",
    auth: "Replaced manual booking/verification with agents in legacy systems."
  },
  {
    title: "Automated Underwriting",
    pub: "First Multi-Million AI in EU.",
    auth: "Moved from documents to information. Massive knowledge-bearing AI."
  },
  {
    title: "Airline CX Transformation",
    pub: "Major European Airline.",
    auth: "Redesigned aftersales with AI bots. Improved UX & reduced workload."
  },
  {
    title: "AI Self-Service",
    pub: "Insurance & Gov Automation.",
    auth: "Design lead for major Swiss insurer & German labor agency (DWP)."
  },
  {
    title: "AI Center of Excellence",
    pub: "Automation Strategy.",
    auth: "Established CoE to drive automation from business, not IT."
  },
  {
    title: "Automotive AI Strategy",
    pub: "Major German OEM.",
    auth: "Designed operational model embedded with automotive teams."
  },
];

const MODULES = [
  "From Control Tower Slides to Real-Time Operations",
  "Using DCSA & APIs to Clean Up Logistics Data",
  "Transforming Hidden Factories: The Lean Path",
  "From Tender Savings to Structural Cost Leadership",
];

const TECH_CATEGORIES = [
  { label: "DATA & CODE", items: ["Snowflake", "SQL", "Python", "C++", "Visual Basic", "R"] },
  { label: "VISIBILITY", items: ["Project44", "FourKites", "DCSA Standards", "SAP BN"] },
  { label: "ANALYTICS", items: ["Power BI", "Tableau", "Streamlit", "Qlik"] },
  { label: "CERTIFICATIONS", items: ["IATF 16949 Lead Auditor", "ISO 9001/14001/45001", "CPMAI", "Lean Six Sigma Black Belt", "PMP / Google Project Mgmt"] },
];

const PARTNERS = {
  umut: {
    name: "Umut — Supply Chain",
    title: "The Spine: Connecting Source to Customer",
    bio: "15+ years managing 40,000+ shipments and >$790M spend.",
    badge: "Coupa Sourcing Excellence 2024",
    cases: UMUT_CASES,
  },
  emrah: {
    name: "Emrah — Manufacturing",
    title: "The Muscle: Shop Floor Excellence",
    bio: "19+ years. OEM-Ready Compliance (BMW, Mercedes, Toyota). Hidden Factory Optimization.",
    badge: "IATF 16949 Lead Auditor",
    cases: EMRAH_CASES,
  },
  sebastian: {
    name: "Sebastian — Digital",
    title: "The Brain: Agentic Automation & Data Architecture",
    bio: "Bridging the gap between IT and Business.",
    badge: null,
    cases: SEBASTIAN_CASES,
  },
};

type PartnerKey = keyof typeof PARTNERS;

interface CaseCardProps {
  title: string;
  pub: string;
  auth: string;
  isAuthorized: boolean;
}

const CaseCard = ({ title, pub, auth, isAuthorized }: CaseCardProps) => (
  <div className="rounded-lg border border-border/60 bg-secondary/30 p-4 transition-all hover:border-accent/50 hover:bg-secondary/50">
    <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide">{title}</h4>
    {isAuthorized ? (
      <p className="text-sm text-accent animate-in fade-in">{auth}</p>
    ) : (
      <div>
        <p className="text-sm text-muted-foreground">{pub}</p>
        <p className="mt-1 select-none font-mono text-xs text-muted-foreground/50 blur-[2px]">[REDACTED]</p>
      </div>
    )}
  </div>
);

const Portfolio = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activePartner, setActivePartner] = useState<PartnerKey>("umut");

  const partner = PARTNERS[activePartner];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" className="font-mono text-sm uppercase tracking-wider text-accent transition-colors hover:text-accent/80">
            ← Back to Home
          </a>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              View Mode: <span className={isAuthorized ? "text-accent" : "text-primary"}>{isAuthorized ? "AUTHORIZED" : "PUBLIC"}</span>
            </span>
            <button
              onClick={() => setIsAuthorized(!isAuthorized)}
              className="rounded border border-accent px-3 py-1.5 font-mono text-xs uppercase text-accent transition-colors hover:bg-accent/10 hover:shadow-[0_0_10px_hsl(var(--accent)_/_0.3)]"
            >
              {isAuthorized ? "LOCK DOSSIER" : "UNLOCK DATA"}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-accent/50"></div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Digital Dossier</p>
          </div>
          <h1 className="mb-4 font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Decoding the Impact.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground border-l-2 border-primary/50 pl-4 py-1">
            No theory. No slides. Just realized P&L impact across Manufacturing, Supply Chain, and Digital.
          </p>
        </section>

        {/* Partner Dossiers */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-3xl uppercase tracking-tight">The Smiths</h2>
            <div className="hidden md:block h-px flex-1 bg-border ml-8"></div>
          </div>

          {/* Tab Buttons */}
          <div className="mb-8 flex flex-wrap gap-2">
            {(Object.keys(PARTNERS) as PartnerKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActivePartner(key)}
                className={`rounded border px-4 py-2 font-mono text-xs uppercase transition-all ${activePartner === key
                  ? "border-accent bg-accent/10 text-accent shadow-[0_0_15px_hsl(var(--accent)_/_0.15)]"
                  : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
                  }`}
              >
                {PARTNERS[key].name}
              </button>
            ))}
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
          <h2 className="mb-6 font-display text-3xl uppercase tracking-tight">Executive Curriculum</h2>
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
          <h2 className="mb-6 font-display text-3xl uppercase tracking-tight">Technical Stack</h2>
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
          <span className="block">THREADSMITHS INDUSTRIAL</span>
          <span className="block text-muted-foreground/60">BASEL, SWITZERLAND</span>
          <span className="block pt-4 text-[0.6rem] opacity-50">EST. 2025 // DIGITAL MEETS DIRTY HANDS</span>
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
