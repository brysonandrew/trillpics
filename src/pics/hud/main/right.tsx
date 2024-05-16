import type { FC } from "react";
import {
  Network,
  Offline,
} from "@brysonandrew/network";
import { HideControls } from "~/pics/header/right/zen-mode";
import { PicsHeaderScrollTop } from "~/pics/header/scroll-top";

export const MainRight: FC = () => {
  return (
    <>
      <HideControls />
      <Network OfflineFC={Offline} />
      <div className="flex md:hidden">
        <PicsHeaderScrollTop />
      </div>
    </>
  );
};
