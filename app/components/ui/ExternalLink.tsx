"use client";

import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { LinkProps } from "next/link";
import { ComponentProps, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatedIconWrapper } from "./AnimatedIconWrapper";

type Props = {
  children: ReactNode;
  className?: string;
} & LinkProps &
  ComponentProps<"a">;

export function ExternalLink({
  children,
  className,
  href = "/",
  target,
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      target={target}
      className={twMerge(
        "flex-center rounded-md cursor-pointer bg-primary text-white w-fit p-1 pl-3 space-x-2 hover:scale-110 transition-all duration-500 ease-bouncy",
        className
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="text-sm font-medium">{children}</p>
      <AnimatedIconWrapper
        icon={ArrowUpRight}
        className="bg-tertiary"
        iconClassName="size-3.5"
        hovered={hovered}
        onHoverBackground="bg-white/90"
        onHoverIconColor="text-black"
      />
    </Link>
  );
}
