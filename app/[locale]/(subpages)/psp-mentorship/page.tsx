import { ApplyNow } from "@/app/components/sections/psp-mentorship/ApplyNow";
import { CompareOurMentorships } from "@/app/components/sections/psp-mentorship/CompareOurMentorships";
import { GoGlobalMethod } from "@/app/components/sections/psp-mentorship/GoGlobalMethod";
import { HowItWorks } from "@/app/components/sections/psp-mentorship/HowItWorks";
import { PspHeroSection } from "@/app/components/sections/psp-mentorship/PspHeroSection";
import { ResultsYouCanExpect } from "@/app/components/sections/psp-mentorship/ResultsYouCanExpect";
import { WhatIsPspMentorship } from "@/app/components/sections/psp-mentorship/WhatIsPspMentorship";
import { WhoIsItFor } from "@/app/components/sections/psp-mentorship/WhoIsItFor";
import { WhyItWorks } from "@/app/components/sections/psp-mentorship/WhyItWorks";

export default function Page() {
  return (
    <div>
      <PspHeroSection />
      <WhatIsPspMentorship />
      <WhoIsItFor />
      <GoGlobalMethod />
      <HowItWorks />
      <ResultsYouCanExpect />
      <WhyItWorks />
      <CompareOurMentorships />
      <ApplyNow />
    </div>
  );
}
