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
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "../constants/navItems";

export default function DesktopHeader() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <nav className="fixed w-full top-8 left-0 right-0 z-50">
      <div className="w-[90%] max-w-[900px] mx-auto bg-[#2a2a2b] rounded-lg p-2 flex justify-between items-center h-fit relative shadow-2xl">
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

        <div className="flex items-center gap-4">
          <NavigationMenu
            skipDelayDuration={0}
            delayDuration={0}
            viewport={true}
          >
            <NavigationMenuList>
              {navItems.map((item) => (
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
                  <NavigationMenuContent className="bg-tertiary grid grid-cols-2 w-[900px]">
                    {item.subItems?.map((subItem) => (
                      <NavigationMenuLink asChild key={subItem.title}>
                        <Link href={subItem.href || "/"}>
                          <FeatureCard
                            title={subItem.title}
                            description={subItem.description}
                            icon={ArrowUpRight}
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
            className="text-sm font-bold mr-4 uppercase cursor-pointer hover:opacity-70 transition-opacity duration-150"
            onClick={() => changeLocale(locale === "pt" ? "en" : "pt")}
          >
            {locale === "pt" ? "EN" : "PT"}
          </button>
        </div>
      </div>
    </nav>
  );
}
