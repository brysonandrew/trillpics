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
      className="fill h-0"
      style={{
        top:
          height -
          s.m05 +
          s.padding / 2,
        left: s.m05,
        width: width,
        height: 2,
      }}
      ref={(instance) => {
        if (instance && !footerValue) {
          updateFooter(instance);
        }
      }}
    ></footer>
  );
};
