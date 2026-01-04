import { BorderlessEvolution } from "@/app/components/sections/expansion/BorderlessEvolution";
import { ExpansionHeroSection } from "@/app/components/sections/expansion/ExpansionHeroSection";
import { IncubatedStartupsWrapper } from "@/app/components/sections/expansion/IncubatedStartupsWrapper";
import { JoinExpansion } from "@/app/components/sections/expansion/JoinExpansion";
import { WhyItMatters } from "@/app/components/sections/expansion/WhyItMatters";
import { createMetadata } from "@/app/lib/seo";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Metadata.Expansion",
  });

  return createMetadata({
    locale: params.locale,
    title: t("title"),
    description: t("description"),
    pathname: "/expansion",
  });
}

export default function Page() {
  return (
    <div>
      <ExpansionHeroSection />
      <BorderlessEvolution />
      <IncubatedStartupsWrapper />
      <WhyItMatters />
      <JoinExpansion />
    </div>
  );
}
