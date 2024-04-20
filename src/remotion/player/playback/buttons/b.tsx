import { type FC } from "react";
import { CircleIcon } from "~/components/buttons/circle/icon";
import {
  TButtonProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import clsx from "clsx";
import { Glow } from "~/components/decoration/glow";
import { useBorderStyleMd } from "~/components/buttons/use-border-style/md";

export const PlaybackButtonsB: FC<
  TButtonProps & { Icon: FC<TSvgProps> }
> = ({
  Icon,
  classValue,
  style,
  ...props
}) => {
  const borderStyle = useBorderStyleMd();
  return (
    <button
      className={clsx(
        "relative",
        "center",
        "btn-disabled",
        "_net-gradient",
        classValue
      )}
      style={{
        ...borderStyle,
        ...style,
      }}
      {...props}
    >
      <Glow />
      <CircleIcon Icon={Icon} />
    </button>
  );
};
