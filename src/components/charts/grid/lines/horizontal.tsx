import type { FC } from "react";
import { LinesHorizontal } from "~/components/lines/horizontal";

export const ChartsGridLinesHorizontal: FC =
  () => {
    return (
      <LinesHorizontal
        style={{
          top: 0,
          opacity: 0.1,
          width: "100%",
        }}
        positionClass="absolute"
        colorClass="border-white"
        sizeClass="border-t"
      />
    );
  };
