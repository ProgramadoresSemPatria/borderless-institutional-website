"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export function GSAPWrapper({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
