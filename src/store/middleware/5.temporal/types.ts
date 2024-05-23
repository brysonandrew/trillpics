import { TemporalState } from "zundo";
import { TPicsState } from "~/store/state/pics/types";
import { TVideoState } from "~/store/state/video/types";

export type TTemporalPartializedState =
  Pick<TVideoState, "fps"> &
    Pick<TPicsState, "pics">;

export type TTemporalState =
  TemporalState<TTemporalPartializedState>;
