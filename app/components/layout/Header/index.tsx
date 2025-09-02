"use client";

import { useTranslations } from "next-intl";
import DesktopHeader from "./components/DesktopHeader";
import { MobileHeader } from "./components/MobileHeader";

export function Header() {
  const t = useTranslations("Header");

  const links = [
    { title: t("links.psp"), href: "/psp-mentorship" },
    { title: t("links.base"), href: "/base-mentorship" },
    { title: t("links.bootcamp"), href: "/bootcamp-web3" },
    {
      title: t("links.foundersInvestors"),
      href: "/for-founders-and-investors",
    },
    { title: t("links.wantToHire"), href: "/want-to-hire" },
    {
      title: t("links.wantToInternationalize"),
      href: "/want-to-internationalize",
    },
    { title: t("links.expansion"), href: "/expansion" },
  ] as const;

  return (
    <div>
      <div className="hidden lg:block">
        <DesktopHeader />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
    </div>
  );
}
