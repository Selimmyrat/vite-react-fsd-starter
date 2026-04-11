import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

export function ChangeLanguage() {
  const { i18n } = useTranslation();

  return (
    <Select
      value={i18n.language}
      onValueChange={(lng) => i18n.changeLanguage(lng)}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="ru">RU</SelectItem>
          <SelectItem value="tk">TK</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
