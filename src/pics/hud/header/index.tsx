import {
  FC,
  PropsWithChildren,
} from "react";
import { TDimensions } from "@brysonandrew/config-types";
import { PicsHudHeaderFoundation } from "~/pics/hud/header/foundation";

type TProps = {
  dimensions: TDimensions;
};
export const PicsHudHeader: FC<
  PropsWithChildren<TProps>
> = ({ children, dimensions }) => {
  return (
    <header style={{ height: 0 }}>
      <PicsHudHeaderFoundation
        dimensions={dimensions}
      />
      {children}
    </header>
  );
};
