import { type FC } from "react";
import { CircleIcon } from "@/components/buttons/circle/icon";
import {
  TButtonProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import clsx from "clsx";

export const PlaybackButtonsB: FC<
  TButtonProps & { Icon: FC<TSvgProps> }
> = ({ Icon, classValue, ...props }) => {
  return (
    <button
      className={clsx(
        "center",
        "btn-disabled",
        classValue
      )}
      {...props}
    >
      <CircleIcon Icon={Icon} />
    </button>
  );
};
