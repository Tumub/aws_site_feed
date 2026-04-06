import { Cpu } from "lucide-react";
import { ExpertiseLayout } from "@/components/layout/ExpertiseLayout";

const DigitalExpertise = () => {
  return (
    <ExpertiseLayout 
      pillar="digital" 
      icon={Cpu} 
      accentColor="cyan"
    />
  );
};

export default DigitalExpertise;
