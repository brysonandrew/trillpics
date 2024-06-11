import type { FC } from "react";
import { SelectStyled } from "~/components/inputs/select/styled";
import { BEATS_PRESETS } from "~/hooks/sound/beats/presets";
import { TBeatsPresetsKey } from "~/hooks/sound/beats/presets/types";
import { usePlayBeats } from "~/hooks/sound/play/beats";
import { usePlayMidis } from "~/hooks/sound/play/midis";
import { usePresetsValueLookup } from "~/pages/video/music/preset-value";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";
import { isDefined } from "~/utils/validation/is/defined";
import { boxSize } from "~uno/rules/box/size";

export const DrumsPresets: FC = () => {
  const s = boxSize();
  const play = usePlayBeats();

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
    <SelectStyled
      values={Object.keys(
        BEATS_PRESETS
      )}
      title='None'
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
          keys.forEach((beatsKey) => {
            if (
              isDefined(beatsKey) &&
              beatsKey in nextPreset
            ) {
              draft.music[beatsKey] =
                nextPreset[beatsKey];
            }
          });
        });
      }}
    />
  );
};
