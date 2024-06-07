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
  const borderRadius = boxRadius();

  return (
    <>
      {isString(children) ? (
        <motion.div
          className="relative top-2 px-0 text-left text-sm pointer-events-none"
          style={{
            height: s.height,
          }}
          {...props}
        >
          <SubtitleText>
            {children}
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
