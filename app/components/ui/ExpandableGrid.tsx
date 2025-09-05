"use client";

import { cn } from "@/app/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

type ExpandingGridBaseProps = {
  /**Rem Height */
  itemHeight: number;
  /**Rem Gap */
  gap?: number;
  itemsPerRow: number;
};

type ExpandingGridProps = ExpandingGridBaseProps & {
  items: React.ReactNode[];
  breakpoints?: {
    [key in keyof typeof tailwindScreens]?: Partial<ExpandingGridBaseProps>;
  };
};

const tailwindScreens: Record<string, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export default function ExpandableGrid(props: ExpandingGridProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { items, breakpoints, ...baseProps } = props;
  const [activeProps, setActiveProps] =
    useState<ExpandingGridBaseProps>(baseProps);
  const { itemHeight, gap = 0.5, itemsPerRow } = activeProps;

  const rowsQty = Math.ceil(items.length / itemsPerRow);
  const containerHeightRem = itemHeight * rowsQty + gap * (rowsQty - 1);

  const rows: React.ReactNode[][] = [];
  for (let r = 0; r < rowsQty; r++) {
    const start = r * itemsPerRow;
    rows.push(items.slice(start, start + itemsPerRow));
  }

  const updatePropsOnBreakpoint = () => {
    if (!breakpoints) return;
    let merged = { ...baseProps };

    Object.entries(breakpoints).forEach(([key, bpProps]) => {
      const minWidth = tailwindScreens[key];
      if (!minWidth) return;

      if (window.matchMedia(`(min-width: ${minWidth}px)`).matches) {
        merged = { ...merged, ...bpProps };
      }
    });

    setActiveProps(merged);
  };

  useEffect(() => {
    if (!breakpoints) return;
    const mediaQueryList: MediaQueryList[] = [];

    Object.entries(breakpoints).forEach(([key]) => {
      const minWidth = tailwindScreens[key];
      const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);
      mediaQuery.addEventListener("change", updatePropsOnBreakpoint);
      mediaQueryList.push(mediaQuery);
    });

    updatePropsOnBreakpoint();

    return () => {
      mediaQueryList.forEach((mediaQuery) =>
        mediaQuery.removeEventListener("change", updatePropsOnBreakpoint)
      );
    };
  }, [breakpoints]);

  useGSAP(
    () => {
      gsap.set(".expandable-grid-item", { opacity: 0, y: "20%" });
      gsap.to(".expandable-grid-item", {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
        },
      });
    },
    { scope: ref, dependencies: [rows], revertOnUpdate: true }
  );

  return (
    <div
      ref={ref}
      className={"w-full flex flex-col justify-center"}
      style={{
        height: `${containerHeightRem}rem`,
        gap: `${gap}rem`,
      }}
    >
      {rows.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="flex transition-all h-full has-[div:hover]:h-[115%] duration-[450ms] ease-bouncy"
          style={{
            gap: `${gap}rem`,
          }}
        >
          {row.map((colItem, colIndex) => (
            <div
              key={`cell-${rowIndex}-${colIndex}`}
              className={cn(
                "size-full transition-all duration-[450ms] ease-bouncy expandable-grid-item",
                row.length > 1 && "hover:w-[110%]"
              )}
            >
              {colItem}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
