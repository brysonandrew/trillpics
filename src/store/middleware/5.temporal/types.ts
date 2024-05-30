import { TemporalState } from "zundo";
import { TInitVideoState } from "~/pages/video/player/_context/init/types";
import { TPicsState } from "~/store/state/pics/types";

export type TTemporalPartializedState =
  Pick<TInitVideoState, "fps"> &
    Pick<TPicsState, "pics">;

export type TTemporalState =
  TemporalState<TTemporalPartializedState>;
