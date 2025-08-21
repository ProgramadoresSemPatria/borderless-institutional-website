import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function ExternalLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={twMerge(
        "flex-center rounded-md cursor-pointer bg-primary text-white w-fit p-1 pl-3 space-x-2 hover:bg-primary/90 transition-colors duration-150",
        className
      )}
    >
      <p className="text-sm font-medium">{children}</p>
      <div className="bg-tertiary rounded-sm p-2.5">
        <ArrowUpRight className="size-3.5" />
      </div>
    </button>
  );
}
