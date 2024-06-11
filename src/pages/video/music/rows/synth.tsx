import type { FC } from "react";
import { InputsRadio } from "~/components/inputs/radio/1";
import { UiInputsSliderRow } from "~/components/slider/row";
import { DEFAULT_MIN_MAX_100 } from "~/constants/inputs";
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

    const { music, set } =
      useTrillPicsStore(
        ({ music, set }) => ({
          music,
          set,
        })
      );
    const presetsValueLookup =
      usePresetsValueLookup();
    return (
      <div>
        <MusicRowsHeader play={play}>
          Synth
        </MusicRowsHeader>
        <ul
          className="column items-stretch"
          style={{ gap: s.m05 }}
        >
          <li>
            <InputsRadio
              ranges={[
                "excited",
                "happy",
                "neutral",
                "sad",
                "depressed",
              ]}
              onValueChange={
                console.log
              }
            />
          </li>
          <li>
            <InputsRadio
              ranges={[
                "brutal",
                "rough",
                "soft",
                "gentle",
              ]}
              onValueChange={
                console.log
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
