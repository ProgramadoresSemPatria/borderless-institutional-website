"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RequirementsCard } from "../../ui/RequirementsCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useWhoIsItFor } from "./hooks/useWhoIsItFor";
import { useRichText } from "@/app/hooks/useRichText";

export function WhoIsItFor() {
  const { roles, requirements } = useWhoIsItFor();
  const { t, rich } = useRichText("PspMentorship.WhoIsItFor");

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
        scrollTrigger: {
          trigger: ".requirements-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-8">
      <SectionHeader
        preTitle={t("preTitle")}
        title={rich("title")}
      />

      <div className="grid md:grid-cols-2 gap-2">
        <RequirementsCard
          title={roles.title}
          items={roles.items}
        />
        <RequirementsCard
          title={requirements.title}
          items={requirements.items}
        />
      </div>
    </section>
  );
}
