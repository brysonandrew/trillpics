import type { FC } from "react";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { SvgWrap } from "@brysonandrew/svg-dimensionless";
export const OUTLINE_2_FILTER_ID =
  "OUTLINE_2_FILTER_ID";
export const OUTLINE_FILTER_2_SVG_PROPS =
  {
    filter: resolveUrlId(
      OUTLINE_2_FILTER_ID
    ),
  };
type TProps = {
  id?: string;
  mRadius: number;
  color: string;
};
export const OutlineFilter2: FC<
  TProps
> = ({
  id = OUTLINE_2_FILTER_ID,
  mRadius,
  color,
}) => {
  console.log(color, mRadius, id);
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
          in="SourceAlpha"
          result="DILATED"
          operator="dilate"
          radius={mRadius}
        />
        <feFlood
          floodColor={color}
          floodOpacity="1"
          result="COLOR"
        />
        <feComposite
          in="COLOR"
          in2="DILATED"
          operator="in"
          result="OUTLINE"
        />
        <feMerge>
          <feMergeNode in="OUTLINE" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </SvgWrap>
  );
};
