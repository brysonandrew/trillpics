import type {
  FC,
  PropsWithChildren,
} from "react";
import {
  AnimatePresence,
  motion,
  Reorder,
} from "framer-motion";
import { resolveSquare } from "@brysonandrew/measure";
import { PicDisplay } from "~/pics/grid/pic/display";
import { resolvePicSrc } from "~/utils/src";
import { isVNumber } from "~/utils/validation/is/number";
import { _CommonReorderDragger } from "~/pages/video/_common/reorder/dragger";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~/constants/box/size";
import { useTimebomb } from "~/hooks/use-time-bomb";
import { TUsePicSelected } from "~/hooks/pic/selected";
import { _CommonReorderPlaceholder } from "~/pages/video/_common/reorder/placeholder";
import { _CommonReorderControls } from "~/pages/video/_common/reorder/controls";
import {
  TOTAL_GAP,
  MAX_COUNT,
} from "~/pages/video/_common/reorder/constants";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { CONTROLS_PLAYER_TITLE } from "~/pics/hud/left/player";
import { AURA } from "@brysonandrew/svg-filter";
import { useHoverKey } from "~/hooks/use-hover-key";

type TProps = TUsePicSelected;
export const _CommonReorder: FC<
  PropsWithChildren<TProps>
> = ({
  children,
  size: _size,
  names,
  removingCheck,
  decryptRemoving,
  select,
  deselect,
}) => {
  const { screen, hoverKeys } =
    useTrillPicsStore(
      ({ screen, hoverKeys }) => ({
        screen,
        hoverKeys,
      })
    );
  const isVideoPlayerButtonHover =
    hoverKeys.includes(
      CONTROLS_PLAYER_TITLE
    );
  const { trigger } = useTimebomb(
    400,
    select
  );
  const {handlers}  = useHoverKey()

  if (!screen.isDimensions) return null;
  const s = boxSize();
  const width =
    screen.container.width - s.m3;
  const left =
    screen.container.left + s.m15;
  const gap =
    TOTAL_GAP / (MAX_COUNT - 1);
  const size =
    (width - TOTAL_GAP) / MAX_COUNT;
  const height = size;
  const boxProps = {
    className: "absolute row",
    style: {
      gap,
      height,
      width,
      left,
      top: 0,
    },
  } as const;
  const itemProps = {
    style: {
      ...resolveSquare(size),
    },
  } as const;
  return (
    <_CommonReorderDragger
      width={width}
      height={height}
      left={left}
      container={screen.container}
    >
      {({ x025, y033, y05, y }) => {
        return (
          <div className="relative" {...handlers("dragger")}>
            {children}
            <_CommonReorderControls
              names={names}
              trigger={trigger}
              deselect={deselect}
              boxProps={boxProps}
              itemProps={itemProps}
              x={x025}
              y={y05}
            />
            <motion.div
              style={{
                ...boxProps.style,
                y: y033,
              }}
            >
              <_CommonReorderPlaceholder
                boxProps={boxProps}
                itemProps={itemProps}
              />
            </motion.div>
            <Reorder.Group
              axis="x"
              values={names}
              onReorder={select}
              {...boxProps}
              style={{
                ...boxProps.style,
              }}
            >
              {names.map((name) => {
                isVNumber(size);
                const isRemoving =
                  removingCheck(name);
                console.log(
                  isRemoving,
                  name
                );
                return (
                  <Reorder.Item
                    key={name}
                    value={name}
                    {...itemProps}
                    style={{
                      ...itemProps.style,
                      // x: 0,
                      y: y033,
                      // y: y033,
                    }}
                  >
                    <AnimatePresence>
                      {isVideoPlayerButtonHover ? (
                        <motion.div
                          key="glow"
                          className="absolute _gradient-radial"
                          style={{
                            ...itemProps.style,
                            opacity: 1,
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            filter:
                              "blur(40px)",
                          }}
                          {...PRESENCE_OPACITY}
                          transition={{
                            duration: 1,
                            ease: "easeIn",
                          }}
                        />
                      ) : null}
                      {isRemoving ? (
                        <PicDisplay
                          key="removing"
                          name={`removing-${name}`}
                          src={resolvePicSrc(
                            decryptRemoving(
                              name
                            )
                          )}
                          style={{
                            ...itemProps.style,
                            opacity: 1,
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            filter:
                              "blur(4px)",
                          }}
                          {...PRESENCE_OPACITY}
                          transition={{
                            duration: 1,
                            ease: "easeIn",
                          }}
                        />
                      ) : (
                        <PicDisplay
                          key="added"
                          name={name}
                          src={resolvePicSrc(
                            name
                          )}
                          whileTap={{
                            cursor:
                              "grabbing",
                          }}
                          {...itemProps}
                          {...PRESENCE_OPACITY}
                          style={{
                            ...itemProps.style,
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,

                            // filter:
                            //   isVideoPlayerButtonHover
                            //     ? AURA
                            //         .GLOBAL
                            //         .value
                            //     : "none",
                          }}
                          transition={{
                            duration: 0.6,
                            ease: "easeIn",
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </Reorder.Item>
                );
              })}
            </Reorder.Group>
          </div>
        );
      }}
    </_CommonReorderDragger>
  );
};
