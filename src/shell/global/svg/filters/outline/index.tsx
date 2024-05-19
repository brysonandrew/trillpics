import { FC } from "react";
import { SvgWrap } from "@brysonandrew/svg-dimensionless";
import { resolveOutlineKeys } from "~/shell/global/svg/filters/outline/keys";
import { OUTLINE_FILTER_ID } from "~uno/rules/filters/outline";

export type TOutlineFilterProps = {
  id?: string;
  mRadius?: number;
  color?: string;
};
export const OutlineFilter: FC<
  TOutlineFilterProps
> = ({
  id = OUTLINE_FILTER_ID,
  mRadius = 1,
  color = "#000000",
}) => {
  const { OUTLINE, COLOR, THICKNESS } =
    resolveOutlineKeys(id);
  return (
    <SvgWrap>
      <filter
        id={id}
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        colorInterpolationFilters="sRGB"
      >
        <feMorphology
          operator="dilate"
          radius={mRadius}
          in="SourceGraphic"
          result={THICKNESS}
        />
        <feFlood
          floodColor={color}
          floodOpacity="1"
          result={COLOR}
        />
        <feComposite
          in={COLOR}
          in2={THICKNESS}
          operator="in"
          result={OUTLINE}
        />
        <feMerge>
          <feMergeNode in={OUTLINE} />
          <feMergeNode in="SourceGraphic" />
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
