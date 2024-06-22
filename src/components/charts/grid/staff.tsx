import type { FC } from "react";
import { resolveTop } from "~/components/charts/grid/top";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { TLinesOptions } from "~/components/lines/types";
import { SCALE_VALUE_COUNT } from "~/constants/scales";
import { boxSize } from "~uno/rules/box/size";

type TProps = Partial<
  Omit<TLinesOptions, "children">
> & {
  children?(index: number): JSX.Element;
};
export const ChartsGridStaff: FC<
  TProps
> = ({ children, style, ...props }) => {
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
            // width: "100%",
            
            ...style
          }}
          positionClass="absolute left-0 right-0"
          colorClass="border-white"
          sizeClass="border-t"
          {...props}
        >
          {children?.(index)}
        </LinesHorizontal>
      ))}
    </>
  );
};
