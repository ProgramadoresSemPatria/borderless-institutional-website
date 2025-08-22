import { ReactNode } from "react";
import { AnimatedText } from "./AnimatedText";

interface FullWidthCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function FullWidthCard({
  title,
  description,
  children,
}: FullWidthCardProps) {
  return (
    <div className="bg-tertiary flex flex-col lg:items-center rounded-md py-6 md:py-16 px-6 space-y-12">
      <div className="space-y-4 lg:text-center max-w-3xl">
        <AnimatedText
          as="h3"
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-pretty"
        >
          {title}
        </AnimatedText>

        <p className="text-base md:text-lg font-medium text-gray text-pretty">
          {description}
        </p>
      </div>

      {children}
    </div>
  );
}
