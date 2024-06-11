import { MIDIS_PRESETS } from "~/hooks/sound/midis/presets/_index";
import * as s from 'react-synthwave';

export type TSynthwaveOptions = s.TMultiOptions;

export type TMidisPresets =
   typeof MIDIS_PRESETS;

export type TMidisPresetsKey =
  keyof TMidisPresets;
