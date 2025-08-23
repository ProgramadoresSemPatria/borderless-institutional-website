import {
  BriefcaseBusiness,
  Calendar,
  ChartNoAxesCombined,
  Focus,
  Globe,
  Goal,
  Key,
  LucideIcon,
  MessageSquare,
  Speech,
  Star,
  User,
  Users,
  Video,
} from "lucide-react";

export interface FeatureByMentorship {
  feature: string;
  icon: LucideIcon;
  mentorship: {
    base: string;
    psp: string;
  };
}

export const featuresByMentorship: FeatureByMentorship[] = [
  {
    icon: BriefcaseBusiness,
    feature: "Career Stage",
    mentorship: {
      base: "No prior experience → Early Mid-level (0–2 years experience)",
      psp: "Mid-level → Senior (3+ years experience)",
    },
  },
  {
    icon: MessageSquare,
    feature: "English Level",
    mentorship: {
      base: "A1 → B1 (Goal: B2 for international readiness)",
      psp: "B1 or higher (technical fluency required)",
    },
  },
  {
    icon: Goal,
    feature: "Goal",
    mentorship: {
      base: "Build technical, portfolio, and English foundations to reach PSP level",
      psp: "Land high-paying international contracts ($10K–$15K USD/month)",
    },
  },
  {
    icon: Focus,
    feature: "Main Focus",
    mentorship: {
      base: "Technical improvement, portfolio building, English upgrade, career plan",
      psp: "Strategic positioning, interview mastery, networking, offer negotiation",
    },
  },
  {
    icon: Calendar,
    feature: "Mentorship Duration",
    mentorship: {
      base: "12 months",
      psp: "6 or 12 months",
    },
  },
  {
    icon: Video,
    feature: "Live Sessions",
    mentorship: {
      base: "Monthly group call with Yuri + bi-weekly calls with BASE mentor team",
      psp: "Bi-weekly group calls + direct feedback from Yuri",
    },
  },
  {
    icon: Users,
    feature: "Mock Interviews",
    mentorship: {
      base: "Junior-to-mid-level scenarios",
      psp: "Senior-level technical and system design scenarios with 5 expert mentors",
    },
  },
  {
    icon: Speech,
    feature: "English Coaching",
    mentorship: {
      base: "3x/week – beginner to intermediate focus",
      psp: "3x/week – intermediate to advanced technical focus",
    },
  },
  {
    icon: Globe,
    feature: "Borderless Platform Access",
    mentorship: {
      base: "Included (portfolio, lessons, community)",
      psp: "Included (networking, lessons, exclusive PSP resources)",
    },
  },
  {
    icon: Key,
    feature: "Key Resources",
    mentorship: {
      base: "Portfolio project templates, high-conversion résumé for entry-level applications",
      psp: "High-conversion résumé adapted to your strategy, application scripts, negotiation playbook",
    },
  },
  {
    icon: ChartNoAxesCombined,
    feature: "Expected Outcome",
    mentorship: {
      base: "PSP readiness within 12 months",
      psp: "1–3 international job offers within 120 days",
    },
  },
  {
    icon: User,
    feature: "Average Alumni Result",
    mentorship: {
      base: "Entry into PSP + first international-ready portfolio",
      psp: "Contracts from $10K to $15K USD/month",
    },
  },
  {
    icon: Star,
    feature: "Best For",
    mentorship: {
      base: "Beginners or professionals starting the path to global opportunities",
      psp: "Professionals ready to compete and win in the global market now",
    },
  },
];
