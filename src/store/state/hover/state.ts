import { hoverMultiState } from "~/store/state/hover/multi";
import { hoverPicState } from "~/store/state/hover/pic";
import { THoverState } from "~/store/state/hover/types";
import { TStateHandler } from "~/store/types";

export const hoverState: TStateHandler<
  THoverState
> = (...args): THoverState => ({
  ...hoverPicState(...args),
  ...hoverMultiState(...args),
});
