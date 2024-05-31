import {
  TSvgDisplacementProps,
  TSvgFilterMorphologyProps,
} from "@brysonandrew/config-types";
import { SvgWrap } from "@brysonandrew/svg-dimensionless";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import type { FC } from "react";
import { resolveEmbersKeys } from "~/shell/init/svg/filters/embers/keys";

export const EMBERS_FILTER_ID =
  "EMBERS_FILTER_ID";
export const EMBERS_FILTER_SVG_PROPS =
  {
    filter: resolveUrlId(
      EMBERS_FILTER_ID
    ),
  };
type TProps = {
  id?: string;
  radius?: number;
  dmScale?: number;
  fmRadius?: number;
  morphProps?: TSvgFilterMorphologyProps;
  displacementProps?: TSvgDisplacementProps;
};
export const EmbersFilter: FC<
  TProps
> = ({
  id = EMBERS_FILTER_ID,
  dmScale = 15,
  fmRadius = 0,
  morphProps,
  displacementProps,
}) => {
  const {
    MORPH_KEY,
    DISPLACEMENT_KEY,
    OFFSET_KEY,
    COMPOSITE_KEY,
  } = resolveEmbersKeys(id);
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
          in="SourceGraphic"
          radius={fmRadius}
          result={MORPH_KEY}
          {...morphProps}
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2={MORPH_KEY}
          scale={dmScale}
          xChannelSelector="B"
          yChannelSelector="G"
          result={DISPLACEMENT_KEY}
          {...displacementProps}
        />
        <feMerge>
          <feMergeNode
            in={DISPLACEMENT_KEY}
          />
          {/* <feMergeNode in="SourceGraphic" /> */}
        </feMerge>
      </filter>
    </SvgWrap>
  );
};

{
  /* <feOffset
          result={OFFSET_KEY}
          dx="1"
          dy="-1"
          in={DISPLACEMENT_KEY}
        /> */
}
{
  /* <feComposite
          result={COMPOSITE_KEY}
          operator="arithmetic"
          k2="-1"
          k3="1"
          in={OFFSET_KEY}
          in2="SourceAlpha"
        /> */
}
{
  /* <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          in={COMPOSITE_KEY}
          result="MATRIX"
        /> */
}
