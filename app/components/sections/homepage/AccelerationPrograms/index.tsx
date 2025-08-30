"use client";

import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { useRichText } from "@/app/hooks/useRichText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedGrid } from "../../../ui/AnimatedGrid";
import { useAccelerationPrograms } from "../hooks/useAccelerationPrograms";
import { AccelerationCard } from "./components/AccelerationCard";

export function AccelerationPrograms() {
  const { t, rich } = useRichText("HomePage.AccelerationPrograms");
  const programs = useAccelerationPrograms();

  useGSAP(() => {
    gsap.fromTo(
      ".acceleration-card",
      { y: "10%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".acceleration-card",
          start: "top 95%",
        },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-6 xl:items-center gap-8 md:gap-12 flex flex-col-reverse xl:grid xl:grid-cols-[60%_1fr] relative">
      <div className="grid md:grid-cols-2 gap-2">
        {programs.map((program, index) => {
          return (
            <AccelerationCard
              {...program}
              key={program.title}
              className={`acceleration-card opacity-0 ${
                index === 2 && "md:col-span-2"
              }`}
            />
          );
        })}
      </div>

      <SectionHeader title={rich("title")} preTitle={t("preTitle")} />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 z-[-1]">
        <AnimatedGrid />
      </div>
    </section>
  );
}
