import type { FC } from "react";
import { TDimensions } from "@brysonandrew/config-types";
import { useContextGrid } from "~/context";
import { boxSize } from "~/constants/box/size";

type TProps = {
  origin: DOMRect;
  dimensions: TDimensions;
};
export const PicsHudFooter: FC<
  TProps
> = ({
  origin,
  dimensions: { width, height },
}) => {
  const { updateFooter, footerValue } =
    useContextGrid();
  const s = boxSize();
  return (
    <footer
      className="absolute row h-0 z-0"
      style={{
        top: height - s.m05+s.padding/2,
        left: s.padding/2,
        width: width,
      }}
      ref={(instance) => {
        if (instance && !footerValue) {
          updateFooter(instance);
        }
      }}
    />
  );
};
