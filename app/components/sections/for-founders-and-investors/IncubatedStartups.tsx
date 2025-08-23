"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Bitcoin, Users, Zap } from "lucide-react";
import Image from "next/image";
import { ExternalLink } from "../../ui/ExternalLink";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";

const startups = [
  {
    src: "/startups/rampix.png",
    title: "Rampix",
    description:
      " A 100% Brazilian exchange to buy and sell cryptocurrencies via PIX, fast and secure.",
    icon: Bitcoin,
  },
  {
    src: "/startups/borderless-community.webp",
    title: "Borderless Community",
    description:
      "The super app from Borderless Coding: combining social network, members area, and forum for global tech professionals",
    buttonText: "Exclusivo para membros",
    icon: Users,
  },
];

export function IncubatedStartups() {
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
    <section className="py-[10svh] space-y-6 incubated-startups-section">
      <SectionHeader
        preTitle="Featured Startups"
        title={
          <>
            Meet some of the ventures emerging from our{" "}
            <span className="font-ivy">ecosystem</span>:
          </>
        }
      />

      <div className="space-y-2">
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
                <ExternalLink>{startup.buttonText || "Visitar"}</ExternalLink>
              </div>
            </div>
          ))}
        </div>

        <FeatureCard
          title="More Startups Coming Soon"
          description="As part of our incubation pipeline, new ventures are constantly emerging from our ecosystem."
          icon={Zap}
        />
      </div>
    </section>
  );
}
