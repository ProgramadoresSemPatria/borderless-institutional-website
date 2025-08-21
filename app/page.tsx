import { AccelerationPrograms } from "./components/sections/homepage/AccelerationPrograms";
import { GlobalTalentConnector } from "./components/sections/homepage/GlobalTalentConnector";
import { GuaranteeSection } from "./components/sections/homepage/GuaranteeSection";
import { HeroSection } from "./components/sections/homepage/HeroSection";
import { IncubatedStartups } from "./components/sections/homepage/IncubatedStartups";
import { OurServices } from "./components/sections/homepage/OurServices";
import { OurTeam } from "./components/sections/homepage/OurTeam";
import { StartupIncubator } from "./components/sections/homepage/StartupIncubator";
import { TalentCompanies } from "./components/sections/homepage/TalentCompanies";
import { Testimonials } from "./components/sections/homepage/Testimonials";
import { OurHistory } from "./components/sections/OurHistory";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <OurServices />
      <TalentCompanies />
      <AccelerationPrograms />
      <GuaranteeSection />
      <Testimonials />
      <StartupIncubator />
      <GlobalTalentConnector />
      <IncubatedStartups />
      <div className="space-y-4">
        <OurHistory />
        <OurTeam />
      </div>
    </div>
  );
}
