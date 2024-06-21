import type { FC } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { isString } from "unocss";
import { TPillBProps } from "~/components/buttons/pill/b";
import { ButtonPillBIcon } from "~/components/buttons/pill/b/icon";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";
import { TDivMotionProps } from "@brysonandrew/config-types";
import { PillBText } from "~/components/buttons/pill/b/text";
import { LightingGlow } from "~/components/layout/lighting/glow";
export type TPillBLayoutProps = Partial<
  Pick<
    TPillBProps,
    | "isSelected"
    | "outerCircle"
    | "Icon"
    | "children"
  > & {
    mainProps: TDivMotionProps;
    size: number;
  }
>;
export const PillBLayout: FC<
  TPillBLayoutProps
> = ({
  isSelected,
  outerCircle,
  Icon,
  children,
  mainProps = {},
  size,
}) => {
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
          "center relative bg-white dark:bg-black pointer-events-none z-0 border-2 border-transparent"
        )}
        style={{
          height: size,
          width: size,
          borderRadius,
          marginLeft: 0,
          ...mainStyle,
        }}
        {...mainRest}
      >
        {!children && (
          <div
            className="absolute -inset-0.675 _gradient-radial"
            style={{ borderRadius }}
          />
        )}
        <LightingGlow/>
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
      )}
    </>
  );
};
