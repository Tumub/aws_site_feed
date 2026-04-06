import { Cog } from "lucide-react";
import { ExpertiseLayout } from "@/components/layout/ExpertiseLayout";

const PhysicsExpertise = () => {
  return (
    <ExpertiseLayout 
      pillar="physics" 
      icon={Cog} 
      accentColor="orange"
    />
  );
};

export default PhysicsExpertise;
