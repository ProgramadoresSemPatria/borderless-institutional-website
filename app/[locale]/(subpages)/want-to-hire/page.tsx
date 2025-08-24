import { BorderlessVsConsultancy } from "@/app/components/sections/want-to-hire/BorderlessVsConsultancy";
import { HowItWorks } from "@/app/components/sections/want-to-hire/HowItWorks";
import { PartnerWithBorderless } from "@/app/components/sections/want-to-hire/PartnerWithBorderless";
import { TalentPool } from "@/app/components/sections/want-to-hire/TalentPool";
import { WantToHireHeroSection } from "@/app/components/sections/want-to-hire/WantToHireHeroSection";
import { WhyBorderless } from "@/app/components/sections/want-to-hire/WhyBorderless";

export default function Page() {
  return (
    <div>
      <WantToHireHeroSection />
      <WhyBorderless />
      <HowItWorks />
      <BorderlessVsConsultancy />
      <TalentPool />
      <PartnerWithBorderless />
    </div>
  );
}
