"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Code2, GraduationCap, Rocket } from "lucide-react";
import { FeatureCard } from "../../ui/FeatureCard";
import { RequirementsCard } from "../../ui/RequirementsCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useRichText } from "@/app/hooks/useRichText";

export function WhoShouldJoin() {
  const { rich, t } = useRichText("BootcampWeb3.WhoShouldJoin");

  useGSAP(() => {
    gsap.fromTo(
      [".audience-card", ".requirements-card"],
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: ".audience-card", start: "top 90%" },
      }
    );
  });

  const audience = [
    { icon: Code2 },
    { icon: Rocket },
    { icon: GraduationCap },
  ].map((item, i) => ({
    ...item,
    title: t(`audience.${i}.title`),
    description: t(`audience.${i}.description`),
  }));

  return (
    <section className="space-y-8 py-[10svh]">
      <SectionHeader
        preTitle={t("preTitle")}
        title={rich("title")}
      />

      <div className="space-y-2">
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-2">
          {audience.map((audience) => (
            <FeatureCard
              key={audience.title}
              title={audience.title}
              description={audience.description}
              icon={audience.icon}
              className="audience-card"
            />
          ))}
        </div>
        <RequirementsCard
          title={t("requirements.title")}
          items={[t("requirements.items.0"), t("requirements.items.1")]}
        />
      </div>
    </section>
  );
}
