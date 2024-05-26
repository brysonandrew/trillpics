import {
  FC,
  PropsWithChildren,
} from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
} from "framer-motion";
import { boxSize } from "~/constants/box/size";
import { HudLeftVideo } from "~/pics/hud/left/video";
import { ControlsPlayer } from "~/pics/hud/left/player";
import { boxRadius } from "~/constants/box/radius";
import { Lines_Line } from "~/components/lines/_line";
import { useContextGrid } from "~/context";
import { LeftButtonsClear } from "~/pics/hud/left/clear";
import { useVideoPicsCheck } from "~/hooks/pic/video/read/video-pics-check/hook";
import { HudLeftAddRandom } from "~/pics/hud/left/add-random";
import { VideoPicsCounter } from "~/shell/screen/video-pic-counter";
import { THudContainer } from "~/pics/hud";

type TProps = PropsWithChildren<{
  foundation: DOMRect;
  container: THudContainer;
  playerHeight: number;
  isVerticalScroll: boolean;
}>;
export const PicsHudLeft: FC<
  TProps
> = ({
  foundation,
  playerHeight,
  container,
}) => {
  const { dragger, isIdle } =
    useContextGrid();
  const s = boxSize();
  const rounded = boxRadius();
  const isVideoPics =
    useVideoPicsCheck();
  return (
    <LayoutGroup>
      <AnimatePresence>
        <motion.div
          key="root"
          className="absolute flex flex-col justify-start items-start w-0 shrink-0"
          style={{
            left: -s.m05,
            gap: s.m05,
            top:
              foundation.height +
              s.m05 +
              s.m025,
            height: container.height,
          }}
        >
          <Lines_Line
            sizeClass="border-t border-l pointer-events-none"
            style={{
              borderTopLeftRadius:
                rounded,
              width: s.m,
              height: playerHeight,
              left: s.m05,
            }}
          />
          <HudLeftVideo
            isLabel={isIdle}
            container={container}
            siblings={
              <>
                <motion.div
                  layout
                  className="relative row-space"
                  style={{
                    width: s.m4 + s.m,
                    height: 0,
                    left: s.m15,
                    bottom:
                      s.m2 - s.m0125,
                    // s.m025 +
                    // s.m0125 / 2,
                    gap: s.m05,
                    x: dragger.x025,
                    y: dragger.y,
                  }}
                >
                  <div />
                  <ControlsPlayer />
                </motion.div>
                <motion.div
                  className="absolute bottom-0"
                  style={{
                    left:
                      container.width +
                      s.m,
                    bottom: 0,
                    x: "-100%",
                    y: dragger.y075,
                  }}
                >
                  <LeftButtonsClear
                    isLabel={isIdle}
                  />
                </motion.div>
                {isVideoPics && (
                  <motion.div
                    layout
                    className="absolute"
                    style={{
                      width: s.m,
                      left: s.m0125,
                      bottom:
                        s.m025 +
                        s.m0125 / 2,
                      x: 0,
                      y: dragger.y075,
                    }}
                  >
                    <VideoPicsCounter />
                  </motion.div>
                )}
              </>
            }
          >
            <motion.div
              className="absolute bottom-0"
              style={{
                left:
                  container.width + s.m,
                x: "-100%",
              }}
            >
              <HudLeftAddRandom
                isLabel={isIdle}
              />
            </motion.div>
          </HudLeftVideo>
        </motion.div>
      </AnimatePresence>
    </LayoutGroup>
  );
};
