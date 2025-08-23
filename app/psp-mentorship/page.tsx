import { PspHeroSection } from "../components/sections/psp-mentorship/PspHeroSection";
import { WhatIsPspMentorship } from "../components/sections/psp-mentorship/WhatIsPspMentorship";
import { WhoIsItFor } from "../components/sections/psp-mentorship/WhoIsItFor";

export default function Page() {
  return (
    <div>
      <PspHeroSection />
      <WhatIsPspMentorship />
      <WhoIsItFor />
    </div>
  );
}
