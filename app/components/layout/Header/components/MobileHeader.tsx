"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import NavItems from "./NavItems";

export function MobileHeader() {
  const [isOpenAnimation, setIsOpenAnimation] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  const showMenu = () => {
    setIsOpenAnimation(true);
    document.body.style.overflow = "hidden";
    const tl = gsap.timeline();

    tl.to(".header-backdrop", {
      opacity: 1,
      ease: "power4.out",
      duration: 0.8,
    });

    tl.to(
      ".header-content",
      {
        opacity: 1,
        ease: "power4.out",
        stagger: 0.05,
        duration: 0.8,
        y: 0,
        rotate: 0,
      },
      "<"
    );
  };

  const hideMenu = () => {
    setIsOpenAnimation(false);
    const tl = gsap.timeline();
    document.body.style.overflow = "auto";

    tl.to(".header-content", {
      opacity: 0,
      ease: "power4.inOut",
      stagger: 0.05,
      duration: 0.4,
      y: 24,
      rotate: 1,
    });

    tl.to(
      ".header-backdrop",
      { opacity: 0, ease: "power4.inOut", duration: 0.4 },
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
                  isOpenAnimation && "rotate-45 translate-y-[0.4rem]"
                )}
              />
              <span
                className={clsx(
                  "h-0.5 w-5 rounded-full bg-white transition duration-500",
                  isOpenAnimation && "scale-x-0"
                )}
              />
              <span
                className={clsx(
                  "h-0.5 w-5 rounded-full bg-white transition duration-500",
                  isOpenAnimation && "-rotate-45 -translate-y-1.5"
                )}
              />
            </div>
          </button>

          {isOpen && (
            <div className="absolute flex flex-col translate-y-[calc(100%+1rem)] left-0 bottom-0 w-full max-h-[80svh]">
              <div className="header-content bg-[#2a2a2b] rounded-lg p-2 w-full flex flex-col gap-2 opacity-0 translate-y-16 rotate-1 overflow-y-scroll scrollbar-hide">
                <NavItems onClick={hideMenu} />
              </div>

              <div className="header-content bg-[#2a2a2b] p-2 rounded-lg grid grid-cols-2 gap-2 mt-2 opacity-0 translate-y-16 rotate-1">
                <button
                  className={clsx(
                    "bg-[#212121] p-4 py-2 text-lg flex items-center gap-2 justify-center font-semibold cursor-pointer hover:opacity-70 transition-opacity duration-150 rounded-sm",
                    locale === "pt" && "bg-tertiary"
                  )}
                  onClick={() => changeLocale("pt")}
                >
                  <Image
                    width={150}
                    height={150}
                    alt="Flag"
                    className="size-4"
                    src={"/flags/PT.svg"}
                  />
                  PT
                </button>
                <button
                  className={clsx(
                    "bg-[#212121] p-4 py-2 text-lg flex items-center gap-2 justify-center font-semibold cursor-pointer hover:opacity-70 transition-opacity duration-150 rounded-sm",
                    locale === "en" && "bg-tertiary"
                  )}
                  onClick={() => changeLocale("en")}
                >
                  <Image
                    width={150}
                    height={150}
                    alt="Flag"
                    className="size-4"
                    src={"/flags/US.svg"}
                  />
                  US
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
