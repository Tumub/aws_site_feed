import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { OriginStorySection } from "@/components/sections/OriginStorySection";
import { SEO } from "@/components/SEO";

const About = () => {
    return (
        <div className="relative z-10 min-h-screen bg-background text-foreground">
            <SEO 
                title="About"
                description="Meet the TorqueFoundry Advisory team. 18 years of IKEA, Volvo, and global manufacturing experience. Based in Basel, Switzerland."
            />
            <SiteHeader />
            <main>
                <OriginStorySection />
            </main>
            <SiteFooter />
        </div>
    );
};

export default About;
