import type { FC } from "react";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { TLinesOptions } from "~/components/lines/types";

type TProps = {
  Root?: FC<TLinesOptions>;
} & TLinesOptions;
export const LinesBackground: FC<
  TProps
> = ({ Root = LinesHorizontal, ...props }) => {
  return (
    <Root
      opacityClass="opacity-20"
      // colorClass="border-gray"
      // colorClass="border-black dark:border-white"
      {...props}
    />
  );
};
