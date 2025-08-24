import { useRichText } from "@/app/hooks/useRichText";

export interface TeamMember {
  name: string;
  role: string;
  src: string;
  github?: string;
  linkedin?: string;
}

export function useGetOurTeam() {
  const { t, rich } = useRichText("HomePage.OurTeam");

  const teamMembers: TeamMember[] = [
    {
      name: "Yuri Pereira",
      role: t("roles.yuri"),
      src: "/team/yuri.webp",
      github: "",
      linkedin: "",
    },
    {
      name: "Felipe Meriga",
      role: t("roles.felipe"),
      src: "/team/felipe.webp",
    },
    {
      name: "Matheus Avi",
      role: t("roles.matheus"),
      src: "/team/matheus.webp",
    },
    {
      name: "André Wlodkosvki",
      role: t("roles.andre"),
      src: "/team/andre.webp",
    },
    {
      name: "Alex Miloski",
      role: t("roles.alex"),
      src: "/team/alex.webp",
    },
    {
      name: "Thiago Dantas",
      role: t("roles.thiago"),
      src: "/team/thiago.webp",
    },
  ];

  return {
    title: rich("title"),
    members: teamMembers,
  };
}
