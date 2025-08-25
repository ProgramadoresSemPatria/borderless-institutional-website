"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { AnimatedGrid } from "../../ui/AnimatedGrid";
import { AnimatedText } from "../../ui/AnimatedText";
import RichText from "../../ui/RichText";

const logosSrc = [
  "/brand-logos/coca-cola.png",
  "/brand-logos/apple.png",
  "/brand-logos/beehiiv.png",
  "/brand-logos/strike.png",
  "/brand-logos/paypal.png",
  "/brand-logos/x-team.png",
  "/brand-logos/pizza-hut.png",
  "/brand-logos/accenture.png",
  "/brand-logos/nubank.png",
  "/brand-logos/btg-pactual.png",
];

export function TalentCompanies() {
  const t = useTranslations("HomePage.TalentCompanies");

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".brand-card",
        start: "top 95%",
      },
    });

    tl.fromTo(
      ".brand-card",
      { y: "15%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        stagger: 0.05,
        duration: "0.5",
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-6">
      <AnimatedText as="h2" className="max-w-5xl">
        <RichText>{(tags) => t.rich("title", { ...tags })}</RichText>
      </AnimatedText>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-8 gap-2 relative">
        {logosSrc.map((src, index) => (
          <div
            key={`brand-logo-${index}`}
            className="brand-card bg-tertiary rounded-xl p-8 flex-center"
          >
            <Image width={800} height={800} src={src} alt="brand logo" />
          </div>
        ))}

        <div className="absolute z-[-1] -translate-x-1/2 bottom-0 translate-y-1/2">
          <AnimatedGrid />
        </div>
      </div>
    </section>
  );
}
