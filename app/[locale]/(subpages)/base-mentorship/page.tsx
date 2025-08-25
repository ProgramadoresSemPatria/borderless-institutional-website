import { ApplyNow } from "@/app/components/sections/base-mentorship/ApplyNow";
import { BaseHeroSection } from "@/app/components/sections/base-mentorship/BaseHeroSection";
import { CompareOurMentorships } from "@/app/components/sections/base-mentorship/CompareOurMentorships";
import { FoundationMethod } from "@/app/components/sections/base-mentorship/FoundationMethod";
import { HowItWorks } from "@/app/components/sections/base-mentorship/HowItWorks";
import { ResultsYouCanExpect } from "@/app/components/sections/base-mentorship/ResultsYouCanExpect";
import { WhatIsBaseMentorship } from "@/app/components/sections/base-mentorship/WhatIsBaseMentorship";
import { WhoIsItFor } from "@/app/components/sections/base-mentorship/WhoIsItFor";
import { WhyItWorks } from "@/app/components/sections/base-mentorship/WhyItWorks";

export default function Page() {
  return (
    <div>
      <BaseHeroSection />
      <WhatIsBaseMentorship />
      <WhoIsItFor />
      <FoundationMethod />
      <HowItWorks />
      <ResultsYouCanExpect />
      <WhyItWorks />
      <CompareOurMentorships />
      <ApplyNow />
    </div>
  );
}
