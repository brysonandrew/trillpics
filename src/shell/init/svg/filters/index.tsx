import type { FC } from "react";
import { AURA } from "@brysonandrew/svg-filter";
import { FiltersBlurShuffle } from "~/shell/init/svg/filters/blur/shuffle";
import { EmbersFilter } from "~/shell/init/svg/filters/embers";
import { OutlineDarkFilter } from "~/shell/init/svg/filters/outline/dark";
import { OutlineFilter } from "~/shell/init/svg/filters/outline";
import { InlineFilter } from "~/shell/init/svg/filters/inline";
import { GlowFilter } from "~/shell/init/svg/filters/glow";
import { FiltersBlurAddRandom } from "~/shell/init/svg/filters/blur/add-random";
import { FiltersBlurScrollY } from "~/shell/init/svg/filters/blur/scroll-y";
import { DuoTone } from "~/shell/init/svg/filters/duo-tone";

export const SvgFilters: FC = () => {
  return (
    <>
      <AURA.GLOBAL.Filter />
      <FiltersBlurShuffle />
      <FiltersBlurAddRandom />
      <FiltersBlurScrollY />
      <EmbersFilter />
      <InlineFilter />
      <OutlineFilter />
      <OutlineDarkFilter />
      <GlowFilter />
      <DuoTone />
    </>
  );
};
