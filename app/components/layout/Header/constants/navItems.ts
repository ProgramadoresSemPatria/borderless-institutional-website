import {
  BriefcaseBusiness,
  Globe,
  LucideIcon,
  TrendingUp,
  Users,
} from "lucide-react";

export type NavItem = {
  title: string;
  icon?: LucideIcon;
  href?: string;
  subItems?: Omit<NavItem, "subItems" | "icon">[];
};

export const navItems: NavItem[] = [
  { title: "Bootcamp", href: "/bootcamp-web3", icon: Globe },
  {
    title: "Mentorships",
    icon: Users,
    subItems: [
      { title: "PSP", href: "/psp-mentorship" },
      { title: "BASE", href: "/base-mentorship" },
    ],
  },
  {
    title: "Partnerships",
    icon: BriefcaseBusiness,
    subItems: [
      { title: "Founders & Investors", href: "/for-founders-and-investors" },
      { title: "Hire", href: "/want-to-hire" },
    ],
  },
  {
    title: "Evolution",
    icon: TrendingUp,
    subItems: [
      { title: "Internationalize", href: "/want-to-internationalize" },
      { title: "Expansion", href: "/expansion" },
    ],
  },
];
