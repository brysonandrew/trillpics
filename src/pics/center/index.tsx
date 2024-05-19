import type { FC } from "react";
import { useContextGrid } from "~/context";
import { TDimensions } from "@brysonandrew/config-types";

type TProps = TDimensions;
export const PicsCenter: FC<
  TProps
> = ({ height, width }) => {
  const {
    centerValue,
    updateCenter,
  } = useContextGrid();
  return (
    <div
      className="absolute center h-0"
      style={{
        width: (width / 3) * 2,
        left: width / 3 / 2,
        top: height / 2,
      }}
      ref={(instance) => {
        if (instance && !centerValue) {
          updateCenter(instance);
        }
      }}
    ></div>
  );
};
