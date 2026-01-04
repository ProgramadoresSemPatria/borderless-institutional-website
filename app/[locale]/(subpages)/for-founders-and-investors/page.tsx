import { ForFounders } from "@/app/components/sections/for-founders-and-investors/ForFounders";
import { ForFoundersHeroSection } from "@/app/components/sections/for-founders-and-investors/ForFoundersHeroSection";
import { ForInvestors } from "@/app/components/sections/for-founders-and-investors/ForInvestors";
import { IncubatedStartupsWrapper } from "@/app/components/sections/for-founders-and-investors/IncubatedStartupsWrapper";
import { JoinUs } from "@/app/components/sections/for-founders-and-investors/JoinUs";
import { WhyBorderless } from "@/app/components/sections/for-founders-and-investors/WhyBorderless";
import { createMetadata } from "@/app/lib/seo";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Metadata.ForFoundersAndInvestors",
  });

  return createMetadata({
    locale: params.locale,
    title: t("title"),
    description: t("description"),
    pathname: "/for-founders-and-investors",
  });
}

export default function Page() {
  return (
    <div>
      <ForFoundersHeroSection />
      <ForFounders />
      <ForInvestors />
      <IncubatedStartupsWrapper />
      <WhyBorderless />
      <JoinUs />
    </div>
  );
}
