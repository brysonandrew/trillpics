import type { FC } from "react";
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
import { usePresetsValueLookup } from "~/pages/video/music/preset-value";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { useTrillPicsStore } from "~/store/middleware";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";

export const MusicRowsSynthConfig: FC =
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
    const { gap, left, width } =
      useVideoPlayerStyle();
    const borderRadius = boxRadius();

    return (
      <div
        className="column items-stretch"
        style={{ gap }}
      >
        <InputsRadio
          name="mood"
          ranges={SYNTH_MOODS.slice(1,-1)}
          required
          disabled={false}
          value={
            music.synth.config.mood
          }
          onValueChange={(
            value: TSynthMood
          ) =>
            musicUpdateSynth(
              "mood",
              value
            )
          }
        />
        {/* <InputsRadio
          required
          disabled={false}
          name="tone"
          value={
            music.synth.config.tone
          }
          ranges={SYNTH_TONES}
          onValueChange={(
            value: TSynthTone
          ) =>
            musicUpdateSynth(
              "tone",
              value
            )
          }
        /> */}
      </div>
    );
  };
