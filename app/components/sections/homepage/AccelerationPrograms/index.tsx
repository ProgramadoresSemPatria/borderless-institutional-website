"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedGrid } from "../../../ui/AnimatedGrid";
import { AnimatedText } from "../../../ui/AnimatedText";
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
              className={`acceleration-card ${index === 2 && "md:col-span-2"}`}
            />
          );
        })}
      </div>

      <div className="space-y-6 mb-0">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-primary" />
          <p className="text-sm md:text-xl font-medium">{t("preTitle")}</p>
        </div>
        <AnimatedText as="h2">{rich("title")}</AnimatedText>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 z-[-1]">
        <AnimatedGrid />
      </div>
    </section>
  );
}
