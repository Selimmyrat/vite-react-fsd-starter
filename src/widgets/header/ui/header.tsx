import { SidebarTrigger } from "@/shared/ui/sidebar";
import { NavUser } from "./nav-user";
import { sidebarData } from "@/widgets/sidebar/model/sidebar.data";
import { ChangeLanguage } from "./change-language";
import { ThemeSwitch } from "./theme-switch";

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-1 border-b">
      <SidebarTrigger />
      <div className="flex gap-[14px] items-center">
        <ThemeSwitch />
        <ChangeLanguage />
        <NavUser user={sidebarData.user} />
      </div>
    </header>
  );
}
