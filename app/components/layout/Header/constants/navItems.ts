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
  subItems?: Omit<NavItem & { description: string }, "subItems" | "icon">[];
};

export const navItems: NavItem[] = [
  { title: "Bootcamp", href: "/bootcamp-web3", icon: Globe },
  {
    title: "Mentorships",
    icon: Users,
    subItems: [
      {
        title: "PSP",
        href: "/psp-mentorship",
        description: "Career acceleration program for senior developers",
      },
      {
        title: "BASE",
        href: "/base-mentorship",
        description:
          "Career acceleration program for Junior/Entry mid level developers",
      },
    ],
  },
  {
    title: "Partnerships",
    icon: BriefcaseBusiness,
    subItems: [
      {
        title: "Founders & Investors",
        href: "/for-founders-and-investors",
        description:
          "We empower the next generation of international tech founders",
      },
      {
        title: "Hire",
        href: "/want-to-hire",
        description:
          "Get direct access to a pool of highly qualified Brazilian developers",
      },
    ],
  },
  {
    title: "Evolution",
    icon: TrendingUp,
    subItems: [
      {
        title: "Internationalize",
        href: "/want-to-internationalize",
        description: "Proven system for internationalization",
      },
      {
        title: "Expansion",
        href: "/expansion",
        description: "Take a look at our expansion roadmap",
      },
    ],
  },
];
