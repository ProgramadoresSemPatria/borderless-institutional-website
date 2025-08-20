import { AccelerationPrograms } from "./components/sections/homepage/AccelerationPrograms";
import { GuaranteeSection } from "./components/sections/homepage/GuaranteeSection";
import { HeroSection } from "./components/sections/homepage/HeroSection";
import { IncubatedStartups } from "./components/sections/homepage/IncubatedStartups";
import { OurServices } from "./components/sections/homepage/OurServices";
import { StartupIncubator } from "./components/sections/homepage/StartupIncubator";
import { TalentCompanies } from "./components/sections/homepage/TalentCompanies";
import { Testimonials } from "./components/sections/homepage/Testimonials";

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
      <IncubatedStartups />
    </div>
  );
}
