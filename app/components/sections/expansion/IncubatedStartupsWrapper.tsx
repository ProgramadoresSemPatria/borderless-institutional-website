"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IncubatedStartups } from "../general/IncubatedStartups";

export function IncubatedStartupsWrapper() {
  const { t, rich } = useRichText("Expansion.IncubatedStartups");

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
    <section className="py-[10svh] space-y-6 incubated-startups-section">
      <IncubatedStartups title={rich("title")} preTitle={t("preTitle")} />
    </section>
  );
}
