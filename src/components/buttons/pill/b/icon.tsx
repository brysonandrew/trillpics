import { FC } from "react";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { boxSize } from "~uno/rules/box/size";
import { LINEAR_GRADIENT_SVG_ID } from "~uno/rules/gradient/constants";
import { TPillBProps } from "~/components/buttons/pill/b";
import {
  TDivProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import { boxRadius } from "~uno/rules/box/radius";
import { TPillBLayoutProps } from "~/components/buttons/pill/b/layout";

export type TButtonPillBIconProps =
  Partial<
    Pick<
      TPillBLayoutProps,
      | "isSelected"
      | "Icon"
      | "outerCircle"
      | "size"
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
  size,
  ...props
}) => {
  const borderRadius = boxRadius();
  const s = boxSize();
  size = size ?? s.m;

  return (
    <div
      className="center relative shrink-0 border-1 border-transparent _gradient-mesh bg-gray-04 dark:bg-black-04 pointer-events-none"
      style={{
        borderRadius,
        height: size,
        width: size,
        // backgroundClip: isSelected
        //   ? "content-box"
        //   : "padding-box",
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
          {...iconProps}
        />
      )}
    </div>
  );
};
