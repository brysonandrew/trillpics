import type { FC } from "react";
import { resolveTop } from "~/components/charts/grid/top";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { SCALE_VALUE_COUNT } from "~/constants/scales";
import { boxSize } from "~uno/rules/box/size";

export const ChartsGridStaff: FC =
  () => {
    const s = boxSize();
    return (
      <>
        {[
          ...Array(SCALE_VALUE_COUNT),
        ].map((_, index) => (
          <LinesHorizontal
            key={`line-${index}`}
            style={{
              top: resolveTop(
                index,
                s.m0125
              ),
              opacity: 0.1,
              width: "100%",
            }}
            positionClass="absolute"
            colorClass="border-white"
            sizeClass="border-t"
          />
        ))}
      </>
    );
  };
