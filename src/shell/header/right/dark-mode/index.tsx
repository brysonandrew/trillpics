import { FC } from "react";
import { Button } from "@brysonandrew/dark-mode";
import { useVideoStore } from "@pages/home/video/store";
import clsx from "clsx";
import {
  Moon as MoonIcon,
  Sun as SunIcon,
} from "./icons/index";

export const DarkMode: FC = () => {
  const { isVideoMode } =
    useVideoStore();
  return (
    <div
      // className={clsx(
      //   isVideoMode && "opacity-40"
      // )}
    >
      <Button
        Moon={MoonIcon}
        Sun={SunIcon}
        iconProps={{
          classValue: clsx("w-18 h-18"),
        }}
      />
    </div>
  );
};
