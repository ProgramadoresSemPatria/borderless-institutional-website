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

  const changeLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  const showMenu = () => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline();

    tl.to(".header-backdrop", {
      opacity: 1,
      ease: "power4.in",
      duration: 0.25,
    });

    tl.to(
      ".header-buttons-container",
      { opacity: 1, ease: "power4.in", duration: 0.25 },
      "<"
    );
  };

  const hideMenu = () => {
    const tl = gsap.timeline();
    document.body.style.overflow = "auto";

    tl.to(".header-buttons-container", {
      opacity: 0,
      ease: "power4.out",
      duration: 0.25,
    });

    tl.to(
      ".header-backdrop",
      { opacity: 0, ease: "power4.out", duration: 0.25 },
      "<"
    );

    tl.call(() => setIsOpen(false));
  };

  useGSAP(() => {
    if (isOpen) {
      showMenu();
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <button
          aria-label="Close menu"
          className="header-backdrop fixed inset-0 bg-black/50 backdrop-blur-[1px] z-40 cursor-pointer opacity-0"
          onClick={hideMenu}
        />
      )}
      <nav className="fixed w-full top-8 left-0 right-0 z-50">
        <div className="w-[90%] max-w-[1800px] mx-auto bg-[#2a2a2b] rounded-lg p-2 flex justify-between items-center h-16 relative shadow-2xl">
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
            onClick={isOpen ? hideMenu : () => setIsOpen(true)}
          >
            <IconWrapper
              className="aspect-square h-full p-0 flex-center"
              icon={isOpen ? X : Menu}
            />
          </button>

          {isOpen && (
            <div className="header-buttons-container absolute bg-[#2a2a2b] rounded-lg p-2 w-full left-0 bottom-0 translate-y-[calc(100%+1rem)] flex flex-col gap-2 max-h-[calc(100vh-16rem)] overflow-y-auto scrollbar-hide opacity-0">
              <div className="grid grid-cols-2 gap-2">
                <button
                  className="bg-[#212121] p-4 text-lg font-semibold cursor-pointer hover:opacity-70 transition-opacity duration-150"
                  onClick={() => changeLocale("pt")}
                >
                  PT-BR
                </button>
                <button
                  className="bg-[#212121] p-4 text-lg font-semibold cursor-pointer hover:opacity-70 transition-opacity duration-150"
                  onClick={() => changeLocale("en")}
                >
                  US-EN
                </button>
              </div>

              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.title}
                  className="bg-[#212121] p-4 text-lg font-semibold cursor-pointer hover:opacity-70 transition-opacity duration-150"
                  onClick={hideMenu}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
