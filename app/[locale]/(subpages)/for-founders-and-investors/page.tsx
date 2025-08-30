import { ForFounders } from "@/app/components/sections/for-founders-and-investors/ForFounders";
import { ForFoundersHeroSection } from "@/app/components/sections/for-founders-and-investors/ForFoundersHeroSection";
import { ForInvestors } from "@/app/components/sections/for-founders-and-investors/ForInvestors";
import { IncubatedStartupsWrapper } from "@/app/components/sections/for-founders-and-investors/IncubatedStartupsWrapper";
import { JoinUs } from "@/app/components/sections/for-founders-and-investors/JoinUs";
import { WhyBorderless } from "@/app/components/sections/for-founders-and-investors/WhyBorderless";

export default function Page() {
  return (
    <div>
      <ForFoundersHeroSection />
      <ForFounders />
      <ForInvestors />
      <IncubatedStartupsWrapper />
      <WhyBorderless />
      <JoinUs />
    </div>
  );
}
