"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { ReactNode } from "react";
import { ExternalLink } from "../../ui/ExternalLink";
import { SectionHeader } from "../../ui/SectionHeader";
import { useIncubatedStartups } from "./hooks/useIncubatedStartups";

interface IncubatedStartupsProps {
  title: ReactNode;
  preTitle: string;
}

export function IncubatedStartups({ title, preTitle }: IncubatedStartupsProps) {
  const startups = useIncubatedStartups();

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
    <div className="space-y-6">
      <SectionHeader preTitle={preTitle} title={title} />

      <div className="grid md:grid-cols-2 gap-2 ">
        {startups.map((startup, index) => (
          <div
            className="startup-card flex flex-col justify-between bg-tertiary rounded-md p-6 gap-6 opacity-0"
            key={`startup-${index}`}
          >
            <div className="space-y-4">
              <Image
                width={2540}
                height={1350}
                src={startup.src}
                alt="startup"
                className="mt-4 rounded-md aspect-video"
              />

              <div className="space-y-2">
                <h3 className="text-xl font-bold">{startup.title}</h3>
                <p className="text-sm md:text-base font-medium max-w-xl mb-auto text-white/80">
                  {startup.description}
                </p>
              </div>
            </div>

            <div className="w-full flex justify-end">
              <ExternalLink byPassUtmParams target="_blank" href={startup.href}>
                {startup.buttonText}
              </ExternalLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
