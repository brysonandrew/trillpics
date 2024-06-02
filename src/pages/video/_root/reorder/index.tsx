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
import { boxSize } from "~uno/rules/box/size";
import { TUsePicSelected } from "~/hooks/pic/selected";
import { _CommonReorderPlaceholder } from "~/pages/video/_root/reorder/placeholder";
import {
  TOTAL_GAP,
  MAX_COUNT,
} from "~/pages/video/_root/reorder/constants";
import { useHoverKey } from "~/hooks/use-hover-key";
import { LEFT_BUTTONS_CLEAR_TITLE } from "~/pages/video/_root/clear";
import { useReadyContext } from "~/shell/ready/context";
import { _CommonReorderControls } from "~/pages/video/_root/reorder/controls";
import { HUD_LEFT_ADD_RANDOM_HOVER_KEY } from "~/pages/video/_root/add-random";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import clsx from "clsx";
import { _CommonReorderControl } from "~/pages/video/_root/reorder/controls/control";
import { MOTION_BLUR_ADD_RANDOM_PROPS } from "~/shell/init/svg/filters/blur/constants";
import { boxRadius } from "~uno/rules/box/radius";

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
  const { screen } = useReadyContext();

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
  const left =
    screen.container.left +
    (isColumn ? s.m05 : s.m15);
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
    top: 0,
  };
  const borderRadius = boxRadius()
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

  const { main } = useReadyContext();
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
      title="Drag video pics grid"
      isColumn={isColumn}
      width={width}
      left={left}
      bottom={s.m05}
      container={screen.container}
    >
      {({ x05, y06, y075, x, y }) => {
        return (
          <div
            className="relative"
            style={{
              ...MOTION_BLUR_ADD_RANDOM_PROPS,
            }}
          >
            <motion.div
              className="absolute bg-white-01 dark:bg-black-01 backdrop-blur-lg border border-teal-02 dark:border-blue-02"
              style={{
                x,
                y,
                borderRadius,
                top:-size/2 + s.m,
                left: left - s.m15 + s.m025,
                width: width + s.m3 - s.m05,
                height: size*2,
                opacity: 0.5
              }}
              {...motionHandlers(
                'dragger'
              )}
            />
            <>{children}</>
            <motion.div
              className="absolute z-0"
              style={{
                ...boxStyle,
                y: y06,
              }}
            >
              <_CommonReorderPlaceholder
                boxProps={boxProps}
                itemDimensions={
                  itemDimensions
                }
                isColumn={isColumn}
              />
            </motion.div>
            <Reorder.Group
              axis={
                isColumn ? "y" : "x"
              }
              values={names}
              onReorder={select}
              {...boxProps}
              style={{
                ...boxStyle,
              }}
            >
              {names.map(
                (name, index) => {
                  isVNumber(size);
                  const key =
                    resolveCompositeKey(
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
                        cursor:
                          "grabbing",
                      }}
                      style={{
                        ...itemDimensions,
                        filter:
                          is5RandomPicsHover
                            ? "blur(6px)"
                            : "",
                        left: 0,
                        cursor: "grab",
                      }}
                    
                    >
                      <_CommonReorderControl
                        x={x}
                        y={y075}
                        key={controlKey}
                        name={name}
                        title={
                          controlKey
                        }
                        isColumn={
                          isColumn
                        }
                        index={index}
                        itemDimensions={
                          itemDimensions
                        }
                        imageDimensions={
                          imageDimensions
                        }
                        deselect={
                          deselect
                        }
                        add={add}
                        pics={pics}
                      />
                      {!isHover(
                        LEFT_BUTTONS_CLEAR_TITLE
                      ) &&
                        !isVideoPlayerButtonHover && (
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
                            style={{
                              left: 0,
                              top: y06,
                              zIndex:
                                index +
                                2,
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
                }
              )}
            </Reorder.Group>
          </div>
        );
      }}
    </_RootReorderDragger>
  );
};
{
  /* <_CommonReorderControls
              add={add}
              pics={pics}
              names={names}
              deselect={deselect}
              boxProps={boxProps}
              itemDimensions={
                itemDimensions
              }
              x={x05}
              y={y}
              isColumn={isColumn}
            /> */
}
