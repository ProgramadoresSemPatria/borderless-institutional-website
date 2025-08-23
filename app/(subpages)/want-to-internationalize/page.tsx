import { Testimonials } from "@/app/components/sections/homepage/Testimonials";
import { BorderlessAdvantage } from "@/app/components/sections/want-to-internationalize/BorderlessAdvantage";
import { BorderlessVsGoingAlone } from "@/app/components/sections/want-to-internationalize/BorderlessVsGoingAlone";
import { HowItWorks } from "@/app/components/sections/want-to-internationalize/HowItWorks";
import { InternationalizeHeroSection } from "@/app/components/sections/want-to-internationalize/InternationalizeHeroSection";
import { ReadyToGoGlobal } from "@/app/components/sections/want-to-internationalize/ReadyToGoGlobal";
import { WhyInternationalize } from "@/app/components/sections/want-to-internationalize/WhyInternationalize";

export default function Page() {
  return (
    <div>
      <InternationalizeHeroSection />
      <WhyInternationalize />
      <BorderlessAdvantage />
      <HowItWorks />
      <Testimonials />
      <BorderlessVsGoingAlone />
      <ReadyToGoGlobal />
    </div>
  );
}
