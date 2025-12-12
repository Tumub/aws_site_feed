import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrownfieldRealitySection } from "@/components/sections/BrownfieldRealitySection";
import { PowerTrioSection } from "@/components/sections/PowerTrioSection";
import { VerticalIntegrationSection } from "@/components/sections/VerticalIntegrationSection";
import { EmbeddedSection } from "@/components/sections/EmbeddedSection";
import { EngagementSection } from "@/components/sections/EngagementSection";
import { InsightsSection } from "@/components/sections/InsightsSection";


const Index = () => {
  return (
    <div className="relative z-10 min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 lg:px-0 lg:pb-24 lg:pt-12">
        <HeroSection />
        <BrownfieldRealitySection />
        <PowerTrioSection />
        <VerticalIntegrationSection />
        <EmbeddedSection />
        <EngagementSection />
        <InsightsSection />

      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
