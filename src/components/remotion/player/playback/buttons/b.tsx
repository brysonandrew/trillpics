import { type FC } from "react";
import { CircleIcon } from "~/components/buttons/circle/icon";
import {  TButtonProps,  TSvgProps,} from "@brysonandrew/config-types";
import clsx from "clsx";
import { Glow } from "~/components/decoration/glow";
import { useBoxStyle } from "~/store/hooks/core/box/use-box-style";

export const PlaybackButtonsB: FC<
  TButtonProps & { Icon: FC<TSvgProps> }
> = ({
  Icon,
  classValue,
  style,
  ...props
}) => {
  const borderStyle = useBoxStyle({layer:'flat',borderRadius:'borderRadius',size:'md'})
  return (
    <button
      className={clsx(
        "relative",
        "center",
        "btn-disabled",
        "_net-gradient",
        // "_gradient-border",
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
