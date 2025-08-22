import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";

export function GlobalTalentConnector() {
  return (
    <section style={{ minHeight: "fit-content" }}>
      <FullWidthCard
        title=" A única empresa que conecta developers com empresas globais SEM TAXA"
        description=" Full-stack, ML Engineer, GoLang Dev e muito mais"
      >
        <ExternalLink>Contratar um profissional</ExternalLink>
      </FullWidthCard>
    </section>
  );
}
