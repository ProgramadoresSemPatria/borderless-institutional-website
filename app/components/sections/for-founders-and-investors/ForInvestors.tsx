"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedText } from "../../ui/AnimatedText";
import { FeatureCard } from "../../ui/FeatureCard";
import { FullWidthCard } from "../../ui/FullWidthCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useForInvestors } from "./hooks/useForInvestors";
import { useRichText } from "@/app/hooks/useRichText";

export function ForInvestors() {
  const { header, incubation, hub, banner } = useForInvestors();
  const { rich } = useRichText("ForFoundersAndInvestors.ForInvestors");
  useGSAP(() => {
    gsap.fromTo(
      ".for-investors-feature-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".for-investors-feature-card",
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      ".borderless-hub-features-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".borderless-hub-features-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-8">
      <div className="space-y-4">
        <SectionHeader
          preTitle={header.preTitle}
          title={rich("title")}
        />

        <AnimatedText className="text-gray text-lg font-medium max-w-6xl">
          {header.description}
        </AnimatedText>
      </div>

      <div className="space-y-4">
        <AnimatedText as="h2">{rich("incubationTitle")}</AnimatedText>

        <div className="grid lg:grid-cols-2 gap-2">
          {incubation.map((feature) => (
            <FeatureCard
              className="for-investors-feature-card"
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <AnimatedText as="h2">{rich("hubTitle")}</AnimatedText>

        <div className="space-y-2 bg-tertiary p-2">
          <div className="grid lg:grid-cols-2 gap-2">
            {hub.map((feature) => (
              <FeatureCard
                className="borderless-hub-features-card"
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                variant="secondary"
              />
            ))}
          </div>
          <FullWidthCard
            title={banner.title}
            description={banner.description}
          />
        </div>
      </div>
    </section>
  );
}
