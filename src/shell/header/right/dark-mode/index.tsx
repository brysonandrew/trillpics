import { FC } from "react";
import { Button } from "@brysonandrew/dark-mode";
import clsx from "clsx";
import {
  Moon as MoonIcon,
  Sun as SunIcon,
} from "./icons/index";

export const DarkMode: FC = () => {
  return (
    <Button
      Moon={MoonIcon}
      Sun={SunIcon}
      buttonProps={{
        classValue: clsx("rounded-full"),
      }}
      iconProps={{
        classValue: clsx("w-18 h-18"),
      }}
    />
  );
};
