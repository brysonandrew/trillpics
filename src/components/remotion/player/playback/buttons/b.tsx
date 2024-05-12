import { type FC } from "react";
import {
  TButtonProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import clsx from "clsx";
import { boxStyle } from "~/constants/box/style";
import { CircleIcon } from "~/components/layout/circle/icon";
import { resolveNeuShadow } from "@brysonandrew/uno-shortcuts";

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
        "_gradient-radial",
        classValue
      )}
      style={{
        ...borderStyle,
        ...style,
      }}
      {...props}
    >
      <div
        className="center dark:bg-black-04 bg-white-04"
        style={{
          minHeight: sm.minHeight,
          minWidth: sm.minWidth,
          borderRadius:
            borderStyle.borderRadius,
          marginLeft: sm.padding,
        }}
      >
        <CircleIcon
          Icon={Icon}
          iconProps={undefined}
          circleProps={undefined}
        />
      </div>
    </button>
  );
};
