"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check } from "lucide-react";
import { IconWrapper } from "../../ui/IconWrapper";
import { SectionHeader } from "../../ui/SectionHeader";

const features = [
  "Direct mentorship and progress tracking",
  "A proven path from junior/mid-level to international readiness",
  "Access to a high-performance tech community",
  "Integration with the Borderless Platform to keep you accountable and connected",
];

export function WhyItWorks() {
  useGSAP(() => {
    gsap.fromTo(
      ".why-it-works-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".why-it-works-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="space-y-8 py-[10svh]">
      <SectionHeader
        preTitle="Why it works ?"
        title={
          <>
            Unlike random courses or self-study,{" "}
            <span className="font-ivy">BASE offers</span>:
          </>
        }
      />

      <div className="bg-tertiary rounded-md p-2 grid lg:grid-cols-2 gap-2">
        {features.map((feature) => (
          <div
            key={feature}
            className="why-it-works-card bg-[#212121] px-6 rounded-md flex gap-4 items-center py-6"
          >
            <IconWrapper
              className="size-8 flex-center p-0 shrink-0"
              icon={Check}
            />
            <p className="max-w-2xl">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
