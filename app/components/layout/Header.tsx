"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconWrapper } from "../ui/IconWrapper";

const links = [
  {
    title: "PSP mentorship",
    href: "/psp-mentorship",
  },
  {
    title: "Base mentorship",
    href: "/base-mentorship",
  },
  {
    title: "Bootcamp WEB3 Global Developer",
    href: "/bootcamp-web3",
  },
  {
    title: "For founders and Investors",
    href: "/for-founders-and-investors",
  },
  {
    title: "I want to hire a professional",
    href: "/want-to-hire",
  },
  {
    title: "I want to internatinalize",
    href: "",
  },
  {
    title: "Expansion",
    href: "",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
            alt="borderless logo"
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
          </div>
        )}
      </div>
    </nav>
  );
}
