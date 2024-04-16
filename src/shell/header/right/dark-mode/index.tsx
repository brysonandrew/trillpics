import {
  CSSProperties,
  FC,
} from "react";
import { Button } from "@brysonandrew/dark-mode";
import {
  Moon as MoonIcon,
  Sun as SunIcon,
} from "./icons/index";

export const DarkMode: FC<
  CSSProperties
> = (style) => {
  return (
    <Button
      Moon={MoonIcon}
      Sun={SunIcon}
      buttonProps={{ style }}
    />
  );
};
