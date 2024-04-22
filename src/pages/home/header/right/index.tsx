import { FC } from "react";
import {
  Network,
  Offline,
} from "@brysonandrew/network";
import { DarkMode } from "~/pages/home/header/right/dark-mode";
import { HideControls } from "~/pages/home/header/right/hide-controls";

export const HeaderRight: FC = () => {
  return (
    <div className="relative column-reverse shrink-0 gap-4 lowercase py-2 md:column-end">
      <Network OfflineFC={Offline} />
      <DarkMode />
      <HideControls />
    </div>
  );
};
