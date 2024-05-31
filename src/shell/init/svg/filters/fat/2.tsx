import type { FC } from "react";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { SvgFiltersFat } from "~/shell/init/svg/filters/fat";
export const FILTERS_FAT_2_SVG_ID =
  "FILTERS_FAT_2_SVG_ID";
export const FILTERS_FAT_2_SVG_PROPS = {
  filter: resolveUrlId(
    FILTERS_FAT_2_SVG_ID
  ),
};
export const SvgFiltersFat2: FC =
  () => {
    return <SvgFiltersFat id={FILTERS_FAT_2_SVG_ID} radius={1.2} />;
  };
