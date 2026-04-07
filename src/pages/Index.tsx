import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrownfieldRealitySection } from "@/components/sections/BrownfieldRealitySection";
import { PowerTrioSection } from "@/components/sections/PowerTrioSection";
import { VerticalIntegrationSection } from "@/components/sections/VerticalIntegrationSection";
import { EmbeddedSection } from "@/components/sections/EmbeddedSection";
import { EngagementSection } from "@/components/sections/EngagementSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const Index = () => {
  const homepageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "TorqueFoundry Advisory",
      "url": "https://torquefoundryadvisory.com",
      "description": "TorqueFoundry Advisory - Industrial execution consulting. We embed in your supply chain, production, and digital systems to deliver real P&L results.",
      "founder": {
        "@type": "Person",
        "name": "Umut Bakin"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Basel",
        "addressCountry": "Switzerland"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "TorqueFoundry Advisory",
      "url": "https://torquefoundryadvisory.com",
      "image": "https://torquefoundryadvisory.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Basel",
        "addressCountry": "Switzerland"
      },
      "serviceType": [
        "Supply Chain Optimization",
        "Production Consulting",
        "Industrial Digital Transformation",
        "Operations Finance Advisory"
      ]
    }
  ];

  return (
    <div className="relative z-10 min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO 
        description="TorqueFoundry Advisory - Industrial execution consulting. We embed in your supply chain, production, and digital systems to deliver real P&L results. Basel, Switzerland."
        jsonLd={homepageSchema}
      />
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-12">
        <HeroSection />
        <BrownfieldRealitySection />
        <PowerTrioSection />
        <VerticalIntegrationSection />
        <EmbeddedSection />
        <EngagementSection />
        <ContactSection />

        {/* Subtle Internal Linking Footer Navigation */}
        <nav className="mt-32 border-t border-border/30 pt-12 pb-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[0.65rem] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
            <Link to="/expertise/flow" className="hover:text-accent transition-colors">Supply Chain (Flow)</Link>
            <Link to="/expertise/physics" className="hover:text-accent transition-colors">Production (Physics)</Link>
            <Link to="/expertise/digital" className="hover:text-accent transition-colors">Digital Architecture (Code)</Link>
            <Link to="/expertise/finance" className="hover:text-accent transition-colors">Operational Finance (Capital)</Link>
            <Link to="/cases" className="hover:text-accent transition-colors">Operations Log (Cases)</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
          </div>
        </nav>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
