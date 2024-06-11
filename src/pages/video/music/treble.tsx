
import type { FC } from "react";

export const Treble: FC = () => {
  return (
    <div>
        {/* <MusicLayoutHeader
        play={playMidis}
        rightContent={
          <MusicLayoutPresets
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
      </MusicLayoutHeader> */}
      {/* <MusicLayoutHeader
        play={playMidis}
        rightContent={
          <MusicLayoutPresets
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
      </MusicLayoutHeader> */}
    
    </div>
  );
};