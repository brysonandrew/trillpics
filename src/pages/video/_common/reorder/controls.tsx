import type { FC } from "react";
import { motion } from "framer-motion";
import { TMotionPoint } from "@brysonandrew/motion-config-types";
import clsx from "clsx";
import { IconsTrash } from "~/components/icons/video/trash";
import { TUsePicSelected } from "~/hooks/pic/selected";
import { LinesVertical } from "~/pages/video/_common/footer/left/lines/vertical";
import { TCommonProps } from "~/pages/video/_common/reorder/types";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_SVG_ID } from "~/shell/global/svg/gradients/blue-pink-yellow";
import { boxSize } from "~/constants/box/size";
import { useHoverKey } from "~/hooks/use-hover-key";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { useContextGrid } from "~/context";
import { LinesHorizontal1 } from "~/pages/video/_common/footer/left/lines/horizontal/1";

type TProps = TMotionPoint &
  TCommonProps &
  Pick<
    TUsePicSelected,
    "names" | "deselect"
  > & {
    trigger: Pick<
      TUsePicSelected,
      "select"
    >["select"];
  };
export const _CommonReorderControls: FC<
  TProps
> = ({
  x,
  y,
  names,
  itemProps,
  boxProps,
  trigger,
  deselect,
}) => {
  const gap = boxProps.style?.gap ?? 0;
  const s = boxSize();
  const { isDarkMode } = useDarkMode();
  const { main, dragger } =
    useContextGrid();
  const start = () => {
    main.cursor.isDragging = true;
  };
  const stop = () => {
    main.cursor.isDragging = true;
  };
  const { handlers, isHover } =
    useHoverKey({
      handlers: { start, stop },
    });
  return (
    <motion.div
      className="absolute"
      style={{
        x,
        y,
        ...boxProps.style,
      }}
    >
      <LinesHorizontal1
        style={{
          top: boxProps.style?.gap ?? 0,
        }}
      />
      <motion.ul
        className={clsx(
          "absolute row left-0 top-0 w-full"
        )}
      >
        {names.map((name, index) => {
          const key =
            resolveCompositeKey(
              name,
              "delete"
            );
          return (
            <li
              key={name}
              className="relative"
              {...itemProps}
              {...handlers(key)}
            >
              <button
                className={clsx("absolute center left-1/2 w-8 h-8 rounded-md _gradient-radial", 'hover:grayscale-100')}
                style={{
                  top: -s.m0125,
                }}
                onClick={() => {
                  deselect(name);
                  trigger(
                    names.filter(
                      (v) => v !== name
                    )
                  );
                }}
              >
                <div className="absolute inset-0.25 bg-black rounded-md" />
                <IconsTrash
                  fill={
                    isDarkMode
                      ? resolveUrlId(
                          LINEAR_GRADIENT_SVG_ID
                        )
                      : "#ffffff"
                  }
                />
              </button>
              {/* {index !== 0 && (
                <LinesVertical
                  style={{
                    left: -gap / 2 - 1,
                  }}
                />
              )} */}
            </li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};
