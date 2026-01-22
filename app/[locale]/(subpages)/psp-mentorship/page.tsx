import { ApplyNow } from "@/app/components/sections/psp-mentorship/ApplyNow";
import { CompareOurMentorships } from "@/app/components/sections/psp-mentorship/CompareOurMentorships";
import { GoGlobalMethod } from "@/app/components/sections/psp-mentorship/GoGlobalMethod";
import { HowItWorks } from "@/app/components/sections/psp-mentorship/HowItWorks";
import { PspHeroSection } from "@/app/components/sections/psp-mentorship/PspHeroSection";
import { ResultsYouCanExpect } from "@/app/components/sections/psp-mentorship/ResultsYouCanExpect";
import { Tiers } from "@/app/components/sections/psp-mentorship/Tiers";
import { WhatIsPspMentorship } from "@/app/components/sections/psp-mentorship/WhatIsPspMentorship";
import { WhoIsItFor } from "@/app/components/sections/psp-mentorship/WhoIsItFor";
import { WhyItWorks } from "@/app/components/sections/psp-mentorship/WhyItWorks";
import { createMetadata } from "@/app/lib/seo";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Metadata.PspMentorship",
  });

  return createMetadata({
    locale: params.locale,
    title: t("title"),
    description: t("description"),
    pathname: "/psp-mentorship",
  });
}

export default function Page() {
  return (
    <div>
      <PspHeroSection />
      <WhatIsPspMentorship />
      <Tiers />
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
