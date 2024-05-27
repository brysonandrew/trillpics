import type {
  FC,
  PropsWithChildren,
} from "react";
import {
  motion,
  Reorder,
} from "framer-motion";
import { resolveSquare } from "@brysonandrew/measure";
import { PicDisplay } from "~/pics/grid/pic/display";
import { isVNumber } from "~/utils/validation/is/number";
import { _RootReorderDragger } from "~/pages/video/_root/reorder/dragger";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~/constants/box/size";
import { TUsePicSelected } from "~/hooks/pic/selected";
import { _CommonReorderPlaceholder } from "~/pages/video/_root/reorder/placeholder";
import {
  TOTAL_GAP,
  MAX_COUNT,
} from "~/pages/video/_root/reorder/constants";
import { useHoverKey } from "~/hooks/use-hover-key";
import { LEFT_BUTTONS_CLEAR_TITLE } from "~/pics/hud/left/clear";
import { useContextGrid } from "~/context";
import { _CommonReorderControls } from "~/pages/video/_root/reorder/controls";
import { HUD_LEFT_ADD_RANDOM_HOVER_KEY } from "~/pics/hud/left/add-random";
import { resolveCompositeKey } from "@brysonandrew/utils-key";

type TProps = TUsePicSelected;
export const _CommonReorder: FC<
  PropsWithChildren<TProps>
> = ({
  children,
  size: _size,
  names,
  select,
  deselect,
  add,
  pics,
}) => {
  const {
    hoverKeys,
    isControls,
    isHover,
  } = useTrillPicsStore(
    ({
      hoverKeys,
      isControls,
      isHover,
    }) => ({
      hoverKeys,
      isControls,
      isHover,
    })
  );
  const { screen } = useContextGrid();

  const isVideoPlayerButtonHover =
    hoverKeys.includes(
      LEFT_BUTTONS_CLEAR_TITLE
    );
  const is5RandomPicsHover =
    hoverKeys.includes(
      HUD_LEFT_ADD_RANDOM_HOVER_KEY
    );

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
  const boxStyle = {
    gap,
    height,
    width,
    left,
    top: 0,
  };
  const boxProps = {
    className: "absolute row",
    style: boxStyle,
  } as const;
  const itemStyle = resolveSquare(size);

  const { main } = useContextGrid();
  const start = () => {
    main.cursor.isOnGrid = false;
  };
  const stop = () => {
    main.cursor.isOnGrid = true;
  };
  const { motionHandlers } =
    useHoverKey({
      handlers: { start, stop },
    });
  if (!isControls) return null;

  return (
    <_RootReorderDragger
      width={width}
      left={left}
      bottom={s.m05}
      container={screen.container}
    >
      {({ x05, y06, y075, x, y }) => {
        return (
          <div className="relative">
            {children}
            <_CommonReorderControls
              add={add}
              pics={pics}
              names={names}
              deselect={deselect}
              boxProps={boxProps}
              itemStyle={itemStyle}
              x={x05}
              y={y}
            />
            <motion.div
              style={{
                ...boxStyle,
                y: y06,
              }}
            >
              <_CommonReorderPlaceholder
                boxProps={boxProps}
                itemStyle={itemStyle}
              />
            </motion.div>
            <Reorder.Group
              axis="x"
              values={names}
              onReorder={select}
              {...boxProps}
              style={{
                ...boxStyle,
              }}
            >
              {names.map((name) => {
                isVNumber(size);
                const key =
                  resolveCompositeKey(
                    "reorder",
                    name
                  );
                return (
                  <Reorder.Item
                    key={key}
                    value={name}
                    whileDrag={{
                      cursor:
                        "grabbing",
                    }}
                    style={{
                      ...itemStyle,
                      filter:
                        is5RandomPicsHover
                          ? "blur(6px)"
                          : "",
                      // must be top not y
                      // top:0,
                      left: 0,
                      cursor: "grab",
                    }}
                    {...motionHandlers(
                      key
                    )}
                  >
                    {!isHover(
                      LEFT_BUTTONS_CLEAR_TITLE
                    ) && (
                      <>
                        {!isVideoPlayerButtonHover && (
                          <PicDisplay
                            key={resolveCompositeKey(
                              "pic-display",
                              name
                            )}
                            name={name}
                            whileTap={{
                              cursor:
                                "grabbing",
                            }}
                            // {...PRESENCE_OPACITY_ANIMATE_DELAY_02}

                            // {...PRESENCE_OPACITY}
                            style={{
                              // position:
                              //   "absolute",
                              // top: "0",
                              left: 0,
                              top: y06,
                              ...itemStyle,
                            }}
                            transition={{
                              duration: 0.6,
                              ease: "easeIn",
                            }}
                          />
                        )}
                      </>
                    )}
                  </Reorder.Item>
                );
              })}
            </Reorder.Group>
          </div>
        );
      }}
    </_RootReorderDragger>
  );
};
