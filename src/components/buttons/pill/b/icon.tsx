import { FC } from "react";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { boxSize } from "~/constants/box/size";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { LINEAR_GRADIENT_SVG_ID } from "~/shell/init/svg/gradients/blue-pink-yellow";
import { TPillBProps } from "~/components/buttons/pill/b";
import {
  TDivProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import { boxRadius } from "~/constants/box/radius";

export type TButtonPillBIconProps =
  Partial<
    Pick<
      TPillBProps,
      | "isSelected"
      | "Icon"
      | "outerCircle"
    >
  > & {
    iconProps?: TSvgProps;
  } & TDivProps;
export const ButtonPillBIcon: FC<
  TButtonPillBIconProps
> = ({
  // Root = motion.button,
  isSelected,
  Icon,
  // title,
  // iconProps,
  // circleProps,
  // children,
  // classValue,
  outerCircle,
  // isFlat,
  // style,
  // size = "s",
  // direction = "ltr",
  // disabled,
  iconProps,
  style,
  ...props
}) => {
  const borderRadius = boxRadius();
  const s = boxSize();
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className="center relative shrink-0 border-1 border-transparent _gradient-mesh bg-gray-04 dark:bg-black-04 pointer-events-none"
      style={{
        borderRadius,
        height: s.m,
        width: s.m,
        backgroundClip: 
        isSelected
          ? "content-box"
          :
           "padding-box",
        ...style,
      }}
      {...props}
    >
      <>
        {outerCircle && (
          <>{outerCircle}</>
        )}
      </>
      {Icon && (
        <Icon
        stroke="none"
          fill={
            isDarkMode
              ? resolveUrlId(
                  LINEAR_GRADIENT_SVG_ID
                )
              : "#ffffff"
          }
          {...iconProps}
        />
      )}
    </div>
  );
};
