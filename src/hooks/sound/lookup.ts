import { useSoundBeatsLookup } from "~/hooks/sound/beats/lookup";
import { useSoundMidisLookup } from "~/hooks/sound/midis/lookup";

export const useSoundLookup =
  () => {
    const beats = useSoundBeatsLookup();
    const midis = useSoundMidisLookup();
    const lookup = {
      ...beats,
      ...midis,
    } as const;
    return lookup;
  };
export type TUseLookupResult =
  ReturnType<
    typeof useSoundLookup
  >;
