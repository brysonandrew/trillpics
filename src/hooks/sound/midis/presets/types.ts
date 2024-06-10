import { MIDIS_PRESETS } from "~/hooks/sound/midis/presets";

export type TMidisPresets =
   typeof MIDIS_PRESETS;

export type TMidisPresetsKey =
  keyof TMidisPresets;
