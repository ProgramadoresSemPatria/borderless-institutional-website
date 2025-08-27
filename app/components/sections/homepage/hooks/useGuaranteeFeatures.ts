"use client";

import { Code, LucideIcon, Smartphone, Users, Video } from "lucide-react";
import { useMessages } from "next-intl";

const icons = {
  code: Code,
  users: Users,
  video: Video,
  smartphone: Smartphone,
};

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeatureFromMessage {
  title: string;
  description: string;
  icon: string;
}

export function useGuaranteeFeatures(): Feature[] {
  const messages = useMessages();
  const featuresFromMessage = messages.HomePage.GuaranteeSection
    .features as FeatureFromMessage[];

  const features = featuresFromMessage.map((feature) => ({
    ...feature,
    icon: icons[feature.icon as keyof typeof icons],
  }));

  return features;
}
