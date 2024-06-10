import { FC } from "react";
import { BEATS_PRESETS } from "~/hooks/sound/beats/presets";
import { TBeatsPresetsKey } from "~/hooks/sound/beats/presets/types";
import { MIDIS_PRESETS } from "~/hooks/sound/midis/presets";
import {
  TMidisPresets,
  TMidisPresetsKey,
} from "~/hooks/sound/midis/presets/types";
import { usePlayBeats } from "~/hooks/sound/play/beats";
import { usePlayMidis } from "~/hooks/sound/play/midis";
import { MusicRowsHeader } from "~/pages/video/music/rows/header";
import { MusicRowsPresets } from "~/pages/video/music/rows/header/presets";
import { usePresetsValueLookup } from "~/pages/video/music/rows/preset-value";
import { PlayerBackground } from "~/pages/video/player/_background";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";
import { isDefined } from "~/utils/validation/is/defined";
import { boxSize } from "~uno/rules/box/size";

export const MusicRows: FC = () => {
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
    <div className="relative py-1.5">
      <PlayerBackground />
      <div
        className="relative column-stretch"
        style={{ gap: s.m05 }}
      >
        <MusicRowsHeader
          play={play}
          rightContent={
            <MusicRowsPresets
              values={Object.keys(
                BEATS_PRESETS
              )}
              name="drums"
              value={
                presetsValueLookup.drums
                  .presetKey ??
                undefined
              }
              onValueChange={(
                key: TBeatsPresetsKey
              ) => {
                const nextPreset =
                  BEATS_PRESETS[key];
                const keys =
                  Object.keys(
                    nextPreset
                  ) as (keyof typeof nextPreset)[];
                set((draft: TState) => {
                  keys.forEach(
                    (beatsKey) => {
                      if (
                        isDefined(
                          beatsKey
                        ) &&
                        beatsKey in
                          nextPreset
                      ) {
                        draft.music[
                          beatsKey
                        ] =
                          nextPreset[
                            beatsKey
                          ];
                      }
                    }
                  );
                });
              }}
            />
          }
        >
          Drums
        </MusicRowsHeader>
        <MusicRowsHeader
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
        </MusicRowsHeader>
        <MusicRowsHeader
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
                  MIDIS_PRESETS.bass[
                    key
                  ];
                set((draft: TState) => {
                  draft.music.bass =
                    nextPresetValue;
                });
              }}
            />
          }
        >
          Bass
        </MusicRowsHeader>
      </div>
    </div>
  );
};
