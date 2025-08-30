import { Check } from "lucide-react";
import { IconWrapper } from "./IconWrapper";

interface RequirementsCardProps {
  title?: string;
  items: string[];
}

export function RequirementsCard({ title, items }: RequirementsCardProps) {
  return (
    <div className="requirements-card bg-tertiary rounded-md p-8 space-y-4 opacity-0">
      {title && <p className="text-xl font-bold">{title}</p>}
      <div className="text-gray space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <IconWrapper
              className="shrink-0 size-7 flex-center p-0"
              icon={Check}
            />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
