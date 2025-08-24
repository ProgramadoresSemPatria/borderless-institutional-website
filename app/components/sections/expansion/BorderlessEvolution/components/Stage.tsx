import { IconWrapper } from "@/app/components/ui/IconWrapper";
import { RoadmapStage } from "../constants/roadmapStages";
import { getStatusBadge } from "../getStatusBadge";

export function Stage({ stage }: { stage: RoadmapStage }) {
  return (
    <div className="bg-[#212121] rounded-md p-6 space-y-6 min-h-full flex flex-col">
      <div className="flex items-center justify-between">
        <IconWrapper className="size-12 flex-center" icon={stage.icon} />
        {getStatusBadge(stage.status)}
      </div>

      <div className="space-y-2">
        <div>
          <p className="text-lg font-medium">{stage.title}</p>
          <p className="text-gray">{stage.timeline}</p>
        </div>
        <div className="text-gray">{stage.description}</div>
      </div>

      <ul className="space-y-4 grow">
        {stage.goals.map((goal) => (
          <li className="flex items-center gap-4">
            <div className="bg-primary size-1.5 rounded-full  shrink-0" />
            <p className="font-medium">{goal}</p>
          </li>
        ))}
      </ul>

      {stage.outcome && (
        <>
          <div className="h-px bg-white/20 w-full" />
          <p className="text-gray font-medium">{stage.outcome}</p>
        </>
      )}
    </div>
  );
}
