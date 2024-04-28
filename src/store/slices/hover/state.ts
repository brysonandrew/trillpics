import { hoverMultiState } from "~/store/slices/hover/multi";
import { hoverPicState } from "~/store/slices/hover/pic";
import { THoverState } from "~/store/slices/hover/types";
import { TStateHandler } from "~/store/types";

export const hoverState: TStateHandler<
  THoverState
> = (...args): THoverState => ({
  ...hoverPicState(...args),
  ...hoverMultiState(...args),
});
