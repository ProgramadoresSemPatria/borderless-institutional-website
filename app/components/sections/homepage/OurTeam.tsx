"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { AnimatedIconWrapper } from "../../ui/AnimatedIconWrapper";
import { AnimatedText } from "../../ui/AnimatedText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/Carousel";
import { useGetOurTeam } from "./hooks/useGetOurTeam";

export function OurTeam() {
  const { title, members } = useGetOurTeam();

  useGSAP(() => {
    gsap.fromTo(
      ".team-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".team-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section style={{ minHeight: "fit-content" }}>
      <div className="bg-tertiary py-8 lg:py-16 rounded-md">
        <Carousel
          className="w-full space-y-4"
          opts={{
            align: "start",
            breakpoints: { "(min-width: 640px)": { dragFree: true } },
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center w-full gap-4 justify-between px-8 lg:px-16">
            <AnimatedText as="h2">{title}</AnimatedText>

            <div className="gap-2 flex">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>

          <CarouselContent className="first:ml-4 last:mr-8 lg:first:ml-12 lg:last:mr-16 -ml-4">
            {members.map((member) => (
              <CarouselItem
                key={member.src}
                className="team-card space-y-4 sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4 pl-4 opacity-0"
              >
                <div className="w-full aspect-[9/12] relative">
                  <Image
                    fill
                    src={member.src}
                    alt="team member"
                    className="object-cover rounded-md"
                    sizes="100%"
                  />

                  <div className="absolute flex gap-2 right-2 bottom-2 bg-tertiary p-2 rounded-md">
                    <a href={member.github} target="_blank">
                      <AnimatedIconWrapper icon={Github} />
                    </a>
                    <a href={member.linkedin} target="_blank">
                      <AnimatedIconWrapper icon={Linkedin} />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-white/70 text-sm font-medium max-w-[90%]">
                    {member.role}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
