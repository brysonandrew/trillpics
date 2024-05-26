import type { FC } from "react";
import { boxSize } from "~/constants/box/size";
import { TLinesOptions } from "~/components/lines/types";
import { LinesVertical } from "~/components/lines/vertical";

type TProps = TLinesOptions;
export const PicsHudLeftLine: FC<
  TProps
> = (props) => {
  const s = boxSize();
  return (
    <LinesVertical
      layout
      style={{ left: s.m05 }}
      {...props}
    />
  );
};
