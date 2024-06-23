import type { FC } from "react";
import { resolveTop } from "~/components/charts/grid/top";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { TLinesOptions } from "~/components/lines/types";
import { SCALE_VALUE_COUNT } from "~/constants/scales";
import { box } from "~uno/rules/box";

type TProps = Partial<
  Omit<TLinesOptions, "children">
> & {
  children?(index: number): JSX.Element;
};
export const ChartsGridStaff: FC<
  TProps
> = ({ children, style, ...props }) => {
  return (
    <>
      {[
        ...Array(SCALE_VALUE_COUNT),
      ].map((_, index) => (
        <div
        key={`row-${index}`}
          className="absolute left-0 right-0"
          style={{
            top: resolveTop(
              index,
              box.m0125
            ),
          }}
        >
          <LinesHorizontal
            key={`line-${index}`}
            style={{
              opacity: 0.1,
              ...style,
            }}
            colorClass="border-white"
            sizeClass="border-t"
            {...props}
          />
          {children?.(index)}
        </div>
      ))}
    </>
  );
};
