"use client";

import { useNavItems } from "@/app/components/layout/Header/hooks/useNavItems";
import { FeatureCard } from "@/app/components/ui/FeatureCard";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/app/components/ui/NavigationMenu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DesktopHeader() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [dimmed, setDimmed] = useState(false);
  const items = useNavItems();

  const changeLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <nav className="fixed w-full h-fit top-8 inset-0 z-50">
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-200 pointer-events-none z-40 ${
          dimmed ? "opacity-40" : "opacity-0"
        }`}
      />

      <div className="group w-[90%] max-w-[900px] mx-auto bg-[#2a2a2b] rounded-lg p-2 flex justify-between items-center h-fit relative shadow-2xl z-50">
        <Link href={"/"} className="flex items-center gap-3 h-full">
          <Image
            width={501}
            height={596}
            alt="Borderless Logo"
            src={"/borderless-logo-white.svg"}
            className="w-fit h-8 ml-4"
          />
          <p className="font-bold text-xl">Borderless</p>
        </Link>

        <div className="flex gap-2">
          <NavigationMenu
            skipDelayDuration={0}
            delayDuration={0}
            viewport={true}
            onValueChange={(value) => {
              if (value) {
                setDimmed(true);
              } else {
                setDimmed(false);
              }
            }}
          >
            <NavigationMenuList>
              {items.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.subItems ? (
                    <NavigationMenuTrigger className="h-full">
                      {item.title}
                    </NavigationMenuTrigger>
                  ) : (
                    <Link href={item.href || "/"} className="font-medium px-4">
                      {item.title}
                    </Link>
                  )}
                  <NavigationMenuContent className="bg-tertiary flex w-[900px]">
                    {item.subItems?.map((subItem) => (
                      <NavigationMenuLink
                        asChild
                        key={subItem.title}
                        className="w-[50%] hover:w-[60%] ease-[cubic-bezier(0.35,1.5,0.6,1)] transition-all duration-400"
                      >
                        <Link href={subItem.href || "/"}>
                          <FeatureCard
                            title={subItem.title}
                            description={subItem.description}
                            className="opacity-100"
                            variant="secondary"
                          />
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <button
            className="bg-background text-sm font-bold uppercase cursor-pointer hover:opacity-70 transition-opacity duration-150 px-3 rounded-sm"
            onClick={() => changeLocale(locale === "pt" ? "en" : "pt")}
          >
            {locale === "pt" ? "EN" : "PT"}
          </button>
        </div>
      </div>
    </nav>
  );
}
