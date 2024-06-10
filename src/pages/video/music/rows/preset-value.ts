import { useMemo } from "react";
import { isString } from "unocss";
import { BEATS } from "~/hooks/sound/beats/constants";
import { BEATS_PRESETS } from "~/hooks/sound/beats/presets";
import { TBeatsPresetsKey } from "~/hooks/sound/beats/presets/types";
import { TBeatsSequenceKey } from "~/hooks/sound/beats/types";
import { MIDIS } from "~/hooks/sound/midis/constants";
import { MIDIS_PRESETS } from "~/hooks/sound/midis/presets";
import { TMidisPresets } from "~/hooks/sound/midis/presets/types";
import { TMidisSequenceKey } from "~/hooks/sound/midis/types";
import { useTrillPicsStore } from "~/store/middleware";
type TBassPresetsKey =
  keyof TMidisPresets["bass"];
type TTreblePresetsKey =
  keyof TMidisPresets["treble"];
export type TUsePresetsValueLookupResult =
  {
    drums: Record<
      TBeatsSequenceKey,
      TBeatsPresetsKey
    > & {
      presetKey?: null | TBeatsPresetsKey;
    };
    bass: TBassPresetsKey;
    treble: TTreblePresetsKey;
  };
type TConfig = any;

export const usePresetsValueLookup = (
  config?: TConfig
) => {
  const { music, set } =
    useTrillPicsStore(
      ({ music, set }) => ({
        music,
        set,
      })
    );
  const { snare, cymbal, kick, tom } =
    music;
  const beatsTarget = {
    snare,
    cymbal,
    kick,
  };
  const presetsValueLookup =
    useMemo(() => {
      const result = {
        drums: {},
        bass: "race",
        treble: "raptor",
      } as TUsePresetsValueLookupResult;
      MIDIS.forEach((midisKey) => {
        if (!MIDIS_PRESETS[midisKey])
          return;
        const value = (
          Object.keys(
            MIDIS_PRESETS[midisKey]
          ) as Partial<
            TBassPresetsKey[]
          >
        ).find((presetKey) => {
          if (!presetKey) return false;
          const curr =
            MIDIS_PRESETS[midisKey][
              presetKey
            ];
          if (
            !curr ||
            curr.length === 0
          )
            return false;
          return (
            JSON.stringify(curr) ===
            JSON.stringify(
              music[midisKey]
            )
          );
        });
        if (!value) return;
        result[midisKey] = value;
      });

      BEATS.forEach((beatsKey) => {
        const value = (
          Object.keys(
            BEATS_PRESETS
          ) as TBeatsPresetsKey[]
        ).find((presetKey) => {
          const preset =
            BEATS_PRESETS[presetKey];

          const curr =
            beatsKey in preset &&
            (preset as any)[beatsKey];
          if (
            !curr ||
            curr.length === 0
          )
            return false;
          return (
            JSON.stringify(curr) ===
            JSON.stringify(
              (beatsTarget as any)[
                beatsKey
              ]
            )
          );
        });
        if (!value) return;
        result.drums[beatsKey] = value;
        if (
          typeof result.drums
            .presetKey === "undefined"
        ) {
          result.drums.presetKey =
            value;
        } else if (
          isString(
            result.drums.presetKey
          ) &&
          result.drums.presetKey !==
            value
        ) {
          result.drums.presetKey = null;
        }
      });

      return result;
    }, [music, beatsTarget]);
  return presetsValueLookup;
};
