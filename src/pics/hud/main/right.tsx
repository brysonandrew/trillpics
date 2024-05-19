import type { FC } from "react";
import {
  Network,
} from "@brysonandrew/network";
import { HideControls } from "~/pics/header/right/zen-mode";
import { PicsHeaderScrollTop } from "~/pics/header/scroll-top";
import { OfflineFc } from "~/pics/header/right/offline";

export const MainRight: FC = () => {
  return (
    <>
      <HideControls />
      <Network OfflineFc={OfflineFc} />
      <div className="flex md:hidden">
        <PicsHeaderScrollTop />
      </div>
    </>
  );
};
