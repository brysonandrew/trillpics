import type { FC } from "react";
import clsx from "clsx";
import { TUsePicSelected } from "~/hooks/pic/selected";
import { box } from "~uno/rules/box";
import {
  ButtonPillBIcon,
  TButtonPillBIconProps,
} from "~/components/buttons/pill/b/icon";
import { boxRadius } from "~uno/rules/box/radius";
import { TButtonProps } from "@brysonandrew/config-types";

type TProps = Pick<
  TUsePicSelected,
  "currName"
> &
  TButtonProps & {
    iconProps: Partial<TButtonPillBIconProps>;
  };

export const _RootReorderControlsButton: FC<
  TProps
> = ({
  currName: name,
  classValue,
  iconProps: {
    style: iconStyle,
    ...iconProps
  },
  ...props
}) => {
  
  const borderRadius = boxRadius();

  return (
    <button
      className={clsx(
        "relative center hover:opacity-100 opacity-90",
        "hover:grayscale-100",
        classValue
      )}
      style={{
        width: box.s,
        height: box.s,
        borderRadius,
      }}
      {...props}
    >
      <div
        className="absolute -inset-0.125 _gradient-radial"
        style={{ borderRadius }}
      />
      <ButtonPillBIcon
        isSelected={true}
        style={{
          width: box.s,
          height: box.s,
          borderRadius,
          ...iconStyle,
        }}
        {...iconProps}
      />
    </button>
  );
};
