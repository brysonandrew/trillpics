import type { FC } from "react";
import { TDimensions } from "@brysonandrew/config-types";
import { useContextGrid } from "~/context";
import { boxSize } from "~/constants/box/size";

type TProps = {
  dimensions: TDimensions;
};
export const PicsHudFooter: FC<
  TProps
> = ({
  dimensions: { width, height },
}) => {
  const { updateFooter, footerValue } =
    useContextGrid();
  const s = boxSize();
  return (
    <footer
      className="absolute row gap-4 h-0 z-10"
      style={{
        top:
          height -
          s.m05 +
          s.padding / 2,
        left: s.m05,
        width: width,
        height: 2,
      }}
    >
      <div
        style={{
          top: 0,
          left: s.m * 2,
          width: width - s.m*2,
          height: 0,
        }}
        ref={(instance) => {
          if (
            instance &&
            !footerValue
          ) {
            updateFooter(instance);
          }
        }}
      ></div>
    </footer>
  );
};
