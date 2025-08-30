"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedGrid } from "../../ui/AnimatedGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useOurServices } from "./hooks/useOurServices";

export function OurServices() {
  const { t, rich } = useRichText("HomePage.ServicesSection");
  const services = useOurServices();

  useGSAP(() => {
    gsap.fromTo(
      ".service-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".service-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="pt-[15svh] md:pt-[25svh] pb-[10svh] flex flex-col xl:flex-row xl:items-center gap-8 md:gap-12 relative">
      <SectionHeader
        title={rich("title")}
        preTitle={t("preTitle")}
        className="w-full max-w-lg xl:max-w-[40%]"
      />

      <div className="grid md:grid-cols-2 gap-2 grow relative">
        {services.map((service, index) => (
          <FeatureCard
            title={service.title}
            description={service.description}
            icon={service.icon}
            className={`service-card ${index === 2 && "md:col-span-2"}`}
            key={`service-${index}`}
          />
        ))}
        <div className="absolute right-0 bottom-0 translate-y-1/2 translate-x-1/2 z-[-1]">
          <AnimatedGrid />
        </div>
      </div>
    </section>
  );
}
