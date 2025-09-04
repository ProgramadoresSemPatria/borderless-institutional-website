import {
  BriefcaseBusiness,
  Globe,
  LucideIcon,
  TrendingUp,
  Users,
} from "lucide-react";
import { useMessages } from "next-intl";

export type NavItem = {
  title: string;
  icon?: LucideIcon;
  href?: string;
  subItems?: Omit<NavItem & { description: string }, "subItems" | "icon">[];
};

export type NavItemFromMessage = {
  title: string;
  icon?: string;
  href?: string;
  subItems?: Omit<NavItem & { description: string }, "subItems" | "icon">[];
};

const icons = {
  globe: Globe,
  users: Users,
  briefcaseBusiness: BriefcaseBusiness,
  trendingUp: TrendingUp,
};

export function useNavItems(): NavItem[] {
  const message = useMessages();
  const navItems = message.Header.navItems as NavItemFromMessage[];
  return navItems.map((item) => ({
    ...item,
    icon: icons[item.icon as keyof typeof icons],
  }));
}
