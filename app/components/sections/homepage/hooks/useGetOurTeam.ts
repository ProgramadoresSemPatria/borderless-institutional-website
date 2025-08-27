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
      github: "https://github.com/yuripramos",
      linkedin: "https://www.linkedin.com/in/yuri-pereira/",
    },
    {
      name: "Felipe Meriga",
      role: t("roles.felipe"),
      src: "/team/felipe.webp",
      github: 'https://github.com/felipemeriga',
      linkedin: 'https://www.linkedin.com/in/felipersil/'
    },
    {
      name: "Matheus Avi",
      role: t("roles.matheus"),
      src: "/team/matheus.webp",
      github: 'https://github.com/matheusavi',
      linkedin: 'https://www.linkedin.com/in/matheusavi/'
    },
    {
      name: "André Wlodkosvki",
      role: t("roles.andre"),
      src: "/team/andre.webp",
      github: 'https://github.com/andrewlod',
      linkedin: 'https://www.linkedin.com/in/andrewlod/'
    },
    {
      name: "Alex Miloski",
      role: t("roles.alex"),
      src: "/team/alex.webp",
      github: 'https://github.com/alex-miloski',
      linkedin: 'https://www.linkedin.com/in/amiloski'
    },
    {
      name: "Thiago Dantas",
      role: t("roles.thiago"),
      src: "/team/thiago.webp",
      github: 'https://github.com/thiagodma',
      linkedin: 'https://www.linkedin.com/in/thethiagodma/'
    },
  ];

  return {
    title: rich("title"),
    members: teamMembers,
  };
}
