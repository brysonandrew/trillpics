import { playerSeekFramesState } from "~/store/state/player/seek/frames";
import { playerSeekSecondsState } from "~/store/state/player/seek/seconds";
import { TPlayerState } from "~/store/state/player/types";
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
