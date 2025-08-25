"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Award, Code2, Globe, Users, Zap } from "lucide-react";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useTranslations } from "next-intl";
import RichText from "@/app/components/ui/RichText";

const icons = [Zap, Globe, Code2, Award, Users];

export function WhyThisBootcamp() {
  const t = useTranslations("BootcampWeb3.WhyThisBootcamp");
  useGSAP(() => {
    gsap.fromTo(
      ".bootcamp-feature-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: ".bootcamp-feature-card", start: "top 90%" },
      }
    );
  });

  return (
    <section className="space-y-8 py-[10svh]">
      <SectionHeader
        preTitle={t("preTitle")}
        title={<RichText>{(tags) => t.rich("title", { ...tags })}</RichText>}
      />

      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-2">
        {Array.from({ length: 5 }, (_, i) => ({
          title: t(`features.${i}.title`),
          description: t(`features.${i}.description`),
          icon: icons[i],
        })).map((features) => (
          <FeatureCard
            key={features.title}
            title={features.title}
            description={features.description}
            icon={features.icon}
            className="bootcamp-feature-card"
          />
        ))}
      </div>
    </section>
  );
}
