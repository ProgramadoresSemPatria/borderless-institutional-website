import { IComparator } from "@/app/components/ui/Comparator/types";
import {
  Award,
  BookOpen,
  FileText,
  Folder,
  Globe,
  Handshake,
  Layers,
  Users,
  Zap,
} from "lucide-react";

export const bootcampComparison: IComparator = {
  firstOptionTitle: "Borderless Web3 Bootcamp",
  secondOptionTitle: "Typical Online Course",
  features: [
    {
      icon: BookOpen,
      title: "Learning Style",
      firstOptionFeature: "12-week immersive, cohort-based program",
      secondOptionFeature: "Self-paced, recorded lectures",
    },
    {
      icon: FileText,
      title: "Curriculum",
      firstOptionFeature:
        "Full-stack Web3: Solidity, Rust, Cosmos, DeFi, NFTs, AI integrations",
      secondOptionFeature:
        "Narrow focus, often limited to one language or topic",
    },
    {
      icon: Layers,
      title: "Projects",
      firstOptionFeature:
        "Multiple hands-on builds + Final team project (Demo Day)",
      secondOptionFeature:
        "Small exercises or tutorials, no portfolio-level projects",
    },
    {
      icon: Users,
      title: "Mentorship",
      firstOptionFeature:
        "Direct access to industry mentors, feedback, and mock interviews",
      secondOptionFeature: "No mentorship, only pre-recorded content",
    },
    {
      icon: Users,
      title: "Community",
      firstOptionFeature:
        "Active network of 500+ global developers and founders",
      secondOptionFeature: "Solo learning, no community accountability",
    },
    {
      icon: Award,
      title: "Certification",
      firstOptionFeature: "NFT-backed proof of graduation on-chain",
      secondOptionFeature: "Standard PDF certificate",
    },
    {
      icon: Folder,
      title: "Portfolio",
      firstOptionFeature:
        "GitHub-ready dApps across ecosystems (Ethereum, Solana, Cosmos)",
      secondOptionFeature: "Limited, often tutorial-based repos",
    },
    {
      icon: Handshake,
      title: "Networking",
      firstOptionFeature: "Demo Day exposure + investor/founder connections",
      secondOptionFeature: "None",
    },
    {
      icon: Globe,
      title: "Global Readiness",
      firstOptionFeature:
        "Focus on international standards, English communication, and remote work",
      secondOptionFeature: "Localized, not adapted for global career",
    },
    {
      icon: Zap,
      title: "Outcomes",
      firstOptionFeature: "Career acceleration + potential startup incubation",
      secondOptionFeature: "Only knowledge, no structured career outcomes",
    },
  ],
};
