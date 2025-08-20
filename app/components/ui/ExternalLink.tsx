import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

export function ExternalLink({ children }: { children: ReactNode }) {
  return (
    <button className="flex-center rounded-md cursor-pointer bg-primary text-white w-fit p-1 pl-3 space-x-2 hover:bg-primary/90 transition-colors duration-150">
      <p className="text-sm font-medium">{children}</p>
      <div className="bg-tertiary rounded-sm p-2.5">
        <ArrowUpRight className="size-3.5" />
      </div>
    </button>
  );
}
