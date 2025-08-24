"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Award, Code2, Github, Layers } from "lucide-react";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useTranslations } from "next-intl";
import RichText from "@/app/components/ui/RichText";

const icons = [Code2, Layers, Github, Award];

export function ResultsYouCanExpect() {
  const t = useTranslations("BootcampWeb3.ResultsYouCanExpect");
  useGSAP(() => {
    gsap.fromTo(
      ".result-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: ".result-card", start: "top 90%" },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-8">
      <SectionHeader
        preTitle={t("preTitle")}
        title={<RichText>{(tags) => t.rich("title", { ...tags })}</RichText>}
      />

      <div className="grid lg:grid-cols-2 gap-2">
        {Array.from({ length: 4 }, (_, i) => ({
          title: t(`results.${i}.title`),
          description: t(`results.${i}.description`),
          icon: icons[i],
        })).map((result) => (
          <FeatureCard
            className="result-card"
            key={result.title}
            title={result.title}
            description={result.description}
            icon={result.icon}
          />
        ))}
      </div>
    </section>
  );
}
