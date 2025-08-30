"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { AnimatedGrid } from "../../ui/AnimatedGrid";
import { SectionHeader } from "../../ui/SectionHeader";

export function StartupIncubator() {
  const { t, rich } = useRichText("HomePage.StartupIncubator");

  useGSAP(() => {
    gsap.fromTo(
      ".borderless-app",
      {
        scale: 0.9,
        y: "5%",
      },
      {
        scale: 1,
        y: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".borderless-app",
          start: "top 90%",
          scrub: 1,
        },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-6 grid xl:grid-cols-2 gap-8 items-center">
      <SectionHeader title={rich("title")} preTitle={t("subtitle")} />

      <div className="w-full flex flex-col items-center xl:mt-0 gap-4 relative">
        <Image
          className="w-full borderless-app rounded-xl origin-center shadow-2xl max-w-7xl"
          width={1200}
          height={612}
          src={"/super-app-borderless.webp"}
          alt="borderless app"
        />
        <p className="text-xs md:text-base font-medium">{t("caption")}</p>

        <div className="absolute left-0 -translate-x-1/2 -translate-y-1/4 z-[-1]">
          <AnimatedGrid />
        </div>
      </div>
    </section>
  );
}
