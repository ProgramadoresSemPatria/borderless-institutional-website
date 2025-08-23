import { IComparator } from "@/app/components/ui/Comparator/types";
import { DollarSign, Eye, Globe, Users, Zap } from "lucide-react";

export const borderlessComparison: IComparator = {
  firstOptionTitle: "Borderless Coding",
  secondOptionTitle: "Traditional Consultancy",
  features: [
    {
      icon: DollarSign,
      title: "Hiring Fees",
      firstOptionFeature: "$0, we don't charge companies",
      secondOptionFeature: "20-35% of annual salary",
    },
    {
      icon: Users,
      title: "Talent Quality",
      firstOptionFeature:
        "Pre-vetted, trained through mentorship & global programs",
      secondOptionFeature: "Mixed pool, not always pre-qualified",
    },
    {
      icon: Globe,
      title: "English & Global Readiness",
      firstOptionFeature:
        "Minimum B1 English, trained for international interviews & culture",
      secondOptionFeature: "Varies widely, not guaranteed",
    },
    {
      icon: Zap,
      title: "Speed",
      firstOptionFeature: "Fast connection — hire in days",
      secondOptionFeature: "Lengthy process, often weeks/months",
    },
    {
      icon: Eye,
      title: "Transparency",
      firstOptionFeature: "Direct contract between company & professional",
      secondOptionFeature: "Middleman contracts and restrictions",
    },
  ],
};
