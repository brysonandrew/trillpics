import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { Lines_Line } from "~/pages/video/_common/footer/nav/lines/_line";
import { TLineProps } from "~/pages/video/_common/footer/nav/lines/types";

type TProps = TDivProps & TLineProps;
export const LinesHorizontal: FC<
  TProps
> = ({ classValue, ...props }) => {
  return (
    <Lines_Line
      classValue={clsx(
        "border-t w-full h-0",
        classValue
      )}
      {...props}
    />
  );
};
