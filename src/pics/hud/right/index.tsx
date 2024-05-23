import {
  FC,
  PropsWithChildren,
} from "react";
import {
  LayoutGroup,
  motion,
} from "framer-motion";
import { TDimensions } from "@brysonandrew/config-types";
import { LinesVertical } from "~/pages/video/_common/footer/left/lines/vertical";
import { TMeasureContainerResult } from "~/shell/init/container";
import { boxSize } from "~/constants/box/size";
import { HideControls } from "~/pics/header/right/zen-mode";
import { DarkMode } from "~/pics/header/right/dark-mode";
import { ControlsPlayer } from "~/pics/hud/left/player";
import { MOTION_CONFIG } from "@brysonandrew/motion-config-constants";
import { PicsHeaderScrollTop } from "~/pics/header/scroll-top";
import { PicsHudLeftLine } from "~/pics/hud/left/line";
import { HudLeftShuffle } from "~/pics/hud/left/shuffle";
import { useTrillPicsStore } from "~/store/middleware";
import { useLocation } from "react-router";

export type THudContainer = Extract<
  TMeasureContainerResult,
  { isDimensions: true }
>;
type TProps = {
  foundation: DOMRect;
  dimensions: TDimensions;
  isIdle: boolean;
  isVerticalScroll: boolean;
};
export const PicsHudRight: FC<
  TProps
> = ({
  foundation,
  dimensions,
  isIdle,
  isVerticalScroll,
}) => {
  // const {} = useLocation()
  const { isScroll } =
    useTrillPicsStore(
      ({ isScroll }) => ({
        isScroll,
      })
    );
  const s = boxSize();

  const ptop = s.m15;
  const pheight =
    dimensions.height / 5 + s.m025;

  const top =
    ptop +
    pheight -
    foundation.height +
    s.m;

  const isScrollTopShown =
    isScroll && isVerticalScroll;

  const SCROLL_TOP_TRANSITION =
    MOTION_CONFIG;
  return (
    <LayoutGroup>
      <motion.div
        className="absolute flex flex-col items-end justify-evenly shrink-0 w-0"
        style={{
          right: 0,
          top,
          gap: s.m05,
          height:
            dimensions.height -
            top 
        }}
      >
        <div
          className="relative flex flex-col items-end justify-evenly shrink-0 w-0"
          style={{
            // top,
            gap: s.m05,
            height: s.m4,
          }}
        >
          <DarkMode isLabel={isIdle} />
          <LinesVertical
            style={{ left: -s.m05 }}
          />
          <HideControls
            isLabel={isIdle}
          />
        </div>

        <LinesVertical
          style={{ left: -s.m05 }}
        />

        {/* <LinesVertical
          style={{ left: -s.m05 }}
        /> */}
      </motion.div>
    </LayoutGroup>
  );
};
