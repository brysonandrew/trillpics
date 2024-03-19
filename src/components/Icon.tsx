import type { FC } from "react";
import { TIconConfig } from "@t/icons";
import clsx from "clsx";
import { Icon } from "@iconify/react";
import { TClassValueProps } from "@brysonandrew/config-types";

type TProps = TIconConfig &
  TClassValueProps;
export const I: FC<TProps> = ({
  classValue,
  ...props
}) => {
  return (
    <Icon
      className={clsx(
        "shrink-0 pointer-event-none",
        classValue
      )}
      {...props}
    />
  );
};
