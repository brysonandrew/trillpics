import type { FC } from "react";
import {
  TSvgDisplacementProps,
  TSvgFilterMorphologyProps,
} from "@brysonandrew/config-types";
import { SvgWrap } from "@brysonandrew/svg-dimensionless";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { resolveEmbersKeys } from "~/shell/init/svg/filters/embers/keys";

const coloredSource = (
  key: string,
  color = "purple"
) => {
  return (
    <>
      <feFlood
        in="SourceGraphic"
        floodColor={color}
        result="P"
      />
      <feComposite
        in="P"
        in2="SourceGraphic"
        operator="in"
        result={key}
      />
    </>
  );
};

const morphDisplaceSource = (
  key: string,
  mScale = 1,
  dScale = 2
) => {
  return (
    <>
      <feMorphology
        in="SourceGraphic"
        operator="erode"
        radius={mScale}
        result="morphDisplaceSource0"
      />
      <feDisplacementMap
        in2="SourceGraphic"
        in="morphDisplaceSource0"
        scale={dScale}
        xChannelSelector="B"
        yChannelSelector="B"
        result="morphDisplaceSource1"
      />
      <feOffset
        in="morphDisplaceSource1"
        dx={-dScale / 2}
        dy={-dScale / 2}
        result={key}
      />
    </>
  );
};

export const EMBERS_FILTER_ID =
  "EMBERS_FILTER_ID";
export const EMBERS_FILTER_SVG_PROPS = {
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
  morphProps,
  displacementProps,
}) => {
  const {
    MORPH_KEY,
    DISPLACEMENT_KEY,
    OFFSET_KEY,
    COMPOSITE_KEY,
    TURBULANCE_KEY,
    SOURCE_KEY,
  } = resolveEmbersKeys(id);
  return (
    <SvgWrap>
      <filter
        id={id}
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        // colorInterpolationFilters="sRGB"
      >
        {coloredSource(
          SOURCE_KEY,
          "orange"
        )}
        {morphDisplaceSource(
          DISPLACEMENT_KEY
        )}
           <feTurbulence
                    baseFrequency={1}
                    numOctaves={1}
                    seed={1}
                    type="fractalNoise"
                    in="SourceGraphic"
                    result={TURBULANCE_KEY}
                  />
        <feMerge>
          <feMergeNode
            in={SOURCE_KEY}
          />
          <feMergeNode
            in={DISPLACEMENT_KEY}
          />
          <feMergeNode in={TURBULANCE_KEY}/>
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
