import type { FC } from "react";
import { boxSize } from "~/constants/box/size";
import { TLinesOptions } from "~/pages/video/_common/footer/left/lines/types";
import { LinesVertical } from "~/pages/video/_common/footer/left/lines/vertical";

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
