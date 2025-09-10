"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import {
  ComponentProps,
  ElementType,
  ReactNode,
  useRef,
  useState,
} from "react";

type AnimatedTextOwnProps<E extends ElementType> = {
  children: ReactNode;
  splitTextVars?: SplitText.Vars;
  tweenVars?: gsap.TweenVars;
  scrollTriggerVars?: ScrollTrigger.Vars;
  as?: E;
};

type AnimatedTextProps<E extends ElementType> = AnimatedTextOwnProps<E> &
  Omit<ComponentProps<E>, keyof AnimatedTextOwnProps<E>>;

type SplitTextType = "lines" | "words" | "chars";

export function AnimatedText<E extends ElementType = "p">({
  as,
  children,
  splitTextVars,
  tweenVars,
  scrollTriggerVars,
  ...props
}: AnimatedTextProps<E>) {
  const [isClient, setIsClient] = useState(false);
  const Component = as || "p";
  const container = useRef(null);
  const { className, ...rest } = props;

  useGSAP(
    () => {
      if (!isClient) {
        setIsClient(true);
        return;
      }

      const scrollTrigger = ScrollTrigger.create({
        trigger: container.current,
        start: "top 85%",
        ...scrollTriggerVars,
      });

      const gsapAnimation = (self: SplitText) => {
        const elementsToAnimate =
          self[(splitTextVars?.type as SplitTextType) || "lines"];

        return gsap.from(elementsToAnimate, {
          y: "100%",
          duration: 1.25,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger,
          onComplete: () => self.revert(),
          ...tweenVars,
        });
      };

      SplitText.create(container.current, {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        onSplit: (self) => gsapAnimation(self),
        ...splitTextVars,
      });
    },
    { scope: container, dependencies: [isClient] }
  );

  return (
    <Component className={className} {...rest} ref={container}>
      {children}
    </Component>
  );
}
