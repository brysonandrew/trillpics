import { useMusicReadyContext } from "~/pages/video/music/_context/ready/index";

export const useMusicLookup = () => {
  const { beats, midis } =
    useMusicReadyContext();
  const lookup = {
    ...beats,
    ...midis,
  } as const;
  return lookup;
};
export type TUseLookupResult =
  ReturnType<typeof useMusicLookup>;
