import { cn } from "@/lib/utils";

const PARTNERS = [
  {
    id: "sebastian",
    name: "Sebastian",
    role: "Digital Architecture",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    id: "umut",
    name: "Umut",
    role: "Supply Chain Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
  {
    id: "emrah",
    name: "Emrah",
    role: "Strategy & Manufacturing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
  },
];

export const PartnersSection = () => {
  return (
    <section id="partners" className="mb-20 space-y-8" aria-labelledby="partners-heading">
      <header className="space-y-3">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-accent">Leadership</p>
        <h2
          id="partners-heading"
          className="font-display text-2xl uppercase tracking-tight sm:text-3xl md:text-4xl"
        >
          The Smiths
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          Senior operators who've lived on the floor, not in the boardroom.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PARTNERS.map((partner) => (
          <article
            key={partner.id}
            className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/70 shadow-[0_0_26px_hsl(var(--background)_/_0.9)] backdrop-blur-2xl transition-all duration-300 hover:border-accent hover:shadow-[0_0_34px_hsl(var(--accent)_/_0.4)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={partner.image}
                alt={`${partner.name} - ${partner.role}`}
                loading="lazy"
                className={cn(
                  "h-full w-full object-cover object-center transition-all duration-500",
                  "grayscale group-hover:grayscale-0"
                )}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary)_/_0.15)_0,_transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            <div className="relative space-y-2 p-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/50 px-3 py-1 text-[0.65rem] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {partner.role}
              </div>
              <h3 className="font-display text-xl uppercase tracking-tight text-foreground">
                {partner.name}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
