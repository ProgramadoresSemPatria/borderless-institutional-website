"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { AnimatedText } from "../../ui/AnimatedText";

export function WantToHireHeroSection() {
  const { rich, t } = useRichText("WantToHire.HeroSection");
  return (
    <section className="pt-36 pb-[10svh] space-y-12">
      <div className="space-y-6">
        <AnimatedText
          tweenVars={{
            scrollTrigger: undefined,
          }}
          as="h1"
          className="text-2xl md:text-4xl 2xl:text-6xl font-semibold max-w-6xl 2xl:max-w-7xl leading-snug md:leading-tight"
        >
          {rich("title")}
        </AnimatedText>

        <div className="space-y-12">
          <AnimatedText
            tweenVars={{
              delay: 0.3,
              scrollTrigger: undefined,
            }}
            className="md:text-xl max-w-3xl font-semibold text-gray"
          >
            {t("subtitle")}
          </AnimatedText>
        </div>

        <div className="overflow-hidden pt-2">
          <Link
            href="/want-to-hire/form"
            className="hero-button group border-2 border-primary py-3 w-full md:w-sm rounded-md flex-center gap-4 hover:opacity-80 cursor-pointer transition-opacity duration-150"
          >
            {t("cta")}
            <ArrowRight className="group-hover:translate-x-1 transition-translate duration-150" />
          </Link>
        </div>
      </div>
    </section>
  );
}
