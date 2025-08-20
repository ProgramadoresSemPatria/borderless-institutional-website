"use client";

import { useGSAP } from "@gsap/react";
import { Bitcoin, Users, Zap } from "lucide-react";
import Image from "next/image";
import { AnimatedText } from "../components/ui/AnimatedText";
import { ExternalLink } from "../components/ui/ExternalLink";

const startups = [
  {
    src: "/startups/rampix.png",
    title: "Rampix",
    description:
      "Exchange 100% brasileira para comprar e vender criptomoedas via Pix, de maneira rápida e segura.",
    icon: Bitcoin,
  },
  {
    src: "/startups/borderless-community.webp",
    title: "Borderless Community",
    description: "Super-app Borderless Coding",
    buttonText: "Exclusivo para membros",
    icon: Users,
  },
];

export function IncubatedStartups() {
  useGSAP(() => {});

  return (
    <section className="space-y-6 incubated-startups-section">
      <AnimatedText as="h2">
        Startups em <span className="font-ivy">Incubação</span>{" "}
      </AnimatedText>
      <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
        <Zap className="w-4 h-4 text-purple-400" />
        <span className="text-purple-300 text-sm font-medium">
          Powered by Borderless Hub
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-2 ">
        {startups.map((startup, index) => (
          <div
            className="flex flex-col justify-between bg-tertiary rounded-md p-6 gap-6"
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

              <div className="space-y-1">
                <h3 className="text-xl md:text-3xl font-bold">
                  {startup.title}
                </h3>
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
    </section>
  );
}
