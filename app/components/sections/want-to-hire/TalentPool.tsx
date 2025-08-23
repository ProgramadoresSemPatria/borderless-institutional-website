"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedText } from "../../ui/AnimatedText";
import { RequirementsCard } from "../../ui/RequirementsCard";
import { SectionHeader } from "../../ui/SectionHeader";

export function TalentPool() {
  useGSAP(() => {
    gsap.fromTo(
      ".requirements-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: ".requirements-card", start: "top 90%" },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-8">
      <SectionHeader
        preTitle="The talent pool"
        title={
          <>
            Our <span className="font-ivy">network</span> includes:{" "}
          </>
        }
      />

      <RequirementsCard
        items={[
          "Backend, Frontend & Fullstack Developers",
          "Data Engineers & Data Analysts",
          "DevOps & Cloud Specialists",
          "AI & Blockchain Professionals",
        ]}
      />

      <AnimatedText className="text-lg max-w-4xl">
        All trained under our <strong>Go Global™ Method</strong>, ensuring not
        only technical skill but also the ability to thrive in international
        teams.
      </AnimatedText>
    </section>
  );
}
