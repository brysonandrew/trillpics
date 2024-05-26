import { FC } from "react";
import {
  TClassValueProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import clsx from "clsx";

type TProps = TClassValueProps;
export const SubtitleText: FC<
  TPropsWithChildren<TProps>
> = ({ children, classValue }) => {
  return (
    <div
      className={clsx(
        "relative text-main-inverted _outline-filter font-sans text-sm uppercase whitespace-nowrap",
        classValue
      )}
    >
      {children}
    </div>
  );
};
