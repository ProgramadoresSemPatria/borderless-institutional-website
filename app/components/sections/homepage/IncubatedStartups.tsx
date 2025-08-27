"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Zap } from "lucide-react";
import Image from "next/image";
import { AnimatedText } from "../../ui/AnimatedText";
import { ExternalLink } from "../../ui/ExternalLink";
import { useIncubatedStartups } from "./hooks/useIncubatedStartups";

export function IncubatedStartups() {
  const { title, startups } = useIncubatedStartups();

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
    <section className="py-[10svh] space-y-6 incubated-startups-section  border-b border-solid border-white/20 ">
      <AnimatedText as="h2">{title}</AnimatedText>
      <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
        <Zap className="w-4 h-4 text-purple-400" />
        <span className="text-purple-300 text-sm font-medium">
          Powered by Borderless Hub
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-2 ">
        {startups.map((startup, index) => (
          <div
            className="startup-card flex flex-col justify-between bg-tertiary rounded-md p-6 gap-6"
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
              <ExternalLink target="_blank" href={startup.href}>
                {startup.buttonText}
              </ExternalLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
