import { AccelerationPrograms } from "../components/sections/homepage/AccelerationPrograms";
import { EventsAndAchievements } from "../components/sections/homepage/EventsAndAchievements";
import { GlobalTalentConnector } from "../components/sections/homepage/GlobalTalentConnector";
import { GuaranteeSection } from "../components/sections/homepage/GuaranteeSection";
import { HelpSection } from "../components/sections/homepage/HelpSection";
import { HeroSection } from "../components/sections/homepage/HeroSection";
import { IncubatedStartupsWrapper } from "../components/sections/homepage/IncubatedStartupsWrapper";
import { OurHistory } from "../components/sections/homepage/OurHistory";
import { OurServices } from "../components/sections/homepage/OurServices";
import { OurTeam } from "../components/sections/homepage/OurTeam";
import { StartupIncubator } from "../components/sections/homepage/StartupIncubator";
import { TalentCompanies } from "../components/sections/homepage/TalentCompanies";
import { Testimonials } from "../components/sections/homepage/Testimonials";
import { createMetadata } from "../lib/seo";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  return createMetadata({ locale: params.locale });
}

export default function Page() {
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
      <IncubatedStartupsWrapper />
      <div className="space-y-4 mb-40">
        <OurHistory />
        <OurTeam />
        <HelpSection />
        <EventsAndAchievements />
      </div>
    </div>
  );
}
