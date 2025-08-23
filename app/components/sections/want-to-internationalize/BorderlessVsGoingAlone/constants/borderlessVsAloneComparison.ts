import { IComparator } from "@/app/components/ui/Comparator/types";
import { DollarSign, UserCheck, Users, Wrench, Zap } from "lucide-react";

export const borderlessVsAloneComparison: IComparator = {
  firstOptionTitle: "Borderless Coding",
  secondOptionTitle: "On Your Own",
  features: [
    {
      icon: Wrench,
      title: "Method",
      firstOptionFeature: "Go Global™ – proven, step-by-step",
      secondOptionFeature: "Trial and error",
    },
    {
      icon: Users,
      title: "Mentorship",
      firstOptionFeature: "Direct feedback from global professionals",
      secondOptionFeature: "No guidance",
    },
    {
      icon: Zap,
      title: "Speed",
      firstOptionFeature: "90 days to first offers",
      secondOptionFeature: "12–24 months (if ever)",
    },
    {
      icon: UserCheck,
      title: "Community",
      firstOptionFeature: "500+ professionals supporting you",
      secondOptionFeature: "Alone",
    },
    {
      icon: DollarSign,
      title: "ROI",
      firstOptionFeature: "$10k+ USD contracts",
      secondOptionFeature: "Unpredictable",
    },
  ],
};
