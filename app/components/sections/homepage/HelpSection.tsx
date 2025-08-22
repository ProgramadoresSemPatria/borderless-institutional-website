import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";

export function HelpSection() {
  return (
    <section style={{ minHeight: "fit-content" }}>
      <FullWidthCard
        title="Como podemos te ajudar ?"
        description="Oferecemos um ecossistema completo de soluções para desenvolvedores, startups e empresas que buscam profissionais de excelência em tecnologia."
      >
        <div className="w-full grid sm:grid-cols-2 gap-2 max-w-4xl">
          <ExternalLink className="w-full flex-row-reverse justify-end gap-4 pl-1">
            Mentoria
          </ExternalLink>
          <ExternalLink className="w-full flex-row-reverse justify-end gap-4 pl-1">
            Incubadora
          </ExternalLink>
          <ExternalLink className="w-full flex-row-reverse justify-end gap-4 pl-1">
            Plataforma
          </ExternalLink>
          <ExternalLink className="w-full flex-row-reverse justify-end gap-4 pl-1">
            Comunidade
          </ExternalLink>
        </div>
      </FullWidthCard>
    </section>
  );
}
