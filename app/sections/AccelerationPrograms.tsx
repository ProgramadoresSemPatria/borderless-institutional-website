"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Bitcoin,
  Code,
  Earth,
  Globe,
  Network,
  Speech,
  Target,
  User,
  Users,
  Zap,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import { AnimatedGrid } from "../components/ui/AnimatedGrid";
import { AnimatedText } from "../components/ui/AnimatedText";
import { Card } from "../components/ui/Card";
import { ExternalLink } from "../components/ui/ExternalLink";
import { IconWrapper } from "../components/ui/IconWrapper";
const programs = [
  {
    icon: Zap,
    title: "Mentoria PSP",
    description:
      "Programa de mentorias estruturado para acelerar sua carreira em tecnologia",
    features: [
      {
        title: "Mentoria especializada",
        icon: User,
      },
      {
        title: "Projetos práticos",
        icon: Code,
      },
      {
        title: "Network global",
        icon: Users,
      },
    ],
  },
  {
    icon: Target,
    title: "Mentoria BASE",
    description:
      "Fundamentos sólidos para sua jornada em tecnologia e mercados internacionais",
    features: [
      {
        title: "Base técnica",
        icon: Code,
      },
      {
        title: "Soft skills",
        icon: Speech,
      },
      {
        title: "Preparação global",
        icon: Earth,
      },
    ],
  },
  {
    icon: Globe,
    title: "Bootcamp: Web3 Global Developer",
    description:
      "Bootcamp intensivo focado em tecnologias Web3 e desenvolvimento descentralizado",
    features: [
      {
        title: "Web3 Stack",
        icon: Code,
      },
      {
        title: "DApps",
        icon: Network,
      },
      {
        title: "Blockchain",
        icon: Bitcoin,
      },
    ],
  },
];
export function AccelerationPrograms() {
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
    <section
      className="py-[10svh] space-y-6 xl:items-center gap-8 md:gap-12 flex flex-col-reverse xl:grid xl:grid-cols-[60%_1fr] relative"
      style={{ minHeight: "fit-content" }}
    >
      <div className="grid md:grid-cols-2 gap-2">
        {programs.map((program, index) => {
          return (
            <Card.Root
              key={index}
              className={twMerge(
                "acceleration-card",
                index === 2 && "md:col-span-2"
              )}
            >
              <div className="space-y-6 flex-grow">
                <h3 className="text-xl md:text-3xl font-bold">
                  {program.title}
                </h3>
                <p className="text-white/90">{program.description}</p>

                <div className="space-y-3 text-white/90">
                  {program.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-4 font-semibold text-sm"
                    >
                      <IconWrapper className="p-1.5" icon={feature.icon} />
                      <p>{feature.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full flex justify-end mt-8">
                <ExternalLink>Saiba mais</ExternalLink>
              </div>
            </Card.Root>
          );
        })}
      </div>

      <div className="space-y-6 mb-0">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-primary" />
          <p className="text-sm md:text-xl font-medium">
            Impulsione sua jornada
          </p>
        </div>
        <AnimatedText as="h2">
          Conheça nossos{" "}
          <span className="font-ivy">programas de aceleração</span>
        </AnimatedText>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 z-[-1]">
        <AnimatedGrid />
      </div>
    </section>
  );
}
