import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { Lines_Line } from "~/components/lines/_line";
import { TLinesOptions } from "~/components/lines/types";

type TProps = TDivProps & TLinesOptions;
export const LinesHorizontal: FC<
  TProps
> = ({ classValue, ...props }) => {
  return (
    <Lines_Line
      classValue={clsx(
        "w-full h-0",
        classValue
      )}
      sizeClass="border-t"
      {...props}
    />
  );
};
