import type { FC } from "react";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { SvgFiltersFat } from "~/shell/global/svg/filters/fat";
export const FILTERS_FAT_4_SVG_ID =
  "FILTERS_FAT_4_SVG_ID";
export const FILTERS_FAT_4_SVG_PROPS = {
  filter: resolveUrlId(
    FILTERS_FAT_4_SVG_ID
  ),
};
export const SvgFiltersFat4: FC =
  () => {
    return <SvgFiltersFat id={FILTERS_FAT_4_SVG_ID} radius={1} />;
  };
