import type { FC } from "react";
import { useContextGrid } from "~/context";
import { TDimensions } from "@brysonandrew/config-types";

type TProps = TDimensions;
export const PicsHudCenter: FC<
  TProps
> = ({ height, width }) => {
  const { fonts, main } =
    useContextGrid();

  return (
    <div
      className="absolute center h-0 bg-red pointer-events-none"
      style={{
        width: (width / 3) * 2,
        left: width / 3 / 2,
        top: height / 2,
      }}
      ref={(instance) => {
        if (
          instance &&
          !main.ui.center
        ) {
          main.ui.center = instance;
        }
      }}
    ></div>
  );
};
