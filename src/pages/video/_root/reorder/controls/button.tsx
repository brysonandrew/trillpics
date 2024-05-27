import type { FC } from "react";
import clsx from "clsx";
import { IconsTrash } from "~/components/icons/video/trash";
import { TUsePicSelected } from "~/hooks/pic/selected";
import { boxSize } from "~/constants/box/size";
import { ButtonPillBIcon, TButtonPillBIconProps } from "~/components/buttons/pill/b/icon";
import { boxRadius } from "~/constants/box/radius";
import { TButtonProps } from "@brysonandrew/config-types";

type TProps = Pick<
  TUsePicSelected,
  "currName" 
> & TButtonProps & {
  iconProps:Partial<TButtonPillBIconProps>,

};

export const _CommonReorderControlsButton: FC<
  TProps
> = ({ currName: name,classValue,  iconProps:{style:iconStyle, ...iconProps},...props }) => {
  const s = boxSize();
  const borderRadius = boxRadius();

  return (
    <button
      className={clsx(
        "relative center hover:opacity-100 opacity-90",
        "hover:grayscale-100",
        classValue
      )}
      style={{
        width: s.s,
        height: s.s,
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
          width: s.s,
          height: s.s,
          borderRadius,
          ...iconStyle
        }}

        {...iconProps}
      />
    </button>
  );
};
