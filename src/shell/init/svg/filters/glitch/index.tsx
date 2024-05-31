import type { FC } from "react";
import {
  TSvgDisplacementProps,
  TSvgFilterMorphologyProps,
} from "@brysonandrew/config-types";
import { SvgWrap } from "@brysonandrew/svg-dimensionless";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { resolveGlitchKeys } from "~/shell/init/svg/filters/glitch/keys";

export const GLITCH_FILTER_ID =
  "GLITCH_FILTER_ID";
export const GLITCH_FILTER_SVG_PROPS = {
  filter: resolveUrlId(
    GLITCH_FILTER_ID
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
export const GlitchFilter: FC<
  TProps
> = ({
  id = GLITCH_FILTER_ID,
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
  } = resolveGlitchKeys(id);
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
        <feOffset
          in="SourceGraphic"
          dx="2"
          dy="2"
          result="layer-one"
        />
        <feComponentTransfer
          in="layer-one"
          result="red"
        >
          <feFuncR type="identity" />
          <feFuncG
            type="discrete"
            tableValues="0"
          />
          <feFuncB
            type="discrete"
            tableValues="0"
          />
        </feComponentTransfer>
        <feOffset
          in="SourceGraphic"
          dx="-2"
          dy="-2"
          result="layer-two"
        />
        <feComponentTransfer
          in="layer-two"
          result="cyan"
        >
          <feFuncR
            type="discrete"
            tableValues="0"
          />
          <feFuncG type="identity" />
          <feFuncB type="identity" />
        </feComponentTransfer>
        <feBlend
          in="red"
          in2="cyan"
          mode="screen"
          result="color-split"
        />
      </filter>
    </SvgWrap>
  );
  // return (
  //   <SvgWrap>
  //     <filter
  //       id={id}
  //       x="-100%"
  //       y="-20%"
  //       width="300%"
  //       height="140%"
  //       colorInterpolationFilters="sRGB"
  //     >
  //       <feTurbulence
  //         type="turbulence"
  //         in="SourceGraphic"
  //         stdDeviation="0.0 1.0"
  //         baseFrequency="0.0 1.0"
  //         numOctaves="2"
  //         result="turbulence"
  //       />
  //       <feMorphology
  //         operator="dilate"
  //         in="turbulence"
  //         radius={fmRadius}
  //         result={MORPH_KEY}
  //         {...morphProps}
  //       />
  //       <feDisplacementMap
  //         in="turbulence"
  //         in2={MORPH_KEY}
  //         scale={dmScale}
  //         xChannelSelector="B"
  //         yChannelSelector="G"
  //         result={DISPLACEMENT_KEY}
  //         {...displacementProps}
  //       />

  //       <feMerge>
  //         {/* <feMergeNode in="SourceGraphic" /> */}

  //         {/* <feMergeNode in={DISPLACEMENT_KEY}/> */}
  //         <feMergeNode
  //           in={DISPLACEMENT_KEY}
  //         />
  //         {/* <feMergeNode in={MORPH_KEY}/> */}
  //       </feMerge>
  //     </filter>
  //   </SvgWrap>
  // );
};
/** 
<feMorphology in="turbulence" operator="dilate" radius="1" result="fatty" />
<feDisplacementMap
  in2="fatty"
  in="SourceGraphic"
  scale="60"
  xChannelSelector="R"
  yChannelSelector="G"
  result="displacement"
/>
<feOffset in="displacement" dx="-12" dy="-10" />
<feTurbulence
  type="turbulence"
  in="SourceGraphic"
  baseFrequency="0.0 0.4"
  numOctaves="2"
  result="turbulence"
/>

<feDisplacementMap
  in2="turbulence"
  in="SourceGraphic"
  scale="20"
  xChannelSelector="R"
  yChannelSelector="G"
  result="displacement"
/>
<feGaussianBlur in="displacement" stdDeviation="12 6" numOctaves="2" result="blur" />
<feOffset in="blur" dx="-12" dy="-10" />
*/
{
  /* <feDisplacementMap
in2={MORPH_KEY}
in="SourceGraphic"
scale="20"
xChannelSelector="R"
yChannelSelector="G"
result={'DISPLACEMENT_KEY_2'}
/> */
}
