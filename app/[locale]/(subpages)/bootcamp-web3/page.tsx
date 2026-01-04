import { ApplyNow } from "@/app/components/sections/bootcamp-web3/ApplyNow";
import { BootcampComparator } from "@/app/components/sections/bootcamp-web3/BootcampComparator";
import { BootcampHeroSection } from "@/app/components/sections/bootcamp-web3/BootcampHeroSection";
import { ModulesOverview } from "@/app/components/sections/bootcamp-web3/ModulesOverview";
import { ResultsYouCanExpect } from "@/app/components/sections/bootcamp-web3/ResultsYouCanExpect";
import { WhoShouldJoin } from "@/app/components/sections/bootcamp-web3/WhoShouldJoin";
import { WhyThisBootcamp } from "@/app/components/sections/bootcamp-web3/WhyThisBootcamp";
import { createMetadata } from "@/app/lib/seo";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Metadata.BootcampWeb3",
  });

  return createMetadata({
    locale: params.locale,
    title: t("title"),
    description: t("description"),
    pathname: "/bootcamp-web3",
  });
}

export default function Page() {
  return (
    <div>
      <BootcampHeroSection />
      <WhyThisBootcamp />
      <WhoShouldJoin />
      <ModulesOverview />
      <ResultsYouCanExpect />
      <BootcampComparator />
      <ApplyNow />
    </div>
  );
}
