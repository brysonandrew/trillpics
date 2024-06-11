import { TDivProps } from "@brysonandrew/config-types";
import type { FC } from "react";
import { BackgroundMesh } from "~/components/layout/background/mesh";
import { BackgroundRadial } from "~/components/layout/background/radial";

export const BackgroundMeshRadial: FC<TDivProps> =
  (props) => {
    return (
      <>
        <BackgroundRadial {...props} />
        <BackgroundMesh {...props} />
      </>
    );
  };
