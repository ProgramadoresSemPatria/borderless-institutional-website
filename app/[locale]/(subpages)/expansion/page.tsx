import { BorderlessEvolution } from "@/app/components/sections/expansion/BorderlessEvolution";
import { ExpansionHeroSection } from "@/app/components/sections/expansion/ExpansionHeroSection";
import { IncubatedStartups } from "@/app/components/sections/expansion/IncubatedStartups";
import { JoinExpansion } from "@/app/components/sections/expansion/JoinExpansion";
import { WhyItMatters } from "@/app/components/sections/expansion/WhyItMatters";

export default function Page() {
  return (
    <div>
      <ExpansionHeroSection />
      <BorderlessEvolution />
      <IncubatedStartups />
      <WhyItMatters />
      <JoinExpansion />
    </div>
  );
}
