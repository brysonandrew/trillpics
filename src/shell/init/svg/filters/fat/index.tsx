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
type TProps = {
  radius?: number;
  id?: string;
};
export const SvgFiltersFat: FC<
  TProps
> = ({
  id = FILTERS_FAT_SVG_ID,
  radius = 0.2,
}) => {
  return (
    <SvgWrap
      style={{
        width: 0,
        height: 0,
      }}
    >
      <filter id={id}>
        <feMorphology
          operator="dilate"
          in="SourceGraphic"
          radius={radius}
          result="m"
        />
      </filter>
    </SvgWrap>
  );
};
