import { type FC } from "react";
import {
  TButtonProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import clsx from "clsx";
import { LightingGlow } from "~/components/layout/lighting/glow";
import { boxStyle } from "~/constants/box/style";
import { CircleIcon } from "~/components/layout/circle/icon";
import { Metal } from "@brysonandrew/texture-metal";

export const PlaybackButtonsB: FC<
  TButtonProps & { Icon: FC<TSvgProps> }
> = ({
  Icon,
  classValue,
  style,
  ...props
}) => {
  const { boxShadow, ...borderStyle } =
    boxStyle({
      layer: "flat",
      borderRadius: "XL",
      size: "md",
    });
  const sm = boxStyle({
    layer: "flat",
    borderRadius: "XL",
    size: "sm",
  });
  return (
    <button
      className={clsx(
        "relative",
        "row",
        "btn-disabled",
        // "_gradient-mesh",
        "_gradient-radial",
        classValue
      )}
      style={{
        boxShadow,
        ...borderStyle,
        ...style,

      }}
      {...props}
    >
      {/* <LightingGlow /> */}
      <div
        className="center _gradient-mesh bg-black-04"
        style={{
          minHeight: sm.minHeight,
          minWidth: sm.minWidth,
          borderRadius:
            borderStyle.borderRadius,
          marginLeft: sm.padding,
        }}
      >
        <CircleIcon Icon={Icon} />
      </div>
    </button>
  );
};
