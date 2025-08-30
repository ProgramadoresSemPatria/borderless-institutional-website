"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Zap } from "lucide-react";
import { FeatureCard } from "../../ui/FeatureCard";
import { IncubatedStartups } from "../general/IncubatedStartups";

export function IncubatedStartupsWrapper() {
  const { t, rich } = useRichText("ForFoundersAndInvestors.IncubatedStartups");

  useGSAP(() => {
    gsap.fromTo(
      ".startup-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".startup-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-2 incubated-startups-section">
      <IncubatedStartups
        preTitle={t("preTitle")}
        title={<>{rich("title")}</>}
      />

      <FeatureCard
        className="opacity-100"
        title={t("moreCard.title")}
        description={t("moreCard.description")}
        icon={Zap}
      />
    </section>
  );
}
