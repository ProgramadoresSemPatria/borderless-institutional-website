import { AccelerationPrograms } from "./sections/AccelerationPrograms";
import { GuaranteeSection } from "./sections/GuaranteeSection";
import { HeroSection } from "./sections/HeroSection";
import { IncubatedStartups } from "./sections/IncubatedStartups";
import { OurServices } from "./sections/OurServices";
import { StartupIncubator } from "./sections/StartupIncubator";
import { TalentCompanies } from "./sections/TalentCompanies";
import { Testimonials } from "./sections/Testimonials";

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
