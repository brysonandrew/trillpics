import type { FC } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import clsx from "clsx";
import { title } from "process";
import { isString } from "unocss";
import { TPillBProps } from "~/components/buttons/pill/b";
import { ButtonPillBIcon } from "~/components/buttons/pill/b/icon";
import { FADE_PRESENCE_DELAY_02 } from "~/constants/animation";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";
import { TDivMotionProps } from "@brysonandrew/config-types";
import { PillBText } from "~/components/buttons/pill/b/text";
export type TPillBLayoutProps = Partial<
  Pick<
    TPillBProps,
    | "isSelected"
    | "direction"
    | "outerCircle"
    | "isFlat"
    | "Icon"
    | "children"
  > & {
    backgroundProps: TDivMotionProps;
    mainProps: TDivMotionProps;
    size: number;
  }
>;
export const PillBLayout: FC<
  TPillBLayoutProps
> = ({
  isSelected,
  direction,
  outerCircle,
  isFlat,
  Icon,
  children,
  backgroundProps = {},
  mainProps = {},
  size,
}) => {
  const {
    style: backgroundStyle,
    ...backgroundRest
  } = backgroundProps;
  const {
    style: mainStyle,
    ...mainRest
  } = mainProps;
  const s = boxSize();
  size = size ?? s.m;
  const borderRadius = boxRadius();

  return (
    <>
     
      <motion.div
        className={clsx(
          "center relative bg-white dark:bg-black pointer-events-none z-10 border-2 border-transparent"
        )}
        style={{
          height: size,
          width: size,
          borderRadius,
          marginLeft: 0,
          // backgroundClip: "padding-box", // | "content-box" | "padding-box";
          ...mainStyle,
        }}
        {...mainRest}
      >
         {!children && <div
          className="absolute -inset-0.675 _gradient-radial"
          style={{ borderRadius }}
        />}
        <ButtonPillBIcon
          isSelected={isSelected}
          Icon={Icon}
          outerCircle={outerCircle}
        />
       
      </motion.div>
      {children && (
        <>
          {isString(children) ? (
            <PillBText>
              {children}
            </PillBText>
          ) : (
            <>{children}</>
          )}
        </>
      ) }
    </>
  );
};
