import {
  BriefcaseBusiness,
  Calendar,
  ChartNoAxesCombined,
  Focus,
  Globe,
  Goal,
  Key,
  MessageSquare,
  Speech,
  Star,
  User,
  Users,
  Video,
} from "lucide-react";
import { IComparator } from "../components/ui/Comparator/types";

export const mentorshipComparison: IComparator = {
  firstOptionTitle: "BASE Mentorship",
  secondOptionTitle: "PSP Mentorship",
  features: [
    {
      icon: BriefcaseBusiness,
      title: "Career Stage",
      firstOptionFeature:
        "No prior experience → Early Mid-level (0–2 years experience)",
      secondOptionFeature: "Mid-level → Senior (3+ years experience)",
    },
    {
      icon: MessageSquare,
      title: "English Level",
      firstOptionFeature: "A1 → B1 (Goal: B2 for international readiness)",
      secondOptionFeature: "B1 or higher (technical fluency required)",
    },
    {
      icon: Goal,
      title: "Goal",
      firstOptionFeature:
        "Build technical, portfolio, and English foundations to reach PSP level",
      secondOptionFeature:
        "Land high-paying international contracts ($10K–$15K USD/month)",
    },
    {
      icon: Focus,
      title: "Main Focus",
      firstOptionFeature:
        "Technical improvement, portfolio building, English upgrade, career plan",
      secondOptionFeature:
        "Strategic positioning, interview mastery, networking, offer negotiation",
    },
    {
      icon: Calendar,
      title: "Mentorship Duration",
      firstOptionFeature: "12 months",
      secondOptionFeature: "6 or 12 months",
    },
    {
      icon: Video,
      title: "Live Sessions",
      firstOptionFeature:
        "Monthly group call with Yuri + bi-weekly calls with BASE mentor team",
      secondOptionFeature: "Bi-weekly group calls + direct feedback from Yuri",
    },
    {
      icon: Users,
      title: "Mock Interviews",
      firstOptionFeature: "Junior-to-mid-level scenarios",
      secondOptionFeature:
        "Senior-level technical and system design scenarios with 5 expert mentors",
    },
    {
      icon: Speech,
      title: "English Coaching",
      firstOptionFeature: "3x/week – beginner to intermediate focus",
      secondOptionFeature: "3x/week – intermediate to advanced technical focus",
    },
    {
      icon: Globe,
      title: "Borderless Platform Access",
      firstOptionFeature: "Included (portfolio, lessons, community)",
      secondOptionFeature:
        "Included (networking, lessons, exclusive PSP resources)",
    },
    {
      icon: Key,
      title: "Key Resources",
      firstOptionFeature:
        "Portfolio project templates, high-conversion résumé for entry-level applications",
      secondOptionFeature:
        "High-conversion résumé adapted to your strategy, application scripts, negotiation playbook",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Expected Outcome",
      firstOptionFeature: "PSP readiness within 12 months",
      secondOptionFeature: "1–3 international job offers within 120 days",
    },
    {
      icon: User,
      title: "Average Alumni Result",
      firstOptionFeature:
        "Entry into PSP + first international-ready portfolio",
      secondOptionFeature: "Contracts from $10K to $15K USD/month",
    },
    {
      icon: Star,
      title: "Best For",
      firstOptionFeature:
        "Beginners or professionals starting the path to global opportunities",
      secondOptionFeature:
        "Professionals ready to compete and win in the global market now",
    },
  ],
};
