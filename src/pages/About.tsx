import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { OriginStorySection } from "@/components/sections/OriginStorySection";

const About = () => {
    return (
        <div className="relative z-10 min-h-screen bg-background text-foreground">
            <SiteHeader />
            <main>
                <OriginStorySection />
            </main>
            <SiteFooter />
        </div>
    );
};

export default About;
