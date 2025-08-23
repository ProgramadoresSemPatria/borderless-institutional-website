import { ForFounders } from "@/app/components/sections/for-founders-and-investors/ForFounders";
import { ForFoundersHeroSection } from "@/app/components/sections/for-founders-and-investors/ForFoundersHeroSection";
import { ForInvestors } from "@/app/components/sections/for-founders-and-investors/ForInvestors";
import { IncubatedStartups } from "@/app/components/sections/for-founders-and-investors/IncubatedStartups";
import { JoinUs } from "@/app/components/sections/for-founders-and-investors/JoinUs";
import { WhyBorderless } from "@/app/components/sections/for-founders-and-investors/WhyBorderless";

export default function Page() {
  return (
    <div>
      <ForFoundersHeroSection />
      <ForFounders />
      <ForInvestors />
      <IncubatedStartups />
      <WhyBorderless />
      <JoinUs />
    </div>
  );
}
