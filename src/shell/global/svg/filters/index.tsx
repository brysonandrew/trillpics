import type { FC } from "react";
import { AURA } from "@brysonandrew/svg-filter";
import { BlurX } from "~/shell/global/svg/filters/blur/x";
import { BlurY } from "~/shell/global/svg/filters/blur/y";
import { SvgFiltersFat } from "~/shell/global/svg/filters/fat";
import { SvgFiltersFat1 } from "~/shell/global/svg/filters/fat/1";
import { SvgFiltersFat2 } from "~/shell/global/svg/filters/fat/2";
import { SvgFiltersFat4 } from "~/shell/global/svg/filters/fat/4";
import { AntiCamoFilter } from "~/shell/global/svg/filters/anti-camo";
import { OutlineDarkFilter } from "~/shell/global/svg/filters/outline/dark";
import { OutlineFilter } from "~/shell/global/svg/filters/outline";
import { InlineFilter } from "~/shell/global/svg/filters/inline";
import { GlowFilter } from "~/shell/global/svg/filters/glow";

export const SvgFilters: FC = () => {
  return (
    <>
      <AURA.GLOBAL.Filter />
      <BlurX />
      <BlurY />
      <SvgFiltersFat />
      <SvgFiltersFat1 />
      <SvgFiltersFat2 />
      <SvgFiltersFat4 />
      <AntiCamoFilter />
      <InlineFilter />
      <OutlineFilter />
      <OutlineDarkFilter />
      <GlowFilter />
    </>
  );
};
