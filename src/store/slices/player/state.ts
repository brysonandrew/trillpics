import { playerSeekFramesState } from "~/store/slices/player/seek/frames";
import { playerSeekSecondsState } from "~/store/slices/player/seek/seconds";
import { TPlayerState } from "~/store/slices/player/types";
import { TStateWithPlayerStateHandler } from "~/store/types";

export const playerState: TStateWithPlayerStateHandler<
  TPlayerState
> = (...args) => {
  return {
    playerInstance: null,
    ...playerSeekFramesState(...args),
    ...playerSeekSecondsState(...args),
  };
};
