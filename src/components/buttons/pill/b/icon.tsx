import { FC } from "react";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { boxSize } from "~/constants/box/size";
import { LINEAR_GRADIENT_SVG_ID } from "~app/color/gradient";
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
  isSelected,
  Icon,
  outerCircle,
  iconProps,
  style,
  ...props
}) => {
  const borderRadius = boxRadius();
  const s = boxSize();
  return (
    <div
      className="center relative shrink-0 border-1 border-transparent _gradient-mesh bg-gray-04 dark:bg-black-04 pointer-events-none"
      style={{
        borderRadius,
        height: s.m,
        width: s.m,
        backgroundClip: isSelected
          ? "content-box"
          : "padding-box",
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
          classValue="_icon-fill"
          // fill={
          //   isDarkMode
          //     ? resolveUrlId(
          //         LINEAR_GRADIENT_SVG_ID
          //       )
          //     : "#ffffff"
          // }
          {...iconProps}
        />
      )}
    </div>
  );
};
