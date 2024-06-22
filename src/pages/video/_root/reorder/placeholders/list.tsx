import type { FC } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { MAX_COUNT } from "~/pages/video/_root/reorder/constants";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";
import { useHoverKey } from "~/hooks/use-hover-key";
import { HOVER_KEY_RootReorderList } from "~/pages/video/_root/reorder/list";
import { useTrillPicsStore } from "~/store/middleware";
import { HOVER_KEY_RootReorderBackground } from "~/pages/video/_root/reorder/background";
import { TRootReorderPlaceholdersProps } from "~/pages/video/_root/reorder/placeholders";
import { TCommonProps } from "~/pages/video/_root/reorder/types";
import { isDefined } from "~/utils/validation/is/defined";
import { DELAY_06_TRANSITION_PROPS } from "~/constants/animation";

export const resolveLayoutId = (
  index: number
) => `reorder-${index}` as const;

type TProps =
  TRootReorderPlaceholdersProps &
    TCommonProps;
export const _RootReorderPlaceholdersList: FC<
  TProps
> = ({
  names,
  itemDimensions,
  boxProps,
  isColumn,
}) => {
  const s = boxSize();
  const borderRadius = boxRadius();
  const { handlers } = useHoverKey();
  const { isHover } = useTrillPicsStore(
    ({ isHover }) => ({
      isHover,
    })
  );

  const isHoveringBackground = isHover(
    HOVER_KEY_RootReorderBackground
  );
  const isHovering =
    isHover(
      HOVER_KEY_RootReorderList
    ) || isHoveringBackground;
  const listNames = [
    ...Array(MAX_COUNT),
  ].map(
    (_, index) => names[index] 
  );
  return (
    <ul
      className={clsx(
        "absolute left-0 top-0 w-full z-0",
        isColumn ? "column" : "row"
      )}
      style={{
        gap: boxProps.style?.gap,
      }}
      {...handlers(
        "_RootReorderPlaceholdersList"
      )}
    >
      {listNames.map((name, index) => {
        if (isDefined(name))
          return (
            <li
              key={`${index}-idle`}
              style={{
                width:
                  itemDimensions.width,
                height:
                  itemDimensions.height, /// s.m+s.m025,
                top: 0,
                borderRadius:
                  borderRadius / 2,
                padding: s.padding,
                zIndex: index * 2 + 2,
              }}
            />
          );
        return (
          <motion.li
            key={`${index}-active`}
            className={clsx("relative")}
            style={{
              width:
                itemDimensions.width,
              height:
                itemDimensions.height, /// s.m+s.m025,
              top: 0,
              padding: s.padding,
              zIndex: index * 2 + 2,
            }}
            animate={{
              opacity: isHovering
                ? 0.8
                : 0.6,
            }}
          >
            <motion.div
              className={clsx(
                "fill",
                "border backdrop-blur-sm",
                isHovering
                  ? "border-white-06 dark:border-black-06 bg-white-02 dark:bg-black-02"
                  : "border-white-02 dark:border-black-02 bg-white-01 dark:bg-black-01"
              )}
              layoutId={resolveLayoutId(
                index
              )}
              style={{
                borderRadius:
                  borderRadius / 2,
              }}
            />
          </motion.li>
        );
      })}
    </ul>
  );
};
