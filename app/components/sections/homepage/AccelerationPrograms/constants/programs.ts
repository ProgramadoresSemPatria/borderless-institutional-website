import {
  Bitcoin,
  Code,
  Earth,
  LucideIcon,
  Network,
  Speech,
  User,
  Users,
} from "lucide-react";

export interface Program {
  title: string;
  description: string;
  features: {
    title: string;
    icon: LucideIcon;
  }[];
}

export const programs: Program[] = [
  {
    title: "Mentoria PSP",
    description:
      "Programa de mentorias estruturado para acelerar sua carreira em tecnologia",
    features: [
      {
        title: "Mentoria especializada",
        icon: User,
      },
      {
        title: "Projetos práticos",
        icon: Code,
      },
      {
        title: "Network global",
        icon: Users,
      },
    ],
  },
  {
    title: "Mentoria BASE",
    description:
      "Fundamentos sólidos para sua jornada em tecnologia e mercados internacionais",
    features: [
      {
        title: "Base técnica",
        icon: Code,
      },
      {
        title: "Soft skills",
        icon: Speech,
      },
      {
        title: "Preparação global",
        icon: Earth,
      },
    ],
  },
  {
    title: "Bootcamp: Web3 Global Developer",
    description:
      "Bootcamp intensivo focado em tecnologias Web3 e desenvolvimento descentralizado",
    features: [
      {
        title: "Web3 Stack",
        icon: Code,
      },
      {
        title: "DApps",
        icon: Network,
      },
      {
        title: "Blockchain",
        icon: Bitcoin,
      },
    ],
  },
];
