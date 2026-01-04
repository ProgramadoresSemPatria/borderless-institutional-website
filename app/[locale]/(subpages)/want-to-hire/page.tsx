import { BorderlessVsConsultancy } from "@/app/components/sections/want-to-hire/BorderlessVsConsultancy";
import { HowItWorks } from "@/app/components/sections/want-to-hire/HowItWorks";
import { PartnerWithBorderless } from "@/app/components/sections/want-to-hire/PartnerWithBorderless";
import { TalentPool } from "@/app/components/sections/want-to-hire/TalentPool";
import { WantToHireHeroSection } from "@/app/components/sections/want-to-hire/WantToHireHeroSection";
import { WhyBorderless } from "@/app/components/sections/want-to-hire/WhyBorderless";
import { createMetadata } from "@/app/lib/seo";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Metadata.WantToHire",
  });

  return createMetadata({
    locale: params.locale,
    title: t("title"),
    description: t("description"),
    pathname: "/want-to-hire",
  });
}

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
