import { LineChart } from "lucide-react";
import { ExpertiseLayout } from "@/components/layout/ExpertiseLayout";

const FinanceExpertise = () => {
  return (
    <ExpertiseLayout 
      pillar="finance" 
      icon={LineChart} 
      accentColor="emerald"
    />
  );
};

export default FinanceExpertise;
