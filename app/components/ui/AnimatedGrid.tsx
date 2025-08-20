"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function AnimatedGrid() {
  const gridContainerRef = useRef<HTMLDivElement>(null);

  function animateSquare(square: HTMLDivElement | string) {
    gsap.to(square, {
      opacity: 1,
      duration: 1,
      delay: gsap.utils.random(0, 4),
      ease: "none",
      yoyo: true,
      repeat: 1,
      onComplete: () => animateSquare(square),
    });
  }

  useGSAP(
    () => {
      const squares = gsap.utils.toArray<HTMLDivElement>(".grid-square");
      squares.forEach((square) => animateSquare(square));
      animateSquare(".off-grid-square");
    },
    { scope: gridContainerRef }
  );

  return (
    <div className="w-36 md:w-48 pointer-events-none">
      <div ref={gridContainerRef} className="w-full grid grid-cols-4">
        {[...Array(16)].map((_, index) => (
          <div
            key={`grid-square-${index}`}
            className="grid-square w-full aspect-square bg-primary opacity-0"
          />
        ))}
      </div>
      <div className="w-full grid grid-cols-4">
        <div className="off-grid-square w-full aspect-square bg-primary col-start-3 col-end-4 opacity-0" />
      </div>
    </div>
  );
}
