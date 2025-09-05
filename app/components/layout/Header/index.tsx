"use client";

import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import DesktopHeader from "./components/DesktopHeader";
import { MobileHeader } from "./components/MobileHeader";

export function Header() {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      {isMobile ? (
        <MobileHeader />
      ) : (
        <div className="hidden lg:block">
          <DesktopHeader />
        </div>
      )}
    </>
  );
}
