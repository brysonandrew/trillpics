import type { FC } from "react";
import { BEATS_PRESETS } from "~/hooks/sound/beats/presets";
import { TBeatsPresetsKey } from "~/hooks/sound/beats/presets/types";
import { usePlayBeats } from "~/hooks/sound/play/beats";
import { usePlayMidis } from "~/hooks/sound/play/midis";
import { MusicRowsHeader } from "~/pages/video/music/rows/header";
import { MusicRowsPresets } from "~/pages/video/music/rows/header/presets";
import { usePresetsValueLookup } from "~/pages/video/music/rows/preset-value";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";
import { isDefined } from "~/utils/validation/is/defined";
import { boxSize } from "~uno/rules/box/size";

export const MusicRowsDrums: FC =
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
        <MusicRowsHeader
          play={play}
      >Drums</MusicRowsHeader>
        <MusicRowsPresets
          values={Object.keys(
            BEATS_PRESETS
          )}
          name="drums"
          value={
            presetsValueLookup.drums
              .presetKey ?? undefined
          }
          onValueChange={(
            key: TBeatsPresetsKey
          ) => {
            const nextPreset =
              BEATS_PRESETS[key];
            const keys = Object.keys(
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
      </div>
    );
  };
