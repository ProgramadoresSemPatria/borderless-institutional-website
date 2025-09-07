"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ComponentProps, ElementType, ReactNode, useRef } from "react";

type AnimatedTextOwnProps<E extends ElementType> = {
  children: ReactNode;
  splitTextVars?: SplitText.Vars;
  tweenVars?: gsap.TweenVars;
  scrollTriggerVars?: ScrollTrigger.Vars;
  as?: E;
};

type AnimatedTextProps<E extends ElementType> = AnimatedTextOwnProps<E> &
  ComponentProps<E>;

type Mask = "lines" | "words" | "chars";

export function AnimatedText<E extends ElementType = "p">({
  as,
  children,
  splitTextVars,
  tweenVars,
  scrollTriggerVars,
  ...props
}: AnimatedTextProps<E>) {
  const Component = as || "p";
  const container = useRef(null);

  const { className, ...rest } = props;

  useGSAP(
    () => {
      if (!container.current) return;

      SplitText.create(container.current, {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        onSplit: (self) => {
          return gsap.from(self[(splitTextVars?.type as Mask) || "lines"], {
            y: "100%",
            duration: 1.25,
            stagger: 0.1,
            ease: "power4.out",
            onComplete: () => {
              self.revert();
            },
            scrollTrigger: {
              trigger: container.current,
              start: "top 85%",
              ...scrollTriggerVars,
            },
            ...tweenVars,
          });
        },
        ...splitTextVars,
      });
    },
    { scope: container }
  );

  return (
    <Component className={className} {...rest} ref={container}>
      {children}
    </Component>
  );
}
