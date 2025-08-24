import { Laptop, LucideIcon, Rocket, TrendingUp, Users } from "lucide-react";

export type StageStatus = "completed" | "in-progress" | "next";

export interface RoadmapStage {
  title: string;
  timeline: string;
  description: string;
  goals: string[];
  status: StageStatus;
  icon: LucideIcon;
  outcome?: string;
}

export const roadmapStages: RoadmapStage[] = [
  {
    icon: Users,
    title: "Talent Foundation",
    timeline: "2023–2025",
    description:
      "Borderless started by unlocking the global market for Brazilian developers.",
    goals: [
      "PSP Mentorship: 100+ professionals internationalized",
      "BASE Mentorship: preparing beginners and early-career devs for the global stage",
      "Bootcamps: specialized programs (e.g. Web3 Global Developer) feeding new markets",
    ],
    outcome: "This created a pipeline of pre-vetted, globally ready talent.",
    status: "completed",
  },
  {
    icon: Laptop,
    title: "Platform Scale",
    timeline: "Late 2025",
    description:
      "Next, we are consolidating our Borderless Platform — a super app for professionals:",
    goals: [
      "Community, forum, and learning modules",
      "Onboarding and career dashboards",
      "Networking and hiring hub",
    ],
    outcome:
      "The platform transforms our mentorship results into scalable infrastructure, where talent meets opportunity at scale.",
    status: "in-progress",
  },
  {
    icon: Rocket,
    title: "Startup Incubation",
    timeline: "2026",
    description:
      "With talent validated and a platform in place, the natural expansion is founder-led startups. Every year, hackathons and incubation cycles inside Borderless will generate new ventures.",
    goals: [
      "SPV model (separate LLCs) – ensuring investor protection and clean growth",
      "Focus sectors: SaaS, AI, DevTools, and fintech",
      "Support: product strategy, growth expertise, and technical architecture",
    ],
    status: "next",
  },
  {
    icon: TrendingUp,
    title: "Investment Access",
    timeline: "2026 onward",
    description:
      "Borderless Ventures connects global investors to our dealflow.",
    goals: [
      "US-facing vehicle – smooth participation for international investors",
      "Diversified pipeline – ventures born from mentorship, platform, and hackathons",
      "Capital efficiency – startups bootstrap with community talent before raising rounds",
    ],
    outcome:
      "This expansion ensures that investors tap into a pre-qualified pipeline and founders raise with confidence.",
    status: "next",
  },
];
