import { STEPS } from "~/constants/music/steps";
import {
  SCALE_RECORD,
  TScaleKey,
  TScaleRecord,
} from "~/constants/scales";
import { MIDIS } from "~/hooks/sound/midis/constants";
import { MIDIS_PRESETS } from "~/hooks/sound/midis/presets/_index";
import {
  TSynth,
  TSynthConfig,
  TSynthMood,
  TSynthTone,
} from "~/hooks/sound/midis/synth/types";
import { TGet } from "~/store/types";

const SYNTH_MOOD_LOOKUP: Record<
  TSynthMood,
  TScaleKey
> = {
  depressed: "minorpentatonic",
  sad: "melodicminor",
  neutral: "wholetone",
  happy: "majorpentatonic",
  excited: "mixolydian",
};

export const musicUpdateSynthTransform =(
  config: TSynthConfig
) => {
  const scaleKey =
    SYNTH_MOOD_LOOKUP[config.mood];
  const scale = SCALE_RECORD[scaleKey];
  return STEPS.map(
    (_, index) => scale[index%4]
  );
};
