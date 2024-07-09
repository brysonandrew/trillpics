import type { FC } from "react";
import { box } from "~uno/rules/box";
import { TLinesOptions } from "~/components/lines/types";
import { LinesVertical } from "~/components/lines/vertical";

type TProps = TLinesOptions;
export const PicsHudLeftLine: FC<
  TProps
> = (props) => {
  
  return (
    <LinesVertical
      layout
      style={{ left: box._05 }}
      {...props}
    />
  );
};
