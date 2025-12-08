import RichText from "@/app/components/ui/RichText";
import { ArrowRight, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { AnimatedText } from "../../../../ui/AnimatedText";
import { LinkWithUtmParams } from "@/app/components/ui/LinkWithUtmParams";

export function TopSection() {
  const t = useTranslations("HomePage.HeroSection.TopSection");

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 mb-4">
        <Globe />
        <p className="text-sm md:text-xl">{t("tagline")}</p>
      </div>
      <AnimatedText
        tweenVars={{
          scrollTrigger: undefined,
        }}
        as="h1"
        className="text-2xl md:text-4xl 2xl:text-6xl font-semibold max-w-6xl 2xl:max-w-7xl leading-snug md:leading-tight"
      >
        <RichText>{(tags) => t.rich("headline", { ...tags })}</RichText>
      </AnimatedText>

      <div className="overflow-hidden pt-2">
        <LinkWithUtmParams
          target="_blank"
          href={
            "https://go.borderlesscoding.com/widget/bookings/diagnostico-carreira-2025"
          }
        >
          <button className="hero-button group border-2 border-primary py-3 w-full md:w-sm rounded-md flex-center gap-4 hover:opacity-80 cursor-pointer transition-opacity duration-150">
            {t("button")}
            <ArrowRight className="group-hover:translate-x-1 transition-translate duration-150" />
          </button>
        </LinkWithUtmParams>
      </div>
    </div>
  );
}
