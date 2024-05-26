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
import { _CommonReorderControls } from "~/pages/video/_root/reorder/controls/controls";
import {
  TOTAL_GAP,
  MAX_COUNT,
} from "~/pages/video/_root/reorder/constants";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { CONTROLS_PLAYER_TITLE } from "~/pics/hud/left/player";
import { useHoverKey } from "~/hooks/use-hover-key";
import { LEFT_BUTTONS_CLEAR_TITLE } from "~/pics/hud/left/clear";
import { useContextGrid } from "~/context";

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
      CONTROLS_PLAYER_TITLE
    );
  const { handlers } = useHoverKey();

  if (!isControls) return null;

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
  const itemProps = {
    style: itemStyle,
  } as const;

  return (
    <_RootReorderDragger
      width={width}
      left={left}
      bottom={s.m05}
      container={screen.container}
    >
      {({ x025, y06, y075, x, y }) => {
        return (
          <div
            className="relative"
            {...handlers("dragger")}
          >
            {children}
            <_CommonReorderControls
              add={add}
              pics={pics}
              names={names}
              deselect={deselect}
              boxProps={boxProps}
              itemProps={itemProps}
              x={x025}
              y={y075}
            />
            <motion.div
              style={{
                ...boxStyle,
                y: y06,
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
                ...boxStyle,
              }}
            >
              {names.map((name) => {
                isVNumber(size);

                return (
                  <Reorder.Item
                    key={name}
                    value={name}
                    {...itemProps}
                    whileDrag={{
                      cursor:
                        "grabbing",
                    }}
                    style={{
                      ...itemProps.style,
                      cursor: "grab",
                      // y: y06,
                    }}
                  >
                    {!isHover(
                      LEFT_BUTTONS_CLEAR_TITLE
                    ) && (
                      <>
                        {!isVideoPlayerButtonHover && (
                          <PicDisplay
                            key="added"
                            name={name}
                            whileTap={{
                              cursor:
                                "grabbing",
                            }}
                            {...itemProps}
                            {...PRESENCE_OPACITY}
                            style={{
                              position:
                                "absolute",
                              ...itemProps.style,
                              top: y06, // must be top not y
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

{
  /* {removingParamValues.map(
                (name) => {
                  return (
                    <Reorder.Item
                      key={name}
                      value={name}
                      {...itemProps}
                      style={{
                        ...itemProps.style,
                        cursor:
                          "not-allowed",
                        y: y06,
                      }}
                    >
                      <PicDisplay
                        key="removing"
                        name={name}
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
                        transition={{
                          duration: 1,
                          ease: "easeIn",
                        }}
                      />
                    </Reorder.Item>
                  );
                }
              )} */
}
