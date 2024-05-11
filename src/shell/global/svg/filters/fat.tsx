import type { FC } from "react";
import { SvgWrap } from "@brysonandrew/svg-dimensionless";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
export const FILTERS_FAT_SVG_ID =
  "FILTERS_FAT_SVG_ID";
export const FILTERS_FAT_SVG_PROPS = {
  filter: resolveUrlId(
    FILTERS_FAT_SVG_ID
  ),
};
export const SvgFiltersFat: FC = () => {
  return (
    <SvgWrap
      style={{
        width: 0,
        height: 0,
      }}
    >
      <filter id={FILTERS_FAT_SVG_ID}>
        <feMorphology
          operator="dilate"
          in="SourceGraphic"
          radius={0.8}
          result="m"
        />
      </filter>
    </SvgWrap>
  );
};
