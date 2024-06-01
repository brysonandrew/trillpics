import type { FC } from "react";
import {
  TSvgDisplacementProps,
  TSvgFilterMorphologyProps,
} from "@brysonandrew/config-types";
import { SvgWrap } from "@brysonandrew/svg-dimensionless";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { resolveEmbersKeys } from "~/shell/init/svg/filters/embers/keys";
import { coloredSource } from "~/shell/init/svg/filters/embers/colored";

const turbulenceDisplaceSource = (
  key: string,
  tType = "turbulence", // "fractalNoise",
  tBase = "0.01 11.0",
  mScale = 1,
  dScale = 12
) => {
  let o = -(dScale / 2);
  if (tType === "fractalNoise") {
    o = 0;
  }
  return (
    <>
      <feTurbulence
        // type="turbulence"
        type={tType}
        baseFrequency={tBase}
        numOctaves={1}
        result="T0"
      />
      <feOffset
        dx={o}
        dy={o}
        in="SourceGraphic"
        result="sgo"
      />

      <feMorphology
        in="sgo"
        operator="erode"
        radius={mScale}
        result="M0"
      />
        <feGaussianBlur
        // in="M0"
        in="M0"
        stdDeviation={tBase}
        // xChannelSelector="B"
        // yChannelSelector="B"
        result="B0"
      />
      <feDisplacementMap
        in="B0"
        in2="T0"
        scale={dScale}
        // xChannelSelector="B"
        // yChannelSelector="B"
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
        x="-60%"
        width="180%"
        // colorInterpolationFilters="sRGB"
      >
        {coloredSource(
          SOURCE_KEY,
          "purple"
        )}
        {/* {morphDisplaceSource(
          DISPLACEMENT_KEY,
          1.2,
          20
        )} */}
        {turbulenceDisplaceSource(
          TURBULANCE_KEY
        )}

        <feBlend
        in2={SOURCE_KEY}
        in={TURBULANCE_KEY}
mode="soft-light"
        />

        {/* <feComposite
          in2={TURBULANCE_KEY}
          in={SOURCE_KEY}
          operator="xor"
        /> */}
        {/* <feMerge>
          <feMergeNode
            in={SOURCE_KEY}
          />
          <feMergeNode
            in={TURBULANCE_KEY}
          />
        </feMerge> */}
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
