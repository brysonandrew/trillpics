import { type FC } from "react";
import {
  TButtonProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import clsx from "clsx";
import { boxStyle } from "~/constants/box/style";
import { CircleIcon } from "~/components/layout/circle/icon";
import { resolveNeuShadow } from "@brysonandrew/uno-shortcuts";
import { colors } from "tailwindcss/defaultTheme";
import { SCROLLBAR_BORDER_WIDTH } from "~uno/preflights";

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
        boxShadow:resolveNeuShadow({
          size: 2,
          color: {
            fill: 'red',
            back: 'blue'
          },
          blur:
            4
        }).emptyFill,
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
        <CircleIcon Icon={Icon} iconProps={undefined} circleProps={undefined} />
      </div>
    </button>
  );
};
