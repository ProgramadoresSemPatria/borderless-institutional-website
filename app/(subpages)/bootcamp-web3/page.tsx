import { BootcampHeroSection } from "@/app/components/sections/bootcamp-web3/BootcampHeroSection";
import { WhoShouldJoin } from "@/app/components/sections/bootcamp-web3/WhoShouldJoin";
import { WhyThisBootcamp } from "@/app/components/sections/bootcamp-web3/WhyThisBootcamp";

export default function Page() {
  return (
    <div>
      <BootcampHeroSection />
      <WhyThisBootcamp />
      <WhoShouldJoin />
    </div>
  );
}
