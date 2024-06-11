import { useSynthwaveContext } from "@state/Context";
import { useSoundContext } from "~/shell/global/sound";

export const useSoundLookup = () => {
  const {
    lookup: { beats, midis },
  } = useSynthwaveContext();
  const lookup = {
    ...beats,
    ...midis,
  } as const;
  return lookup;
};
export type TUseLookupResult =
  ReturnType<typeof useSoundLookup>;
