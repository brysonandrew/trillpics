import { hoverMultiState } from "~/store/state/hover/multi";
import { THoverState } from "~/store/state/hover/types";
import { TStateHandler } from "~/store/types";

export const hoverState: TStateHandler<
  THoverState
> = (...args): THoverState => ({
  ...hoverMultiState(...args),
});
