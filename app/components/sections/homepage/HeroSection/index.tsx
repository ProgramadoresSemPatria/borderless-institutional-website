"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useState } from "react";
import { AnimatedGrid } from "../../../ui/AnimatedGrid";
import { BottomSection } from "./components/BottomSection";
import { TopSection } from "./components/TopSection";

export function HeroSection() {
  const [show, setShow] = useState(false);

  useGSAP(() => {
    setShow(true);
    if (!show) return;

    gsap.fromTo(
      ".hero-button",
      { y: "100%" },
      { y: 0, delay: 0.5, duration: 0.5, ease: "power4.out" }
    );

    gsap.fromTo(
      ".background-hero-img",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, delay: 0.5, duration: 1.5, ease: "power4.out" }
    );
  }, [show]);

  if (!show) {
    // just show hero section when page is hydrated, so animation runs without flicker
    return <section className="h-svh" />;
  }

  return (
    <section className="relative flex flex-col lg:justify-between gap-8 pt-[8svh] md:pt-[10svh] pb-[5svh] border-b border-solid border-white/20 min-h-[calc(100svh_-_4rem)]">
      <TopSection />
      <BottomSection />

      <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[80.5%]">
        <AnimatedGrid />
      </div>

      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute left-0 lg:left-1/2 bottom-0 lg:translate-y-[20%] z-0 w-full lg:w-1/2 background-hero-img">
          <Image
            width={671}
            height={798}
            src={"/borderless-logo-black.svg"}
            alt="logo"
            className="size-full opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
