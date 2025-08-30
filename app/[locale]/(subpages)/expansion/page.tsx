import { BorderlessEvolution } from "@/app/components/sections/expansion/BorderlessEvolution";
import { ExpansionHeroSection } from "@/app/components/sections/expansion/ExpansionHeroSection";
import { IncubatedStartupsWrapper } from "@/app/components/sections/expansion/IncubatedStartupsWrapper";
import { JoinExpansion } from "@/app/components/sections/expansion/JoinExpansion";
import { WhyItMatters } from "@/app/components/sections/expansion/WhyItMatters";

export default function Page() {
  return (
    <div>
      <ExpansionHeroSection />
      <BorderlessEvolution />
      <IncubatedStartupsWrapper />
      <WhyItMatters />
      <JoinExpansion />
    </div>
  );
}
