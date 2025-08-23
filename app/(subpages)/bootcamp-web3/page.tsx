import { BootcampHeroSection } from "@/app/components/sections/bootcamp-web3/BootcampHeroSection";
import { ModulesOverview } from "@/app/components/sections/bootcamp-web3/ModulesOverview";
import { WhoShouldJoin } from "@/app/components/sections/bootcamp-web3/WhoShouldJoin";
import { WhyThisBootcamp } from "@/app/components/sections/bootcamp-web3/WhyThisBootcamp";

export default function Page() {
  return (
    <div>
      <BootcampHeroSection />
      <WhyThisBootcamp />
      <WhoShouldJoin />
      <ModulesOverview />
      <section className="h-svh"></section>
    </div>
  );
}
