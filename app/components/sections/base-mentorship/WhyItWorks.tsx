"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { AnimatedIconWrapper } from "../../ui/AnimatedIconWrapper";
import { SectionHeader } from "../../ui/SectionHeader";

export function WhyItWorks() {
  const t = useTranslations("BaseMentorship.WhyItWorks");
  const { rich } = useRichText("BaseMentorship.WhyItWorks");
  const features = [
    t("features.0"),
    t("features.1"),
    t("features.2"),
    t("features.3"),
  ];
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
      <SectionHeader preTitle={t("preTitle")} title={<>{rich("title")}</>} />

      <div className="bg-tertiary rounded-md p-2 grid lg:grid-cols-2 gap-2">
        {features.map((feature) => (
          <div
            key={feature}
            className="why-it-works-card bg-[#212121] px-6 rounded-md flex gap-4 items-center py-6 opacity-0"
          >
            <AnimatedIconWrapper
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
