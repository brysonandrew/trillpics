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

type TProps = TUsePicSelected;
export const _CommonReorder: FC<
  PropsWithChildren<TProps>
> = ({
  children,
  size: _size,
  names,
  removingInValuesCheck,
  select,
  deselect,
}) => {
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({ screen })
  );
  const { trigger } = useTimebomb(
    400,
    select
  );
  if (!screen.isDimensions) return null;
  const s = boxSize();
  const width =
    screen.container.width - s.m;
    const left =
    screen.container.left + s.m05;
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
      left
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
      {(x, y) => {
        return (
          <motion.div
            style={{
              x,
              y,
              left
            }}
          >
            {children}
            <_CommonReorderControls
              names={names}
              trigger={trigger}
              deselect={deselect}
              boxProps={boxProps}
              itemProps={itemProps}
              x={x}
              y={y}
            />
            <_CommonReorderPlaceholder
              boxProps={boxProps}
              itemProps={itemProps}
            />
            <Reorder.Group
              axis="x"
              values={names}
              onReorder={select}
              {...boxProps}
            >
              {names.map((name) => {
                isVNumber(size);
                return (
                  <Reorder.Item
                    key={name}
                    value={name}
                    {...itemProps}
                  >
                    {removingInValuesCheck(
                      name
                    ) ? (
                      <div
                        className="fill bg-gray"
                        {...itemProps}
                      />
                    ) : (
                      <PicDisplay
                        name={name}
                        src={resolvePicSrc(
                          name
                        )}
                        whileTap={{
                          cursor:
                            "grabbing",
                        }}
                        {...itemProps}
                      />
                    )}
                  </Reorder.Item>
                );
              })}
            </Reorder.Group>
          </motion.div>
        );
      }}
    </_CommonReorderDragger>
  );
};
