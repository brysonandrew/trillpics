import { useMusicContext } from "~/pages/video/music/context/index";

export const useSoundLookup = () => {
  const { beats, midis } =
    useMusicContext();
  const lookup = {
    ...beats,
    ...midis,
  } as const;
  return lookup;
};
export type TUseLookupResult =
  ReturnType<typeof useSoundLookup>;
