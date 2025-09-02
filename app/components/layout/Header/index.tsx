"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import NavItems from "./components/NavItems";

export function Header() {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
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
          <Link
            href={"/"}
            className="flex items-center gap-3 h-full py-2"
            onClick={hideMenu}
          >
            <Image
              width={501}
              height={596}
              alt={t("logoAlt")}
              src={"/borderless-logo-white.svg"}
              className="w-fit h-full ml-4"
            />
            <p className="font-bold text-lg">Borderless</p>
          </Link>

          <button
            className="cursor-pointer bg-primary h-full aspect-square rounded-sm"
            onClick={isOpen ? hideMenu : () => setIsOpen(true)}
          >
            <div className="grid justify-items-center gap-1">
              <span
                className={clsx(
                  "h-0.5 w-5 rounded-full bg-white transition duration-500",
                  isOpen && "rotate-45 translate-y-[0.4rem]"
                )}
              />
              <span
                className={clsx(
                  "h-0.5 w-5 rounded-full bg-white transition duration-500",
                  isOpen && "scale-x-0"
                )}
              />
              <span
                className={clsx(
                  "h-0.5 w-5 rounded-full bg-white transition duration-500",
                  isOpen && "-rotate-45 -translate-y-1.5"
                )}
              />
            </div>
          </button>

          {isOpen && (
            <div className="header-buttons-container absolute bg-[#2a2a2b] rounded-lg p-2 w-full left-0 bottom-0 translate-y-[calc(100%+1rem)] flex flex-col gap-2 max-h-[calc(100vh-1rem)] overflow-y-auto scrollbar-hide opacity-0">
              <div className="grid grid-cols-2 gap-2">
                <button
                  className={clsx(
                    "bg-[#212121] p-4 text-lg font-semibold cursor-pointer hover:opacity-70 transition-opacity duration-150 rounded-sm",
                    locale === "pt" && "bg-tertiary"
                  )}
                  onClick={() => changeLocale("pt")}
                >
                  PT
                </button>
                <button
                  className={clsx(
                    "bg-[#212121] p-4 text-lg font-semibold cursor-pointer hover:opacity-70 transition-opacity duration-150 rounded-sm",
                    locale === "en" && "bg-tertiary"
                  )}
                  onClick={() => changeLocale("en")}
                >
                  US
                </button>
              </div>

              <NavItems onClick={hideMenu} />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
