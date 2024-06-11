import type { FC } from "react";
import { SynthwaveOptions } from "@app/Options";
import { InputsRadio } from "~/components/inputs/radio/1";
import {
  SYNTH_MOODS,
  SYNTH_TONES,
} from "~/hooks/sound/midis/synth/constants";
import {
  TSynthMood,
  TSynthTone,
} from "~/hooks/sound/midis/synth/types";
import { usePlayBeats } from "~/hooks/sound/play/beats";
import { usePlayMidis } from "~/hooks/sound/play/midis";
import { MusicBackground } from "~/pages/video/music/background";
import { MusicRowsHeader } from "~/pages/video/music/header";
import { usePresetsValueLookup } from "~/pages/video/music/preset-value";
import { MusicRowsSynthConfig } from "~/pages/video/music/synth/config";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { useTrillPicsStore } from "~/store/middleware";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";

export const MusicRowsSynth: FC =
  () => {
    const s = boxSize();
    const play = usePlayBeats();
    const playMidis = usePlayMidis();

    const {
      music,
      set,
      musicUpdateSynth,
    } = useTrillPicsStore(
      ({
        music,
        set,
        musicUpdateSynth,
      }) => ({
        music,
        musicUpdateSynth,
        set,
      })
    );
    const presetsValueLookup =
      usePresetsValueLookup();
    const {
      playerStyle,
      y,
      gap,
      left,
      width,
    } = useVideoPlayerStyle();
    const borderRadius = boxRadius();

    return (
      <>
       
      </>
    );
  };
