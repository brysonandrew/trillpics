import type { FC } from "react";
import { AURA } from "@brysonandrew/svg-filter";
import { BlurX } from "~/shell/init/svg/filters/blur/x";
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
      <EmbersFilter />
      <InlineFilter />
      <OutlineFilter />
      <OutlineDarkFilter />
      <GlowFilter />
    </>
  );
};
