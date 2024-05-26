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
import { usePicTableReadSize } from "~/hooks/pic/table/read/size";
import { Pill } from "~/components/layout/pill";
import { SubtitleText } from "~/pics/header/subtitle/text";
import { _RootReorderDragger } from "~/pages/video/_root/reorder/dragger";

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
              height: container.height,
              left: s.m05,
            }}
          />

          <HudLeftVideo
            isLabel={isIdle}
            container={container}
            inActiveSiblings={
              <motion.div
                layout
                className="absolute row-space"
                style={{
                  height: 0,
                  width:
                    container.width +
                    s.m,
                  bottom:
                    s.m2 - s.m0125,
                  x: dragger.x025,
                  left: 0,
                  y: dragger.y,
                }}
              >
                <div
                  style={{
                    width: s.m,
                  }}
                />

                <ControlsPlayer

                  isLabel={isIdle}
                />
              </motion.div>
            }
            siblings={
              <>
                <motion.div
                  className="absolute row-space"
                  style={{
                    x: 0,
                    height: 0,
                    width:
                      container.width +
                      s.m,
                    left: 0,
                    top: container.height +s.m,
                    // y: dragger.y075,
                  }}
                >
                  <_RootReorderDragger
                    container={
                      container
                    }
                    width={s.m2}
                    size={s.m}
                    left={0}
                  />
                  <div />
                  {/* <HudLeftAddRandom
                    isLabel={isIdle}
                    // positionClass="absolute"
                  />
                  <LeftButtonsClear
                    isLabel={isIdle}
                  /> */}
                </motion.div>

                <motion.div
                  className="absolute row-space"
                  style={{
                    x: 0,
                    height: 0,
                    width:
                      container.width +
                      s.m,
                    left: 0,
                    bottom:
                      -s.m + s.m0125,
                    y: dragger.y06,
                  }}
                >
                  <HudLeftAddRandom
                    isLabel={isIdle}
                    
                    // positionClass="absolute"
                  />
                  <LeftButtonsClear
                    isLabel={isIdle}
                  />
                </motion.div>

                {isVideoPics && (
                  <motion.div
                    layout
                    className="absolute row-space"
                    style={{
                      height: 0,
                      width:
                        container.width +
                        s.m,
                      bottom:
                        s.m2 + s.m0125,
                      x: dragger.x025,
                      left: 0,
                      y: dragger.y,
                    }}
                  >
                    <div
                      className="relative row h-0"
                      style={{
                        top: s.m025,

                        gap: s.m05,
                      }}
                    >
                      <div
                        style={{
                          width: s.m,
                        }}
                      />
                      <VideoPicsCounter
                        classValue="relative"
                        style={{
                          bottom: s.m,
                        }}
                      >
                        {(count) => (
                          <>{`${count} Pics`}</>
                        )}
                      </VideoPicsCounter>
                    </div>
                    <div
                      className="relative row h-0"
                      style={{
                        top: s.m025,
                        gap: s.m05,
                      }}
                    >
                      <Pill
                        classValue="relative"
                        sizeClass={
                          "h-6"
                        }
                        style={{
                          bottom: s.m,
                        }}
                      >
                        <SubtitleText>
                          see video
                        </SubtitleText>
                      </Pill>
                      <ControlsPlayer
                        style={{
                          width: s.m,
                        }}
                        isLabel={isIdle}
                      />
                    </div>
                  </motion.div>
                )}
              </>
            }
          ></HudLeftVideo>
        </motion.div>
      </AnimatePresence>
    </LayoutGroup>
  );
};

// <motion.div
// layout
// className="absolute  w-0 h-0 column-end"
// style={{
//   height: 0,
//   right: s.m2,
//   bottom:
//     s.m2 + s.m0125,
//   x:
//     container.width +
//     s.m,
//   y: dragger.y,
// }}
// >

// </motion.div>
// <motion.div
// layout
// className="absolute right-0 w-0 h-0 column-end"
// style={{
//   y: dragger.y,
//   x:
//     container.width +
//     s.m,
//   right: 0,
//   bottom:
//     s.m3 - s.m05,
// }}
// >
// </motion.div>
{
  /* <motion.div
className="absolute w-0 h-0 right-0 column-end"
style={{
  y: dragger.y06,
  x:
    container.width -
    s.m05,
  left: s.m15,
  top:
    container.height -
    size / 2 -
    s.m0125,
}}
>

</motion.div> */
}
