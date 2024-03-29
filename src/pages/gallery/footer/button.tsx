import { FC } from "react";
import {
  B,
  TBProps,
} from "@brysonandrew/interactive";
import clsx from "clsx";
import { BORDER_GRADIENT } from "@constants/css/gradient";
import { TButtonProps } from "@brysonandrew/config-types";

type TProps = TButtonProps;
export const Button: FC<TProps> = ({
  children,
  classValue,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'interactive interactive-rect',
        "relative px-5 h-14 text-xl",
        "border-main-inverted border-4",
        classValue
      )}
      {...props}
    >
        <div
          className="fill border-4 bg-main"
          style={BORDER_GRADIENT}
        />
        <div className="relative flex items-center gap-2 ">
          {children}
        </div>
    </button>
  );
};
