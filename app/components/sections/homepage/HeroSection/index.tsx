"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useState } from "react";
import { AnimatedGrid } from "../../../ui/AnimatedGrid";
import { BottomSection } from "./components/BottomSection";
import { TopSection } from "./components/TopSection";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useGSAP(() => {
    setLoaded(true);
    if (!loaded) return;

    gsap.fromTo(
      ".hero-button",
      { y: "100%" },
      { y: 0, delay: 0.5, duration: 0.5, ease: "power4.out" }
    );

    gsap.fromTo(
      ".background-hero-img",
      { opacity: 0, scale: 0.9, y: "30%" },
      {
        opacity: 1,
        scale: 1,
        y: "30%",
        delay: 0.5,
        duration: 1.5,
        ease: "power4.out",
      }
    );
  }, [loaded]);

  if (!loaded) {
    // just show hero section when page is hydrated, so animation runs without flicker
    return <section className="h-svh" />;
  }

  return (
    <section className="relative flex flex-col lg:justify-between gap-8 pt-32 md:pt-36 pb-[5svh] border-b border-solid border-white/20 min-h-svh">
      <TopSection />
      <BottomSection />

      <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[80.5%]">
        <AnimatedGrid />
      </div>

      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute left-0 lg:left-1/2 bottom-0 z-0 w-full lg:w-1/2 background-hero-img">
          <Image
            width={671}
            height={798}
            src={"/borderless-logo-black.svg"}
            priority
            loading="eager"
            alt="logo"
            className="size-full opacity-80"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
