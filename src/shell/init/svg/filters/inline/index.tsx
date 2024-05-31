import { FC } from "react";
import { SvgWrap } from "@brysonandrew/svg-dimensionless";
import { INLINE_FILTER_ID } from "~uno/rules/filters/inline";
import { resolveInlineKeys } from "./keys";

export type TInlineFilterProps = {
  id?: string;
  mRadius?: number;
  color?: string;
};
export const InlineFilter: FC<
  TInlineFilterProps
> = ({
  id = INLINE_FILTER_ID,
  mRadius = 0.24,
  color = "#000000",
}) => {
  const { OUTLINE, COLOR, EROSION } =
    resolveInlineKeys(id);
  return (
    <SvgWrap>
      <filter
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        colorInterpolationFilters="sRGB"
        id={id}
      >
        <feMorphology
          operator="erode"
          radius={mRadius}
          in="SourceGraphic"
          result={EROSION}
        />
        <feFlood
          floodColor={color}
          floodOpacity="1"
          result={COLOR}
        />
        <feComposite
          in={COLOR}
          in2={EROSION}
          operator="in"
          result={OUTLINE}
        />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in={OUTLINE} />
        </feMerge>
      </filter>
    </SvgWrap>
  );
};
{
  /* <feColorMatrix
          in={THICKNESS}
          type="matrix"
          values="-1 0 0 0 1 
                  0 -1 0 0 1 
                  0 0 -1 0 1
                  0 0 0 1 0"
          result={INVERT}
        /> */
}
