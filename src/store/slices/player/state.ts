import { playerSeekFramesState } from "~/store/slices/player/seek/frames";
import { playerSeekSecondsState } from "~/store/slices/player/seek/seconds";
import { TPlayerState } from "~/store/slices/player/types";
import { TStateHandler } from "~/store/types";

export const playerState: TStateHandler<
  TPlayerState
> = (...args) => {
  return {
    playerInstance: null,
    ...playerSeekFramesState(...args),
    ...playerSeekSecondsState(...args),
  };
};
