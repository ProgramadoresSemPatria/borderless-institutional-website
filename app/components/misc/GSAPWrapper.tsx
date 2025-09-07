"use client";

import { usePathname } from "@/i18n/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import { LenisRef, ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger, ScrollSmoother);

export function GSAPWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.lenis?.scrollTo(0, {
      immediate: true,
    });
  }, [pathname]);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      {children}
    </>
  );
}
