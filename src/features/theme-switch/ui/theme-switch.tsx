import { Moon, Sun } from "lucide-react";
import { Switch } from "@/shared/ui/switch";
import { useTheme } from "@/shared/config/theme";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun className="size-4" />
      <Switch checked={isDark} onCheckedChange={toggleTheme} size="sm" />
      <Moon className="size-4" />
    </div>
  );
}
