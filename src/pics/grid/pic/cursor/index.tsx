import { FC } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
} from "framer-motion";
import { useContextReady } from "~/shell/ready/context";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { CursorCorners } from "~/pics/grid/pic/cursor/corners";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { resolvePositionFromCell } from "~/pics/grid/pic/cursor/position-from-cell";
import {
  DELAY_TRANSITION_PROPS,
  PRESENCE_OPACITY_01,
} from "~/constants/animation";
import { boxRadius } from "~uno/rules/box/radius";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import {
  TUseShowCursorConfig,
  useShowCursor,
} from "~/pics/grid/pic/cursor/use-show-cursor";
import { PicCursorSquare } from "~/pics/grid/pic/cursor/square";
import { resolveGradient } from "@brysonandrew/color-gradient";
import {
  GRADIENT_BLUE_PINK_YELLOW_COLORS,
  GRADIENT_TEAL_YELLOW_PINK_COLORS,
} from "~uno/rules/gradient/constants";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { resolveSquare } from "@brysonandrew/measure";

export const PicCursor: FC<
  TPropsWithChildren<TUseShowCursorConfig>
> = ({ children, ...props }) => {
  const { currCell, size, currKey } =
    props;
  const { scrollY } = useContextReady();

  const position =
    resolvePositionFromCell({
      cell: currCell,
      size,
    });
  const borderRadius = boxRadius();

  const isShown = useShowCursor(props);
  const { isDarkMode } = useDarkMode();

  return (
    <AnimatePresence>
      {isShown && (
        <motion.div
          key={resolveCompositeKey(
            "PicCursor-cursor"
          )}
          className="fill center text-2xl _outline-filter-inverted text-black-5 dark:text-gray-9 pointer-events-none"
          style={{
            y: scrollY,
            borderRadius,
            ...position,
          }}
          initial={{
            scale: 0.8,
          }}
          animate={{
            scale: 1,
          }}
          exit={{
            scale: 0.8,
          }}
          {...DELAY_TRANSITION_PROPS}
        >
          <motion.div
            key="PicCursor-light"
            className="fill"
            layoutId="PicCursor-light"
            style={{
              mixBlendMode:
                "soft-light",
              backgroundImage:
                resolveGradient({
                  name: "radial-gradient",
                  parts: [
                    "circle",
                    ...(isDarkMode
                      ? GRADIENT_BLUE_PINK_YELLOW_COLORS
                      : GRADIENT_TEAL_YELLOW_PINK_COLORS),
                  ],
                }),
            }}
            {...PRESENCE_OPACITY_01}
          />
          <PicCursorSquare
            key={resolveCompositeKey(
              "inner-square",
              "PicCursor"
              // currKey
            )}
          />
          <CursorCorners key="cursor-corners" />
          <motion.div
            className="fill center pointer-events-none"
            key={resolveCompositeKey(
              "children",
              "PicCursor"
              // currKey
            )}
            style={resolveSquare(size)}
            {...PRESENCE_OPACITY}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
{
  /* <MotionConfig
        transition={{
          ease: "linear",
          duration: 0.2,
        }}
      >
        <Sight>
          <Box>
            <span className="column-start">
              {isActiveHover && <div>active hover</div>}

              <div>
                hk:{" "}
                {hoverKeys.join(" - ")}
              </div>
              {!isOnscreen && (
                <span>AFK</span>
              )}
              {isScrolling && (
                <span>
                  scrolling...
                </span>
              )}
              {props.currName ? (
                <div>
                  {props.currName}
                </div>
              ) : (
                <div>no cell</div>
              )}
            </span>
          </Box>
        </Sight>
      </MotionConfig> */
}
