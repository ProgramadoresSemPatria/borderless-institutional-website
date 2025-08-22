"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function TalkToAProfessional() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1350px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer-container",
          scrub: 1,
        },
      });

      tl.to(".left-text", {
        translateX: "-15%",
      });

      tl.to(
        ".right-text",
        {
          translateX: "15%",
        },
        "<"
      );

      tl.to(
        ".background-footer-img",
        {
          scale: 1.25,
        },
        "<"
      );
    });
  });

  return (
    <div className="footer-container w-[90%] max-w-[1800px] flex max-[1350px]:flex-col items-center justify-center text-black gap-12 py-[15svh] max-[1350px]:pt-[8svh] mx-auto">
      <p className="left-text text-center text-4xl sm:text-5xl lg:text-7xl font-semibold">
        Fale com{" "}
        <span className="min-[1350px]:hidden font-ivy font-normal">
          um profissional
        </span>{" "}
      </p>

      <div className="relative cursor-pointer">
        <Image
          width={2048}
          height={2731}
          src={"/team/yuri.webp"}
          alt="yuri"
          className="w-[15rem] rounded-2xl border-4 border-solid border-white -rotate-2"
        />

        <div className="absolute bg-primary rounded-md p-4 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <ArrowUpRight className="text-white size-10" />
        </div>
      </div>

      <p className="right-text font-ivy text-7xl hidden min-[1350px]:block">
        um profissional
      </p>

      <Image
        src={"/borderless-logo-white.svg"}
        width={671}
        height={798}
        alt="borderless logo"
        className="background-footer-img absolute z-[-1] opacity-30 brightness-125 w-auto h-[80%] object-cover"
      />
    </div>
  );
}
