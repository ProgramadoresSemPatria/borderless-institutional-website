import { GoGlobalMethod } from "../components/sections/psp-mentorship/GoGlobalMethod";
import { HowItWorks } from "../components/sections/psp-mentorship/HowItWorks";
import { PspHeroSection } from "../components/sections/psp-mentorship/PspHeroSection";
import { ResultsYouCanExpect } from "../components/sections/psp-mentorship/ResultsYouCanExpect";
import { WhatIsPspMentorship } from "../components/sections/psp-mentorship/WhatIsPspMentorship";
import { WhoIsItFor } from "../components/sections/psp-mentorship/WhoIsItFor";

export default function Page() {
  return (
    <div>
      <PspHeroSection />
      <WhatIsPspMentorship />
      <WhoIsItFor />
      <GoGlobalMethod />
      <HowItWorks />
      <ResultsYouCanExpect />
      <section className="h-svh"></section>
    </div>
  );
}
