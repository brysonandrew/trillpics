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
import { HudLeftShuffle } from "~/pics/hud/left/shuffle";
import { TMeasureContainerResult } from "~/shell/init/container";
import { boxSize } from "~/constants/box/size";
import { HudLeftVideo } from "~/pics/hud/left/video";
import { HudLeftAddRandom } from "~/pics/hud/left/add-random";
import { LeftButtonsClear } from "~/pics/hud/left/clear";
import { usePicVideo } from "~/hooks/pic/video";

export type THudContainer = Extract<
  TMeasureContainerResult,
  { isDimensions: true }
>;
type TProps = PropsWithChildren<{
  foundation: DOMRect;
  dimensions: TDimensions;
  isIdle: boolean;
}>;
export const PicsHudLeft: FC<
  TProps
> = ({
  children,
  foundation,
  dimensions,
  isIdle,
}) => {
  const { isVideoPics } = usePicVideo();
  const s = boxSize();

  return (
    <LayoutGroup>
      <div
        className="absolute column-start justify-between w-0 bg-red"
        style={{
          left: s.m,
          gap: s.m05,
          top:
            foundation.height + s.m025,
          height:
            dimensions.height -
            foundation.height -
            s.m,
        }}
      >
        <LinesVertical layout />

        <motion.div
          layout
          className="column-start shrink-0 justify-evenly w-0 bg-green w-0"
          style={{
            gap: s.m05,
          }}
        >
          <HudLeftShuffle
            isLabel={isIdle}
          />
          {children}
        </motion.div>
        <LinesVertical layout />
        <motion.div
          layout
          className="column-start shrink-0 justify-evenly w-0 bg-green w-0"
          style={{
            gap: s.m05,
          }}
        >
          {isVideoPics && (
            <>
              <LeftButtonsClear
                isLabel={isIdle}
              />
              <LinesVertical layout />
            </>
          )}
          <HudLeftVideo
            isLabel={isIdle}
          >
            {(isVideoMode) =>
              isVideoMode ? (
                <>
                  <HudLeftAddRandom
                    isLabel={isIdle}
                  />
                  <LinesVertical
                    layout
                  />
                </>
              ) : null
            }
          </HudLeftVideo>
        </motion.div>
        <LinesVertical layout />
      </div>
    </LayoutGroup>
  );
};
