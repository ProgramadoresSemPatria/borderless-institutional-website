"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedText } from "../../ui/AnimatedText";
import { RequirementsCard } from "../../ui/RequirementsCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useRichText } from "@/app/hooks/useRichText";
import { useTalentPool } from "./hooks/useTalentPool";

export function TalentPool() {
  const { rich } = useRichText("WantToHire.TalentPool");
  const { header, items, paragraph } = useTalentPool();
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
      <SectionHeader preTitle={header.preTitle} title={rich(header.titleKey)} />

      <RequirementsCard items={items} />

      <AnimatedText className="text-lg max-w-4xl">{paragraph}</AnimatedText>
    </section>
  );
}
