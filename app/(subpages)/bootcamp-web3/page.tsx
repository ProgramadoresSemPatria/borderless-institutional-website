import { BootcampComparator } from "@/app/components/sections/bootcamp-web3/BootcampComparator";
import { BootcampHeroSection } from "@/app/components/sections/bootcamp-web3/BootcampHeroSection";
import { ModulesOverview } from "@/app/components/sections/bootcamp-web3/ModulesOverview";
import { ResultsYouCanExpect } from "@/app/components/sections/bootcamp-web3/ResultsYouCanExpect";
import { WhoShouldJoin } from "@/app/components/sections/bootcamp-web3/WhoShouldJoin";
import { WhyThisBootcamp } from "@/app/components/sections/bootcamp-web3/WhyThisBootcamp";

export default function Page() {
  return (
    <div>
      <BootcampHeroSection />
      <WhyThisBootcamp />
      <WhoShouldJoin />
      <ModulesOverview />
      <ResultsYouCanExpect />
      <BootcampComparator />
      <section className="h-svh"></section>
    </div>
  );
}
