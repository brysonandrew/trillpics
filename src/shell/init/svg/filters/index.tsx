import type { FC } from "react";
import { AURA } from "@brysonandrew/svg-filter";
import { FiltersBlurShuffle } from "~/shell/init/svg/filters/blur/shuffle";
import { BlurY } from "~/shell/init/svg/filters/blur/y";
import { SvgFiltersFat } from "~/shell/init/svg/filters/fat";
import { SvgFiltersFat1 } from "~/shell/init/svg/filters/fat/1";
import { SvgFiltersFat2 } from "~/shell/init/svg/filters/fat/2";
import { SvgFiltersFat4 } from "~/shell/init/svg/filters/fat/4";
import { EmbersFilter } from "~/shell/init/svg/filters/embers";
import { OutlineDarkFilter } from "~/shell/init/svg/filters/outline/dark";
import { OutlineFilter } from "~/shell/init/svg/filters/outline";
import { InlineFilter } from "~/shell/init/svg/filters/inline";
import { GlowFilter } from "~/shell/init/svg/filters/glow";
import { FiltersBlurAddRandom } from "~/shell/init/svg/filters/blur/add-random";

export const SvgFilters: FC = () => {
  return (
    <>
      <AURA.GLOBAL.Filter />
      <FiltersBlurShuffle />
      <FiltersBlurAddRandom />
      <BlurY />
      <SvgFiltersFat />
      <SvgFiltersFat1 />
      <SvgFiltersFat2 />
      <SvgFiltersFat4 />
      <EmbersFilter />
      <InlineFilter />
      <OutlineFilter />
      <OutlineDarkFilter />
      <GlowFilter />
    </>
  );
};
