
import type { FC } from "react";
import { set } from "zod";
import { MIDIS_PRESETS } from "~/hooks/sound/midis/presets/_index";
import { TMidisPresets } from "~/hooks/sound/midis/presets/_types";
import { MusicRowsHeader } from "~/pages/video/music/rows/header";
import { MusicRowsPresets } from "~/pages/video/music/rows/header/presets";
import { TState } from "~/store/types";

export const Treble: FC = () => {
  return (
    <div>
        {/* <MusicRowsHeader
        play={playMidis}
        rightContent={
          <MusicRowsPresets
            name="treble"
            values={Object.keys(
              MIDIS_PRESETS.treble
            )}
            value={
              presetsValueLookup.treble ??
              undefined
            }
            onValueChange={(
              key: keyof TMidisPresets["treble"]
            ) => {
              const nextPresetValue =
                MIDIS_PRESETS.treble[
                  key
                ];
              set((draft: TState) => {
                draft.music.treble =
                  nextPresetValue;
              });
            }}
          />
        }
      >
        Treble
      </MusicRowsHeader> */}
      {/* <MusicRowsHeader
        play={playMidis}
        rightContent={
          <MusicRowsPresets
            name="bass"
            values={Object.keys(
              MIDIS_PRESETS.bass
            )}
            value={
              presetsValueLookup.bass ??
              undefined
            }
            onValueChange={(
              key: keyof TMidisPresets["bass"]
            ) => {
              const nextPresetValue =
                MIDIS_PRESETS.bass[key];
              set((draft: TState) => {
                draft.music.bass =
                  nextPresetValue;
              });
            }}
          />
        }
      > */}
        {/* Bass
      </MusicRowsHeader> */}
    
    </div>
  );
};