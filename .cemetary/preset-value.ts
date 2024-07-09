import { useMemo } from "react";
import { isString } from "unocss";
import { BEATS_KEYS, BEATS_KEYS1 } from "~/hooks/music/beats/constants";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";
import { TBeatsPresetsKey } from "~/hooks/music/beats/presets/types";
import { TBeatsSequenceKey } from "~/hooks/music/beats/types";
import {
  MIDIS,
  _MIDIS,
} from "~/hooks/music/midis/constants";
import { MIDIS_PRESETS } from "~/hooks/music/midis/presets/_index";
import { TMidisPresets } from "~/hooks/music/midis/presets/_types";
import { TMidisSequenceKey } from "~/hooks/music/midis/types";
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
export const usePresetsValueLookup = (
) => {
  const { bpm, beats, set } =
    useTrillPicsStore(
      ({ bpm, beats, set }) => ({
        bpm,
        beats,
        set,
      })
    );
  const { snare, hihat, kick, tom } =
    beats;
  const beatsTarget = {
    snare,
    hihat,
    kick,
  };
  const presetsValueLookup =
    useMemo(() => {
      const result = {
        drums: {},
      } as TUsePresetsValueLookupResult;
      _MIDIS.forEach((midisKey) => {
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
          // return (
          //   JSON.stringify(curr) ===
          //   JSON.stringify(
          //     music[midisKey]
          //   )
          // );
        });
        if (!value) return;
        result[midisKey] = value;
      });

      BEATS_KEYS.forEach((beatsKey) => {
        const value = (
          Object.keys(
            BEATS_PRESETS
          ) as TBeatsPresetsKey[]
        ).find((presetKey) => {
          const preset =
            BEATS_PRESETS[presetKey];

          const curr =
            beatsKey in preset &&
            ((preset as any )[beatsKey] ?? []);
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
    }, [beats, beatsTarget]);

  console.log(presetsValueLookup)
  return presetsValueLookup;
};
