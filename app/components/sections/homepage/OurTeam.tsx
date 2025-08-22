"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { AnimatedText } from "../../ui/AnimatedText";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/Carousel";
import { IconWrapper } from "../../ui/IconWrapper";

const teamPeople = [
  {
    name: "Yuri Pereira",
    role: "Founder e Strategic Tech Advisor",
    src: "/team/yuri.webp",
  },
  {
    name: "Felipe Meriga",
    role: "Mentor de Rust",
    src: "/team/felipe.webp",
  },
  {
    name: "Matheus Avi",
    role: "Mentor de Algoritmos e estrutura de dados",
    src: "/team/matheus.webp",
  },
  {
    name: "André Wlodkosvki",
    role: "Multi-cloud Specialist",
    src: "/team/andre.webp",
  },
  {
    name: "Alex Miloski",
    role: "Mentor/Investor Web3",
    src: "/team/alex.webp",
  },
  {
    name: "Thiago Dantas",
    role: "Mentor/Head AI ",
    src: "/team/thiago.webp",
  },
];

export function OurTeam() {
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
      <div className="bg-tertiary py-8 lg:py-16 flex-col rounded-md space-y-12">
        <AnimatedText as="h2" className="w-fit ml-8 lg:ml-16">
          Nosso <span className="font-ivy">time</span>
        </AnimatedText>

        <Carousel className="w-full space-y-4">
          <CarouselContent className="first:ml-4 last:mr-8 lg:first:ml-12 lg:last:mr-16 -ml-4">
            {teamPeople.map((member) => (
              <CarouselItem
                key={member.src}
                className="team-card space-y-4 sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4 pl-4"
              >
                <div className="w-full aspect-[9/12] relative">
                  <Image
                    fill
                    src={member.src}
                    alt="team member"
                    className="object-cover rounded-md"
                  />

                  <div className="absolute flex gap-2 right-2 bottom-2 bg-tertiary p-2 rounded-md">
                    <a href="">
                      <IconWrapper icon={Github} />
                    </a>
                    <a href="">
                      <IconWrapper icon={Linkedin} />
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
