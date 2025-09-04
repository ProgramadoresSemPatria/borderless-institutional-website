import DesktopHeader from "./components/DesktopHeader";
import { MobileHeader } from "./components/MobileHeader";

export function Header() {
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
