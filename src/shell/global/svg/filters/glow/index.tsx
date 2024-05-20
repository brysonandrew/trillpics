import type { FC } from "react";
import {
  TSvgDisplacementProps,
  TSvgFilterMorphologyProps,
} from "@brysonandrew/config-types";
import { SvgWrap } from "@brysonandrew/svg-dimensionless";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { resolveBlurMotionKeys } from "~/shell/global/svg/filters/anti-camo/keys";

export const GLOW_FILTER_ID =
  "GLOW_FILTER_ID";
export const GLOW_FILTER_SVG_PROPS = {
  filter: resolveUrlId(GLOW_FILTER_ID),
};
type TProps = {
  id?: string;
  radius?: number;
  dmScale?: number;
  fmRadius?: number;
  morphProps?: TSvgFilterMorphologyProps;
  displacementProps?: TSvgDisplacementProps;
};
export const GlowFilter: FC<TProps> = ({
  id = GLOW_FILTER_ID,
  dmScale = 10,
  fmRadius = 100,
  morphProps,
  displacementProps,
}) => {
  const {
    MORPH_KEY,
    DISPLACEMENT_KEY,
    OFFSET_KEY,
    COMPOSITE_KEY,
  } = resolveBlurMotionKeys(id);
  return (
    <SvgWrap>
      <filter
        id={id}
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        colorInterpolationFilters="sRGB"
      >
        {/* <!-- select just the red outline and zero out the opacity of everything that's not 100% red. --> */}
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0 
                                       0 0 0 0 0 
                                       0 0 0 0 0 
                                       255 -255 -255 -254 0"
          result="outline-only"
        />
        <feGaussianBlur stdDeviation="1" />

        {/* <!-- select just the blur - not the original stroke. --> */}
        <feComposite
          operator="out"
          in2="outline-only"
        />

        {/* <!-- select just the blur that overlaps the original content --> */}
        <feComposite
          operator="in"
          in2="SourceGraphic"
        />

        {/* <!-- increase its opacity to 100% except the most blurred - to fake anti-aliasing --> */}
        <feComponentTransfer>
          <feFuncA
            type="table"
            tableValues="0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"
          />
        </feComponentTransfer>

        {/* <!-- change the color of the fake stroke to the desired value --> */}
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0
                                         0 0 0 0 0
                                         0 0 0 0 1 
                                         0 0 0 1 0"
        />
        {/* <!-- put it on top of the original --> */}
        <feComposite
          operator="over"
          in2="SourceGraphic"
        />
      </filter>
    </SvgWrap>
  );
};
