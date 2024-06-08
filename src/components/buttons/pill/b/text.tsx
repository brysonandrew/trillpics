import type { FC } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { title } from "process";
import { isString } from "unocss";
import { FADE_PRESENCE_DELAY_02 } from "~/constants/animation";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";
import {
  TDivMotionProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { SubtitleText } from "~/pics/header/subtitle/text";
import { LayoutOverlayBackdrop } from "~/components/layout/overlay/backdrop";
import { useTrillPicsStore } from "~/store/middleware";
import { TITLE_HOVER_KEY } from "~/pics/header/left";
export type TPillBLayoutProps =
  TDivMotionProps &
    Partial<
      TPropsWithChildren<{
        size: number;
      }>
    >;
export const PillBText: FC<
  TPillBLayoutProps
> = ({ children, size, ...props }) => {
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
    <>
      {isString(children) ? (
        <motion.div
          className="relative top-2 px-0 text-left text-sm pointer-events-none z-30"
          style={{
            height: s.height,
          }}
          {...props}
        >
          <SubtitleText>
            {(isIdle ||
              isHover(
                TITLE_HOVER_KEY
              )) && (
              <motion.div
                className="absolute -inset-y-2 -inset-x-1 bg-white-2 dark:bg-gray-5 rounded-lg z-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.6,
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
      ) : (
        <>{children}</>
      )}
    </>
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
