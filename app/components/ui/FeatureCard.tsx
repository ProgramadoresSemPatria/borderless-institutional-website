"use client";

import { ArrowUpRight, LucideIcon } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatedIconWrapper } from "./AnimatedIconWrapper";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  variant?: "primary" | "secondary";
  className?: string;
  titleClassName?: string;
  img?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  titleClassName,
  variant = "primary",
  img,
}: FeatureCardProps) {
  const IconComponent = icon || ArrowUpRight;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={twMerge(
        "rounded-md size-full p-5 md:p-6 flex flex-col justify-between gap-8 group relative overflow-hidden",
        variant === "primary" ? "bg-tertiary" : "bg-[#212121]",
        className,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3
        className={twMerge("text-lg md:text-xl font-bold z-10", titleClassName)}
      >
        {title}
      </h3>
      <div className="w-full flex items-center justify-between gap-4 z-10">
        <p className="text-sm md:text-base font-medium max-w-xs text-gray">
          {description}
        </p>

        <AnimatedIconWrapper icon={IconComponent} hovered={hovered} />
      </div>

      {img && (
        <>
          <Image
            src={img}
            alt={title}
            fill
            className="absolute size-full object-cover object-center brightness-50"
          />
          <div className="absolute size-full bg-linear-to-t from-20% from-black/70 to-transparent inset-0" />
          <div className="absolute size-full h-1/3 bg-linear-to-b from-black/70 to-transparent inset-0" />
        </>
      )}
    </div>
  );
}
