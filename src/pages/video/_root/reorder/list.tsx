import type { FC } from "react";
import { Reorder } from "framer-motion";
import { resolveSquare } from "@brysonandrew/measure";
import { PicDisplay } from "~/pics/grid/pic/display";
import { isVNumber } from "~/utils/validation/is/number";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~uno/rules/box/size";
import { TUsePicSelected } from "~/hooks/pic/selected";
import {
  TOTAL_GAP,
  MAX_COUNT,
} from "~/pages/video/_root/reorder/constants";
import { LEFT_BUTTONS_CLEAR_TITLE } from "~/pages/video/_root/controls/clear";
import { useReadyContext } from "~/shell/ready/context";
import { HUD_LEFT_ADD_RANDOM_HOVER_KEY } from "~/pages/video/_root/controls/add-random";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import clsx from "clsx";
import { _RootReorderControls } from "~/pages/video/_root/reorder/controls";
import { useHoverKey } from "~/hooks/use-hover-key";

type TProps = TUsePicSelected;
export const _RootReorderList: FC<
  TProps
> = ({
  size: _size,
  names,
  select,
  deselect,
  add,
  pics,
}) => {
  const {
    hoverKeys,
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
  const {
    screen,
    main: { dragger },
  } = useReadyContext();

  const isVideoPlayerButtonHover =
    hoverKeys.includes(
      LEFT_BUTTONS_CLEAR_TITLE
    );
  const is5RandomPicsHover =
    hoverKeys.includes(
      HUD_LEFT_ADD_RANDOM_HOVER_KEY
    );

  const s = boxSize();
  const isColumn =
    screen.container.width < 600;
  const width =
    screen.container.width -
    (isColumn ? s.m : s.m3);
  const left = isColumn ? s.m05 : s.m25;
  const gap =
    TOTAL_GAP / (MAX_COUNT - 1);
  const size =
    (width - TOTAL_GAP) /
    (isColumn ? 1 : MAX_COUNT);
  const height = size;
  const boxStyle = {
    gap,
    height,
    width,
    left,
    top: s.m3,

  };
  const boxProps = {
    className: clsx(
      "absolute z-0",
      isColumn ? "column" : "row"
    ),
    style: boxStyle,
  } as const;
  const imageDimensions =
    resolveSquare(size);
  const itemDimensions = isColumn
    ? {
        height:
          size / MAX_COUNT + s.m05,
        width: size,
      }
    : imageDimensions;
    const {motionHandlers} =useHoverKey()

  return (
    <Reorder.Group
      axis={isColumn ? "y" : "x"}
      values={names}
      onReorder={select}
      {...boxProps}
      style={{
        ...boxStyle,
        top: s.m4,
      }}
      {...motionHandlers('_RootReorderList')}
    >
      {names.map((name, index) => {
        isVNumber(size);
        const key = resolveCompositeKey(
          "reorder",
          name
        );
        const controlKey =
          resolveCompositeKey(
            name,
            "control"
          );
        return (
          <Reorder.Item
            key={key}
            value={name}
            whileDrag={{
              cursor: "grabbing",
            }}
            style={{
              ...itemDimensions,
              filter: is5RandomPicsHover
                ? "blur(6px)"
                : "",
              cursor: "grab",
            }}
          >
            <_RootReorderControls
              x={dragger.x}
              y={dragger.y075}
              key={controlKey}
              name={name}
              title={controlKey}
              isColumn={isColumn}
              index={index}
              itemDimensions={
                itemDimensions
              }
              imageDimensions={
                imageDimensions
              }
              deselect={deselect}
              add={add}
              pics={pics}
            />
            {!isHover(
              LEFT_BUTTONS_CLEAR_TITLE
            ) &&
              !isVideoPlayerButtonHover && (
                <PicDisplay
                  key={resolveCompositeKey(
                    "reorder-list-pic-display",
                    name
                  )}
                  name={name}
                  whileTap={{
                    cursor: "grabbing",
                  }}
                  style={{
                    left: 0,
                    top: dragger.y06,
                    zIndex: index + 2,
                    ...imageDimensions,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeIn",
                  }}
                />
              )}
          </Reorder.Item>
        );
      })}
    </Reorder.Group>
  );
};
