import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { BackgroundMeshFlat } from "~/components/layout/background/mesh/flat";
import { BackgroundRadialFlat } from "~/components/layout/background/radial/flat";

export const BackgroundMeshRadialFlat: FC<
  TDivProps
> = (props) => {
  return (
    <>
      <BackgroundRadialFlat
        {...props}
      />
      <BackgroundMeshFlat {...props} />
    </>
  );
};
