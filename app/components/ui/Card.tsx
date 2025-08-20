"use client";

import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function CardRoot({
  children,
  className,
  ...props
}: ComponentProps<"div"> & {
  children: ReactNode;
}) {
  return (
    <div
      className={twMerge("flex flex-col bg-tertiary rounded-md p-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function CardIcon({
  children,
  className,
  ...props
}: ComponentProps<"div"> & {
  children: ReactNode;
}) {
  return (
    <div
      {...props}
      className={twMerge(
        "w-14 h-14 bg-secondary/40 rounded-xl flex items-center justify-center mb-6",
        className
      )}
    >
      {children}
    </div>
  );
}

function CardTexts({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-1">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-white/70 leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function CardButton({
  children,
  className,
  ...props
}: ComponentProps<"button"> & {
  children: ReactNode;
}) {
  return (
    <button
      {...props}
      className={twMerge(
        "w-full bg-secondary hover:bg-secondary/70 text-black/80 font-semibold py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 mt-8",
        className
      )}
    >
      {children}
    </button>
  );
}

export const Card = {
  Root: CardRoot,
  Icon: CardIcon,
  Texts: CardTexts,
  Button: CardButton,
};
