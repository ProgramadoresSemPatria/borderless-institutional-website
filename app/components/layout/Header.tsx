"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { IconWrapper } from "../ui/IconWrapper";


export function Header() {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const links = [
    { title: t("links.psp"), href: "/psp-mentorship" },
    { title: t("links.base"), href: "/base-mentorship" },
    { title: t("links.bootcamp"), href: "/bootcamp-web3" },
    { title: t("links.foundersInvestors"), href: "/for-founders-and-investors" },
    { title: t("links.wantToHire"), href: "/want-to-hire" },
    { title: t("links.wantToInternationalize"), href: "/want-to-internationalize" },
    { title: t("links.expansion"), href: "/expansion" },
  ] as const;

  const changeLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  useGSAP(() => {
    gsap.from(".header-buttons-container", {
      opacity: 0,
      ease: "power4.in",
    });
  }, [isOpen]);

  return (
    <nav className="sticky w-full top-8 left-0 right-0 z-50">
      <div className="w-[90%] max-w-[1800px] mx-auto bg-tertiary rounded-lg p-2 flex justify-between items-center h-16 relative">
        <Link href={"/"} className="flex items-center gap-3 h-full py-2">
          <Image
            width={501}
            height={596}
            alt={t("logoAlt")}
            src={"/borderless-logo-white.svg"}
            className="w-fit h-full ml-4"
          />
          <p className="font-bold text-xl">Borderless</p>
        </Link>

        <button
          className="cursor-pointer h-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IconWrapper
            className="aspect-square h-full p-0 flex-center"
            icon={isOpen ? X : Menu}
          />
        </button>

        {isOpen && (
          <div className="header-buttons-container absolute bg-tertiary rounded-lg p-2 w-full left-0 bottom-0 translate-y-[calc(100%+1rem)] flex flex-col gap-2">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.title}
                className="bg-[#212121] p-4 text-lg font-semibold cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}

            <div className="flex gap-2">
              <button
                className="bg-[#212121] p-4 text-lg font-semibold cursor-pointer"
                onClick={() => changeLocale("pt")}
              >
                PT-BR
              </button>
              <button
                className="bg-[#212121] p-4 text-lg font-semibold cursor-pointer"
                onClick={() => changeLocale("en")}
              >
                US-EN
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
