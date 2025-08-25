"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger, ScrollSmoother);

export function GSAPWrapper({ children }: { children: React.ReactNode }) {
  /*   useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  }); */

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
