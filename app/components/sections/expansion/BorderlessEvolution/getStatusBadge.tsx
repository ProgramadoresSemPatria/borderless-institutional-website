import { CheckCircle, Clock, Eye } from "lucide-react";
import { StageStatus } from "./constants/roadmapStages";

export const getStatusBadge = (
  status: StageStatus,
  labels: { completed: string; inProgress: string; next: string }
) => {
  switch (status) {
    case "completed":
      return (
        <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
          <CheckCircle className="w-3 h-3" />
          {labels.completed}
        </div>
      );
    case "in-progress":
      return (
        <div className="flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
          <Clock className="w-3 h-3" />
          {labels.inProgress}
        </div>
      );
    case "next":
      return (
        <div className="flex items-center gap-1 px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium">
          <Eye className="w-3 h-3" />
          {labels.next}
        </div>
      );
    default:
      return null;
  }
};
