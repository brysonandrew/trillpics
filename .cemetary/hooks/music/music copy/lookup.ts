import { useMusicPlay } from "~/pages/video/music/_context/ready/index";

export const useMusicLookup = () => {
  const { beats, midis } =
    useMusicPlay();
  const lookup = {
    ...beats,
    ...midis,
  } as const;
  return lookup;
};
export type TUseLookupResult =
  ReturnType<typeof useMusicLookup>;
