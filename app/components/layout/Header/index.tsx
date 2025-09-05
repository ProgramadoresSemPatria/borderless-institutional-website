"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import DesktopHeader from "./components/DesktopHeader";
import { MobileHeader } from "./components/MobileHeader";

export function Header() {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;
  return <>{isMobile ? <MobileHeader /> : <DesktopHeader />}</>;
}
