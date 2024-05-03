import { TemporalState } from "zundo";
import { TVideoState } from "~/store/state/video/types";

export type TTemporalPartializedState =
  Pick<TVideoState, "videoPics">;

export type TTemporalState =
  TemporalState<TTemporalPartializedState>;
