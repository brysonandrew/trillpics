import {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import { TDimensions } from "@brysonandrew/config-types";
import { LinesVertical } from "~/pages/video/_common/footer/nav/lines/vertical";
import { TMeasureContainerResult } from "~/shell/init/container";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { boxSize } from "~/constants/box/size";
import {
  Network,
  Offline,
} from "@brysonandrew/network";
import { HideControls } from "~/pics/header/right/zen-mode";
import { PicsHeaderScrollTop } from "~/pics/header/scroll-top";
import { DarkMode } from "~/pics/header/right/dark-mode";

export type THudContainer = Extract<
  TMeasureContainerResult,
  { isDimensions: true }
>;
type TProps = {
  origin: DOMRect;
  dimensions: TDimensions;
};
export const PicsHudRight: FC<
  PropsWithChildren<TProps>
> = ({
  children,
  origin,
  dimensions,
}) => {
  const bSize = boxSize();
  return (
    <motion.div
      key="main-right"
      className="absolute w-0"
      style={{
        height:
          dimensions.height -
          origin.height,
        top: origin.height + bSize.m,
        right: 0,
        gap: bSize.m05,
      }}
      {...PRESENCE_OPACITY}
    >
      <div
        className="absolute column-end gap-2 w-0 right-0"
        style={{ right: bSize.m05 }}
      >
        <DarkMode />
        <LinesVertical classValue="opacity-50" />
        <HideControls />
        {children}
        <Network OfflineFC={Offline} />
      </div>
    </motion.div>
  );
};
