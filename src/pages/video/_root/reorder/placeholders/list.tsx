import type { FC } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { MAX_COUNT } from "~/pages/video/_root/reorder/constants";
import { boxRadius } from "~uno/rules/box/radius";
import { box } from "~uno/rules/box";
import { useHoverKey } from "~/hooks/use-hover-key";
import { HOVER_KEY_RootReorderList } from "~/pages/video/_root/reorder/list";
import { useTrillPicsStore } from "~/store/middleware";
import { HOVER_KEY_RootReorderBackground } from "~/pages/video/_root/reorder/background";
import { TRootReorderPlaceholdersProps } from "~/pages/video/_root/reorder/placeholders";
import { TCommonProps } from "~/pages/video/_root/reorder/types";
import { isDefined } from "~/utils/validation/is/defined";
import { DELAY_06_TRANSITION_PROPS } from "~/constants/animation";
import { VideoRootReorderBox } from "~/pages/video/_root/reorder/box";

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
  ].map((_, index) => names[index]);

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
        const boxStyle = {
          width: itemDimensions.width,
          height: itemDimensions.height, /// box.m+box.m025,
          top: 0,
          borderRadius:
            borderRadius / 2,
          padding: box.padding,
          zIndex: index * 2 + 2,
        };
        if (isDefined(name))
          return (
            <li
              key={`${index}-idle`}
              className='relative'
              style={boxStyle}
            />
          );
        return (
          <motion.li
            key={`${index}-active`}
            className={clsx("relative")}
            style={boxStyle}
            animate={{
              opacity: isHovering
                ? 0.8
                : 0.6,
            }}
          >
            <VideoRootReorderBox
              index={index}
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
