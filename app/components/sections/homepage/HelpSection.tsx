import { AnimatedText } from "../../ui/AnimatedText";
import { ExternalLink } from "../../ui/ExternalLink";

export function HelpSection() {
  return (
    <section className="py-0" style={{ minHeight: "fit-content" }}>
      <div className="bg-tertiary w-full flex-center flex-col space-y-12 rounded-md py-8 lg:py-20 px-6">
        <AnimatedText as="h2" className="text-center text-pretty">
          Como podemos te ajudar?
        </AnimatedText>
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="max-w-2xl text-center text-pretty">
            Oferecemos um ecossistema completo de soluções para desenvolvedores,
            startups e empresas que buscam profissionais de excelência em
            tecnologia.
          </p>
          <div className="w-full grid sm:grid-cols-2 gap-2">
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
        </div>
      </div>
    </section>
  );
}
