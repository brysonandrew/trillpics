import type { FC } from "react";
import { motion } from "framer-motion";
import { isString } from "unocss";
import { boxSize } from "~uno/rules/box/size";
import {
  TDivMotionProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { SubtitleText } from "~/pics/header/subtitle/text";
import { useTrillPicsStore } from "~/store/middleware";
import { TITLE_HOVER_KEY } from "~/pics/header/left";
import clsx from "clsx";
export type TPillBLayoutProps = Omit<
  TDivMotionProps,
  "children"
> &
  Partial<{
    size: number;
    textSizeClass?: string;
  }>;
export const PillBText: FC<
  TPropsWithChildren<TPillBLayoutProps>
> = ({
  children,
  size,
  style,
  classValue,
  textSizeClass,
  ...props
}) => {
  const s = boxSize();
  size = size ?? s.m;
  const { isIdle, isHover } =
    useTrillPicsStore(
      ({ isIdle, isHover }) => ({
        isIdle,
        isHover,
      })
    );
  return (
    <motion.div
      className={clsx(
        "relative top-2 px-0 text-left pointer-events-none z-0",
        classValue,
        textSizeClass ?? "text-sm"
      )}
      style={{
        height: s.height,
        ...style,
      }}
      {...props}
    >
      <SubtitleText>
        {(isIdle ||
          isHover(TITLE_HOVER_KEY)) && (
          <motion.div
            className="absolute -inset-y-2 -inset-x-1 bg-white-2 dark:bg-gray-5 rounded-lg z-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.2,
            }}
            exit={{ opacity: 0 }}
            style={{
              filter: "blur(8px)",
            }}
          />
        )}

        <span className="relative">
          {children}
        </span>
      </SubtitleText>
    </motion.div>
  );
};
{
  /* <div className="uppercase font-sans _outline-filter lg:(text-sm whitespace-nowrap) pointer-events-none">
<div
  className="absolute -inset-y-4 -inset-x-1 _gradient-radial opacity-10 filter-blur-md pointer-events-none"
  style={{
    borderRadius,
  }}
/>
<span className="relative dark:text-black text-white-8 _outline-filter whitespace-nowrap pointer-events-none">
  {children}
</span>
</div> */
}
