import { Instagram, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { AnimatedGrid } from "../../ui/AnimatedGrid";
import { FooterSection } from "./components/FooterSection";
import { TalkToAProfessional } from "./components/TalkToAProfessional";
import { footerSections } from "./constants/footerSections";

export function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f1f1f1] rounded-tl-4xl rounded-tr-4xl py-[4svh] relative overflow-hidden z-10">
      <TalkToAProfessional />

      <div className="w-[90%] max-w-[1800px] mx-auto bg-white rounded-2xl text-[#636363] p-12 space-y-12 relative">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {footerSections.map((section) => {
            const ns = `sections.${section.titleKey}` as const;
            return (
              <FooterSection
                key={section.titleKey}
                title={t(`${ns}.title`)}
                items={section.items.map((item) => ({
                  name: t(`${ns}.items.${item.nameKey}`),
                  href: item.href,
                }))}
              />
            );
          })}
        </div>

        <div className="h-[1px] bg-black/10 w-full" />

        <div className="flex flex-col-reverse gap-4 md:flex-row md:items-center justify-between">
          <p className="text-[#b2b2b2] text-sm md:text-base">
            {t("copyright.text", { year })}
          </p>

         <div className="flex gap-2"> 
            <a href="https://www.instagram.com/borderlesscoding" target="_blank" className="bg-[#f3f3f3] size-fit p-4 rounded-md cursor-pointer hover:opacity-70 hover:scale-110 transition-all duration-150">
              <Instagram className="text-black/70" />
            </a>
            <a href="https://www.linkedin.com/company/borderless-coding" target="_blank" className="bg-[#f3f3f3] size-fit p-4 rounded-md cursor-pointer hover:opacity-70 hover:scale-110 transition-all duration-150">
              <Linkedin className="text-black/70" />
            </a>
          </div>
        </div>

        <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 z-[-1]">
          <AnimatedGrid />
        </div>
      </div>
    </footer>
  );
}
