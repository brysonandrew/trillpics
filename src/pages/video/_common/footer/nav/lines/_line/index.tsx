import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { TLineProps } from "~/pages/video/_common/footer/nav/lines/types";

type TProps = TDivProps & TLineProps;
export const Lines_Line: FC<TProps> = ({
  colorClass,
  sizeClass,
  classValue,
  style,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "relative grow",
        colorClass ?? "border-current",
        sizeClass ?? "border-px",
        classValue
      )}
      style={{ ...style }}
      {...props}
    />
  );
};
