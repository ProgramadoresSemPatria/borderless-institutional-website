"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RequirementsCard } from "../../ui/RequirementsCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useWhoIsItFor } from "./hooks/useWhoIsItFor";

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
        scrollTrigger: { trigger: ".requirements-card", start: "top 90%" },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-8">
      <SectionHeader preTitle={t("preTitle")} title={rich("title")} />

      <div className="flex flex-col lg:flex-row gap-2">
        <RequirementsCard
          title={roles.title}
          items={roles.items}
          className="lg:hover:w-[110%] transition-all ease-bouncy duration-300"
        />
        <RequirementsCard
          title={requirements.title}
          items={requirements.items}
          className="lg:hover:w-[110%] transition-all ease-bouncy duration-300"
        />
      </div>
    </section>
  );
}
