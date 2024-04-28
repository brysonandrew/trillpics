import { type FC } from "react";
import {
  TButtonProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import clsx from "clsx";
import { LightingGlow } from "~/components/decoration/lighting/glow";
import { boxStyle } from "~/constants/box/style";
import { CircleIcon } from "~/components/decoration/circle/icon";

export const PlaybackButtonsB: FC<
  TButtonProps & { Icon: FC<TSvgProps> }
> = ({
  Icon,
  classValue,
  style,
  ...props
}) => {
  const borderStyle = boxStyle({
    layer: "flat",
    borderRadius: "borderRadius",
    size: "md",
  });
  return (
    <button
      className={clsx(
        "relative",
        "center",
        "btn-disabled",
        "_weave-gradient",
        // "_gradient-border",
        classValue
      )}
      style={{
        ...borderStyle,
        ...style,
      }}
      {...props}
    >
      <LightingGlow />
      <CircleIcon Icon={Icon} />
    </button>
  );
};
