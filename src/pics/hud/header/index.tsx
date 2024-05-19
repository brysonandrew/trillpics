import {
  FC,
  PropsWithChildren,
} from "react";
import clsx from "clsx";
import { TDimensions } from "@brysonandrew/config-types";
import { PicsHudHeaderFoundation } from "~/pics/hud/header/foundation";
import { boxSize } from "~/constants/box/size";

type TProps = {
  dimensions: TDimensions;
};
export const PicsHudHeader: FC<
  PropsWithChildren<TProps>
> = ({ children, dimensions }) => {
  const bSize = boxSize();

  return (
    <header
      className={clsx(
        "row-start-space"
      )}
      style={{ gap: bSize.m05, height:0 }}
    > 
      <PicsHudHeaderFoundation
        dimensions={dimensions}
      />
      {children}
    </header>
  );
};
