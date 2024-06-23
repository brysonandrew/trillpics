import type { FC } from "react";
import clsx from "clsx";
import { box } from "~uno/rules/box";
import {
  ButtonPillBIcon,
  TButtonPillBIconProps,
} from "~/components/buttons/pill/b/icon";
import { boxRadius } from "~uno/rules/box/radius";
import { TButtonProps } from "@brysonandrew/config-types";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";
import { resolveSquare } from "@brysonandrew/measure";

type TProps = TButtonProps & {
  Icon?: FC<TIconsSvgProps>;
  iconProps?: Partial<TButtonPillBIconProps>;
};

export const PillBXs: FC<TProps> = ({
  classValue,
  iconProps = {},
  Icon,
  style,
  ...props
}) => {
  const {
    style: iconStyle,
    ..._iconProps
  } = iconProps;
  
  const borderRadius = boxRadius();

  return (
    <button
      className={clsx(
        "relative center hover:opacity-100 opacity-90",
        "hover:grayscale-100",
        "disabled:(grayscale-80 brightness-80 opacity-60)",
        classValue
      )}
      style={{
        borderRadius,
        ...resolveSquare(box.xs),
        ...style,
      }}
      {...props}
    >
      <div
        className="absolute -inset-0.125 _gradient-radial"
        style={{ borderRadius }}
      />
      <ButtonPillBIcon
        isSelected={true}
        Icon={Icon}
        style={{
          borderRadius,
          ...resolveSquare(box.xs),

          ...iconStyle,
        }}
        {..._iconProps}
      />
    </button>
  );
};
