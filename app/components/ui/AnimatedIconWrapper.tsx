"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LucideIcon } from "lucide-react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function AnimatedIconWrapper({
  icon,
  className,
  iconClassName,
  hovered,
}: {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  hovered?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const IconComponent = icon;

  useGSAP(
    () => {
      if (hovered) {
        gsap.to(".circle-path", {
          clipPath: "circle(140% at 0% 100%)",
          duration: 0.5,
          ease: "power4.inOut",
        });
      } else {
        gsap.to(".circle-path", {
          clipPath: "circle(0% at 0% 100%)",
          duration: 0.5,
          ease: "power4.inOut",
        });
      }
    },
    { scope: ref, dependencies: [hovered] }
  );

  return (
    <div
      ref={ref}
      className={twMerge(
        "p-2.5 size-fit rounded-sm bg-primary text-white shrink-0 relative overflow-hidden",
        className
      )}
    >
      <IconComponent
        className={twMerge(
          "size-5 transition-transform duration-300 ease-in-out",
          hovered && "-translate-y-[200%] translate-x-[200%]",
          iconClassName
        )}
      />

      <div className="inset-0 size-full absolute flex-center z-10">
        <IconComponent
          className={twMerge(
            "size-5 transition-transform translate-y-[200%] -translate-x-[200%] duration-300 delay-100 text-black ease-in-out",
            hovered && "translate-y-0 translate-x-0",
            iconClassName
          )}
        />
      </div>

      <div
        className="circle-path inset-0 size-full absolute bg-secondary z-0"
        style={{
          clipPath: "circle(0% at 0% 100%)",
        }}
      />
    </div>
  );
}
