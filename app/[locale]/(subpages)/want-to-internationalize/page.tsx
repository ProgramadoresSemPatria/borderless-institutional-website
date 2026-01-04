import { Testimonials } from "@/app/components/sections/homepage/Testimonials";
import { BorderlessAdvantage } from "@/app/components/sections/want-to-internationalize/BorderlessAdvantage";
import { BorderlessVsGoingAlone } from "@/app/components/sections/want-to-internationalize/BorderlessVsGoingAlone";
import { HowItWorks } from "@/app/components/sections/want-to-internationalize/HowItWorks";
import { InternationalizeHeroSection } from "@/app/components/sections/want-to-internationalize/InternationalizeHeroSection";
import { ReadyToGoGlobal } from "@/app/components/sections/want-to-internationalize/ReadyToGoGlobal";
import { WhyInternationalize } from "@/app/components/sections/want-to-internationalize/WhyInternationalize";
import { createMetadata } from "@/app/lib/seo";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Metadata.WantToInternationalize",
  });

  return createMetadata({
    locale: params.locale,
    title: t("title"),
    description: t("description"),
    pathname: "/want-to-internationalize",
  });
}

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
