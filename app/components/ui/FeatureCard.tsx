import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IconWrapper } from "./IconWrapper";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  variant?: "primary" | "secondary";
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  variant = "primary",
}: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

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
        "rounded-md md:h-64 p-6 flex flex-col justify-between gap-8 opacity-0 group",
        variant === "primary" ? "bg-tertiary" : "bg-[#212121]",
        className
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="w-full flex items-center justify-between gap-4 group">
        <p className="text-sm md:text-base font-medium max-w-xs text-gray">
          {description}
        </p>

        {icon ? (
          <IconWrapper className="md:p-3.5" icon={icon} />
        ) : (
          <div className="p-2.5 size-fit rounded-sm bg-primary text-white overflow-hidden relative shrink-0">
            <ArrowUpRight
              className={twMerge(
                "size-5 transition-transform duration-300 ease-in-out",
                hovered && "-translate-y-[120%] translate-x-[120%]"
              )}
            />

            <div className="inset-0 size-full absolute flex-center z-10">
              <ArrowUpRight
                className={twMerge(
                  "size-5 transition-transform translate-y-[120%] -translate-x-[120%] duration-300 delay-100 text-black ease-in-out",
                  hovered && "translate-y-0 translate-x-0"
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
        )}
      </div>
    </div>
  );
}
