import { LucideIcon } from "lucide-react";

export interface ComparatorFeature {
  icon: LucideIcon;
  title: string;
  firstOptionFeature: string;
  secondOptionFeature: string;
}

export interface IComparator {
  firstOptionTitle: string;
  secondOptionTitle: string;
  features: ComparatorFeature[];
}
