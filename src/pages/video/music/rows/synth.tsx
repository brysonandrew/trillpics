import type { FC } from "react";
import { InputsRadio } from "~/components/inputs/radio/1";
import { UiInputsSliderRow } from "~/components/slider/row";
import { DEFAULT_MIN_MAX_100 } from "~/constants/inputs";
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
import { MusicRowsHeader } from "~/pages/video/music/rows/header";
import { usePresetsValueLookup } from "~/pages/video/music/rows/preset-value";
import { useTrillPicsStore } from "~/store/middleware";
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
    return (
      <div
        className="relative column-stretch"
        style={{ gap: s.m }}
      >
        <MusicRowsHeader
          play={playMidis}
        >
          Synth
        </MusicRowsHeader>
        <ul
          className="column items-stretch"
          style={{ gap: s.m }}
        >
          <li>
            <InputsRadio
              name="mood"
              ranges={SYNTH_MOODS}
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
          </li>
          <li>
            <InputsRadio
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
            />
          </li>
          {/* <li>
     
                <UiInputsSliderRow
      classValue="py-0.25"
      value={[value]}
      onValueChange={handleValueChange}
      {...DEFAULT_MIN_MAX_100}
    />
          </li> */}
        </ul>
      </div>
    );
  };
