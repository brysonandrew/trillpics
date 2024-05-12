import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { TLineProps } from "~/pages/video/_common/footer/nav/lines/types";
import { Lines_Line } from "~/pages/video/_common/footer/nav/lines/_line";

type TProps = TDivProps & TLineProps;
export const LinesVertical: FC<
  TProps
> = ({ classValue, ...props }) => {
  return (
    <Lines_Line
      className={clsx(
        "border-l h-full w-0",
        classValue
      )}
      {...props}
    />
  );
};
